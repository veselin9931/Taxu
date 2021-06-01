using AutoMapper;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Common.ErrMsg;
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
        
        public async Task<bool> CreateImageAsync(IFormFileCollection inputModel, string userId, string folderName, string type)
        {
            if (inputModel == null)
            {
                throw new ArgumentNullException(ImageErrs.InvalidModel);
               
            }

            foreach (var file in inputModel)
            {
                var fileUrl = await this.Upload(file, folderName);

                var img = new Image()
                {
                    CreatedOn = DateTime.UtcNow,
                    userId = userId,
                    Path = fileUrl,
                    Type = type,

                };
                this.repository.Add(img);

            }

            await this.repository.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteImageAsync(string id)
        {
            var img = await this.repository.GetByIdAsync(id);

            if (img == null)
            {
                throw new ArgumentNullException(ImageErrs.InvalidId);

            }

            img.IsDeleted = true;

            this.repository.Update(img);

            return true;
        }

        public Image GetProfileImageForUserIdAsync(string id)
        => this.repository.All().OrderByDescending(x => x.CreatedOn).FirstOrDefault(x => x.userId == id && x.Type == "profile");


        public async Task<Image> GetImagelByIdAsync(string id)
        {
            var img = await this.repository.GetByIdAsync(id);

            if (img == null)
            {
                throw new ArgumentNullException(ImageErrs.InvalidId);
            }

            return img;
        }

        public async Task<string> Upload(IFormFile picture, string folderName)
        {
            byte[] destinationData;

            using (var ms = new MemoryStream())
            {
                await picture.CopyToAsync(ms);
                destinationData = ms.ToArray();
            }

            UploadResult uploadResult = null;

            using (var ms = new MemoryStream(destinationData))
            {
                ImageUploadParams uploadParams = new ImageUploadParams
                {
                    Folder = folderName,
                    File = new FileDescription(picture.FileName, ms),
                };

                uploadResult = this.cloudinaryUtility.Upload(uploadParams);
            }

            return uploadResult?.SecureUri.AbsoluteUri;
        }

        public async Task<IList<Image>> GetDocumentsImages(string userId)
         => await this.repository.All()
            .Where(x => x.userId == userId && x.Type == "personalImg")
            .OrderByDescending(x => x.CreatedOn)
            .ToListAsync();

        public async Task<IList<Image>> GetCarImages(string userId)
         => await this.repository.All()
            .Where(x => x.userId == userId && x.Type == "carImg")
            .OrderByDescending(x => x.CreatedOn)
            .ToListAsync();
    }
}
