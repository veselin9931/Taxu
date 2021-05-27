using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelApp.Infrastructure.HubConfig;
using TravelApp.Infrastructure.InputModels.DriverInput;
using TravelApp.Infrastructure.ViewModels;
using TravelApp.Services.Account;
using TravelApp.Services.DriverService;
using TravelApp.Services.OrderService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TravelApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DriverController : ControllerBase
    {
        private readonly IDriverService driverService;
        private readonly IAccountService accountService;
        private readonly IHubContext<OrderHub, IHubClient> hub;

        public DriverController(IDriverService driverService, IAccountService accountService, IHubContext<OrderHub, IHubClient> hub)
        {
            this.driverService = driverService;
            this.accountService = accountService;
            this.hub = hub;
        }

        [HttpPut("voteUp/{driverId}")]
        public async Task<IActionResult> VoteUp(string driverId)
        {
           var result = await this.driverService.VoteUp(driverId);

            if (result)
            {   
                await this.hub.Clients.All.Voted(driverId);
                return this.Ok();
            }

            return this.NotFound();
        }

        [HttpPut("voteDown/{driverId}")]
        public async Task<IActionResult> VoteDown(string driverId)
        {
            var result = await this.driverService.VoteDown(driverId);

            if (result)
            {
                await this.hub.Clients.All.Voted(driverId);
                return this.Ok();
            }

            return this.NotFound();
        }

        [HttpGet("referral/{referral}")]
        public async Task<IActionResult> GetDriverByReferral(string referral)
        {
            var driver = this.driverService.GetByReferral(referral);

            if (driver == null)
            {
                return this.StatusCode(204);
            }

            return this.Ok(driver);
        }

        [HttpGet("confirm/{id}")]
        public async Task<IActionResult> DriverConfirmation(string id)
        {
            var car = await this.driverService.ConfirmDriver(id);

            if (!car)
            {
                return this.StatusCode(204);
            }

            return this.Ok();
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
        public async Task<IActionResult> Get(string id)
        {
            var driver = this.driverService.GetById(id);

            if (driver != null)
            {
                return this.Ok(driver);
            }

            return this.NoContent();
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
            var r = await this.accountService.AddDriverSettings(input.ApplicationUserId, driver.Id);

            

            if (r)
            {
                await this.hub.Clients.All.BroadcastMessage();
                return this.Content(driver.Id);
            }

            return this.BadRequest();
        }

        // PUT api/<DriverController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id)
        {
            var driver = await this.driverService.LowerCommission(id);

            if (driver)
            {
                await this.hub.Clients.All.BroadcastMessage();
                return this.Ok(driver);
            }

            return this.NotFound();
        }

        // PUT api/<DriverController>/5
        [HttpPut("location/{id}/{lat}/{lng}")]
        public async Task<IActionResult> ChangeDriverLocation(string id, string lat, string lng)
        {
            var result = await this.driverService.ChangeLocation(id, lat, lng);

            if (result)
            {
                await this.hub.Clients.All.BroadcastMessage();
                return this.Ok(result);
            }
            return this.NotFound();
        }

        // DELETE api/<DriverController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
