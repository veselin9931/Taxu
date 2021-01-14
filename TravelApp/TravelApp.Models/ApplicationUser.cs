
using Abp.Authorization.Users;
using IdentityServer4.EntityFramework.Entities;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNetCore.Identity;
using Microsoft.VisualStudio.Services.UserAccountMapping;
using System;
using System.ComponentModel.DataAnnotations;
using TravelApp.Common.BaseModels;
using TravelApp.Models;

namespace TravelApp.Models
{
    public class ApplicationUser : IdentityUser<string>, IDeletableEntity
    {

        public class UserRole : Microsoft.AspNet.Identity.EntityFramework.IdentityUserRole<string> { }
        public class UserClaim : Microsoft.AspNet.Identity.EntityFramework.IdentityUserClaim<string> { }
        public class UserLogin : Microsoft.AspNet.Identity.EntityFramework.IdentityUserLogin<string> { }

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
        
    }
}
