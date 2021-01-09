using System;
using System.Collections.Generic;
using System.Text;

namespace TravelApp.Common.BaseModels
{
    public interface IDeletableEntity
    {
        bool IsDeleted { get; set; }

        DateTime? DeletedOn { get; set; }
    }
}
