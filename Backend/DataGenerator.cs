using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using Tasklist.Repositories.Models;

namespace Tasklist
{
    public class DataGenerator
    {
        public static readonly int MAX_TITLES = 50;
        private static readonly int MAX_TITLE_LENGTH = 15;
        private static readonly string URL = $"https://hipsum.co/api/?type=hipster-latin&paras={MAX_TITLES}";

        public async static void Initialize(IServiceProvider serviceProvider)
        {
            using var context = new TasklistDBContext(
            serviceProvider.GetRequiredService<DbContextOptions<TasklistDBContext>>());
            if (context.Tasks.Any())
            {
                return;
            }

            List<Task> tasks = new();
            List<string> deserializedResponse = new();

            using (HttpClient httpClient = new())
            {
                using var response = await httpClient.GetAsync(URL);
                string apiResponse = await response.Content.ReadAsStringAsync();
                deserializedResponse = JsonConvert.DeserializeObject<List<string>>(apiResponse);

                foreach (string each in deserializedResponse)
                {
                    // Trim title length since API returns long data strings
                    tasks.Add(new Task(each.Substring(0, Math.Min(each.Length, MAX_TITLE_LENGTH))));
                }
            }

            context.Tasks.AddRange(tasks);
            context.SaveChanges();
        }
    }
}
