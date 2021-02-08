using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Common.Repositories;
using TravelApp.Infrastructure.InputModels.ImageInput;
using TravelApp.Models;

namespace TravelApp.Services.CloudinaryService
{
    public class CloudinaryService : ICloudinaryService
    {
        private readonly IDeletableEntityRepository<Image> repository;

        public CloudinaryService(IDeletableEntityRepository<Image> repository)
        {
            this.repository = repository;
        }

        public async Task<int> CreateImageAsync(CreateImageInputModel inputModel)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteImageAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<TViewModel> GetImagelByIdAsync<TViewModel>(int id)
        {
            throw new NotImplementedException();
        }
    }
}
