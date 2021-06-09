using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
using TaxiMi.Infrastructure.HubConfig;
using TaxiMi.Infrastructure.InputModels.CarInput;
using TaxiMi.Services.CarService;
using TaxiMi.Services.DriverService;
using TaxiMi.Services.OrderService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TaxiMi.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly ICarService service;
        private readonly IDriverService driverService;
        private readonly IHubContext<OrderHub, IHubClient> hub;

        public CarController(ICarService service, IDriverService driverService,
            IHubContext<OrderHub, IHubClient> hub)
        {
            this.service = service;
            this.driverService = driverService;
            this.hub = hub;
        }

        [HttpGet("carForConfirmation/{driverId}")]
        public async Task<IActionResult> ForConfirmation(string driverId)
        {
            var cars = await this.service.GetAllCarsForConfirmationAsync(driverId);

            if (cars != null)
            {
                return this.Ok(cars);
            }

            return this.NoContent();
        }

        // GET: api/<CarController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var cars = await this.service.GetAllCarsAsync();

            if (cars != null)
            {
                return this.Ok(cars);
            }

            return this.NoContent();
        }

        // GET api/<CarController>/5
        [HttpGet("driver/active/{id}")]
        public async Task<IActionResult> GetActiveCar(string id)
        {
            var activeCar = this.service.GetActiveCar(id);

            if (activeCar != null)
            {
                return this.Ok(activeCar);
            }

            return this.NoContent();
        }


        [HttpGet("unconfirmed")]
        public async Task<IActionResult> GetUnconfirmed()
        {
            var cars = await this.service.GetUnconfirmedCarsAsync();

            if (cars == null)
            {
                return this.StatusCode(204);
            }

            return this.Ok(cars);
        }

        // GET api/<CarController>/driver/{driverId}
        [HttpGet("driver/{driverId}")]
        public async Task<IActionResult> GetDriverCars(string driverId)
        {
            var cars = await this.service.GetAllCarsAsyncForDriver(driverId);

            if (cars == null)
            {
                return this.StatusCode(204);
            }

            return this.Ok(cars);
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

        [HttpGet("confirm/{id}")]
        public async Task<IActionResult> CarConfirmation(string id)
        {
            var car =  await this.service.VerifyCar(id);

            if (!car)
            {
                return this.StatusCode(204);
            }

            return this.Ok();
        }

        // POST api/<CarController>
        [HttpPost]
        public async Task<IActionResult> Post(CreateCarInputModel input)
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
            var result = await this.driverService.AddCarToDriver(input.DriverId, car.Id);

            if (!result)
            {
                return this.Problem();
            }

            await this.hub.Clients.All.CarAction(input.DriverId);
            return this.Content(car.Id);
        }

        // PUT api/<CarController>/5
        [HttpPut("{id}/{driverId}")]
        [AllowAnonymous]
        public async Task<IActionResult> Put(string id, string driverId)
        {
            var result = this.service.ActivateCar(id, driverId);

            if (result == null)
            {
                return this.BadRequest();
            }

            await this.hub.Clients.All.CarAction(driverId);
            return this.Ok(result);
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
            await this.hub.Clients.All.BroadcastMessage();
            return this.Ok(id);
        }

    }
}
