using CloudinaryDotNet;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelApp.Common.Repositories;
using TravelApp.Data.Repositories;
using TravelApp.Data.Seeding;
using TravelApp.Services.Account;
using TravelApp.Services.CarService;
using TravelApp.Services.CarType;
using TravelApp.Services.DriverService;
using TravelApp.Services.EmailSender;
using TravelApp.Services.ImageService;
using TravelApp.Services.OrderService;
using TravelApp.Services.TripService;
using TravelApp.Services.WalletService;

namespace TravelApp
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
            //services.AddTransient<IEmailSender, EmailSender>();

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
