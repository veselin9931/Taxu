using System;
using System.ComponentModel.DataAnnotations;
using TravelApp.Common.BaseModels;

namespace TravelApp.Models
{
    public class Trip : BaseDeletableModel<string>, IAuditInfo
    {
        public Trip()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        public string CurrentLocation { get; set; }

        public Order Order { get; set; }

        public string OrderId { get; set; }

        public ApplicationUser ApplicationUser { get; set; }

        public string ApplicationUserId { get; set; }

        public string Status { get; set; }
    }
}
