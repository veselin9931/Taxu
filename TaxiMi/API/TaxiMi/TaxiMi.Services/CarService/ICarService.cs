using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TaxiMi.Infrastructure.InputModels.CarInput;
using TaxiMi.Infrastructure.ViewModels;
using TaxiMi.Models;

namespace TaxiMi.Services.CarService
{
    public interface ICarService
    {
        Task<CarViewModel> CreateCar(CreateCarInputModel car);

        public Task<IList<Car>> GetAllCarsAsync();

        public Task<IList<Car>> GetAllCarsForConfirmationAsync(string driverId);

        public Car GetActiveCar(string driverId);

        public Task<IList<Car>> GetAllCarsAsyncForDriver(string driverId);

        public Task<IList<Car>> GetUnconfirmedCarsAsync();

        public Task<bool> VerifyCar(string id);

        public Task<bool> ActivateCar(string id, string driverId);
        CarViewModel GetCar(string carId);

        Car Get(string carId);

        Task<bool> DeleteCar(string carId);

    }
}
