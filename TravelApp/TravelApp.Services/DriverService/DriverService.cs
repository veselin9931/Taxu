using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TravelApp.Common.Repositories;
using TravelApp.Infrastructure.ViewModels;
using TravelApp.Models;

namespace TravelApp.Services.DriverService
{
    public class DriverService : IDriverService
    {
        private readonly IRepository<Driver> repository;

        public DriverService(IRepository<Driver> repository)
        {
            this.repository = repository;
        }

        public IEnumerable<DriverViewModel> GetAllDrivers()
        {
            var drivers = this.repository.All().Select(a =>
            new DriverViewModel()
            { 
                Comission = a.Comission, 
                DriverLicanse = a.DriverLicanse, IDCardNumber = a.IDCardNumber,
                DocumentConfirmatiom = a.DocumentConfirmatiom,
                Id = a.Id
            });

            return drivers;
        }
    }
}
