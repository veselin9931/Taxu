﻿using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using TaxiMi.Models;

namespace TaxiMi.Services.Account
{
    public interface IAccountService
    {
        public Task<ApplicationUser> Authenticate(string username, string password);

        IEnumerable<ApplicationUser> GetAll();

        public ApplicationUser GetUserByDriverId(string id);

        public ApplicationUser GetById(string id);

        public Task<bool> AddDriverSettings(string userId, string driverId);
        
        public Task<bool> UpdateUserAsync(string id, bool driving);

        public Task<bool> UpdateUserTokenAsync(string id, string value);


        public Task<bool> UpdateAlertAsync(string id, bool driving);


        public Task<bool> UpdateUserLanguageAsync(string id, string lng);

        Task<ApplicationUser> Create(ApplicationUser user, string password);

        void Delete(string id);
    }
}
