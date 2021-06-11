using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaxiMi.Common.Repositories;
using TaxiMi.Infrastructure.InputModels.OrderInput;
using TaxiMi.Models;

namespace TaxiMi.Services.OrderService.SubOrderService
{
    public class SubOrderSevice : ISubOrderService
    {
        private readonly IDeletableEntityRepository<SuburbanOrder> repository;

        public SubOrderSevice(IDeletableEntityRepository<SuburbanOrder> repository)
        {
            this.repository = repository;
        }

        public SuburbanOrder GetSubOrderById(string id)
        => this.repository.All().FirstOrDefault(x => x.Id == id);

        public SuburbanOrder GetOrderByUserId(string userId)
        => this.repository.All()?.OrderByDescending(x => x.CreatedOn).FirstOrDefault(x => x.ApplicationUserId == userId && x.Status != "Completed");

        public Task<bool> AcceptSubOrderAsync(string id, string driverId)
        {
            throw new NotImplementedException();
        }

        public Task<bool> ChangeSubOrderStatusAsync(string orderId, string status)
        {
            throw new NotImplementedException();
        }

        public Task<bool> CompleteOrderAsync(string id)
        {
            throw new NotImplementedException();
        }

        public Task<string> CreateSubOrder(CreateSubOrderInputModel input)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> Delete(string orderId)
        {
            var order = this.GetSubOrderById(orderId);
            order.Status = "Canceled";

            var result = await this.repository.SaveChangesAsync();

            return result > 0;
        }

        public async Task<IList<SuburbanOrder>> GetAllSubOrdersAsync()
            => await this.repository
               .All()
               .Where(x => x.Status == "Waiting" && x.IsDeleted == false)
               .Include(x => x.ApplicationUser)
               .OrderBy(x => x.CreatedOn)
               .ToListAsync();

     
    }
}
