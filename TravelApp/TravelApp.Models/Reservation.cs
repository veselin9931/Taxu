using System;
using System.Collections.Generic;
using System.Text;
using TravelApp.Common.BaseModels;

namespace TravelApp.Models
{
    public class Reservation : BaseDeletableModel<string>, IAuditInfo
    {
        public Reservation()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        public ApplicationUser User { get; set; }
        public string UserId { get; set; }

        public Driver Driver { get; set; }
        public string DriverId { get; set; }
        
        public Trip Trip { get; set; }
        public string TripId { get; set; }
    }
}
