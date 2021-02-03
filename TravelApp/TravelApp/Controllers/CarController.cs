using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelApp.Infrastructure.InputModels.CarInput;
using TravelApp.Infrastructure.ViewModels;
using TravelApp.Services.CarService;
using TravelApp.Services.DriverService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TravelApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly ICarService service;
        private readonly IDriverService driverService;

        public CarController(ICarService service, IDriverService driverService)
        {
            this.service = service;
            this.driverService = driverService;
        }

        // GET: api/<CarController>
        [HttpGet]
        public IEnumerable<CarViewModel> Get()
        {
            var cars = service.GetCars();

            return cars;
        }

        // GET api/<CarController>/5
        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            var car = this.service.GetCar(id);

            if (car == null)
            {
                return this.StatusCode(204);
            }

            return this.Ok(car);
        }

        // POST api/<CarController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CreateCarInputModel input, [FromRoute] string driverId)
        {
            if (!this.ModelState.IsValid || input == null)
            {
                return this.ValidationProblem();
            }

            var car = await this.service.CreateCar(input);

            
            if (car == null)
            {
                return this.BadRequest();
            }

            var result = await this.driverService.AddCarToDriver(driverId, car.Id);

            if (!result)
            {
                return this.Problem();
            }

            return this.Content(car.Id);
        }

        // PUT api/<CarController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {

        }

        // DELETE api/<CarController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var r = await this.service.DeleteCar(id);

            if (!r)
            {
                return this.NotFound(id);
            }

            return this.Ok(id);
        }

    }
}
