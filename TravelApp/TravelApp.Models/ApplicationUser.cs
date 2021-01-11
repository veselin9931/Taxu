using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.ComponentModel.DataAnnotations;
using TravelApp.Common.BaseModels;
using TravelApp.Models;

namespace TravelApp.Data
{
    public class ApplicationUser : IdentityUser, IDeletableEntity
    {

        public string PasswordSalt { get; set; }

        public bool IsDeleted { get; set; }

        public DateTime? DeletedOn { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        [Phone]
        public string Phone { get; set; }

        [Required]
        public string CurrentLcatiion { get; set; }

        public string LastLocation { get; set; }

        public Driver Driver { get; set; }

        public string DriverId { get; set; }
    }
}
