using AutoMapper;
using System.Collections.Generic;
using Tasklist.Repositories.Interfaces;
using Tasklist.Repositories.Models;
using Tasklist.Services.Responses;

namespace Tasklist.Services.Interfaces
{
    public class TasksService : ITasksService
    {
        private readonly IMapper _mapper;
        private readonly ITasksDAO _taskDAO;

        public TasksService(ITasksDAO taskDAO)
        {
            _taskDAO = taskDAO;

            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Task, TaskResponse>();
            });
            _mapper = new Mapper(config);
        }

        public List<TaskResponse> GetTasks(int quantity)
        {
            List<Task> tasks = _taskDAO.GetShuffledTasks(quantity);
            return _mapper.Map<List<TaskResponse>>(tasks);
        }
    }
}
