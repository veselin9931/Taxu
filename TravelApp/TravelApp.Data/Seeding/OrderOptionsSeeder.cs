using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Infrastructure;
using TravelApp.Models;

namespace TravelApp.Data.Seeding
{
    public class OrderOptionsSeeder : ISeeder
    {
        public async Task SeedAsync(ApplicationDbContext dbContext, IServiceProvider serviceProvider)
        {
            await SeedOptionAsync(dbContext.OrderOptions, GlobalConstants.OrderOptions.Opt1, GlobalConstants.OrderOptions.OptA1);
            await SeedOptionAsync(dbContext.OrderOptions, GlobalConstants.OrderOptions.Opt2, GlobalConstants.OrderOptions.OptA2);
            await SeedOptionAsync(dbContext.OrderOptions, GlobalConstants.OrderOptions.Opt3, GlobalConstants.OrderOptions.OptA3);
        }

        private static async Task SeedOptionAsync(DbSet<OrderOptions> orderOpt, string name, decimal increaseAmoun)
        {

            var option = await orderOpt.FirstOrDefaultAsync(t => t.Name == name);
            if (option == null)
            {
                var opt = new OrderOptions() { IncreaseAmmoun = increaseAmoun, Name = name };

                var result = await orderOpt.AddAsync(opt);

                if (result.Entity == null)
                {
                  // throw err
                }
            }
        }
    }
}
