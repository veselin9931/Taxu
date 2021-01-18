using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using TravelApp.Common.Repositories;
using TravelApp.Infrastructure.InputModels.OrderInput;
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

        public OrderController(IOrderService orderService, IDeletableEntityRepository<Order> orderRepository)
        {
            this.orderService = orderService;
            this.orderRepository = orderRepository;
        }

        // GET: api/<OrderController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {

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
                        return this.Ok(result);
                    }
                }
                catch (Exception e)
                {
                    return this.BadRequest(e.Message);
                }

            }
            return this.BadRequest("Failed to create order");
        }

        // PUT api/<OrderController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<OrderController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

    }
}
