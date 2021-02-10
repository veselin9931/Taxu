﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelApp.Infrastructure.HubConfig;
using TravelApp.Models;
using TravelApp.Services.OrderService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TravelApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChatController : ControllerBase
    {
        private readonly IHubContext<OrderHub, IHubClient> hubContext;

        public ChatController(IHubContext<OrderHub, IHubClient> hubContext)
        {
            this.hubContext = hubContext;
        }
        // GET: api/<ChatController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<ChatController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ChatController>
        [Route("send")] //path looks like this: /api/chat/send
        [HttpPost]
        public async Task<IActionResult> SendRequest([FromBody] Message msg)
        {
            await this.hubContext.Clients.All.MessageReceived(msg.User, msg.Text);
            return Ok();
        }

        // PUT api/<ChatController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ChatController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
