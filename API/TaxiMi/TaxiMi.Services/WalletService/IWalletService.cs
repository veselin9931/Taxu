using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TaxiMi.Infrastructure.ViewModels;
using TaxiMi.Models;

namespace TaxiMi.Services.WalletService
{
    public interface IWalletService
    {
        WalletViewModel GetWallet(string id);

        Wallet GetUserWallet(string userId);

        Task<string> CreateWallet(string applicationUserId);

        Task<bool> DeleteWallet(string id);

        Task<bool> Charge(string userId, decimal money);

        Task<bool> Decrease(string userId, decimal money);

    }
}
