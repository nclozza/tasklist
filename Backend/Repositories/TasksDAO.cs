using System;
using System.Collections.Generic;
using System.Linq;
using Tasklist.Repositories.Interfaces;
using Tasklist.Repositories.Models;

namespace Tasklist.Repositories
{
    public class TasksDAO : ITasksDAO
    {
        private readonly Random rnd = new();
        private readonly TasklistDBContext _context;

        public TasksDAO(TasklistDBContext context)
        {
            _context = context;
        }

        public List<Task> GetShuffledTasks(int quantity)
        {
            List<Task> tasks = _context.Tasks.ToList();
            return tasks.OrderBy(a => rnd.Next()).Take(quantity).ToList();
        }
    }
}
