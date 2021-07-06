using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiMi.Infrastructure.HubConfig;
using TaxiMi.Models;
using TaxiMi.Services.OrderService;
using TaxiMi.Services.MessageService;
using TaxiMi.Infrastructure.InputModels.MessageInput;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TaxiMi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChatController : ControllerBase
    {
        private readonly IHubContext<OrderHub, IHubClient> hubContext;
        private readonly IMessageService messageService;

        public ChatController(IHubContext<OrderHub, IHubClient> hubContext, IMessageService messageService)
        {
            this.hubContext = hubContext;
            this.messageService = messageService;
        }
        // GET: api/<ChatController>
        [HttpGet("{orderId}")]
        public async Task<IActionResult> Get(string orderId)
        {
            var message = this.messageService.GetMessageForMyOrder(orderId);
            return this.Ok(message);
            
        }

        [HttpPost("{orderId}")]
        public async Task<IActionResult> Send(SendMessageInputModel model)
        {
            if (this.ModelState.IsValid)
            {
                var message = await this.messageService.SendAsync(model.Sender, model.User, model.OrderId, model.Text);
                await this.hubContext.Clients.All.MessageGet(model.OrderId);

                return this.Ok(message);
            }

            return this.NoContent();
        }

        // POST api/<ChatController>
        [Route("send/{groupName}")] //path looks like this: /api/chat/send
        [HttpPost]
        public async Task<IActionResult> SendRequest([FromBody] Message msg, string groupName)
        {
            //await this.hubContext.Clients.All.MessageReceived(msg.User, msg.Text);
            await this.hubContext.Clients.GroupExcept(groupName, "123213123").MessageReceived(msg.User, msg.Text);
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
