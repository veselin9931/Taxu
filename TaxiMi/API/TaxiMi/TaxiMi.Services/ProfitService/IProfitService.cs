using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace TaxiMi.Services.ProfitService
{
    public interface IProfitService
    {
        Task<bool> AddToProfit(decimal amount);

        Task<decimal> GetTotalProfit();

    }
}
