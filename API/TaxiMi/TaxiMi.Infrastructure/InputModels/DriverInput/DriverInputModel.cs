using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace TaxiMi.Infrastructure.InputModels.DriverInput
{
    public class DriverInputModel
    {
        public string ApplicationUserId { get; set; }

        public string CurrentLocation { get; set; }
    }
}
