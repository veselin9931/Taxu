using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Common;
using TravelApp.Common.ErrMsg;
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
        public async Task<ApplicationUser> Authenticate(string username, string password)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
                return null;

            var user = repository.All().FirstOrDefault(a => a.UserName == username);

            // check if username exists
            if (user == null)
                 throw new ArgumentException(RegisterErrs.InvalidPassword);

            // check if password is correct
            if (!VerifyPasswordHash(password, Convert.FromBase64String(user.PasswordHash), Convert.FromBase64String(user.PasswordSalt)))
                throw new ArgumentException(RegisterErrs.InvalidPassword);


            // authentication successful
            return user;
        }

        public async Task<ApplicationUser> Create(ApplicationUser user, string password)
        {
            // validation
            if (string.IsNullOrWhiteSpace(password))
                throw new ArgumentException(RegisterErrs.RequiredPass);

            if (userRepository.Users.Any(x => x.UserName == user.UserName))
                throw new ArgumentException("Username \"" + user.UserName + "\" is already taken.");

            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);

            user.PasswordHash = Convert.ToBase64String(passwordHash);
            user.PasswordSalt = Convert.ToBase64String(passwordSalt);

            user.EmailConfirmed = true;

         

            var result = await this.userRepository.CreateAsync(user);

            return user;
        }

        public void Delete(string id)
        {
            var user = userRepository.Users.FirstOrDefault(a => a.Id == id);
            if (user != null)
            {
                userRepository.DeleteAsync(user);
            }
        }

        public IEnumerable<ApplicationUser> GetAll()
        {
            return userRepository.Users.ToArray();
        }

        public ApplicationUser GetById(string id)
        {
            return userRepository.Users.FirstOrDefault(a => a.Id == id);
        }

        private static void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");

            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        private static bool VerifyPasswordHash(string password, byte[] storedHash, byte[] storedSalt)
        {
            if (password == null) throw new ArgumentNullException("password");
            if (string.IsNullOrWhiteSpace(password)) throw new ArgumentException("Value cannot be empty or whitespace only string.", "password");
            if (storedHash.Length != 64) throw new ArgumentException("Invalid length of password hash (64 bytes expected).", "passwordHash");
            if (storedSalt.Length != 128) throw new ArgumentException("Invalid length of password salt (128 bytes expected).", "passwordHash");

            using (var hmac = new System.Security.Cryptography.HMACSHA512(storedSalt))
            {
                var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != storedHash[i]) return false;
                }
            }

            return true;
        }

        public async Task<bool> UpdateUserAsync(string id, bool driving)
        {
            var currentUser = this.GetById(id);

            currentUser.IsDrivingNow = driving;

            this.repository.Update(currentUser);

            var result = await this.repository.SaveChangesAsync();

            if (result != 0)
            {
                return true;
            }

            return false;
        }

        public async Task<bool> UpdateUserLanguageAsync(string id, string lng)
        {
            var currentUser = this.GetById(id);

            currentUser.ChoosenLanguage = lng;

            this.repository.Update(currentUser);

            var result = await this.repository.SaveChangesAsync();

            if (result != 0)
            {
                return true;
            }

            return false;
        }

        public async Task<bool> UpdateUserReloadAsync(string id, bool value)
        {
            var currentUser = this.GetById(id);

            currentUser.Reloaded = value;

            this.repository.Update(currentUser);

            var result = await this.repository.SaveChangesAsync();

            if (result != 0)
            {
                return true;
            }

            return false;
        }

        public async Task<bool> UpdateUserTravelAsync(string id, bool value)
        {
            var currentUser = this.GetById(id);

            currentUser.IsTravellingNow = value;

            this.repository.Update(currentUser);

            var result = await this.repository.SaveChangesAsync();

            if (result != 0)
            {
                return true;
            }

            return false;
        }

        public async Task<bool> AddDriverSettings(string userId, string driverId)
        {
            var user = this.GetById(userId);

            user.IsDriver = true;

            user.DriverId = driverId;

            var result = await this.userRepository.UpdateAsync(user);

            return result.Succeeded;
        }

        public ApplicationUser GetUserByDriverId(string id)
        {
            return this.repository.All()?.FirstOrDefault(x => x.DriverId == id);
        }
    }
}
