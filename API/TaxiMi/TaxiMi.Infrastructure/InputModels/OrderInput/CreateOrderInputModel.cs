using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using TaxiMi.Mappings;
using TaxiMi.Models;

namespace TaxiMi.Infrastructure.InputModels.OrderInput
{
    public class CreateOrderInputModel : IMapFrom<Order>
    {
        public string Id { get; set; }

        public ApplicationUser ApplicationUser { get; set; }
        public string ApplicationUserId { get; set; }

        [Required]
        public string Location { get; set; }

        public string LocationLat { get; set; }

        public string LocationLong { get; set; }

        public bool WithStroller { get; set; }

        public string CarType { get; set; }

        public bool WithPets { get; set; }

        public bool Special { get; set; }

        [Required]
        public string Destination { get; set; }

        public string DestinationLat { get; set; }

        public string DestinationLong { get; set; }


        public decimal IncreasePrice { get; set; }

        public string ETA { get; set; }

        public decimal TripDistance { get; set; }

        public decimal UserDistance { get; set; }

        [Required]
        [Range(typeof(decimal), "0", "999999999999999999")]
        public decimal TotalPrice { get; set; }
    }
}
