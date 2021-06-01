using System;
using System.Collections.Generic;
using System.Text;
using TravelApp.Common.BaseModels;

namespace TravelApp.Models
{
    public class Profit : BaseDeletableModel<string>, IAuditInfo
    {
        public Profit()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        public decimal Total { get; set; }

    }
}
