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


        public Task<IList<Order>> GetAllOrdersAsync();
    }
}
