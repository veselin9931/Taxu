using System;
using System.Collections.Generic;
using System.Text;

namespace TravelApp.Infrastructure.ViewModels
{
    public class ReportViewModel
    {
        public string Title { get; set; }

        public string Description { get; set; }

        public string ImgUrl { get; set; }

        public int TypeId { get; set; }

        public string ReporterId { get; set; }

        public string SuspectedDriverId { get; set; }
    }
}
