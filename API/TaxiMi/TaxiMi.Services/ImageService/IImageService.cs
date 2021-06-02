using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TaxiMi.Infrastructure.InputModels.ImageInput;
using TaxiMi.Models;

namespace TaxiMi.Services.ImageService
{
    public interface IImageService
    {
        public Task<bool> CreateImageAsync(IFormFileCollection inputModel, string userId, string folderName, string type);

        public Task<bool> DeleteImageAsync(string id);

        public Task<IList<Image>> GetDocumentsImages(string userId);


        public Task<IList<Image>> GetCarImages(string userId);


        public Task<Image> GetImagelByIdAsync(string id);

        public Image GetProfileImageForUserIdAsync(string id);


        public Task<string> Upload(IFormFile model, string folderName);
    }
}
