using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelApp.Infrastructure.InputModels.DriverInput;
using TravelApp.Infrastructure.ViewModels;
using TravelApp.Services.DriverService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TravelApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DriverController : ControllerBase
    {
        private readonly IDriverService driverService;

        public DriverController(IDriverService driverService)
        {
            this.driverService = driverService;
        }

        // GET: api/<AccountController>
        [HttpGet]
        public IEnumerable<DriverViewModel> GetAllDrivers()
        {
            var drivers = this.driverService.GetAllDrivers();

            if (drivers != null)
            {
                return drivers;
            }

            return new List<DriverViewModel> { };
        }


        // GET api/<DriverController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<DriverController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] DriverInputModel input)
        {
            if (!this.ModelState.IsValid || input == null)
            {
                return this.ValidationProblem();
            }

            var driver = await this.driverService.CreateDriver(input);

            if (driver == null)
            {
                return this.BadRequest();
            }

            return this.Content(driver.Id);
        }

        // PUT api/<DriverController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<DriverController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
