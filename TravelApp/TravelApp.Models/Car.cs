using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using TravelApp.Common.BaseModels;

namespace TravelApp.Models
{
    public class Car : BaseDeletableModel<string>, IAuditInfo
    {
        [Required]
        public string Model { get; set; }

        [Required]
        public string TehnicalReview { get; set; }

        [Required]
        public string RegisterNumber { get; set; }

        [Required]
        public string Color { get; set; }

        [Required]
        public int Capacity { get; set; }

        [Required]
        public bool Confirmation { get; set; }

        [Required]
        public int TypeId { get; set; }

        public CarType Type { get; set; }
    }
}
