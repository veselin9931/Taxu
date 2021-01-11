using TravelApp.Common.BaseModels;
using TravelApp.Data

namespace TravelApp.Models
{
    public class Rating : BaseDeletableModel<string>
    {
        public string DriverId { get; set; }

        public Driver Driver { get; set; }

        public double Value { get; set; }
    }
}
