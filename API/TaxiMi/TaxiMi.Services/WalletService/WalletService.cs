using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaxiMi.Common.Repositories;
using TaxiMi.Infrastructure.ViewModels;
using TaxiMi.Models;

namespace TaxiMi.Services.WalletService
{
    public class WalletService : IWalletService
    {
        private readonly IDeletableEntityRepository<Wallet> repository;
         
        public WalletService(IDeletableEntityRepository<Wallet> repository)
        {
            this.repository = repository;
        }

        public async Task<string> CreateWallet(string applicationUserId)
        {
            var wallet = new Wallet() 
            { 
              ApplicationUserId = applicationUserId,
              Ammount = 0, 
              Confirmation = false, 
              CreatedOn = DateTime.UtcNow
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

        public WalletViewModel GetUserWallet(string userId)
        {
            var wallet = this.repository.All().FirstOrDefault(w => w.ApplicationUserId == userId);

            return new WalletViewModel() { Ammount = wallet.Ammount, Confirmation = wallet.Confirmation };
        }

        public WalletViewModel GetWallet(string id)
        {
            var wallet =  this.repository.All().FirstOrDefault(w => w.Id == id);

            return new WalletViewModel() { Ammount = wallet.Ammount, Confirmation = wallet.Confirmation };
        }

        public async Task<bool> Charge(string userId, decimal money)
        {
            var wallet = this.repository.All().FirstOrDefault(x => x.ApplicationUserId == userId);

            if(wallet != null)
            {
                wallet.Ammount += money;
                this.repository.Update(wallet);
                await this.repository.SaveChangesAsync();
                return true;
            }

            return false;
        }

        public async Task<bool> Decrease(string userId, decimal money)
        {
            var wallet = this.repository.All().FirstOrDefault(x => x.ApplicationUserId == userId);

            if (wallet != null && (wallet.Ammount - money) > 0)
            {
                wallet.Ammount -= money;
                this.repository.Update(wallet);
                await this.repository.SaveChangesAsync();
                return true;
            }

            return false;
        }
    }
}
