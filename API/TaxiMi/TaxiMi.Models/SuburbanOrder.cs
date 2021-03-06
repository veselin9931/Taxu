﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using TaxiMi.Common.BaseModels;

namespace TaxiMi.Models
{
    public class SuburbanOrder : BaseDeletableModel<string>, IAuditInfo
    {
        public SuburbanOrder()
        {
            this.Id = Guid.NewGuid().ToString();
            this.CreatedOn = DateTime.UtcNow;
        }

        public ApplicationUser ApplicationUser { get; set; }

        public string ApplicationUserId { get; set; }

        [Required]
        [Range(typeof(decimal), "0", "999999999999999999")]
        public decimal TotalPrice { get; set; }

        [Required]
        public string Status { get; set; }

        public string AcceptedBy { get; set; }

        public string Info { get; set; }

        public string Date { get; set; }

        public int OptionsId { get; set; }

    }
}
