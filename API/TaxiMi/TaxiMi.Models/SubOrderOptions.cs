using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using TaxiMi.Common.BaseModels;

namespace TaxiMi.Models
{
    public class SubOrderOptions : BaseDeletableModel<int>
    {
        public string  Location { get; set; }

        public string Destination { get; set; }

        [Required]
        [Range(typeof(decimal), "0", "999999999999999999")]
        public decimal TotalPrice { get; set; }

        [Required]
        public string Status { get; set; }

        public string AcceptedBy { get; set; }

        public string Info { get; set; }

        public DateTime Date { get; set; }
    }
}
