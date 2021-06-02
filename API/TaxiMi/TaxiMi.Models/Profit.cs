using System;
using System.Collections.Generic;
using System.Text;
using TaxiMi.Common.BaseModels;

namespace TaxiMi.Models
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
