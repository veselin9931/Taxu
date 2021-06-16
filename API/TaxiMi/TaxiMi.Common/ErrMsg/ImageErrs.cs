using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiMi.Common.ErrMsg
{
    public static class ImageErrs
    {
        public const string InvalidId = "This imageID not exist!";

        public const string InvalidModel = "Invalid image model. Try again!";

        public const string LoadFaild = "Failed to load image with this id from database. Please try again!";

        public const string Createfaild = "Failed to create image";
    }
}
