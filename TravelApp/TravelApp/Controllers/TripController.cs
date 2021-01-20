using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelApp.Infrastructure.InputModels.TripInput;
using TravelApp.Services.TripService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TravelApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TripController : ControllerBase
    {
        private readonly ITripService tripService;

        public TripController(ITripService tripService)
        {
            this.tripService = tripService;
        }

        // GET: api/<TripController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<TripController>/orderid, driverid
        [HttpGet("{orderId}/{applicationUserId}")]
        public async Task<IActionResult> Get(string orderId, string applicationUserId)
        {
            var trip = this.tripService.GetTripByOrderAndUserId(orderId, applicationUserId);

            if (trip != null)
            {
                return this.Ok(trip);
            }

            return this.BadRequest();
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
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<TripController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
