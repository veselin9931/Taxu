using System;
using System.Collections.Generic;
using System.Text;
using TaxiMi.Mappings;
using TaxiMi.Models;

namespace TaxiMi.Infrastructure.InputModels.TripInput
{
    public class CreateTripInputModel : IMapFrom<Trip>
    {
        public string TripId { get; set; }

        public string CurrentLocation { get; set; }

        public Order Order { get; set; }

        public string OrderId { get; set; }

        public ApplicationUser ApplicationUser { get; set; }

        public string ApplicationUserId { get; set; }
    }
}
