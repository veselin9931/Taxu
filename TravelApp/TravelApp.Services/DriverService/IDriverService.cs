using System;
using System.Collections.Generic;
using System.Text;
using TravelApp.Infrastructure.ViewModels;

namespace TravelApp.Services.DriverService
{
    public interface IDriverService
    {
        IEnumerable<DriverViewModel> GetAllDrivers();
    }
}
