using System;
using System.Collections.Generic;
using System.Text;
using TravelApp.Common.BaseModels;

namespace TravelApp.Models
{
    public class Driver : BaseDeletableModel<string>, IAuditInfo
    {
        public string DriverLicanse { get; set; }

        public string IDCardNumber { get; set; }

        public bool DocumentConfirmatiom { get; set; }

        public string Phone { get; set; }

        public int CarTypeId { get; set; }

        public CarType CarType { get; set; }

        public string LastAdress { get; set; }

        public string CurrentLocation { get; set; }

        public string WalletId { get; set; }

        public Wallet Wallet { get; set; }

        public double Comission { get; set; }

        public string Referal { get; set; }

        public int ReferalUsedTimes { get; set; }

        //TODO: Rating collection
    }
}
