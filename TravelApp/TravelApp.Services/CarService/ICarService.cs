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

        CarViewModel GetCar(string carId);

        Car Get(string carId);

        IEnumerable<CarViewModel> GetCars();

        Task<bool> DeleteCar(string carId);

    }
}
