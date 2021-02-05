using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelApp.Infrastructure.HubConfig;
using TravelApp.Infrastructure.InputModels.TripInput;
using TravelApp.Services.OrderService;
using TravelApp.Services.TripService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TravelApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TripController : ControllerBase
    {
        private readonly ITripService tripService;
        private readonly IHubContext<OrderHub, IHubClient> hub;

        public TripController(ITripService tripService, IHubContext<OrderHub, IHubClient> hub)
        {
            this.tripService = tripService;
            this.hub = hub;
        }

        // GET: api/<TripController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
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
                return this.Ok();
            }

            return this.BadRequest();
        }

        // PUT api/<TripController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id)
        {
            var complete = await this.tripService.FinishTripAsync(id);

            if (complete)
            {
                await this.hub.Clients.All.BroadcastMessage();
                return this.Ok(complete);
            }

            return this.BadRequest();
        }

        // DELETE api/<TripController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
