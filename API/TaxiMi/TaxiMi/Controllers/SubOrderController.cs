using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaxiMi.Models;
using TaxiMi.Services.OrderService.OrderOptionService;
using TaxiMi.Services.OrderService.SubOrderService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TaxiMi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubOrderController : ControllerBase
    {
        private readonly ISubOrderService subOrderService;
        private readonly IOrderOptionService orderOptionService;

        public SubOrderController(ISubOrderService subOrderService, IOrderOptionService orderOptionService)
        {
            this.subOrderService = subOrderService;
            this.orderOptionService = orderOptionService;
        }

        // GET: api/<SubOrderController>
        [HttpGet]
        public async Task<IEnumerable<SuburbanOrder>> GetAll() => 
            await this.subOrderService.GetAllSubOrdersAsync();


        // GET api/<SubOrderController>/5
        [HttpGet("options")]
        public IEnumerable<SubOrderOptions> Get()
            => this.orderOptionService.GetAll();


        // POST api/<SubOrderController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<SubOrderController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<SubOrderController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
