using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiMi.Infrastructure.ViewModels
{
    public class SubOrderViewModel
    {
        public string Id { get; set; }


        public string Location { get; set; }

        public string Destination { get; set; }

        public decimal Price { get; set; }

        public string ApplicationUserId { get; set; }

        public string Info { get; set; }

        public DateTime Date { get; set; }


    }
}
