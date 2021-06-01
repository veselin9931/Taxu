using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelApp.Infrastructure.InputModels.ReportInput;
using TravelApp.Infrastructure.ViewModels;
using TravelApp.Services.ReportService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TravelApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReportController : ControllerBase
    {
        private readonly IReportService service;

        public ReportController(IReportService service)
        {
            this.service = service;
        }

        // GET: api/<ReportController>
        [HttpGet("types")]
        public IEnumerable<ReportTypesViewModel> Get()
        {
            var types = this.service.GetRepotTypes().Select(a => new ReportTypesViewModel {  Name = a.Name, Id = a.Id });

            return types;
        }

        // GET api/<ReportController>/5
        [HttpGet()]
        public IEnumerable<ReportViewModel> GetReports()
        {
            return this.service.GetAll().Select(a => new ReportViewModel()
            {
                Description = a.Description,
                ImgUrl = a.ImgUrl, 
                ReporterId = a.ReporterId,
                SuspectedUserId = a.SuspectedUserId, 
                Title = a.Title,
                TypeId = a.TypeId
            });
        }

        // POST api/<ReportController>
        [HttpPost]
        public async Task<IActionResult> Post(CreateReportInputModel inputModel)
        {
            if (this.ModelState.IsValid)
            {
                var r = await this.service.Create(inputModel);
                if (r != "")
                {
                    return this.Ok(r);
                }   
            }

            return this.Problem();
   
        }

        // PUT api/<ReportController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ReportController>/5
        [HttpDelete("{id}")]
        public async void Delete(string id)
        {
            var r = await this.service.Delete(id);
        }
    }
}
