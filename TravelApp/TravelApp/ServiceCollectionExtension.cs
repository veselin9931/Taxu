using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelApp.Common.Repositories;
using TravelApp.Data.Repositories;
using TravelApp.Services.Account;
using TravelApp.Services.OrderService;

namespace TravelApp
{
    public static class ServiceCollectionExtension
    {
        public static IServiceCollection RegisterCustomServices(this IServiceCollection services)
        {
            services.AddTransient<IAccountService, AccountService>();
            services.AddTransient<IOrderService, OrderService>();

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
    }
}
