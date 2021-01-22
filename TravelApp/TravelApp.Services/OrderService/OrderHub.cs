using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Infrastructure.HubConfig;
using TravelApp.Infrastructure.InputModels.OrderInput;

namespace TravelApp.Services.OrderService
{
    public class OrderHub : Hub<IHubClient>
    {
    }
}
