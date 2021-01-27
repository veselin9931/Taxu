using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace TravelApp.Infrastructure.InputModels.DriverInput
{
    public class DriverInputModel
    {
        [Required]
        public string DriverLicanse { get; set; }

        [Required]
        public string IDCardNumber { get; set; }

        public string CurrentLocation { get; set; }
    }
}
