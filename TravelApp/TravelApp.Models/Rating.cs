using System;
using System.ComponentModel.DataAnnotations;
using TravelApp.Common.BaseModels;

namespace TravelApp.Models
{
    public class Rating : BaseDeletableModel<string>
    {
        public Rating()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        [Required]
        public string DriverId { get; set; }

        public Driver Driver { get; set; }

        [Required]
        [Range(0, 5)]
        public double Value { get; set; }
    }
}
