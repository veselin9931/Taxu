using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TaxiMi.Models;

namespace TaxiMi.Infrastructure.HubConfig
{
    public interface IHubClient
    {
        Task BroadcastMessage();

        Task CreatedAccount();

        Task LoggedIn();
        Task CarAction(string driverId);

        Task WalletAction(string userId);
        Task Voted(string driverId);
        Task CreatedOrder();

        Task LocateDriver(string driverId);
        Task Navigate(string orderId);

        Task IncrementDecrement(string orderId);

        Task OfferMorePrice(string orderId);

        Task NotifyDriver(string orderId);

        Task StartTrip();

        Task NotifyArrived(string orderId);


        Task OrderAccepted(string orderId);

        Task CompleteOrder(string orderId);

        Task OrderWaiting(string orderId);

        Task OrderDeleted(string orderId);

        Task MessageReceived(string user, string message);
    }
}
