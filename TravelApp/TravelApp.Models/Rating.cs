using System.ComponentModel.DataAnnotations;
using TravelApp.Common.BaseModels;
using TravelApp.Data;

namespace TravelApp.Models
{
    public class Rating : BaseDeletableModel<string>
    {
        [Required]
        public string DriverId { get; set; }

        public Driver Driver { get; set; }

        [Required]
        [Range(0, 5)]
        public double Value { get; set; }
    }
}
