using System;
using System.Collections.Generic;
using System.Linq;
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

        public async Task<bool> AddRating(string driverId, int value)
        {
            var driver = this.driverService.GetById(driverId);

            var rating = new Rating()         
            { 
              DriverId = driverId, 
              Value = value
            };

            this.repository.Add(rating);

            var r = await this.repository.SaveChangesAsync();

            if (r > 0)
            {
                 driver.Ratings.Add(rating);
                var r2 =this.driverService.UpdateDriverRating(driver);

                if (r2)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }

            return false;
     
        }

        public Task<IEnumerable<DriverViewModel>> Get5TopRated()
        {
            throw new NotImplementedException();
        }

        public double GetRatingByDriverId(string driverId)
        {
           var rating = this.repository.All()
                .Where(a => a.DriverId == driverId)
                .Select(r => r.Value).Average();

            return rating;
        }
    }
}
