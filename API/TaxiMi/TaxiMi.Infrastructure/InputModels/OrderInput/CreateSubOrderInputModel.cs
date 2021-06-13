using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace TaxiMi.Infrastructure.InputModels.OrderInput
{
    public class CreateSubOrderInputModel
    {
        public string ApplicationUserId { get; set; }

        [Required]
        [Range(typeof(decimal), "0", "999999999999999999")]
        public decimal TotalPrice { get; set; }

        [Required]
        public string Status { get; set; }

        public string AcceptedBy { get; set; }

        public string Info { get; set; }

        public DateTime Date { get; set; }

        public int OptionsId { get; set; }
    }
}
