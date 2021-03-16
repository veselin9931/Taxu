using System;
using System.Collections.Generic;
using System.Text;

namespace TravelApp.Infrastructure
{
    public static class GlobalConstants
    {
        public static class Role
        {
            public const string Admin = "Admin";
            public const string User = "User";
        }

        public static class CloudinaryFolders
        {
            public const string DriverFacePics = "driverFacePic";

            public const string DriverLicanses = "driverLicanse";

            public const string IdCards = "idCard";

            public const string TehnicalReviews = "tehnicalReview";
        }

        public static class ReportType
        {
            public const string Tehnical = "Tehnical";

            public const string Complaint = "Complaint";

            public const string Other = "Other";
        }

        public static class OrderOptions
        {
            public const string Opt1 = "With stroller";

            public const string Opt2 = "With kids";

            public const string Opt3 = "With pets";

            public const decimal OptA1 = 1.50m;

            public const decimal OptA2 = 2.50m;

            public const decimal OptA3 = 3m;

        }
    }
}
