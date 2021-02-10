using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelApp.Infrastructure.InputModels.ImageInput;
using TravelApp.Services.ImageService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TravelApp.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        private readonly IImageService service;

        public ImageController(IImageService service)
        {
            this.service = service;
        }

        // GET api/<imageController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            var image = await this.service.GetImagelByIdAsync(id);

            if (image != null)
            {
                return this.Ok(image);
            }

            return this.BadRequest($"Failed to load image with id={id} from db");
        }

        // POST api/<ImageController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CreateImageInputModel input, [FromRoute] string folderName)
        {
            input.File = (Microsoft.AspNetCore.Http.IFormFile)Request.Form.Files;

            if (this.ModelState.IsValid)
            {
                try
                {
                    var result = await this.service.Upload(input, folderName);

                    if (result != "")
                    {
                        return this.Ok(result);
                    }

                }
                catch (Exception e)
                {

                    return this.BadRequest(e.Message);
                }
            }

            return this.BadRequest("Failed to create image");
        }

        // DELETE api/<imageController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var image = await this.service.DeleteImageAsync(id);

            if (image)
            {
                return this.Ok(image);
            }

            return this.BadRequest($"Failed to delete image.");
        }
    }
}
