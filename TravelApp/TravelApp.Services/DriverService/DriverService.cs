using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Common.Repositories;
using TravelApp.Infrastructure.InputModels.DriverInput;
using TravelApp.Infrastructure.ViewModels;
using TravelApp.Mappings;
using TravelApp.Models;
using TravelApp.Services.WalletService;

namespace TravelApp.Services.DriverService
{
    public class DriverService : IDriverService
    {
        private readonly IRepository<Driver> repository;
        private readonly IWalletService walletService;

        public DriverService(IRepository<Driver> repository, IWalletService walletService)
        {
            this.repository = repository;
            this.walletService = walletService;
        }

        public async Task<DriverViewModel> CreateDriver(DriverInputModel driverInputModel)
        {
            var walletId =  await this.walletService.CreateWallet(driverInputModel.ApplicationUserId);

            var driver = new Driver()
            {
                Comission = 20,
                DocumentConfirmation = false,
                DriverLicense = driverInputModel.DriverLicense,
                IDCardNumber = driverInputModel.IDCardNumber,
                CurrentLocation = driverInputModel.CurrentLocation,
                Referal = new Guid().ToString(),
                ReferalUsedTimes = 0,
                WalletId = walletId,
                CreatedOn = DateTime.UtcNow
            };

            //TODO: rEF

            this.repository.Add(driver);

            var result =  await this.repository.SaveChangesAsync();

            return result > 0 ? new DriverViewModel() { Comission = driver.Comission, DocumentConfirmatiom = driver.DocumentConfirmation, Id = driver.Id, DriverLicanse = driver.DriverLicense, IDCardNumber = driver.IDCardNumber } : null; 
        }

        public IEnumerable<DriverViewModel> GetAllDrivers()
        {
            var drivers = this.repository.All().Select(a =>
            new DriverViewModel()
            { 
                Comission = a.Comission, 
                DriverLicanse = a.DriverLicense, IDCardNumber = a.IDCardNumber,
                DocumentConfirmatiom = a.DocumentConfirmation,
                Id = a.Id
            });

            return drivers;
        }

        public DriverViewModel GetDriver(string id)
        {
            var driver =  this.repository.All()
                .Where(d => d.Id == id)
                .To<DriverViewModel>()
                .First();

            if (driver == null)
            {
                return null;
            }

            return driver;
        }
    }
}
