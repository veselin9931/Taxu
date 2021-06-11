using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TaxiMi.Common;
using TaxiMi.Common.SubOrders;
using TaxiMi.Models;

namespace TaxiMi.Data.Seeding
{
    public class SubOrderSeeder : ISeeder
    {
        public async Task SeedAsync(ApplicationDbContext dbContext, IServiceProvider serviceProvider)
        {
            await SeedCarTypesAsync(dbContext.Options, SubOrederOptionsNames.Opt1, SubOrderOptionsPrices.Opt2);
        
        }

        private static async Task SeedCarTypesAsync(DbSet<SubOrderOptions> orderOptions, string options, decimal price)
        {
            var types = await orderOptions.FirstOrDefaultAsync(t => t.Location + " - " +t.Destination  == options);
            if (types == null)
            {
                var result = await orderOptions.AddAsync(new SubOrderOptions() { Location = options.Split(" - ")[0], Destination = options.Split(" - ")[1], Price = price });

                //TODO: Add err msg

                if (result.Entity == null)
                {
                    throw new Exception(string.Join(Environment.NewLine, "Invalid operation."));
                }
            }
        }
    }
}
