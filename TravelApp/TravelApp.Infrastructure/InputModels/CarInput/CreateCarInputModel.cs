using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace TravelApp.Infrastructure.InputModels.CarInput
{
    public class CreateCarInputModel 
    {
        [Required]
        public string Model { get; set; }

        [Required]
        public string RegistrationNumber { get; set; }

        [Required]
        public string Color { get; set; }

        [Required]
        public int Capacity { get; set; }

        public string DriverId { get; set; }


        public int Type { get; set; }
    }
}
