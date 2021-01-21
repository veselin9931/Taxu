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
        private readonly IHubContext<OrderHub> hub;

        public OrderController(IOrderService orderService, IDeletableEntityRepository<Order> orderRepository, IHubContext<OrderHub> hub)
        {
            this.orderService = orderService;
            this.orderRepository = orderRepository;
            this.hub = hub;
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

        // GET api/<OrderController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<OrderController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CreateOrderInputModel input)
        {
            if (this.ModelState.IsValid)
            {
                try
                {

                    var result = await this.orderService.CreateOrderAsync(input);

                    if (result != null)
                    {
                        await this.hub.Clients.All.SendAsync("Order Received", input);
                        return this.Ok(result);
                        //return this.Ok(result);
                    }
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
