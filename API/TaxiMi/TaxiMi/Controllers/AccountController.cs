
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using TaxiMi.Common;
using TaxiMi.Infrastructure.HubConfig;
using TaxiMi.Infrastructure.ViewModels;
using TaxiMi.Models;
using TaxiMi.Services.Account;
using TaxiMi.Services.OrderService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TaxiMi.Controllers
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
        //[Authorize(Roles = GlobalConstants.AdministratorRoleName)]
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
                return this.BadRequest(this.ModelState.SelectMany(x => x.Value.Errors));
            }

            var user = new ApplicationUser()
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                Email = model.Username,
                Phone = model.Phone,
                UserName = model.Username,
                IsDrivingNow = model.IsDrivingNow,
                ChoosenLanguage = "bg"   
                
            };

            ApplicationUser result;

            try
            {
                 result = await userService.Create(user, model.Password);
            }
            catch (Exception e)
            {

                return this.BadRequest(e.Message);
            }

           

            if (result != null)
            {
                await this.hub.Clients.All.CreatedAccount();
                return this.Ok();
            }

            return this.BadRequest("Failed to register");
        }

        // POST api/<AccountController>
        [HttpPost("authenticate")]
        [Route("/authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] LoginViewModel userDto)
        {
            ApplicationUser user;
            try
            {
                user = await userService.Authenticate(userDto.Username, userDto.Password);
            }
            catch (Exception e)
            {

                return this.BadRequest(new {message  = e.Message} );
            }
            

            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(configuration["JwtTokenValidation:Secret"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                    //new Claim(ClaimTypes.Role, user.Token)
                }),
                Expires = DateTime.Now.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            // return basic user info (without password) and token to store client side
            
           
            var localUser = new 
            {
                Id = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Phone = user.Phone,
                Username = user.UserName,
                Token = tokenString,
                IsDrivingNow = user.IsDrivingNow,
                DriverId = user.DriverId,
                ChoosenLanguage = user.ChoosenLanguage,
                Timer = DateTime.Now,
                AlertTriggered = user.AlertTriggered,
                IsAdmin = user.IsAdmin,
                DeviceToken = user.DeviceToken
            };

            if(localUser != null)
            {
                return this.Ok(localUser);
            }

            if (localUser != null)
            {
                await this.hub.Clients.All.LoggedIn();
                return this.Ok(localUser);

            }

            else
            {
                return this.NoContent();
            }
        }

        [HttpPost("trigger")]
        public async Task<IActionResult> TriggerLog()
        {
            await this.hub.Clients.All.AfterLog();
            return this.Ok();

        }

        [HttpPut("token/{id}/{value}")]
        public async Task<IActionResult> DeviceTokenSet(string id, string value)
        {
            var result = await this.userService.UpdateUserTokenAsync(id, value);

            if (result)
            {
                return this.Ok();
            }

            return this.BadRequest();
        }

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

        [HttpPut("{id}/alert/{value}")]
        public async Task<IActionResult> AlertTrigger(string id, bool value)
        {
            var result = await this.userService.UpdateAlertAsync(id, value);

            if (result)
            {
                await this.hub.Clients.All.BroadcastMessage();
                return this.Ok();
            }

            return this.BadRequest();
        }

        [HttpPut("{id}/language/{value}")]
        public async Task<IActionResult> UpdateUserLanguage(string id, string value)
        {
            var result = await this.userService.UpdateUserLanguageAsync(id, value);

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
