using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelApp.Services.RatingService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TravelApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RatingController : ControllerBase
    {
        private readonly IRatinService ratingService;

        public RatingController(IRatinService ratingService)
        {
            this.ratingService = ratingService;
        }


        // GET: api/<RatingController>

        // GET api/<RatingController>/5
        [HttpGet("{id}")]
        public double Get(string id)
        {
            return this.ratingService.GetRatingByDriverId(id);
        }

        // POST api/<RatingController>
        [HttpPost("{rate}/{driverId}")]
        public void Post(int rate, string driverId)
        {
          this.ratingService.AddRating(driverId, rate);
        }


      
    }
}
