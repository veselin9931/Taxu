using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Common.Repositories;
using TravelApp.Infrastructure.ViewModels;
using TravelApp.Models;
using TravelApp.Services.DriverService;

namespace TravelApp.Services.RatingService
{
    public class RatingService : IRatinService
    {
        private readonly IRepository<Rating> repository;
        private readonly IDriverService driverService;

        public RatingService(IRepository<Rating> repository, IDriverService driverService)
        {
            this.repository = repository;
            this.driverService = driverService;
        }

        public bool AddRating(string driverId, int value)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<DriverViewModel>> Get5TopRated()
        {
            throw new NotImplementedException();
        }

        public Task<double> GetRatingByDriverId(string driverId)
        {
            throw new NotImplementedException();
        }
    }
}
