using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace TravelApp.Infrastructure.InputModels.ReportInput
{
    public class CreateReportInputModel
    {
        [Required]
        public string Title { get; set; }

        [Required]
        public string Description { get; set; }

        public string ImgUrl { get; set; }

        public int TypeId { get; set; }

        public string ReporterId { get; set; }
        
        public string SuspectedUserId { get; set; }
    }
}
