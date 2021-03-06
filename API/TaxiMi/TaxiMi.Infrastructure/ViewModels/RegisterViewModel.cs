﻿using System.ComponentModel.DataAnnotations;

namespace TaxiMi.Infrastructure.ViewModels
{
    public class RegisterViewModel
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        [Required]
        [Phone]
        public string Phone { get; set; }

        [Required]
        [EmailAddress]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }

        public bool IsDrivingNow { get; set; }

    }
} 
