using System.Collections.Generic;
using System.Threading.Tasks;
using TaxiMi.Infrastructure.InputModels.OrderInput;
using TaxiMi.Models;

namespace TaxiMi.Services.OrderService.SubOrderService
{
    public interface ISubOrderService
    {
        public Task<bool> CompleteOrderAsync(string id);

        public Task<string> CreateSubOrder(CreateSubOrderInputModel input);

        public Task<bool> ChangeSubOrderStatusAsync(string orderId, ChangeSubOrderInputModel input);

        public Task<bool> Delete(string orderId);

        public SuburbanOrder GetByUserId(string userId);

        public SuburbanOrder GetSubOrderById(string id);

        public Task<bool> AcceptSubOrderAsync(string id, string driverId);

        public Task<IList<SuburbanOrder>> GetAllSubOrdersAsync();
    }
}
