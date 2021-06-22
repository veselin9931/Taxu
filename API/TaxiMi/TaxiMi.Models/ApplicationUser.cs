using Microsoft.AspNetCore.Identity;
using System;
using System.ComponentModel.DataAnnotations;
using TaxiMi.Common.BaseModels;

namespace TaxiMi.Models
{
    public class ApplicationUser : IdentityUser, IDeletableEntity
    {

        public string PasswordSalt { get; set; }

        public bool IsDeleted { get; set; }

        public DateTime? DeletedOn { get; set; }

        public string DeviceToken { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        public bool IsDrivingNow { get; set; }

        public bool AlertTriggered { get; set; }

        public bool IsDriver { get; set; }

        [Required]
        [Phone]
        public string Phone { get; set; }

        public string CurrentLocation { get; set; }

        public string ChoosenLanguage { get; set; }

        public Driver Driver { get; set; }

        public string DriverId { get; set; }

        public bool IsAdmin { get; set; }

        public string Token { get; set; }
        
    }
}
