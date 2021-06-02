using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiMi.Infrastructure.HubConfig;
using TaxiMi.Services.OrderService;
using TaxiMi.Services.WalletService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TaxiMi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WalletController : ControllerBase
    {
        private readonly IWalletService walletService;
        private readonly IHubContext<OrderHub, IHubClient> hub;

        public WalletController(IWalletService walletService,
            IHubContext<OrderHub, IHubClient> hub)
        {
            this.walletService = walletService;
            this.hub = hub;
        }

        // GET: api/<WalletController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<WalletController>/5
        [HttpGet("{userId}")]
        public async Task<IActionResult> Get(string userId)
        {
            var wallet = this.walletService.GetUserWallet(userId);

            if (wallet != null)
            {
                return this.Ok(wallet);
            }

            return this.NoContent();
        }

        // POST api/<WalletController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<WalletController>/5
        [HttpPut("increase/{userId}/{amount}")]
        public async Task<IActionResult> Charge(string userId, decimal amount)
        {
            var result = await this.walletService.Charge(userId, amount);

            if (result)
            {
                await this.hub.Clients.All.WalletAction(userId);
                return this.Ok(result);
            }

            return this.NoContent();
        }

        // PUT api/<WalletController>/5
        [HttpPut("decrease/{userId}/{amount}")]
        public async Task<IActionResult> Discharge(string userId, decimal amount)
        {
            var result = await this.walletService.Decrease(userId, amount);

            if (result)
            {
                await this.hub.Clients.All.WalletAction(userId);
                return this.Ok(result);
            }

             return this.NoContent();
        }

        // DELETE api/<WalletController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
