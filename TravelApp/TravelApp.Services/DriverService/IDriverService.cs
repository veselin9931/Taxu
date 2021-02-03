using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Infrastructure.InputModels.DriverInput;
using TravelApp.Infrastructure.ViewModels;
using TravelApp.Models;

namespace TravelApp.Services.DriverService
{
    public interface IDriverService
    {
        Task<DriverViewModel> CreateDriver(DriverInputModel driverInputModel);

        Task<bool> AddCarToDriver(string driverId, string carId);

        IEnumerable<DriverViewModel> GetAllDrivers();

        public Driver GetById(string id);

        DriverViewModel GetDriver(string id);
    }
}
