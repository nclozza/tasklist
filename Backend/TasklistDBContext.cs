using Microsoft.EntityFrameworkCore;
using Tasklist.Repositories.Models;

namespace Tasklist
{
    public class TasklistDBContext : DbContext
    {
        public TasklistDBContext(DbContextOptions<TasklistDBContext> options) : base(options)
        {
        }

        public DbSet<Task> Tasks { get; set; }
    }
}
