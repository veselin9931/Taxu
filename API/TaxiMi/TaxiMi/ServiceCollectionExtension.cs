using CloudinaryDotNet;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;
using TaxiMi.Common.Repositories;
using TaxiMi.Data.Repositories;
using TaxiMi.Data.Seeding;
using TaxiMi.Models.Email.Settings;
using TaxiMi.Services.Account;
using TaxiMi.Services.CarService;
using TaxiMi.Services.CarType;
using TaxiMi.Services.DriverService;
using TaxiMi.Services.EmailSender;
using TaxiMi.Services.ImageService;
using TaxiMi.Services.OrderService;
using TaxiMi.Services.OrderService.OrderOptionService;
using TaxiMi.Services.ProfitService;
using TaxiMi.Services.ReportService;
using TaxiMi.Services.TripService;
using TaxiMi.Services.WalletService;

namespace TaxiMi
{
    public static class ServiceCollectionExtension
    {
        public static IServiceCollection RegisterCustomServices(this IServiceCollection services)
        {
            services.AddTransient<ISeeder, RolesSeeder>();
            services.AddTransient<IAccountService, AccountService>();
            services.AddTransient<IOrderService, OrderService>();
            services.AddTransient<ITripService, TripService>();
            services.AddTransient<IWalletService, WalletService>();
            services.AddTransient<ICarService, CarService>();
            services.AddTransient<IDriverService, DriverService>();
            services.AddTransient<ICarType, CarTypeService>();
            services.AddTransient<IImageService, ImageService>();
            services.AddTransient<IReportService, ReportService>();
            services.AddTransient<IProfitService, ProfitService>();
            services.AddTransient<IMailService, MailService>();
            services.AddTransient<IOrderOptionService, OrderOptionsService>();

            services.AddSingleton<IHttpContextAccessor,
            HttpContextAccessor>();

            return services;
        }

        public static IServiceCollection RegisterRepositoryServices(this IServiceCollection services)
        {
            services.AddScoped(typeof(IDeletableEntityRepository<>), typeof(EfDeletableEntityRepository<>));
            services.AddScoped(typeof(IRepository<>), typeof(EfRepository<>));

            return services;
        }

        public static IServiceCollection RegisterCloudinary(this IServiceCollection services, IConfiguration configuration)
        {
            Account cloudinaryCredentials = new Account(
                configuration["Cloudinary:CloudName"],
                configuration["Cloudinary:ApiKey"],
                configuration["Cloudinary:ApiSecret"]);

            Cloudinary cloudinaryUtility = new Cloudinary(cloudinaryCredentials);

            services.AddSingleton(cloudinaryUtility);

            return services;
        }
    }
}
