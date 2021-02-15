using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using TravelApp.Data;
using TravelApp.Models;
using TravelApp.Services;
using TravelApp.Services.OrderService;
using TravelApp.Infrastructure;
using TravelApp.Data.Seeding;
using CloudinaryDotNet;

namespace TravelApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }    

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(Microsoft.Extensions.DependencyInjection.IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(
                    Configuration.GetConnectionString("DefaultConnection")));

            services.AddIdentity<ApplicationUser, IdentityRole>(cfg =>
            {
                cfg.User.RequireUniqueEmail = true;
            })
               .AddEntityFrameworkStores<ApplicationDbContext>();



            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddCookie()
            .AddJwtBearer(cfg =>
               {
                  
                   cfg.TokenValidationParameters = new TokenValidationParameters()
                   {
                       ValidIssuer = this.Configuration["Tokens:Issuer"],
                       ValidAudience = this.Configuration["Tokens:Audience"],
                       IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this.Configuration["Tokens:Key"]))
                   };
               });

           
            services.Configure<IdentityOptions>(options =>
            {
                options.Password.RequiredLength = 3;
                options.Password.RequireDigit = false;
                options.Password.RequireLowercase = false;
                options.Password.RequireUppercase = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequiredUniqueChars = 0;

            });

            services.AddCors(options => options.AddPolicy("AllowAll", p => p.AllowAnyOrigin()
                                                             .AllowAnyMethod()
                                                              .AllowAnyHeader()));

            //services.AddCors();

            services.AddSignalR();

            services.AddControllers()
                .AddNewtonsoftJson(options =>
                 options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);

            services.RegisterRepositoryServices();

            services.RegisterCloudinary(Configuration);

            services.RegisterCustomServices();


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                var dbContext = serviceScope.ServiceProvider.GetRequiredService<ApplicationDbContext>();

                if (env.IsDevelopment() || env.IsProduction())
                {
                    dbContext.Database.Migrate();
                }

                new ApplicationDbContextSeeder()
                    .SeedAsync(dbContext, serviceScope.ServiceProvider)
                    .GetAwaiter()
                    .GetResult();
            }

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors("AllowAll");

            //app.UseCors("corsAllowAllPolicy");


            app.UseHttpsRedirection();

            app.UseRouting();

            //app.UseCors(x => x
              // .AllowAnyMethod()
               //.AllowAnyHeader()
               //.SetIsOriginAllowed(origin => true)
               //.AllowCredentials());


            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapHub<OrderHub>("/orderHub");
            });
        }      
    }


}
