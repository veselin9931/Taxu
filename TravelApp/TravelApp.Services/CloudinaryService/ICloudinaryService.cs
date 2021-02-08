using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Infrastructure.InputModels.ImageInput;

namespace TravelApp.Services.CloudinaryService
{
    public interface ICloudinaryService
    {
        public Task<int> CreateImageAsync(CreateImageInputModel inputModel);

        public Task<bool> DeleteImageAsync(int id);

        public Task<TViewModel> GetImagelByIdAsync<TViewModel>(int id);
    }
}
