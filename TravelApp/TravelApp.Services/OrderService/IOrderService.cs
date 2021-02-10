using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Infrastructure.InputModels.OrderInput;
using TravelApp.Models;

namespace TravelApp.Services.OrderService
{
    public interface IOrderService
    {
        public Task<string> CreateOrderAsync(CreateOrderInputModel input);

        public Task<IList<Order>> GetAllAcceptedOrdersAsync(string userId);

        public Task<IList<Order>> GetAllOrdersAsync();
        
        public Order GetOrderByUserId(string userId);

        public Order GetOrderById(string id);

        public Task<bool> AcceptOrderAsync(string id, string driverId);

        public Task<bool> IncreaseOrderPriceAsync(string id, decimal amount);


        public Task<bool> CompleteOrderAsync(string id);

        public Task<bool> Delete(string orderId);

    }
}
