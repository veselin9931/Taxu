using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TaxiMi.Infrastructure.InputModels.DriverInput;
using TaxiMi.Infrastructure.ViewModels;
using TaxiMi.Models;

namespace TaxiMi.Services.DriverService
{
    public interface IDriverService
    {
        Task<DriverViewModel> CreateDriver(DriverInputModel driverInputModel);

        Task<bool> AddCarToDriver(string driverId, string carId);

        Task<bool> ConfirmDriver(string driverId);

        IEnumerable<DriverViewModel> GetAllDrivers();

        public Task<bool> LowerCommission(string id);

        public Task<bool> RemoveDriving(string id);

        public Task<bool> ChangeLocation(string id, string lat, string lng);


        public Driver GetById(string id);

        public Driver GetByReferral(string referral);

        public bool UpdateDriverRating(Driver driver);

        DriverViewModel GetDriver(string id);

        public Task<bool> VoteUp(string driverId);

        public Task<bool> VoteDown(string driverId);

    }
}
