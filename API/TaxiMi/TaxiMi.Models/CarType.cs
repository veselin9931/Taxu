using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using TaxiMi.Common.BaseModels;

namespace TaxiMi.Models
{
    public class CarType : BaseDeletableModel<string>
    {
        public CarType()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        [Required]
        public string Name { get; set; }
         
        [Required]
        public decimal PriceCoeficentPerKilometer { get; set; }
    }
}
