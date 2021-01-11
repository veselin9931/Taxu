using TravelApp.Common.BaseModels;

namespace TravelApp.Models
{
    public class Trip : BaseDeletableModel<string>, IAuditInfo
    {
        public string CurrentLocation { get; set; }

        public string Location { get; set; }

        public string Destination { get; set; }

        public string CarId { get; set; }

        public Car Car { get; set; }
    }
}
