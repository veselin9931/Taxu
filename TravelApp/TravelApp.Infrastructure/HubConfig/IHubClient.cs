using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Models;

namespace TravelApp.Infrastructure.HubConfig
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

        Task Navigate(string orderId);

        Task IncrementDecrement(string orderId);

        Task OfferMorePrice(string orderId);

        Task NotifyDriver(string orderId);

        Task StartTrip();

        Task CreateTrip();

        Task NotifyArrived(string orderId);


        Task OrderAccepted(string orderId);

        Task OrderCompleted();

        Task OrderWaiting(string orderId);

        Task OrderDeleted(string orderId);

        Task MessageReceived(string user, string message);
    }
}
