using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Common.Repositories;
using TravelApp.Models;

namespace TravelApp.Services.Account
{
    public class AccountService : IAccountService
    {
        private readonly UserManager<ApplicationUser> userRepository;
        private readonly IDeletableEntityRepository<ApplicationUser> repository;

        public AccountService(UserManager<ApplicationUser> userRepository, IDeletableEntityRepository<ApplicationUser> repository)
        {
            this.userRepository = userRepository;
            this.repository = repository;
        }
        public Task<ApplicationUser> Authenticate(string username, string password)
        {
            throw new NotImplementedException();
        }

        public Task<ApplicationUser> Create(ApplicationUser user, string password)
        {
            throw new NotImplementedException();
        }

        public void Delete(string id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<ApplicationUser> GetAll()
        {
            throw new NotImplementedException();
        }

        public ApplicationUser GetById(string id)
        {
            throw new NotImplementedException();
        }
    }
}
