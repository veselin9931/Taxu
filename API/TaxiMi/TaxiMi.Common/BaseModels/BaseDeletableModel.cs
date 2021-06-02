using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiMi.Common.BaseModels
{
    public abstract class BaseDeletableModel<TKey> : BaseModel<TKey>, IDeletableEntity
    {
        public bool IsDeleted { get; set; }

        public DateTime? DeletedOn { get; set; }
    }
}
