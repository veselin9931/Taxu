using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using TravelApp.Mappings;
using TravelApp.Models;

namespace TravelApp.Infrastructure.InputModels.OrderInput
{
    public class CreateOrderInputModel : IMapFrom<Order>
    {
        public string ApplicationUserId { get; set; }

        [Required]
        public string Location { get; set; }

        [Required]
        public string Destination { get; set; }

        public decimal IncreasePrice { get; set; }

        [Required]
        [Range(typeof(decimal), "0", "999999999999999999")]
        public decimal TotalPrice { get; set; }
    }
}
