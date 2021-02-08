using AutoMapper;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Common.Repositories;
using TravelApp.Infrastructure.InputModels.ImageInput;
using TravelApp.Models;

namespace TravelApp.Services.ImageService
{
    public class ImageService : IImageService
    {
        private readonly IDeletableEntityRepository<Image> repository;
        private readonly Cloudinary cloudinaryUtility;

        public ImageService(IDeletableEntityRepository<Image> repository, Cloudinary cloudinaryUtility)
        {
            this.repository = repository;
            this.cloudinaryUtility = cloudinaryUtility;
        }

        public async Task<string> CreateImageAsync(CreateImageInputModel inputModel)
        {
            if (inputModel == null)
            {
                throw new ArgumentNullException();
                // TODO: Add errMsg
            }

            var img = new Image()
            {
                userId = inputModel.UserId
            };

            this.repository.Add(img);

            var result = await this.repository.SaveChangesAsync();

            return result > 0 ? img.Id : throw new InvalidOperationException();
        }

        public async Task<bool> DeleteImageAsync(string id)
        {
            var img = await this.repository.GetByIdAsync(id);

            if (img == null)
            {
                throw new ArgumentNullException();
                // TODO: Add errMsg
            }

            img.IsDeleted = true;

            this.repository.Update(img);

            return true;
        }

        public async Task<Image> GetImagelByIdAsync(string id)
        {
            var img = await this.repository.GetByIdAsync(id);

            if (img == null)
            {
                throw new ArgumentNullException();
                // TODO: Add errMsg
            }

            return img;
        }

        public async Task<string> Upload(CreateImageInputModel model, string folder)
        {
            if (model.File.Length > 0)
            {

               var imgId = await this.CreateImageAsync(model);

                using (var ms = new MemoryStream())
                {
                    model.File.CopyTo(ms);
                    var fileBytes = ms.ToArray();
                    string s = Convert.ToBase64String(fileBytes);


                    var uploadParams = new ImageUploadParams()
                    {
                        Folder = folder,
                        File = new FileDescription(model.Title, ms)
                    };
                    var uploadResult = cloudinaryUtility.Upload(uploadParams);

                    return imgId;
                }
            }

            return "";
        }
    }
}
