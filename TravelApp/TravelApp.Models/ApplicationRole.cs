﻿// ReSharper disable VirtualMemberCallInConstructor
using global::TravelApp.Common.BaseModels;
using Microsoft.AspNetCore.Identity;
using System;

namespace TravelApp.Models
{
    namespace TravelApp.Models
    {
        public class ApplicationRole : IdentityRole, IAuditInfo, IDeletableEntity
        {
            public ApplicationRole()
              : this(null)
            {
            }

            public ApplicationRole(string name)
                : base(name)
            {
                this.Id = Guid.NewGuid().ToString();
            }

            public DateTime? DeletedOn { get; set; }
            public DateTime CreatedOn { get; set; }
            public DateTime? ModifiedOn { get; set; }
            public bool IsDeleted { get; set; }
        }
    }
}
