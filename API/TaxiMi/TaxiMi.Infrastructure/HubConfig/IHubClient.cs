﻿using System;
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

        Task MessageGet(string orderId);
        Task OnUpload(string userId);
        
        Task LoggedIn();

        Task AfterLog();
        Task CarAction(string driverId);

        Task WalletAction(string userId);
        Task Voted(string driverId);
        Task CreatedOrder();

        Task CreatedSubOrder();

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

        Task CancelSubOrder(string subOrderId);

        Task AcceptSubOrder(string subOrderId);

        Task InProgressSubOrder(string subOrderId);

        Task FinishSubOrder(string subOrderId);
    }
}
