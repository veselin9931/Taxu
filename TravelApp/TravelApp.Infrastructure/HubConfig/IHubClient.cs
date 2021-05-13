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
        
        Task NotifyUser();

        Task NotifyArrived();

        Task NotifyDriver();

        Task OrderAccepted();

        Task OrderCompleted();


        Task MessageReceived(string user, string message);
    }
}
