using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using TaxiMi.Common.BaseModels;

namespace TaxiMi.Models
{
    public class Wallet : BaseDeletableModel<string>, IAuditInfo
    {
        public Wallet()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        [Required]
        [Range(typeof(decimal), "0", "999999999999999999")]
        public decimal Ammount { get; set; }

        [Required]
        public bool Confirmation { get; set; }

        public string ApplicationUserId { get; set; }
    }
}
