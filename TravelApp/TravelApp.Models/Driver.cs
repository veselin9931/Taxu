using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using TravelApp.Common.BaseModels;

namespace TravelApp.Models
{
    public class Driver : BaseDeletableModel<string>, IAuditInfo
    {
        [Required]
        public string DriverLicanse { get; set; }

        [Required]
        public string IDCardNumber { get; set; }

        [Required]
        public bool DocumentConfirmatiom { get; set; }

        [Required]
        [Phone]
        public string Phone { get; set; }

        [Required]
        public int CarId { get; set; }

        public Car Car { get; set; }

        public string LastAdress { get; set; }

        public string CurrentLocation { get; set; }
        
        [Required]
        public string WalletId { get; set; }

        public Wallet Wallet { get; set; }

        [Required]
        public double Comission { get; set; }

        [Required]
        public string Referal { get; set; }

        [Required]
        [Range(0, 5)]
        public int ReferalUsedTimes { get; set; }

        //TODO: Rating collection
    }
}
