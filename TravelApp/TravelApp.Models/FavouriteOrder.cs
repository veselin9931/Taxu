﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using TravelApp.Common.BaseModels;

namespace TravelApp.Models
{
    public class FavouriteOrder : BaseDeletableModel<string>
    {
        public FavouriteOrder()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        public ApplicationUser ApplicationUser { get; set; }

        public string ApplicationUserId { get; set; }

        [Required]
        public string Location { get; set; }

        public decimal LocationLat { get; set; }

        public decimal LocationLong { get; set; }


        [Required]
        public string Destination { get; set; }

        public decimal DestinationLat { get; set; }

        public decimal DestinationLong { get; set; }

        public decimal IncreasePrice { get; set; }

        public decimal TripDistance { get; set; }

        public decimal UserDistance { get; set; }


        [Required]
        [Range(typeof(decimal), "0", "999999999999999999")]
        public decimal TotalPrice { get; set; }

        public string ETA { get; set; }

        public string Status { get; set; }


        public string AcceptedBy { get; set; }
    }
}