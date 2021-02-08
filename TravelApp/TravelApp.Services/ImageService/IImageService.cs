using CloudinaryDotNet.Actions;
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
        public Task<string> CreateImageAsync(CreateImageInputModel inputModel);

        public Task<bool> DeleteImageAsync(string id);

        public Task<Image> GetImagelByIdAsync(string id);

        public Task<string> Upload(CreateImageInputModel model, string folder);
    }
}
