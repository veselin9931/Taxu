using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Models.Email;

namespace TravelApp.Services.EmailSender
{
    public interface IMailService
    {
        Task SendEmailAsync(MailRequest message);

    }
}
