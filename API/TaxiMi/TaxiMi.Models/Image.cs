using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using TaxiMi.Common.BaseModels;

namespace TaxiMi.Models
{
    public class Image : BaseDeletableModel<string>
    {
        public Image()
        {
            this.Id = Guid.NewGuid().ToString();
            this.CreatedOn = DateTime.UtcNow;
        }

        [Required]
        public string userId { get; set; }

        [Required]
        public string Path { get; set; }

        [Required]
        public string Type { get; set; }

    }
}
