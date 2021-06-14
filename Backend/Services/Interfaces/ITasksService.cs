using System.Collections.Generic;
using Tasklist.Services.Responses;

namespace Tasklist.Services.Interfaces
{
    public interface ITasksService
    {
        List<TaskResponse> GetTasks(int quantity);
    }
}
