using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TaxiMi.Models.Email;

namespace TaxiMi.Services.EmailSender
{
    public interface IMailService
    {
        Task SendEmailAsync(MailRequest message);

    }
}
