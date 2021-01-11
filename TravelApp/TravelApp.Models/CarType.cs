using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using TravelApp.Common.BaseModels;

namespace TravelApp.Models
{
    public class CarType : BaseDeletableModel<int>
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public decimal PriceCoeficentPerKilometer { get; set; }
    }
}
