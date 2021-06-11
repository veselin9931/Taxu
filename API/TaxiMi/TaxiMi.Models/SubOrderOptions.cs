using System;
using System.Collections.Generic;
using System.Text;
using TaxiMi.Common.BaseModels;

namespace TaxiMi.Models
{
    public class SubOrderOptions : BaseDeletableModel<int>
    {
        public string  Location { get; set; }

        public string Destination { get; set; }

        public decimal Price { get; set; }
    }
}
