using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiMi.Common;
using TaxiMi.Services.ProfitService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TaxiMi.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class ProfitController : ControllerBase
    {
        private readonly IProfitService profitService;

        public ProfitController(IProfitService profitService)
        {
            this.profitService = profitService;
        }
        // GET: api/<ProfitController>
        [HttpGet]
        //[Authorize(Roles = GlobalConstants.AdministratorRoleName)]
        public async Task<IActionResult> Get()
        {
            var result = await this.profitService.GetTotalProfit();

            if (result >= 0)
            {
                return this.Ok(result);
            }

            return this.NoContent();
        }

        // GET api/<ProfitController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ProfitController>
        [HttpPost]
        [AllowAnonymous]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ProfitController>/5
        [HttpPut("{value}")]
        [AllowAnonymous]
        public async Task<IActionResult> Put(decimal value)
        {
            var result = await this.profitService.AddToProfit(value);

            if (result)
            {
                return this.Ok(result);
            }
            return this.NoContent();
        }

        // DELETE api/<ProfitController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
