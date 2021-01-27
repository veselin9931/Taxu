using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace TravelApp.Infrastructure.ViewModels
{
    public class WalletViewModel
    {

        [Required]
        [Range(typeof(decimal), "0", "999999999999999999")]
        public decimal Ammount { get; set; }

        [Required]
        public bool Confirmation { get; set; }
    }
}
