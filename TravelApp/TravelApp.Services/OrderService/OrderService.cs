
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
                currentOrder.IsAccepted = true;
                currentOrder.AcceptedBy = driverId;

                this.orderRepository.Update(currentOrder);

                await this.orderRepository.SaveChangesAsync();

                return true;
            }

            throw new InvalidOperationException("Accepting a order failed!");

        }

        public async Task<string> CreateOrderAsync(CreateOrderInputModel input)
        {

            if (input != null)
            {
                var order = new Order()
                {
                    ApplicationUserId = input.ApplicationUserId,
                    Location = input.Location,
                    Destination = input.Destination,
                    IncreasePrice = input.IncreasePrice,
                    TotalPrice = input.TotalPrice + input.IncreasePrice,
                    CreatedOn = DateTime.UtcNow,
                    IsAccepted = false
                };

                this.orderRepository.Add(order);

                await this.orderRepository.SaveChangesAsync();

                

                return order.ToString();
            }

            throw new InvalidOperationException("Creating order failed!");
        }

        public async Task<IList<Order>> GetAllOrdersAsync()
         => await this.orderRepository
            .All()
            .Where(x => x.IsAccepted == false && x.IsDeleted == false)
            .OrderBy(x => x.CreatedOn)
            .ToListAsync();

        public Order GetOrderById(string id)
        => this.orderRepository.All()?.FirstOrDefault(x => x.Id == id);

    }
}
