using Microsoft.EntityFrameworkCore;
using IdentityServer4.EntityFramework.Options;
using Microsoft.Extensions.Options;
using TravelApp.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace TravelApp.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser, Models.ApplicationRole, string>
    {
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions)
        {

        }

        public DbSet<Car> Cars { get; set; }

        public DbSet<CarType> CarTypes { get; set; }

        public DbSet<Driver> Drivers { get; set; }

        public DbSet<Order> Orders { get; set; }

        public DbSet<Rating> Ratings { get; set; }

        public DbSet<Reservation> Reservations { get; set; }

        public DbSet<Trip> Trips { get; set; }

        public DbSet<Wallet> Wallets { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            base.OnModelCreating(modelBuilder);


        }
    }
}
