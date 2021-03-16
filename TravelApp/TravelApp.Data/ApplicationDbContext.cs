using Microsoft.EntityFrameworkCore;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.Extensions.Options;
using TravelApp.Models;

namespace TravelApp.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {

        }

        public DbSet<Car> Cars { get; set; }

        public DbSet<CarType> CarTypes { get; set; }

        public DbSet<Driver> Drivers { get; set; }

        public DbSet<Order> Orders { get; set; }

        public DbSet<FavouriteOrder> FavouriteOrders { get; set; }


        public DbSet<Rating> Ratings { get; set; }

        public DbSet<Reservation> Reservations { get; set; }

        public DbSet<Trip> Trips { get; set; }

        public DbSet<Wallet> Wallets { get; set; }

        public DbSet<Image> Images { get; set; }

        public DbSet<Report> Reports { get; set; }

        public DbSet<ReportType> ReportTypes { get; set; }

        public DbSet<OrderOptions> OrderOptions { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            base.OnModelCreating(modelBuilder);


        }
    }
}