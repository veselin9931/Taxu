using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiMi.Common;
using TaxiMi.Infrastructure.HubConfig;
using TaxiMi.Infrastructure.InputModels.TripInput;
using TaxiMi.Services.OrderService;
using TaxiMi.Services.TripService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TaxiMi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TripController : ControllerBase
    {
        private readonly ITripService tripService;
        private readonly IHubContext<OrderHub, IHubClient> hub;
        private readonly IOrderService orderService;

        public TripController(ITripService tripService, IHubContext<OrderHub, IHubClient> hub, IOrderService orderService)
        {
            this.tripService = tripService;
            this.hub = hub;
            this.orderService = orderService;
        }

        // GET: api/<TripController>
        [HttpGet]
        //[Authorize(Roles = GlobalConstants.AdministratorRoleName)]
        public async Task<IActionResult> Get()
        {
            var trips = await this.tripService.GetAllCompletedTripsAsync();

            if (trips != null)
            {
                return this.Ok(trips);
            }

            return this.NoContent();
        }
        
        // GET api/<TripController>/driverid
        [HttpGet("{applicationUserId}")]
        public async Task<IActionResult> Get(string applicationUserId)
        {
            var trip = this.tripService.GetTripByUserId(applicationUserId);

            if (trip != null)
            {
                return this.Ok(trip);
            }

            return this.NoContent();
        }

        // POST api/<TripController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CreateTripInputModel model)
        {
            var result = await this.tripService.CreateTrip(model);
            

            if (result == true)
            {
                return this.Ok(result);
            }

            return this.BadRequest();
        }

        // PUT api/<TripController>/5
        [HttpPut("finish/{id}")]
        public async Task<IActionResult> FinishTrip(string id)
        {
            var complete = await this.tripService.FinishTripAsync(id);

            if (complete)
            {
                return this.Ok(complete);
            }

            return this.BadRequest();
        }

        // PUT api/<TripController>/5
        [HttpPut("start/{id}")]
        public async Task<IActionResult> StartTrip(string id)
        {
            var complete = await this.tripService.StartTripAsync(id);

            if (complete)
            {
                await this.hub.Clients.All.StartTrip();

                return this.Ok(complete);
            }

            return this.BadRequest();
        }

        // PUT api/<TripController>/5
        [HttpPut("navigate/{id}/{orderId}")]
        public async Task<IActionResult> NavigateToUser(string id, string orderId)
        {
            var complete = await this.tripService.NavigateToUserAsync(id);

            if (complete)
            {
                await this.hub.Clients.All.Navigate(orderId);

                return this.Ok(complete);
            }

            return this.BadRequest();
        }

        // PUT api/<TripController>/5
        [HttpPut("cancel/{id}")]
        public async Task<IActionResult> CancelTrip(string id)
        {
            var trip = await this.tripService.CancelTripAsync(id);

            if (trip)
            {
                return this.Ok(trip);
            }

            return this.BadRequest();
        }
    }
}
