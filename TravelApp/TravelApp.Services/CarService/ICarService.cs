using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Infrastructure.InputModels.CarInput;
using TravelApp.Infrastructure.ViewModels;
using TravelApp.Models;

namespace TravelApp.Services.CarService
{
    public interface ICarService
    {
        Task<CarViewModel> CreateCar(CreateCarInputModel car);

        public Task<IList<Car>> GetAllCarsAsync();

        public Task<IList<Car>> GetAllCarsAsyncForDriver(string driverId);

        public Task<bool> ActivateCar(string id, string driverId);
        CarViewModel GetCar(string carId);

        Car Get(string carId);

        Task<bool> DeleteCar(string carId);

    }
}
