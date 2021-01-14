// ReSharper disable VirtualMemberCallInConstructor
namespace TravelApp.Models
{
using System;
using System.Collections.Generic;
using System.Text;
using TravelApp.Common.BaseModels;

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
