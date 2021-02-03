using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using TravelApp.Common.BaseModels;

namespace TravelApp.Models
{
    public class Driver : BaseDeletableModel<string>, IAuditInfo
    {
        public Driver()
        {
            this.Cars = new List<Car>();
            this.Id = Guid.NewGuid().ToString();
        }

        [Required]
        public string DriverLicense { get; set; }

        [Required]
        public string IDCardNumber { get; set; }

        [Required]
        public bool DocumentConfirmation { get; set; }

        public string LastAdress { get; set; }

        public string CurrentLocation { get; set; }

        public string WalletId { get; set; }
        public Wallet Wallet { get; set; }
            
        [Required]
        public double Comission { get; set; }

        [Required]
        public string Referal { get; set; }

        [Required]
        [Range(0, 5)]
        public int ReferalUsedTimes { get; set; }

        public IList<Car> Cars { get; set; }

        //TODO: Rating collection
    }
}
