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

        public Order GetLastAcceptedOrderByUserId(string userId);

        public Task<IList<Order>> GetAllOrdersAsync();

        public Task<IList<Order>> GetNormalOrdersAsync();

        public Task<IList<Order>> GetComfortOrdersAsync();


        public Order GetOrderByUserId(string userId);


        public Order GetLastCompletedOrderByUserId(string userId);

        public Order GetOrderById(string id);

        public Task<bool> AcceptOrderAsync(string id, string driverId);

        public Task<bool> UpdateEtaAsync(string id, string value);

        public Task<bool> UpdatePriceIncreasedAsync(string id, decimal amount, string driverId);

        public Task<bool> UpdateIncreaseAcceptedAsync(string id, bool value);

        public Task<bool> ResetIncreasePriceAsync(string id);
        
        public Task<bool> UpdateDriverArrivedAsync(string id);
        

        public Task<bool> IncreaseOrderPriceAsync(string id, decimal amount);

        public Task<bool> IncrementPriceAsync(string id);
        
        public Task<bool> DecrementPriceAsync(string id);


        public Task<bool> CompleteOrderAsync(string id);

        public Task<bool> MakeOrderInWaitingAsync(string id);

        public Task<bool> Delete(string orderId);

    }
}
