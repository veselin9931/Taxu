using Microsoft.AspNetCore.Identity;
using System;
using TravelApp.Common.BaseModels;
using TravelApp.Models;

namespace TravelApp.Data
{
    public class ApplicationUser : IdentityUser, IDeletableEntity
    {
        public string PasswordSalt { get; set; }

        public bool IsDeleted { get; set; }

        public DateTime? DeletedOn { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Phone { get; set; }

        public string CurrentLcatiion { get; set; }

        public string LastLocation { get; set; }

        public Driver Driver { get; set; }

        public string DriverId { get; set; }
    }
}
