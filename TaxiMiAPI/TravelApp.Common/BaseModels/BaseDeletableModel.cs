using System;
using System.Collections.Generic;
using System.Text;

namespace TravelApp.Common.BaseModels
{
    public abstract class BaseDeletableModel<TKey> : BaseModel<TKey>, IDeletableEntity
    {
        public bool IsDeleted { get; set; }

        public DateTime? DeletedOn { get; set; }
    }
}
