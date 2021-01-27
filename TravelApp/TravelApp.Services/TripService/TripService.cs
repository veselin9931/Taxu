using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Common.Repositories;
using TravelApp.Infrastructure.InputModels.TripInput;
using TravelApp.Models;

namespace TravelApp.Services.TripService
{
    public class TripService : ITripService
    {
        private readonly IDeletableEntityRepository<Trip> tripRepository;

        public TripService(IDeletableEntityRepository<Trip> tripRepository)
        {
            this.tripRepository = tripRepository;
        }

        public async Task<bool> CreateTrip(CreateTripInputModel model)
        {
            if (model.OrderId != null && model.ApplicationUserId != null)
            {
                var trip = new Trip()
                {
                    ApplicationUserId = model.ApplicationUserId,
                    OrderId = model.OrderId,
                    CreatedOn = DateTime.UtcNow,
                    IsCompleted = false
                };

                this.tripRepository.Add(trip);

                await this.tripRepository.SaveChangesAsync();

                return true;
            }

            return false;
        }

        public async Task<bool> FinishTripAsync(string tripId)
        {
            var trip = this.GetTripById(tripId);

            if (trip != null)
            {
                trip.IsCompleted = true;

                this.tripRepository.Update(trip);

                await this.tripRepository.SaveChangesAsync();

                return true;
            }

            throw new InvalidOperationException("Completing a trip failed!");
        }

        public Trip GetTripById(string id)
       => this.tripRepository.All()?.FirstOrDefault(x => x.Id == id);

        public Trip GetTripByUserId(string applicationUserId)
         => this.tripRepository.All()?.OrderByDescending(x => x.CreatedOn).FirstOrDefault(x => x.ApplicationUserId == applicationUserId && x.IsCompleted == false);
    }
}
