using Microsoft.AspNetCore.Identity;
using System;
using TravelApp.Common.BaseModels;

namespace TravelApp.Data
{
    public class ApplicationUser : IdentityUser, IDeletableEntity
    {
        public string PasswordSalt { get; set; }
        public bool IsDeleted { get; set; }

        public DateTime? DeletedOn { get; set; }
    }
}
