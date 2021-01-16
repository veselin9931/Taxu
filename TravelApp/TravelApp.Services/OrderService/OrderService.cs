using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Common.Repositories;
using TravelApp.Infrastructure.InputModels.OrderInput;
using TravelApp.Models;

namespace TravelApp.Services.OrderService
{
    public class OrderService : IOrderService
    {
        private readonly IDeletableEntityRepository<Order> orderRepository;
        private readonly IHttpContextAccessor httpContextAccessor;

        public OrderService(IDeletableEntityRepository<Order> orderRepository, IHttpContextAccessor httpContextAccessor)
        {
            this.orderRepository = orderRepository;
            this.httpContextAccessor = httpContextAccessor;
        }

        public async Task<string> CreateOrderAsync(CreateOrderInputModel input)
        {
            var userId = this.httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (input != null)
            {
                var order = new Order()
                {
                    ApplicationUserId = userId,
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
    }
}
