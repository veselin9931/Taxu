using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TaxiMi.Common.Repositories;
using TaxiMi.Models;

namespace TaxiMi.Services.OrderService.OrderOptionService
{
    public class OrderOptionsService : IOrderOptionService
    {
        private readonly IRepository<SubOrderOptions> repository;

        public OrderOptionsService(IRepository<SubOrderOptions> repository)
        {
            this.repository = repository;
        }

        public string GeLocation(int optId) => this.repository.All().FirstOrDefault(opt => opt.Id == optId).Location;

        public IEnumerable<SubOrderOptions> GetAll() => this.repository.All();

        public string GetDestinationById(int optId) => this.repository.All().FirstOrDefault(opt => opt.Id == optId).Destination;

        public decimal GetOrderOptionPriceById(int optId) => this.repository.All().FirstOrDefault(opt => opt.Id == optId).Price;
       
    }
}
