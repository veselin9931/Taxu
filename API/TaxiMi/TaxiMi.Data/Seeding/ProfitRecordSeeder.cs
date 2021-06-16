using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TaxiMi.Models;

namespace TaxiMi.Data.Seeding
{
    public class ProfitRecordSeeder : ISeeder
    {
        public async Task SeedAsync(ApplicationDbContext dbContext, IServiceProvider serviceProvider)
        {
            await SeedProfit(dbContext.Profits);
        }

        private static async Task SeedProfit(DbSet<Profit> profit)
        {
            var newProfit = await profit.FirstOrDefaultAsync();
            if (newProfit == null)
            {
                var result = await profit.AddAsync(new Profit() { Total = 0, IsDeleted = false, CreatedOn = DateTime.Now });

                //TODO: Add err msg

                if (result.Entity == null)
                {
                    throw new Exception(string.Join(Environment.NewLine, "Invalid operation."));
                }
            }
        }
    }
}
