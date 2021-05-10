using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using TravelApp.Common.BaseModels;

namespace TravelApp.Models
{
    public class Order : BaseDeletableModel<string>
    {
        public Order()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        public ApplicationUser ApplicationUser { get; set; }

        public string ApplicationUserId { get; set; }

        [Required]
        public string Location { get; set; }

        public string LocationLat { get; set; }

        public string LocationLong { get; set; }
        
        [Required]
        public string Destination { get; set; }

        public string DestinationLat { get; set; }

        public string DestinationLong { get; set; } 

        public decimal IncreasePrice { get; set; }

        public decimal TripDistance { get; set; }

        public decimal UserDistance { get; set; }

        public string CarType { get; set; }

        [Required]
        [Range(typeof(decimal), "0", "999999999999999999")]
        public decimal TotalPrice { get; set; }

        public string ETA { get; set; }

        public string Status { get; set; }

        public bool IsDriverArrived { get; set; }

        public bool WithStroller { get; set; }

        public bool WithPets { get; set; }

        public bool Special { get; set; }

        public string AcceptedBy { get; set; }
    }
}
