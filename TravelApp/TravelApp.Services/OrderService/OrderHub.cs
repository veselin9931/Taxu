using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Infrastructure.HubConfig;
using TravelApp.Infrastructure.InputModels.OrderInput;
using TravelApp.Models;

namespace TravelApp.Services.OrderService
{
    public class OrderHub : Hub<IHubClient>
    {
        private readonly IHubContext<OrderHub, IHubClient> hub;

        public OrderHub(IHubContext<OrderHub, IHubClient> hub)
        {
            this.hub = hub;
        }
        public async Task SendMessage(string user, string message)
        {
            await this.hub.Clients.All.MessageReceived(user, message);
        }
    }
}
