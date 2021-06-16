using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using TaxiMi.Common.BaseModels;

namespace TaxiMi.Models
{
    public class Report : BaseDeletableModel<string>
    {
        public Report()
        {
            this.Id = Guid.NewGuid().ToString();
            this.CreatedOn = DateTime.UtcNow;
        }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Description { get; set; }

        public string ImgUrl { get; set; }

        public int TypeId { get; set; }
        public ReportType Type { get; set; }


        public string ReporterId { get; set; }
        public ApplicationUser Reporter { get; set; }

        public string SuspectedUserId { get; set; }
    }
}
