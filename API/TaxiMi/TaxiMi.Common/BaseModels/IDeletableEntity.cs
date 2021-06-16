using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiMi.Common.BaseModels
{
    public interface IDeletableEntity
    {
        bool IsDeleted { get; set; }

        DateTime? DeletedOn { get; set; }
    }
}
