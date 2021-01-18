using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using TravelApp.Mappings;
using TravelApp.Models;

namespace TravelApp.Infrastructure.ViewModels
{
    public class OrderViewModel : IMapFrom<Order>
    {
        public string Id { get; set; }

        public string ApplicationUserId { get; set; }

        public string Location { get; set; }

        public string Destination { get; set; }

        public decimal IncreasePrice { get; set; }

        public decimal TotalPrice { get; set; }

        public bool IsAccepted { get; set; }

        public DateTime CreatedOn { get; set; }

        public bool IsDeleted { get; set; }
    }
}
