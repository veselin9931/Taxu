using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Common.Repositories;
using TravelApp.Models;

namespace TravelApp.Services
{
    public class AccountService
    {

        //private UserManager<ApplicationUser> userRepository;
        private readonly IDeletableEntityRepository<ApplicationUser> repository;

        public AccountService(/*UserManager<ApplicationUser> userRepository,*/ IDeletableEntityRepository<ApplicationUser> repository)
        {
           // this.userRepository = userRepository;
            this.repository = repository;
        }

 
        public async Task<ApplicationUser> Authenticate(string username, string password)
        {
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
                return null;

            var user = repository.All().FirstOrDefault(a => a.UserName == username);

            // check if username exists
            if (user == null)
                return null;

            // check if password is correct
            if (!VerifyPasswordHash(password, Convert.FromBase64String(user.PasswordHash), Convert.FromBase64String(user.PasswordSalt)))
                return null;


            // authentication successful
            return user;
        }

        public IEnumerable<ApplicationUser> GetAll()
        {
            return null;// userRepository.Users;
        }

        public ApplicationUser GetById(string id)
        {
            return null; // userRepository.Users.FirstOrDefault(a => a.Id == id);
        }

        public async Task<ApplicationUser> Create(ApplicationUser user, string password)
        {
            // validation
            if (string.IsNullOrWhiteSpace(password))
                throw new ArgumentException("Password is required");

            //if (userRepository.Users.Any(x => x.UserName == user.UserName))
            //    throw new ArgumentException("Username \"" + user.UserName + "\" is already taken");

            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);

            user.PasswordHash = Convert.ToBase64String(passwordHash);
            user.PasswordSalt = Convert.ToBase64String(passwordSalt);

            user.EmailConfirmed = true;

            //var result = await this.userRepository.CreateAsync(user);

            return user;
        }

        public void Delete(string id)
        {
            //var user = userRepository.Users.FirstOrDefault(a => a.Id == id);
            //if (user != null)
            //{
            //    userRepository.DeleteAsync(user);
            //}
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
    }
}
