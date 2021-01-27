using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace TravelApp.Infrastructure.ViewModels
{
    public class CarViewModel
    {
        public string Id { get; set; }

        [Required]
        public string Model { get; set; }

        [Required]
        public string RegistrationNumber { get; set; }

        [Required]
        public string Color { get; set; }

        [Required]
        public int Capacity { get; set; }
    }
}
