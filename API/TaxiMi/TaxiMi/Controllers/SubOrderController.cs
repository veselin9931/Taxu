using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiMi.Infrastructure.HubConfig;
using TaxiMi.Infrastructure.InputModels.OrderInput;
using TaxiMi.Infrastructure.ViewModels;
using TaxiMi.Models;
using TaxiMi.Services.Account;
using TaxiMi.Services.OrderService;
using TaxiMi.Services.OrderService.OrderOptionService;
using TaxiMi.Services.OrderService.SubOrderService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TaxiMi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubOrderController : ControllerBase
    {
        private readonly ISubOrderService subOrderService;
        private readonly IOrderOptionService orderOptionService;
        private readonly IAccountService accountService;
        private readonly IHubContext<OrderHub, IHubClient> hub;

        public SubOrderController(ISubOrderService subOrderService, IOrderOptionService orderOptionService, IAccountService accountService, IHubContext<OrderHub, IHubClient> hub)
        {
            this.subOrderService = subOrderService;
            this.orderOptionService = orderOptionService;
            this.accountService = accountService;
            this.hub = hub;
        }

        // GET: api/<SubOrderController>
        [HttpGet]
        public async Task<IEnumerable<SuburbanOrder>> GetAll() => 
            await this.subOrderService.GetAllSubOrdersAsync();


        // GET api/<SubOrderController>/5
        [HttpGet("options")]
        public IEnumerable<SubOrderOptions> Get()
            => this.orderOptionService.GetAll();

        // POST api/<SubOrderController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CreateSubOrderInputModel input)
        {
            if (this.ModelState.IsValid)
            {
                try
                {
                    var result = await this.subOrderService.CreateSubOrder(input);

                    if (result != null)
                    {
                        await this.hub.Clients.All.CreatedSubOrder();
                        return this.Ok(result);
                    }

                }
                catch (Exception e)
                {
                    return this.BadRequest(e.Message);
                }

            }
            return this.BadRequest("Failed to create SubOrder");
        }

        [HttpGet("{orderId}")]
        public async Task<IActionResult> GetById(string orderId)
        {
            var order = this.subOrderService.GetSubOrderById(orderId);

            SubOrderViewModel viewModel = null;
            if (order != null)
            {
                viewModel = new SubOrderViewModel() { 
                    Id = order.Id,
                    ApplicationUserId = order.ApplicationUserId,
                    Date = order.Date,
                    Destination = this.orderOptionService.GetDestinationById(order.OptionsId),
                    Location = this.orderOptionService.GeLocation(order.OptionsId),
                    Info = order.Info,
                    Price = this.orderOptionService.GetOrderOptionPriceById(order.OptionsId)
                };
            }

            return this.Ok(viewModel) ;
        }

        // PUT api/<SubOrderController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<SubOrderController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
