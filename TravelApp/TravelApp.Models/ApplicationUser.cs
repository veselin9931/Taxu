using Microsoft.AspNet.Identity.EntityFramework;
using TravelApp.Common.BaseModels;

namespace TravelApp.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Phone { get; set; }

        public string CurrentLcatiion { get; set; }

        public string LastLcation { get; set; }

        public Driiver Driver { get; set; }

        public string DriverId { get; set; }

    }
}
