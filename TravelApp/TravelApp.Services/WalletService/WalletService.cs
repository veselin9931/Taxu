using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Common.Repositories;
using TravelApp.Infrastructure.ViewModels;
using TravelApp.Models;

namespace TravelApp.Services.WalletService
{
    public class WalletService : IWalletService
    {
        private readonly IDeletableEntityRepository<Wallet> repository;

        public WalletService(IDeletableEntityRepository<Wallet> repository)
        {
            this.repository = repository;
        }

        public async Task<string> CreateWallet()
        {
            var wallet = new Wallet() 
            { 
              Ammount = 0, 
              Confirmation = false, 
              CreatedOn = DateTime.Now
            };

            this.repository.Add(wallet);

            var result = await this.repository.SaveChangesAsync();

            if (result > 0)
            {
                return wallet.Id;
            }

            //TODO: Add err msg

            return "";
        }

        public async Task<bool> DeleteWallet(string id)
        {
            var wallet = this.repository.All().FirstOrDefault(x => x.Id == id);
            if (wallet != null)
            {
                this.repository.Delete(wallet);
            }
            else
            {
                return false;
            }
            
            //TODO: err msg
             
            var result = await this.repository.SaveChangesAsync();

            if (result > 0)
            {
                return true;
            }

            return false;
        }

        public WalletViewModel GetWallet(string id)
        {
            var wallet =  this.repository.All().FirstOrDefault(w => w.Id == id);

            return new WalletViewModel() { Ammount = wallet.Ammount, Confirmation = wallet.Confirmation };
        }

        public Task<bool> TopUp(string userId, decimal money)
        {
            throw new NotImplementedException();
        }
    }
}
