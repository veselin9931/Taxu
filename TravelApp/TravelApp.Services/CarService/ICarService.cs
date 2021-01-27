using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Infrastructure.InputModels.CarInput;
using TravelApp.Infrastructure.ViewModels;

namespace TravelApp.Services.CarService
{
    public interface ICarService
    {
        Task<CarViewModel> CreateDriver(CreateCarInputModel car);

        CarViewModel GetCar(string carId);
    }
}
