using System;
using System.Collections.Generic;
using System.Text;
using TaxiMi.Common.BaseModels;

namespace TaxiMi.Models
{
    public class Message : BaseDeletableModel<string>, IAuditInfo
    { 
        public string Sender { get; set; }

        public string User { get; set; }

        public string Text { get; set; }
    }
}
