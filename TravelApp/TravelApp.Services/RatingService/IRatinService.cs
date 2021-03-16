using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Infrastructure.ViewModels;

namespace TravelApp.Services.RatingService
{
    public interface IRatinService
    {
        public Task<bool> AddRating(string driverId, int value);

        public double GetRatingByDriverId(string driverId);

        public Task<IEnumerable<DriverViewModel>> Get5TopRated();

    }
}
