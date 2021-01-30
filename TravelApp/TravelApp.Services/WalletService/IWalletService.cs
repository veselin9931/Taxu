using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Infrastructure.ViewModels;

namespace TravelApp.Services.WalletService
{
    public interface IWalletService
    {
        WalletViewModel GetWallet(string id);

        Task<string> CreateWallet(string applicationUserId);

        Task<bool> DeleteWallet(string id);

        Task<bool> TopUp(string userId, decimal money);
    }
}
