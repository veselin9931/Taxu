
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelApp.Common.Repositories;
using TravelApp.Infrastructure.InputModels.OrderInput;
using TravelApp.Mappings;
using TravelApp.Models;
using TravelApp.Services.EmailSender;

namespace TravelApp.Services.OrderService
{
    public class OrderService : IOrderService
    {
        private readonly IDeletableEntityRepository<Order> orderRepository;

        public OrderService(IDeletableEntityRepository<Order> orderRepository)
        {
            this.orderRepository = orderRepository;
        }

        public async Task<bool> AcceptOrderAsync(string id, string driverId)
        {
            var currentOrder = this.GetOrderById(id);

            if (currentOrder != null)
            {
                currentOrder.Status = "Accepted";
                //currentOrder.IsAccepted = true;
                currentOrder.AcceptedBy = driverId;

                this.orderRepository.Update(currentOrder);

                await this.orderRepository.SaveChangesAsync();

                return true;
            }

            throw new InvalidOperationException("Accepting a order failed!");

        }

        public async Task<bool> CompleteOrderAsync(string id)
        {
            var currentOrder = this.GetOrderById(id);

            if (currentOrder != null)
            {
                //currentOrder.IsCompleted = true;
                currentOrder.Status = "Completed";

                this.orderRepository.Update(currentOrder);

                await this.orderRepository.SaveChangesAsync();

                return true;
            }

            throw new InvalidOperationException("Completing a order failed!");
        }

        public async Task<string> CreateOrderAsync(CreateOrderInputModel input)
        {

            if (input != null)
            {
                var order = new Order()
                {
                    ApplicationUser = input.ApplicationUser,
                    ApplicationUserId = input.ApplicationUserId,
                    Location = input.Location,
                    Destination = input.Destination,
                    IncreasePrice = input.IncreasePrice,
                    TotalPrice = 10, //Just temporary
                    CreatedOn = DateTime.UtcNow,
                    Status = "Waiting"
                    //IsAccepted = false,
                    //IsCompleted = false,
                };

                this.orderRepository.Add(order);

                await this.orderRepository.SaveChangesAsync();

                
                return order.ToString();
            }

            throw new InvalidOperationException("Creating order failed!");
        }

        public async Task<bool> Delete(string orderId)
        {
           var order =  this.GetOrderById(orderId);

            this.orderRepository.Delete(order);

            var result = await this.orderRepository.SaveChangesAsync();

            return result > 0;
        }

        public async Task<IList<Order>> GetAllAcceptedOrdersAsync(string userId)
         => await this.orderRepository
            .All()
            .Where(x => x.AcceptedBy == userId && x.Status == "Completed")
            .Include(x => x.ApplicationUser)
            .OrderByDescending(x => x.CreatedOn)
            .ToListAsync();


        public async Task<IList<Order>> GetAllOrdersAsync()
         => await this.orderRepository
            .All()
            .Where(x => x.Status == "Waiting" && x.IsDeleted == false)
            .Include(x => x.ApplicationUser)
            .OrderBy(x => x.CreatedOn) 
            .ToListAsync();

        public Order GetLastCompletedOrderByUserId(string userId)
       => this.orderRepository.All()?.OrderByDescending(x => x.CreatedOn).FirstOrDefault(x => x.AcceptedBy == userId && x.Status == "Completed");

        public Order GetLastAcceptedOrderByUserId(string userId)
        => this.orderRepository.All()?.OrderByDescending(x => x.CreatedOn).FirstOrDefault(x => x.ApplicationUserId == userId && x.Status == "Completed");

        public Order GetOrderById(string id)
        => this.orderRepository.All()?.FirstOrDefault(x => x.Id == id);

        public Order GetOrderByUserId(string userId)
        => this.orderRepository.All()?.OrderByDescending(x => x.CreatedOn).FirstOrDefault(x => x.ApplicationUserId == userId && x.Status != "Completed");

        public async Task<bool> IncreaseOrderPriceAsync(string id, decimal amount)
        {
            var order = this.GetOrderById(id);

            if (order != null)
            {
                order.TotalPrice += amount;

                this.orderRepository.Update(order);
                await this.orderRepository.SaveChangesAsync();

                return true;
            }

            return false;
        }
    }
}
