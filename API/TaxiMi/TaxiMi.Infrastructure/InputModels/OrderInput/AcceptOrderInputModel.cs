using System;
using System.Collections.Generic;
using System.Text;
using TaxiMi.Mappings;
using TaxiMi.Models;

namespace TaxiMi.Infrastructure.InputModels.OrderInput
{
    public class AcceptOrderInputModel : IMapFrom<Order>
    {
        public ApplicationUser ApplicationUser { get; set; }

        public string ApplicationUserId { get; set; }

        public Order Order { get; set; }


        public string OrderId { get; set; }

    }
}
