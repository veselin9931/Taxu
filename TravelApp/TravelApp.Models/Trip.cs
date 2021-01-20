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



        //[Required]
        //public string Location { get; set; }

        //[Required]
        //public string Destination { get; set; }

        //[Required]
        //public string CarId { get; set; }

        //public Car Car { get; set; }
    }
}
