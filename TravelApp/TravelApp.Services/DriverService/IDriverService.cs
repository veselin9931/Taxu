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

        Task<bool> ConfirmDriver(string driverId);

        IEnumerable<DriverViewModel> GetAllDrivers();

        public Task<bool> LowerCommission(string id);

        public Task<bool> ChangeLocation(string id, decimal lat, decimal lng);


        public Driver GetById(string id);

        public Driver GetByReferral(string referral);

        public bool UpdateDriverRating(Driver driver);

        DriverViewModel GetDriver(string id);

        public Task<bool> VoteUp(string driverId);

        public Task<bool> VoteDown(string driverId);

    }
}
