using System;
using System.Collections.Generic;
using System.Text;
using TravelApp.Common.BaseModels;

namespace TravelApp.Models
{
    public class CarType : BaseDeletableModel<int>
    {
        public string Name { get; set; }

        public decimal PriceCoeficentPerKilometer { get; set; }
    }
}
