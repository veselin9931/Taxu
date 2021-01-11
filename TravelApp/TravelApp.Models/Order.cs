using System;
using System.Collections.Generic;
using System.Text;
using TravelApp.Common.BaseModels;

namespace TravelApp.Models
{
    public class Order : BaseDeletableModel<string>, IAuditInfo
    {
        public string ReservationId { get; set; }

        public Reservation Reservation { get; set; }

        public decimal Comission { get; set; }

        public decimal TotalPrice { get; set; }
    }
}
