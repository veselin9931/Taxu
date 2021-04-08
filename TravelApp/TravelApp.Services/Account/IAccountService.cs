using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Models;

namespace TravelApp.Services.Account
{
    public interface IAccountService
    {
        public Task<ApplicationUser> Authenticate(string username, string password);

        IEnumerable<ApplicationUser> GetAll();

        public ApplicationUser GetUserByDriverId(string id);

        public ApplicationUser GetById(string id);

        public Task<bool> AddDriverSettings(string userId, string driverId);
        
        public Task<bool> UpdateUserAsync(string id, bool driving);

        Task<ApplicationUser> Create(ApplicationUser user, string password);

        void Delete(string id);
    }
}
