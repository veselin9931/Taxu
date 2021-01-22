using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace TravelApp.Infrastructure.HubConfig
{
    public interface IHubClient
    {
        Task BroadcastMessage();
    }
}
