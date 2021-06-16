using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiMi.Infrastructure.InputModels.ImageInput
{
    public class CreateImageInputModel
    {
        public string Title { get; set; }

        public IFormFile File { get; set; }

        public string UserId { get; set; }

        public string FolderName { get; set; }

    }
}
