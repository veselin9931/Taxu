using System;
using System.Collections.Generic;
using System.Text;

namespace TravelApp.Common.BaseModels
{
    public interface IAuditInfo
    {
        DateTime CreatedOn { get; set; }

        DateTime? ModifiedOn { get; set; }
    }
}
