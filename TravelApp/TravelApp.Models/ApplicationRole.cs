// ReSharper disable VirtualMemberCallInConstructor
using global::TravelApp.Common.BaseModels;
using System;

namespace TravelApp.Models
{
    namespace TravelApp.Models
    {
        public class ApplicationRole : BaseDeletableModel<string>
        {
            public ApplicationRole()
            {
                this.Id = Guid.NewGuid().ToString();
            }

            public string RoleName { get; set; }

            public DateTime? DeletedOn { get; set; }
        }
    }
}
