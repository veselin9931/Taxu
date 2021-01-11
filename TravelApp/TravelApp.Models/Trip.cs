using System.ComponentModel.DataAnnotations;
using TravelApp.Common.BaseModels;

namespace TravelApp.Models
{
    public class Trip : BaseDeletableModel<string>, IAuditInfo
    {
        [Required]
        public string CurrentLocation { get; set; }

        [Required]
        public string Location { get; set; }

        [Required]
        public string Destination { get; set; }

        [Required]
        public string CarId { get; set; }

        public Car Car { get; set; }
    }
}
