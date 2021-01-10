using System;
using System.Collections.Generic;
using System.Text;
using TravelApp.Common.BaseModels;

namespace TravelApp.Models
{
    public class Reservation : BaseDeletableModel<string>, IAuditInfo
    {
    }
}
