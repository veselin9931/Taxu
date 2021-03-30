using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using TravelApp.Common.BaseModels;

namespace TravelApp.Models
{
    public class Car : BaseDeletableModel<string>, IAuditInfo
    {
        public Car()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        [Required]
        public string Model { get; set; }

        [Required]
        public string RegistrationNumber { get; set; }

        [Required]
        public string Color { get; set; }

        [Required]
        public int Capacity { get; set; }

        [Required]
        public bool Confirmation { get; set; }

        [Required]
        public bool IsActive { get; set; }

        public string DriverId { get; set; }

        public Driver Driver { get; set; }

        public int TypeId { get; set; }
    }
}
