using System;
using System.Collections.Generic;
using System.Text;
using TaxiMi.Models;

namespace TaxiMi.Infrastructure.HubConfig
{
    public static class DataManager
    {
        public static List<Order> GetData()
        {
            var r = new Random();
            return new List<Order>()
        {
           new Order { Location = "client", Destination = "acceptedby", TotalPrice = 43.00M},
           new Order { Location = "client1", Destination = "acceptedby1", TotalPrice = 12.00M},
           new Order { Location = "client2", Destination = "acceptedby2", TotalPrice = 43.00M},
           new Order { Location = "client3", Destination = "acceptedby3", TotalPrice = 43.00M},

        };
        }
    }
}
