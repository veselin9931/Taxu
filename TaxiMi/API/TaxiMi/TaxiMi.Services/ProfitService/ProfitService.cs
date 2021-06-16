using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaxiMi.Common.Repositories;
using TaxiMi.Models;

namespace TaxiMi.Services.ProfitService
{
    public class ProfitService : IProfitService
    {
        private readonly IDeletableEntityRepository<Profit> repo;

        public ProfitService(IDeletableEntityRepository<Profit> repo)
        {
            this.repo = repo;
        }

        public async Task<bool> AddToProfit(decimal amount)
        {
            var profit = this.repo.All().FirstOrDefault();

            if (profit != null)
            {
                profit.Total += amount;
                profit.ModifiedOn = DateTime.Now;

                this.repo.Update(profit);
                await this.repo.SaveChangesAsync();

                return true;
            }

            return false;
        }

        public async Task<decimal> GetTotalProfit()
           => this.repo.All().FirstOrDefault().Total;
       
    }
}
