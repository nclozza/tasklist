using System;
using System.ComponentModel.DataAnnotations;

namespace Tasklist.Repositories.Models
{
    public class Task
    {
        [Key]
        public string UUID { get; set; }
        public string Title { get; set; }

        public Task(string title)
        {
            UUID = Guid.NewGuid().ToString();
            Title = title;
        }
    }
}
