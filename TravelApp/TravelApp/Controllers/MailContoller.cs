using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using TravelApp.Models.Email;
using TravelApp.Services.EmailSender;

[Route("api/[controller]")]
[ApiController]
public class MailController : ControllerBase
{
    private readonly IMailService mailService;
    public MailController(IMailService mailService)
    {
        this.mailService = mailService;
    }

    [HttpPost("send")]
    public async Task<IActionResult> SendMail([FromForm] MailRequest request)
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