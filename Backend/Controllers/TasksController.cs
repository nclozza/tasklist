using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using Tasklist.Controllers.DTOs;
using Tasklist.Services.Interfaces;
using Tasklist.Services.Responses;

namespace Tasklist.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TasksController : ControllerBase
    {
        private readonly ILogger<TasksController> _logger;
        private readonly ITasksService _taskService;

        public TasksController(ILogger<TasksController> logger, ITasksService taskService)
        {
            _logger = logger;
            _taskService = taskService;
        }

        [HttpGet]
        public IActionResult GetTasks([FromQuery] int N = 3)
        {
            try
            {
                if (N > DataGenerator.MAX_TITLES)
                {
                    return BadRequest($"N cannot be greater than {DataGenerator.MAX_TITLES}.");
                }

                List<TaskResponse> tasks = _taskService.GetTasks(N);
                return Ok(tasks);
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Something wrong happened, please try again later.");
            }
        }

        [HttpPut]
        public IActionResult MarkTaskDone([FromBody] MarkTaskDoneDTO task)
        {
            _logger.LogInformation($"Task with UUID: {task.UUID} completed");
            return Ok();
        }
    }
}
