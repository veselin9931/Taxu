using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Common;
using TravelApp.Models;

namespace TravelApp.Data.Seeding
{
    public class CarTypesSeeder : ISeeder
    {
        public async Task SeedAsync(ApplicationDbContext dbContext, IServiceProvider serviceProvider)
        {
            await SeedCarTypesAsync(dbContext.CarTypes, GlobalConstants.CarTypeComfort, GlobalConstants.PriceCoeficentPerKilometerComfort);
            await SeedCarTypesAsync(dbContext.CarTypes, GlobalConstants.CarTypeNormal, GlobalConstants.PriceCoeficentPerKilometerNormal);
        }

        private static async Task SeedCarTypesAsync(DbSet<CarType> carTypes, string type, decimal priceCoeficentPerKilometer)
        {
            var types = await carTypes.FirstOrDefaultAsync(t => t.Name == type);
            if (types == null)
            {
                var result = await carTypes.AddAsync(new CarType() {Name = type , PriceCoeficentPerKilometer = priceCoeficentPerKilometer });

                //TODO: Add err msg

                if (result.Entity == null)
                {
                    throw new Exception(string.Join(Environment.NewLine, "Invalid operation."));
                }
            }
        }

    }
}
