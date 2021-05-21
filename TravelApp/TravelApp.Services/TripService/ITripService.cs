﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Infrastructure.InputModels.TripInput;
using TravelApp.Models;

namespace TravelApp.Services.TripService
{
    public interface ITripService
    {
        public Task<bool> CreateTrip(CreateTripInputModel model);

        public Task<IList<Trip>> GetAllCompletedTripsAsync();


        public Trip GetTripByUserId(string applicationUserId);

        public Task<bool> FinishTripAsync(string tripId);

        public Task<bool> CancelTripAsync(string tripId);

        public Task<bool> NavigateToUserAsync(string tripId);


        public Task<bool> StartTripAsync(string tripId);


        public Trip GetTripById(string id);
    }
}
