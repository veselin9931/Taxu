using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using TaxiMi.Models.Email;
using TaxiMi.Services.EmailSender;

[Route("api/[controller]")]
[Authorize]
[ApiController]
public class MailController : ControllerBase
{
    private readonly IMailService mailService;
    public MailController(IMailService mailService)
    {
        this.mailService = mailService;
    }

    [HttpPost("send")]
    public async Task<IActionResult> SendMail(MailRequest request)
    {
        try
        {
            await mailService.SendEmailAsync(request);
            return Ok();
        }
        catch (Exception ex)
        {
            throw new InvalidOperationException(ex.Message);
        }

    }
}