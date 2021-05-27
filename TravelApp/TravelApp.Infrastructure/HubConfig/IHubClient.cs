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

        Task CreatedOrder();

        Task Navigate();


        Task StartTrip();

        Task NotifyUser();

        Task NotifyArrived();

        Task NotifyDriver();

        Task OrderAccepted();

        Task OrderCompleted();

        Task OrderWaiting();

        Task OrderDeleted();

        Task MessageReceived(string user, string message);
    }
}
