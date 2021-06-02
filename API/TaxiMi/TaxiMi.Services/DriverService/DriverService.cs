using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaxiMi.Common.Repositories;
using TaxiMi.Infrastructure.InputModels.DriverInput;
using TaxiMi.Infrastructure.ViewModels;
using TaxiMi.Mappings;
using TaxiMi.Models;
using TaxiMi.Services.Account;
using TaxiMi.Services.CarService;
using TaxiMi.Services.WalletService;

namespace TaxiMi.Services.DriverService
{
    public class DriverService : IDriverService
    {
        private readonly IRepository<Driver> repository;
        private readonly IWalletService walletService;
        private readonly ICarService carService;
        private readonly IAccountService accountService;

        public DriverService(IRepository<Driver> repository, IWalletService walletService, ICarService carService, IAccountService accountService)
        {
            this.repository = repository;
            this.walletService = walletService;
            this.carService = carService;
            this.accountService = accountService;
        }

        public async Task<bool> AddCarToDriver(string driverId, string carId)
        {
            var driver = this.repository.All().FirstOrDefault(x => x.Id == driverId);

            var car = this.carService.Get(carId);

            if (driver == null || car == null)
            {
                return false;
            }

            driver.Cars.Add(car);

            this.repository.Update(driver);

            var result = await this.repository.SaveChangesAsync();

            return result > 0;
        }

        public async Task<bool> ChangeLocation(string id, string lat, string lng)
        {
            var driver = this.repository.All().FirstOrDefault(x => x.Id == id);

            if (driver != null)
            {
                driver.CurrentLocationLat = lat;
                driver.CurrentLocationLong = lng;

                this.repository.Update(driver);
                await this.repository.SaveChangesAsync();
                
                return true;
            }

            return false;
        }

        public async Task<bool> ConfirmDriver(string driverId)
        {
            var driver = await this.repository.All().FirstOrDefaultAsync(a => a.Id == driverId);

            driver.DocumentConfirmation = true;

            this.repository.Update(driver);

            var result = await this.repository.SaveChangesAsync();

            return result > 0;
        }

        public async Task<DriverViewModel> CreateDriver(DriverInputModel driverInputModel)
        {
            var walletId =  await this.walletService.CreateWallet(driverInputModel.ApplicationUserId);

            var driver = new Driver()
            {
                ApplicationUserId = driverInputModel.ApplicationUserId,
                Comission = 20,
                DocumentConfirmation = false,
                CurrentLocation = driverInputModel.CurrentLocation,
                Referal = Guid.NewGuid().ToString(),
                ReferalUsedTimes = 0,
                WalletId = walletId,
                CreatedOn = DateTime.UtcNow
            };

            //TODO: rEF

            this.repository.Add(driver);

            var result =  await this.repository.SaveChangesAsync();

            return result > 0 ? new DriverViewModel() { Comission = driver.Comission, DocumentConfirmatiom = driver.DocumentConfirmation, Id = driver.Id } : null; 
        }

        public IEnumerable<DriverViewModel> GetAllDrivers()
        {
            var drivers = this.repository.All().Where(d => d.DocumentConfirmation != true).Select(a =>
            new DriverViewModel()
            { 
                Comission = a.Comission,
                DocumentConfirmatiom = a.DocumentConfirmation,
                Id = a.Id
            });

            return drivers;
        }

        public Driver GetById(string id)
        => this.repository.All().FirstOrDefault(x => x.Id == id);

        public Driver GetByReferral(string referral)
        => this.repository.All()?.FirstOrDefault(x => x.Referal == referral);

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

        public async Task<bool> LowerCommission(string id)
        {
            var driver = this.GetById(id);

            if(driver!= null)
            {
                if (driver.ReferalUsedTimes == 5)
                {
                    return false;
                }

                driver.ReferalUsedTimes += 1;
                driver.Comission -= 2;

                this.repository.Update(driver);
                await this.repository.SaveChangesAsync();
                return true;
            }

            return false;
        }

        public async Task<bool> RemoveDriving(string id)
        {
            var driver = this.GetById(id);

            var r = await accountService.UpdateUserAsync(driver.ApplicationUserId, false);

            return r;
        }

        public bool UpdateDriverRating(Driver driver)
        {
            this.repository.Update(driver);

            var r = this.repository.SaveChangesAsync();

            return r.Result > 0;
        }

        public async Task<bool> VoteDown(string driverId)
        {
            var driver = await this.repository.All().FirstOrDefaultAsync(x => x.Id == driverId);

            if (driver != null && driver.Rating > 0)
            {
                if(driver.Rating >= 1)
                {
                    driver.Rating -= 1;
                    this.repository.Update(driver);
                    await this.repository.SaveChangesAsync();
                    return true;
                }
                
            }

            return false;
        }

        public async Task<bool> VoteUp(string driverId)
        {
            var driver = await this.repository.All().FirstOrDefaultAsync(x => x.Id == driverId);

            if (driver != null)
            {
                if(driver.Rating <= 9.50)
                {
                    driver.Rating += 0.50;
                    this.repository.Update(driver);
                    await this.repository.SaveChangesAsync();
                    return true;
                }
            }

            return false;
        }
    }
}
