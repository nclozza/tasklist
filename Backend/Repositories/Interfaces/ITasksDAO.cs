using System.Collections.Generic;
using Tasklist.Repositories.Models;

namespace Tasklist.Repositories.Interfaces
{
    public interface ITasksDAO
    {
        List<Task> GetShuffledTasks(int quantity);
    }
}
