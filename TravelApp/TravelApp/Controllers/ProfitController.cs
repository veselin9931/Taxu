using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelApp.Services.ProfitService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TravelApp.Controllers
{
    [Route("api/[controller]")]
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
        public async Task<IActionResult> Get()
        {
            var result = this.profitService.GetTotalProfit();

            if (result != null)
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
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ProfitController>/5
        [HttpPut("{value}")]
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
