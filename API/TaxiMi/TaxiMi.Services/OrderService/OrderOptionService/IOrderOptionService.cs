using System;
using System.Collections.Generic;
using System.Text;
using TaxiMi.Models;

namespace TaxiMi.Services.OrderService.OrderOptionService
{
    public interface IOrderOptionService
    {
        public decimal GetOrderOptionPriceById(int optId);

        public IEnumerable<SubOrderOptions> GetAll();

        public string GetDestinationById(int optId);

        public string GeLocation(int optId);

    }
}
