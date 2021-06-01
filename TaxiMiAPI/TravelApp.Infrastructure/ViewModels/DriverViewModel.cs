using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using TravelApp.Mappings;
using TravelApp.Models;

namespace TravelApp.Infrastructure.ViewModels
{
    public class DriverViewModel : IMapFrom<Driver>
    {
        [Required]
        public string Id { get; set; }

        [Required]
        public string DriverLicanse { get; set; }

        [Required]
        public string IDCardNumber { get; set; }
        
        
        [Required]
        public bool DocumentConfirmatiom { get; set; }

        [Required]
        public double Comission { get; set; }

    }
}
