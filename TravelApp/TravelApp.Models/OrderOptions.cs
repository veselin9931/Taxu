using System;
using System.Collections.Generic;
using System.Text;
using TravelApp.Common.BaseModels;

namespace TravelApp.Models
{
    public class OrderOptions : BaseModel<string>
    {
        public OrderOptions()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        public string Name { get; set; }

        public decimal IncreaseAmmoun { get; set; }
    }
}
