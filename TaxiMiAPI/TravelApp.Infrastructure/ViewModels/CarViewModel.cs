using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using TravelApp.Mappings;
using TravelApp.Models;

namespace TravelApp.Infrastructure.ViewModels
{
    public class CarViewModel : IMapFrom<Car>
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

        public string DriverId { get; set; }

        public bool Confirmation { get; set; }

        public int TypeId { get; set; }

    }
}
