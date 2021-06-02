using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using TaxiMi.Mappings;
using TaxiMi.Models;

namespace TaxiMi.Infrastructure.ViewModels
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

        public bool IsCompleted { get; set; }

    }
}
