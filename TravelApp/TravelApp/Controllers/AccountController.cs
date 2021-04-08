﻿
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using TravelApp.Infrastructure.HubConfig;
using TravelApp.Infrastructure.ViewModels;
using TravelApp.Models;
using TravelApp.Services.Account;
using TravelApp.Services.OrderService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TravelApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> userManager;
        private readonly IConfiguration configuration;
        private readonly IAccountService userService;
        private readonly IHubContext<OrderHub, IHubClient> hub;

        public AccountController(
                                 UserManager<ApplicationUser> userManager,
                                 IConfiguration configuration,
                                 IAccountService userService,
                                 IHubContext<OrderHub, IHubClient> hub)
        {
            this.userManager = userManager;
            this.configuration = configuration;
            this.userService = userService;
            this.hub = hub;
        }
        // GET: api/<AccountController>
        [HttpGet("user/{userId}")]
        public async Task<ApplicationUser> GetUser(string userId)
        {
            return this.userService.GetById(userId);
        }

        // GET: api/<AccountController>
        [HttpGet("driver/{driverId}")]
        public async Task<ApplicationUser> GetUserByDriverId(string driverId)
        {
            return this.userService.GetUserByDriverId(driverId);
        }

        // GET: api/<AccountController>
        [HttpGet("{driverId}")]
        public async Task<ApplicationUser> GetDriver(string driverId)
        {
            return this.userService.GetById(driverId);
        }

        // GET: api/<AccountController>
        [HttpGet("user/")]
        public IEnumerable<ApplicationUser> GetAllUsers()
        {
            return this.userService.GetAll().Where(a => a.IsDeleted == false).AsEnumerable();
        }
        // GET: api/<AccountController>
        [HttpGet]
        public IEnumerable<ApplicationUser> GetAllDrivers()
        {
            return this.userService.GetAll().Where(a => a.DriverId != null).AsEnumerable();
        }

        //POST api/<AccountController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] RegisterViewModel model)
        {
            if (model == null || !this.ModelState.IsValid)
            {
                return this.BadRequest("Failed to register");
            }

            var user = new ApplicationUser()
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                Email = model.Username,
                Phone = model.Phone,
                UserName = model.Username,
                IsDrivingNow = model.IsDrivingNow,
            };

            var result = await userService.Create(user, model.Password);

            if (result != null)
            {
                await this.hub.Clients.All.BroadcastMessage();
                return this.Ok();
            }

            return this.BadRequest("Failed to register");
        }

        // POST api/<AccountController>
        [HttpPost("authenticate")]
        [Route("/authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] LoginViewModel userDto)
        {
            var user = await userService.Authenticate(userDto.Username, userDto.Password);

            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(configuration["JwtTokenValidation:Secret"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            // return basic user info (without password) and token to store client side
            await this.hub.Clients.All.BroadcastMessage();
            return Ok(new
            {
                Id = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Phone = user.Phone,
                Username = user.UserName,
                Token = tokenString,
                IsDrivingNow = user.IsDrivingNow,
                DriverId = user.DriverId
            });
        }

        // PUT api/<AccountController>/5/true,false
        [HttpPut("{id}/{value}")]
        public async Task<IActionResult> Put(string id, bool value)
        {
            var result = await this.userService.UpdateUserAsync(id, value);

            if (result)
            {
                await this.hub.Clients.All.BroadcastMessage();
                return this.Ok();
            }

            return this.BadRequest();
        }

        // DELETE api/<AccountController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
