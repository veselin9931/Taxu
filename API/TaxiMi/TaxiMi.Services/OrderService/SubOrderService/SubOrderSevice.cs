using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaxiMi.Common.Repositories;
using TaxiMi.Infrastructure.InputModels.OrderInput;
using TaxiMi.Models;
using TaxiMi.Services.OrderService.OrderOptionService;

namespace TaxiMi.Services.OrderService.SubOrderService
{
    public class SubOrderSevice : ISubOrderService
    {
        private readonly IDeletableEntityRepository<SuburbanOrder> repository;
        private readonly IOrderOptionService orderOptionService;

        public SubOrderSevice(IDeletableEntityRepository<SuburbanOrder> repository, IOrderOptionService  orderOptionService)
        {
            this.repository = repository;
            this.orderOptionService = orderOptionService;
        }

        public SuburbanOrder GetSubOrderById(string id)
        => this.repository.All().FirstOrDefault(x => x.Id == id);

        public SuburbanOrder GetOrderByUserId(string userId)
        => this.repository.All()?.OrderByDescending(x => x.CreatedOn).FirstOrDefault(x => x.ApplicationUserId == userId && x.Status != "Completed");

        public async Task<bool> AcceptSubOrderAsync(string id, string driverId)
        {
            var currentOrder = this.GetSubOrderById(id);

            if (currentOrder != null)
            {
                currentOrder.Status = "Accepted";
                currentOrder.AcceptedBy = driverId;

                this.repository.Update(currentOrder);

                await this.repository.SaveChangesAsync();

                return true;
            }

            throw new InvalidOperationException("Accepting a order failed!");
        }

        public async Task<bool> ChangeSubOrderStatusAsync(string orderId, ChangeSubOrderInputModel inputModel)
        {
            var currentOrder = this.GetSubOrderById(orderId);

            if (currentOrder != null)
            {


                currentOrder.Status = inputModel.Status;

                if (currentOrder.Status == "Accepted")
                {
                    currentOrder.AcceptedBy = inputModel.AcceptedBy;
                }

                this.repository.Update(currentOrder);

                await this.repository.SaveChangesAsync();

                return true;
            }

            throw new InvalidOperationException("Order id is invalid");
        }

        public async Task<bool> CompleteOrderAsync(string id)
        {
            var currentOrder = this.GetSubOrderById(id);

            if (currentOrder != null)
            {
                currentOrder.Status = "Completed";

                this.repository.Update(currentOrder);

                await this.repository.SaveChangesAsync();

                return true;
            }

            throw new InvalidOperationException("Completing a order failed!");
        }

        public async Task<string> CreateSubOrder(CreateSubOrderInputModel input)
        {
            if (input != null)
            {
                var order = new SuburbanOrder()
                {
                    AcceptedBy = input.AcceptedBy,
                    ApplicationUserId = input.ApplicationUserId,
                    Info = input.Info,
                    Status = input.Status,
                    CreatedOn = DateTime.UtcNow,
                    OptionsId = input.OptionsId,
                    TotalPrice = this.orderOptionService.GetOrderOptionPriceById(input.OptionsId),
                    Date = input.Date + " | " + input.Time
                };

                this.repository.Add(order);

                await this.repository.SaveChangesAsync();

                return order.Id;
            }

            throw new InvalidOperationException("Creating order failed!");
        }

        public async Task<bool> Delete(string orderId)
        {
            var order = this.GetSubOrderById(orderId);

            if (order == null)
            {
                throw new ArgumentException();
            }

            order.Status = "Canceled";
            order.IsDeleted = true;
            order.DeletedOn = DateTime.UtcNow;

            this.repository.Update(order);

            var result = await this.repository.SaveChangesAsync();

            return result > 0;
        }

        public async Task<IList<SuburbanOrder>> GetAllSubOrdersAsync(string status)
            => await this.repository
               .All()
               .Where(x => x.Status == status && x.IsDeleted == false)
               .Include(x => x.ApplicationUser)
               .OrderBy(x => x.CreatedOn)
               .ToListAsync();

        public SuburbanOrder GetByUserId(string userId)
         => this.repository.All().FirstOrDefault(a => a.ApplicationUserId == userId);
    }
}
