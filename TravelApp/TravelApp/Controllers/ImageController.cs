using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelApp.Common.ErrMsg;
using TravelApp.Infrastructure.HubConfig;
using TravelApp.Infrastructure.InputModels.ImageInput;
using TravelApp.Models;
using TravelApp.Services.ImageService;
using TravelApp.Services.OrderService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TravelApp.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        private readonly IImageService service;
        private readonly IHubContext<OrderHub, IHubClient> hub;

        public ImageController(IImageService service, IHubContext<OrderHub, IHubClient> hub)
        {
            this.service = service;
            this.hub = hub;
        }

        // GET api/<imageController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            Image image;

            try
            {
                image = await this.service.GetImagelByIdAsync(id);
            }
            catch (Exception e)
            {

                return this.BadRequest(ImageErrs.LoadFaild + " | " + e.Message);
            }
           

                return this.Ok(image);
        }

        // GET api/<imageController>/user/{userId}
        [HttpGet("user/{userId}")]
        public async Task<IActionResult> GetProfilePicture(string userId)
        {
            var image = this.service.GetProfileImageForUserIdAsync(userId);

            if (image != null)
            {
                return this.Ok(image);
            }

            return this.NoContent();
        }

        [HttpGet("documents/{userId}")]
        public async Task<IActionResult> GetDocumentsPictures(string userId)
        {
            var image = this.service.GetDocumentsImages(userId);

            if (image != null)
            {
                return this.Ok(image.Result);
            }

            return this.BadRequest(ImageErrs.LoadFaild);
        }

        [HttpGet("cars/{userId}")]
        public async Task<IActionResult> GetCarPictures(string userId)
        {
            var image = this.service.GetCarImages(userId);

            if (image != null)
            {
                return this.Ok(image.Result);
            }

            return this.BadRequest(ImageErrs.LoadFaild);
        }

        // POST api/<ImageController>
        [HttpPost("{folderName}/{userId}/{type}"), DisableRequestSizeLimit]
        public async Task<IActionResult> Post(string folderName, string userId, string type)
        {
            if (this.ModelState.IsValid)
            {
                try
                {
                    var files = Request.Form.Files;
                    var result = await this.service.CreateImageAsync(files, userId, folderName, type);

                    if (result)
                    {
                        await this.hub.Clients.All.BroadcastMessage();
                        return this.Ok(result);
                    }

                }
                catch (Exception e)
                {

                    return this.BadRequest(e.Message);
                }
            }

            return this.BadRequest(ImageErrs.Createfaild);
        }

        // DELETE api/<imageController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var image = await this.service.DeleteImageAsync(id);

            if (image)
            {
                await this.hub.Clients.All.BroadcastMessage();
                return this.Ok(image);
            }

            return this.BadRequest($"Failed to delete image.");
        }
    }
}
