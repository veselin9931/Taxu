﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiMi.Infrastructure.HubConfig;
using TaxiMi.Infrastructure.InputModels.DriverInput;
using TaxiMi.Infrastructure.ViewModels;
using TaxiMi.Services.Account;
using TaxiMi.Services.DriverService;
using TaxiMi.Services.OrderService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TaxiMi.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
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
        [AllowAnonymous]
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
        [AllowAnonymous]
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
        public async Task<IActionResult> GetAllDrivers()
        {
            var drivers = await this.driverService.GetUnconfirmedDrivers();

            if (drivers != null)
            {
                return this.Ok(drivers);
            }

            return this.NoContent();
        }

        // GET: api/<AccountController>
        [HttpGet("confirmed")]
        public async Task<IActionResult> GetAllConfirmedDrivers()
        {
            var drivers = await this.driverService.GetConfirmedDrivers();

            if (drivers != null)
            {
                return this.Ok(drivers);
            }

            return this.NoContent();
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
        [AllowAnonymous]
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
        [AllowAnonymous]
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
        [AllowAnonymous]
        public async Task<IActionResult> ChangeDriverLocation(string id, string lat, string lng)
        {
            var result = await this.driverService.ChangeLocation(id, lat, lng);

            if (result)
            {
                await this.hub.Clients.All.LocateDriver(id);
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
