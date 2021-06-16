using System;
using System.Collections.Generic;
using System.Text;
using TaxiMi.Common.BaseModels;

namespace TaxiMi.Models
{
    public class ReportType : BaseModel<int>
    {
        public ReportType()
        {
            
            this.CreatedOn = DateTime.UtcNow;
        }

        public string Name { get; set; }
    }
}
