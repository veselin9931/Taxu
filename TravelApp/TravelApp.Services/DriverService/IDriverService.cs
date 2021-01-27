using System;
using System.Collections.Generic;
using System.Text;
using TravelApp.Infrastructure.InputModels.DriverInput;
using TravelApp.Infrastructure.ViewModels;

namespace TravelApp.Services.DriverService
{
    public interface IDriverService
    {
        IEnumerable<DriverViewModel> CreateDriver(DriverInputModel driverInputModel);

        IEnumerable<DriverViewModel> GetAllDrivers();
    }
}
