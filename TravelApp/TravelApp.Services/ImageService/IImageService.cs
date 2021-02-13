using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Infrastructure.InputModels.ImageInput;
using TravelApp.Models;

namespace TravelApp.Services.ImageService
{
    public interface IImageService
    {
        public Task<bool> CreateImageAsync(IFormFileCollection inputModel, string userId, string folderName);

        public Task<bool> DeleteImageAsync(string id);

        public Task<Image> GetImagelByIdAsync(string id);

        public Image GetImageForUserIdAsync(string id);


        public Task<string> Upload(IFormFile model, string folderName);
    }
}
