using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using TravelApp.Common.BaseModels;

namespace TravelApp.Models
{
    public class Order : BaseDeletableModel<string>
    {
        public Order()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        public ApplicationUser ApplicationUser { get; set; }

        public string ApplicationUserId { get; set; }

        [Required]
        public string Location { get; set; }

        [Required]
        public string Destination { get; set; }

        public decimal IncreasePrice { get; set; }


        [Required]
        [Range(typeof(decimal), "0", "999999999999999999")]
        public decimal TotalPrice { get; set; }


        public bool IsAccepted { get; set; }


        //[Required]
        //public string ReservationId { get; set; }

        //public Reservation Reservation { get; set; }

        //[Required]
        //public decimal Comission { get; set; }

    }
}
