using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiMi.Common.BaseModels
{
    public interface IAuditInfo
    {
        DateTime CreatedOn { get; set; }

        DateTime? ModifiedOn { get; set; }
    }
}
