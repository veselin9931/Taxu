using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Models;

namespace TravelApp.Services.Account
{
    public interface IAccountService
    {
        public Task<ApplicationUser> Authenticate(string username, string password);

        IEnumerable<ApplicationUser> GetAll();

        public ApplicationUser GetById(string id);

        Task<ApplicationUser> Create(ApplicationUser user, string password);

        void Delete(string id);
    }
}
