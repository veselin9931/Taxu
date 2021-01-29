using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Infrastructure.InputModels.DriverInput;
using TravelApp.Infrastructure.ViewModels;

namespace TravelApp.Services.DriverService
{
    public interface IDriverService
    {
        Task<DriverViewModel> CreateDriver(DriverInputModel driverInputModel);

        IEnumerable<DriverViewModel> GetAllDrivers();

        DriverViewModel GetDriver(string id);
    }
}
