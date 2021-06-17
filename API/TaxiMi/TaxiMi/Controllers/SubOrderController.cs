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
        [HttpGet("status/{status}")]
        public async Task<IEnumerable<SuburbanOrder>> GetAll(string status)
        {
            var r = await this.subOrderService.GetAllSubOrdersAsync(status);
            //await this.hub.Clients.All.BroadcastMessage();

            return r;
        }

        // GET api/<SubOrderController>/5
        [HttpGet("options")]
        public IEnumerable<SubOrderOptions> Get()
            => this.orderOptionService.GetAll();

        [HttpGet("options/{id}")]
        public async Task<IActionResult> GetById(int id)
            =>
            this.Ok(this.orderOptionService.GetAll()
                .FirstOrDefault(a => a.Id == id));

        // POST api/<SubOrderController>
        [HttpPost]
        public async Task<IActionResult> Post(CreateSubOrderInputModel input)
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

        [HttpGet("user/{userId}")]
        public async Task<IActionResult> GetByUserId(string userId)
        {
            var order = this.subOrderService.GetByUserId(userId);

            SubOrderViewModel viewModel = null;
            if (order != null)
            {
                viewModel = new SubOrderViewModel()
                {
                    Id = order.Id,

                    ApplicationUserId = order.ApplicationUserId,
                    Date = order.Date,
                    Destination = this.orderOptionService.GetDestinationById(order.OptionsId),
                    Location = this.orderOptionService.GeLocation(order.OptionsId),
                    Info = order.Info,
                    Price = this.orderOptionService.GetOrderOptionPriceById(order.OptionsId),
                    AcceptedBy = order.AcceptedBy,
                    Status = order.Status
                };
            }

            return this.Ok(viewModel);
        }


        // PUT api/<SubOrderController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, [FromBody] ChangeSubOrderInputModel inputModel)
        {
            var r = await this.subOrderService.ChangeSubOrderStatusAsync(id, inputModel);

            if (r)
            {
                await this.hub.Clients.All.AcceptSubOrder(id);
                return this.Ok(r);
            }

           return this.BadRequest(r);
        }

        [HttpPut("accepted/{id}")]
        public async Task<IActionResult> Accepted(string id, [FromBody] ChangeSubOrderInputModel inputModel)
        {
            var r = await this.subOrderService.ChangeSubOrderStatusAsync(id, inputModel);

            if (r)
            {
                await this.hub.Clients.All.AcceptSubOrder(id);
                return this.Ok(r);
            }

            return this.BadRequest(r);
        }


        [HttpPut("refuse/{id}")]
        public async Task<IActionResult> Refuse(string id, [FromBody] ChangeSubOrderInputModel inputModel)
        {
            var r = await this.subOrderService.ChangeSubOrderStatusAsync(id, inputModel);

            if (r)
            {
                await this.hub.Clients.All.CancelSubOrder(id);
                return this.Ok(r);
            }

            return this.BadRequest(r);
        }

        [HttpPut("closed/{id}")]
        public async Task<IActionResult> Closed(string id, [FromBody] ChangeSubOrderInputModel inputModel)
        {
            var r = await this.subOrderService.ChangeSubOrderStatusAsync(id, inputModel);

            if (r)
            {
                await this.hub.Clients.All.FinishSubOrder(id);
                return this.Ok(r);
            }

            return this.BadRequest(r);
        }

        [HttpPut("inProgress/{id}")]
        public async Task<IActionResult> InProgress(string id, [FromBody] ChangeSubOrderInputModel inputModel)
        {
            var r = await this.subOrderService.ChangeSubOrderStatusAsync(id, inputModel);

            if (r)
            {
                await this.hub.Clients.All.InProgressSubOrder(id);
                return this.Ok(r);
            }

            return this.BadRequest(r);
        }

        // DELETE api/<SubOrderController>/5
        [HttpDelete("{orderId}")]
        public async Task<IActionResult> Delete(string orderId)
        {
            try
            {
               
                bool result = await this.subOrderService.Delete(orderId);
          
                return this.Ok(result);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
            
        }
    }
}
