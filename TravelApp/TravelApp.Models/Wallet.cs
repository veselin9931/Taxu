using System;
using System.Collections.Generic;
using System.Text;
using TravelApp.Common.BaseModels;

namespace TravelApp.Models
{
    public class Wallet : BaseDeletableModel<string>, IAuditInfo
    {
        public decimal Ammount { get; set; }

        public bool Confirmation { get; set; }
    }
}
