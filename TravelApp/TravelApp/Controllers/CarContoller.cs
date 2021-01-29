using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelApp.Infrastructure.InputModels.CarInput;
using TravelApp.Infrastructure.ViewModels;
using TravelApp.Services.CarService;

namespace TravelApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarContoller : ControllerBase
    {
        private readonly ICarService service;

        public CarContoller(ICarService service)
        {
            this.service = service;
        }

        [HttpPost]
        public async Task<IActionResult> CreateCar(CreateCarInputModel input)
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

            return this.Content(car.Id);        
        }
    }
}
