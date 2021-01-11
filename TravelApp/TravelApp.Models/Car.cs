using System;
using System.Collections.Generic;
using System.Text;
using TravelApp.Common.BaseModels;

namespace TravelApp.Models
{
    public class Car : BaseDeletableModel<string>, IAuditInfo
    {
        public string Model { get; set; }

        public string TehnicalReview { get; set; }

        public string RegisterNumber { get; set; }

        public string Color { get; set; }

        public int Capacity { get; set; }

        public bool Confirmation { get; set; }

        public int TypeId { get; set; }

        public CarType Type { get; set; }
    }
}
