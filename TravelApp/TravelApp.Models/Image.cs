﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using TravelApp.Common.BaseModels;

namespace TravelApp.Models
{
    public class Image : BaseDeletableModel<string>
    {
        public Image()
        {
            this.Id = new Guid().ToString();
            this.CreatedOn = DateTime.UtcNow;
        }

        [Required]
        public string userId { get; set; }

        [Required]
        public string Path { get; set; }
    }
}