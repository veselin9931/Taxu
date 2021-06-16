using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TaxiMi.Models;
using TaxiMi.Infrastructure;

namespace TaxiMi.Data.Seeding
{
    public class ReportTypeSeeder : ISeeder
    {
        public async Task SeedAsync(ApplicationDbContext dbContext, IServiceProvider serviceProvider)
        {
            await SeedReportTypesAsync(dbContext.ReportTypes, GlobalConstants.ReportType.Complaint);
            await SeedReportTypesAsync(dbContext.ReportTypes, GlobalConstants.ReportType.Other);
            await SeedReportTypesAsync(dbContext.ReportTypes, GlobalConstants.ReportType.Complaint);

        }

        private static async Task SeedReportTypesAsync(DbSet<ReportType> reportType, string type)
        {
            var types = await reportType.FirstOrDefaultAsync(t => t.Name == type);
            if (types == null)
            {
                var result = await reportType.AddAsync(new ReportType() { Name = type});

                //TODO: Add err msg

                if (result.Entity == null)
                {
                    throw new Exception(string.Join(Environment.NewLine, "Invalid operation."));
                }
            }
        }
    }
}
