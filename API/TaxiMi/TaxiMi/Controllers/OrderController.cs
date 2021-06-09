using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using TaxiMi.Common.Repositories;
using TaxiMi.Infrastructure.HubConfig;
using TaxiMi.Infrastructure.InputModels.OrderInput;
using TaxiMi.Infrastructure.TimerFeatures;
using TaxiMi.Infrastructure.ViewModels;
using TaxiMi.Models;
using TaxiMi.Services.Account;
using TaxiMi.Services.EmailSender;
using TaxiMi.Services.OrderService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TaxiMi.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
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

        [HttpGet("history/{userId}")]
        public async Task<IActionResult> GetAccepted(string userId)
        {
            var orders = await this.orderService.GetAllAcceptedOrdersAsync(userId);

            if (orders == null)
            {
                return this.NoContent();
            }

            return this.Ok(orders);
        }

        [HttpGet("chat/{userId}")]
        public async Task<IActionResult> GetCurrentOrder(string userId)
        {
            var id = this.orderService.GetCurrentOrder(userId);

            if (id == null)
            {
                return this.NoContent();
            }

            return this.Ok(id);
        }

        // GET: api/<OrderController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var orders = await this.orderService.GetAllOrdersAsync();

            if (orders == null)
            {
                return this.NoContent();
            }

            return this.Ok(orders);
        }

        // GET: api/<OrderController>/normal
        [HttpGet("normal")]
        public async Task<IActionResult> GetNormal()
        {
            var orders = await this.orderService.GetNormalOrdersAsync();

            if (orders == null)
            {
                return this.NoContent();
            }

            return this.Ok(orders);
        }

        // GET: api/<OrderController>/comfort
        [HttpGet("comfort")]
        public async Task<IActionResult> GetComfort()
        {
            var orders = await this.orderService.GetComfortOrdersAsync();

            if (orders == null)
            {
                return this.NoContent();
            }

            return this.Ok(orders);
        }

        //GET ORDER BY ID
        // GET api/<OrderController>/id/{orderId}
        [HttpGet("canceled/{orderId}")] 
        public async Task<IActionResult> GetCanceled(string orderId)
        {
            var order = this.orderService.GetCanceledOrderAsync(orderId);

            if (order != null)
            {
                return this.Ok(order);
            }
            return this.NoContent();
        }


        //GET ORDER BY ID
        // GET api/<OrderController>/id/{orderId}
        [HttpGet("id/{orderId}")]
        public async Task<IActionResult> GetById(string orderId)
        {
            var order = this.orderService.GetOrderById(orderId);

            if (order != null)
            {
                var user = this.accountService.GetById(order.ApplicationUserId);
                order.ApplicationUser = user;
            }
            return this.Ok(order);
        }

        //GET ORDER BY USER ID
        // GET api/<OrderController>/{userId}
        [HttpGet("completed/{userId}")]
        public async Task<IActionResult> GetLastCompletedOrder(string userId)
        {
            var user = this.accountService.GetById(userId);
            var passengerOrder = this.orderService.GetLastCompletedOrderByUserId(userId);

            if (passengerOrder != null)
            {
                passengerOrder.ApplicationUser = user;
                return this.Ok(passengerOrder);
            }


            if (passengerOrder == null)
            {
                var driverOrder = this.orderService.GetLastAcceptedOrderByUserId(userId);
                driverOrder.ApplicationUser = user;
                return this.Ok(driverOrder);

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
        [AllowAnonymous]
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
                        await this.hub.Clients.All.CreatedOrder();
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

        // POST api/<OrderController>
        [HttpPost("favourites")]
        [AllowAnonymous]
        public async Task<IActionResult> AddToFavourites([FromBody] CreateOrderInputModel input)
        {
            if (this.ModelState.IsValid)
            {
                try
                {
                    var user = this.accountService.GetById(input.ApplicationUserId);

                    input.ApplicationUser = user;

                    var result = await this.orderService.AddToFavouriteOrder(input);

                    if (result != null)
                    {
                        //await this.hub.Clients.All.BroadcastMessage();
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

        // GET: api/<OrderController>
        [HttpGet("favourites")]
        public async Task<IActionResult> GetAllFavourites()
        {
            var orders = await this.orderService.GetAllFavouriteOrdersAsync();

            if (orders == null)
            {
                return this.NoContent();
            }

            return this.Ok(orders);
        }

        // GET: api/<OrderController>
        [HttpGet("favourites/{userId}")]
        public async Task<IActionResult> GetMyFavourites(string userId)
        {
            var orders = await this.orderService.GetAllFavouriteOrdersForUserAsync(userId);

            if (orders == null)
            {
                return this.NoContent();
            }

            return this.Ok(orders);
        }

        // DELETE api/<OrderController>/5
        [HttpDelete("favourites/{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> DeleteFavourite(string id)
        {
            var order = await this.orderService.DeleteFavourite(id);

            if (order)
            {
                await this.hub.Clients.All.BroadcastMessage();
                return this.Ok();
            }

            return this.NoContent();
        }

        // PUT api/<OrderController>/orderId/driverId
        [HttpPut("{orderId}/{driverId}")]
        [AllowAnonymous]
        public async Task<IActionResult> AcceptOrder(string orderId, string driverId)
        {
            var accepted = await this.orderService.AcceptOrderAsync(orderId, driverId);


            if (accepted)
            {
                await this.hub.Clients.All.OrderAccepted(orderId);
                //await this.hub.Clients.All.BroadcastMessage();
                
                return this.Ok();
            }

            return this.BadRequest();
        }

        [HttpPut("waiting/{orderId}")]
        [AllowAnonymous]
        public async Task<IActionResult> MakeOrderInWaiting(string orderId)
        {
            var accepted = await this.orderService.MakeOrderInWaitingAsync(orderId);
            if (accepted)
            {
                await this.hub.Clients.All.OrderWaiting(orderId);      

                return this.Ok();
            }

            return this.BadRequest();
        }

        // PUT api/<OrderController>/eta/orderId/value
        [HttpPut("eta/{orderId}/{value}")]
        [AllowAnonymous]
        public async Task<IActionResult> UpdateEta(string orderId, string value)
        {
            var accepted = await this.orderService.UpdateEtaAsync(orderId, value);

            if (accepted)
            {
                await this.hub.Clients.All.BroadcastMessage();
                return this.Ok();
            }

            return this.BadRequest();
        }

        // PUT api/<OrderController>/orderId
        [HttpPut("{orderId}")]
        [AllowAnonymous]
        public async Task<IActionResult> CompleteOrder(string orderId)
        {
            var complete = await this.orderService.CompleteOrderAsync(orderId);

            if (complete)
            {
                await this.hub.Clients.All.CompleteOrder(orderId);

                return this.Ok();
            }

            return this.BadRequest();
        }

        // PUT api/<OrderController>/orderId/increaseAmount
        [HttpPut("increase/{orderId}/{amount}")]
        [AllowAnonymous]
        public async Task<IActionResult> IncreaseAmount(string orderId, decimal amount)
        {
            var increase = await this.orderService.IncreaseOrderPriceAsync(orderId, amount);

            if (increase)
            {
                await this.hub.Clients.All.BroadcastMessage();
                return this.Ok();
            }

            return this.BadRequest();
        }

        [HttpPut("arrived/{orderId}")]
        [AllowAnonymous]
        public async Task<IActionResult> UpdateDriverArrived(string orderId)
        {
            var order = await this.orderService.UpdateDriverArrivedAsync(orderId);

            if (order)
            {
                await this.hub.Clients.All.NotifyArrived(orderId);
                return this.Ok();
            }

            return this.BadRequest();
        }

        [HttpPut("reset/{orderId}")]
        [AllowAnonymous]
        public async Task<IActionResult> ResetIncreasing(string orderId)
        {
            var order = await this.orderService.ResetIncreasePriceAsync(orderId);

            if (order)
            {
                await this.hub.Clients.All.BroadcastMessage();

                return this.Ok();
            }

            return this.BadRequest();
        }

        [HttpPut("increased/{orderId}/{amount}/{driverId}")]
        [AllowAnonymous]
        public async Task<IActionResult> UpdatePriceIncreased(string orderId, decimal amount, string driverId)
        {
            var order = await this.orderService.UpdatePriceIncreasedAsync(orderId, amount, driverId);

            if (order)
            {
                await this.hub.Clients.All.OfferMorePrice(orderId);
                return this.Ok();
            }

            return this.BadRequest();
        }

        [HttpPut("accepted/increase/{orderId}/{value}")]
        [AllowAnonymous]
        public async Task<IActionResult> UpdateIncreaseAccepted(string orderId, bool value)
        {
            var order = await this.orderService.UpdateIncreaseAcceptedAsync(orderId, value);

            if (order)
            {
                await this.hub.Clients.All.NotifyDriver(orderId);
                return this.Ok();
            }

            return this.BadRequest();
        }

        [HttpPut("increment/{orderId}")]
        [AllowAnonymous]
        public async Task<IActionResult> IncrementOrderPrice(string orderId)
        {
            var order = await this.orderService.IncrementPriceAsync(orderId);

            if (order)
            {
                await this.hub.Clients.All.IncrementDecrement(orderId);
                return this.Ok();
            }

            return this.BadRequest();
        }

        [HttpPut("decrement/{orderId}")]
        [AllowAnonymous]
        public async Task<IActionResult> DecrementOrderPrice(string orderId)
        {
            var order = await this.orderService.DecrementPriceAsync(orderId);

            if (order)
            {
                await this.hub.Clients.All.IncrementDecrement(orderId);

                return this.Ok();
            }

            return this.BadRequest();
        }

        // DELETE api/<OrderController>/5
        [HttpDelete("{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> Delete(string id)
        {
            var order = await this.orderService.Delete(id);

            if (order)
            {
                await this.hub.Clients.All.OrderDeleted(id);
                return this.Ok();
            }

            return this.NoContent();
        }
    }
}
