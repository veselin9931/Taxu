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
        public Task<Order> CreateOrderAsync(CreateOrderInputModel input);

        public Task<string> AddToFavouriteOrder(CreateOrderInputModel input);

        public Task<IList<FavouriteOrder>> GetAllFavouriteOrdersAsync();

        public Task<IList<FavouriteOrder>> GetAllFavouriteOrdersForUserAsync(string userId);

        public Task<bool> DeleteFavourite(string orderId);

        public Order GetCurrentOrder(string userId);


        public Task<IList<Order>> GetAllAcceptedOrdersAsync(string userId);

        public IEnumerable<OrderOptions> GetOrderOptions();

        public Order GetLastAcceptedOrderByUserId(string userId);

        public Task<IList<Order>> GetAllOrdersAsync();

        //public Task<IList<Order>> GetOrdersFor01Ratings();

        //public Task<IList<Order>> GetOrdersFor12Ratings();
        
        //public Task<IList<Order>> GetOrdersFor23Ratings();
        
        //public Task<IList<Order>> GetOrdersFor4Ratings();


        public Order GetOrderByUserId(string userId);


        public Order GetLastCompletedOrderByUserId(string userId);

        public Order GetOrderById(string id);

        public Task<bool> AcceptOrderAsync(string id, string driverId);

        public Task<bool> IncreaseOrderPriceAsync(string id, decimal amount);

        public Task<bool> CompleteOrderAsync(string id);

        public Task<bool> Delete(string orderId);

    }
}
