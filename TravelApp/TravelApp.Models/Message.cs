using System;
using System.Collections.Generic;
using System.Text;
using TravelApp.Common.BaseModels;

namespace TravelApp.Models
{
    public class Message : BaseDeletableModel<string>, IAuditInfo
    { 
        public string Sender { get; set; }

        public string User { get; set; }

        public string Text { get; set; }
    }
}
