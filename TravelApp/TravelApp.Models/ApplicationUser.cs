﻿
using Microsoft.AspNetCore.Identity;
using System;
using System.ComponentModel.DataAnnotations;
using TravelApp.Common.BaseModels;
using TravelApp.Models;

namespace TravelApp.Models
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
        public string CurrentLocation { get; set; }

        public string LastLocation { get; set; }

        public Driver Driver { get; set; }

        public string DriverId { get; set; }
        
        public ApplicationRole ApplicationRole { get; set; }

        public string ApplicationRoleName { get; set; }

    }
}
