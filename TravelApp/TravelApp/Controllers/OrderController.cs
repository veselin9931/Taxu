using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using TravelApp.Common.Repositories;
using TravelApp.Infrastructure.HubConfig;
using TravelApp.Infrastructure.InputModels.OrderInput;
using TravelApp.Infrastructure.TimerFeatures;
using TravelApp.Infrastructure.ViewModels;
using TravelApp.Models;
using TravelApp.Services.Account;
using TravelApp.Services.EmailSender;
using TravelApp.Services.OrderService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TravelApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService orderService;
        private readonly IDeletableEntityRepository<Order> orderRepository;
        private readonly IHubContext<OrderHub, IHubClient> hub;
        private readonly IAccountService accountService;

        //private readonly IEmailSender emailSender;

        public OrderController(IOrderService orderService, 
            IDeletableEntityRepository<Order> orderRepository,
            IHubContext<OrderHub, IHubClient> hub,
            IAccountService accountService)
            //IEmailSender emailSender)
        {
            this.orderService = orderService;
            this.orderRepository = orderRepository;
            this.hub = hub;
            this.accountService = accountService;
            //this.emailSender = emailSender;
        }

        // GET: api/<OrderController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            //var orders = new TimerManager(() => hub.Clients.All.SendAsync("transferorderdata", this.orderService.GetAllOrdersAsync()));
            //var orders = this.orderRepository.All();
            var orders = await this.orderService.GetAllOrdersAsync();
            if (orders == null)
            {
                return this.NoContent();
            }

            return this.Ok(orders);
        }

        //GET ORDER BY ID
        // GET api/<OrderController>/id/{orderId}
        [HttpGet("id/{orderId}")]
        public async Task<IActionResult> GetById(string orderId)
        {
            var order = this.orderService.GetOrderById(orderId);

            if (order != null)
            {
                return this.Ok(order);
            }

            return this.NoContent();
        }

        //GET ORDER BY USER ID
        // GET api/<OrderController>/{userId}
        [HttpGet("{userId}")]
        public async Task<IActionResult> Get(string userId)
        {
            var order = this.orderService.GetOrderByUserId(userId);
            var user = this.accountService.GetById(userId);


            if (order != null)
            {
                order.ApplicationUser = user;
                return this.Ok(order);
            }

            return this.NoContent();
        }

        // POST api/<OrderController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CreateOrderInputModel input)
        {
            if (this.ModelState.IsValid)
            {
                try
                {
                    var user = this.accountService.GetById(input.ApplicationUserId);

                    input.ApplicationUser = user;
                    var result = await this.orderService.CreateOrderAsync(input);

                    

                    if (result != null)
                    {
                        await this.hub.Clients.All.BroadcastMessage();
                        return this.Ok(result);
                        //return this.Ok(result);
                    }

                    //await emailSender.SendEmailAsync(new Message(new List<string>() { "veselin@gmail.com" }, "aaaaaadsfaf", "asasassasas", null));

                }
                catch (Exception e)
                {
                    return this.BadRequest(e.Message);
                }

            }
            return this.BadRequest("Failed to create order");
        }

        // PUT api/<OrderController>/orderId/driverId
        [HttpPut("{orderId}/{driverId}")]
        public async Task<IActionResult> Put(string orderId, string driverId)
        {
            var accepted = await this.orderService.AcceptOrderAsync(orderId, driverId);


            if (accepted)
            {
                await this.hub.Clients.All.BroadcastMessage();
                return this.Ok();
            }

            return this.BadRequest();
        }

        // PUT api/<OrderController>/orderId
        [HttpPut("{orderId}")]
        public async Task<IActionResult> Put(string orderId)
        {
            var accepted = await this.orderService.CompleteOrderAsync(orderId);

            if (accepted)
            {
                await this.hub.Clients.All.BroadcastMessage();
                return this.Ok();
            }

            return this.BadRequest();
        }

        // DELETE api/<OrderController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

    }
}
