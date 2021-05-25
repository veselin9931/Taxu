
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelApp.Common.Repositories;
using TravelApp.Infrastructure.InputModels.OrderInput;
using TravelApp.Mappings;
using TravelApp.Models;
using TravelApp.Services.DriverService;
using TravelApp.Services.EmailSender;

namespace TravelApp.Services.OrderService
{

    public class OrderService : IOrderService
    {
        private readonly IDeletableEntityRepository<Order> orderRepository;
        private readonly IDeletableEntityRepository<FavouriteOrder> favOrderRepository;
        private readonly IDriverService driverService;

        public OrderService(IDeletableEntityRepository<Order> orderRepository, IDeletableEntityRepository<FavouriteOrder> favOrderRepository, IDriverService driverService)
        {
            this.orderRepository = orderRepository;
            this.favOrderRepository = favOrderRepository;
            this.driverService = driverService;
        }

        public async Task<bool> AcceptOrderAsync(string id, string driverId)
        {
            var currentOrder = this.GetOrderById(id);

            if (currentOrder != null)
            {
                currentOrder.Status = "Accepted";
                currentOrder.AcceptedBy = driverId;

                this.orderRepository.Update(currentOrder);

                await this.orderRepository.SaveChangesAsync();

                return true;
            }

            throw new InvalidOperationException("Accepting a order failed!");

        }

        public async Task<bool> CompleteOrderAsync(string id)
        {
            var currentOrder = this.GetOrderById(id);

            if (currentOrder != null)
            {
                //currentOrder.IsCompleted = true;
                currentOrder.Status = "Completed";

                this.orderRepository.Update(currentOrder);

                await this.orderRepository.SaveChangesAsync();

                return true;
            }

            throw new InvalidOperationException("Completing a order failed!");
        }

        public async Task<Order> CreateOrderAsync(CreateOrderInputModel input)
        {

            if (input != null)
            {
                var order = new Order()
                {
                    ApplicationUser = input.ApplicationUser,
                    ApplicationUserId = input.ApplicationUserId,
                    Location = input.Location,
                    LocationLat = input.LocationLat,
                    LocationLong = input.LocationLong,
                    Destination = input.Destination,
                    DestinationLat = input.DestinationLat,
                    DestinationLong = input.DestinationLong,
                    IncreasePrice = input.IncreasePrice,
                    TotalPrice = input.TotalPrice,
                    CreatedOn = DateTime.UtcNow,
                    Status = "Waiting",
                    ETA = input.ETA,
                    CarType = input.CarType,
                    UserDistance = input.UserDistance,
                    TripDistance = input.TripDistance,
                    WithPets = input.WithPets,
                    WithStroller = input.WithStroller,
                    Special = input.Special
                };

                this.orderRepository.Add(order);

                await this.orderRepository.SaveChangesAsync();


                return order;
            }

            throw new InvalidOperationException("Creating order failed!");
        }

        public async Task<bool> Delete(string orderId)
        {
           var order =  this.GetOrderById(orderId);
            order.Status = "Canceled";
            this.orderRepository.Delete(order);

            var result = await this.orderRepository.SaveChangesAsync();

            return result > 0;
        }

        public async Task<IList<Order>> GetAllAcceptedOrdersAsync(string userId)
         => await this.orderRepository
            .All()
            .Where(x => x.AcceptedBy == userId && x.Status == "Completed" && x.CreatedOn.Day == DateTime.UtcNow.Day)
            .Include(x => x.ApplicationUser)
            .OrderByDescending(x => x.CreatedOn)
            .ToListAsync();


        public async Task<IList<Order>> GetAllOrdersAsync()
         => await this.orderRepository
            .All()
            .Where(x => x.Status == "Waiting" && x.IsDeleted == false)
            .Include(x => x.ApplicationUser)
            .OrderBy(x => x.CreatedOn) 
            .ToListAsync();

        public Order GetLastCompletedOrderByUserId(string userId)
       => this.orderRepository.All()?.OrderByDescending(x => x.CreatedOn).FirstOrDefault(x => x.AcceptedBy == userId && x.Status == "Completed");

        public Order GetLastAcceptedOrderByUserId(string userId)
        => this.orderRepository.All()?.OrderByDescending(x => x.CreatedOn).FirstOrDefault(x => x.ApplicationUserId == userId && x.Status == "Completed");

        public Order GetOrderById(string id)
        => this.orderRepository.All().FirstOrDefault(x => x.Id == id);

        public Order GetOrderByUserId(string userId)
        => this.orderRepository.All()?.OrderByDescending(x => x.CreatedOn).FirstOrDefault(x => x.ApplicationUserId == userId && x.Status != "Completed");

        public async Task<bool> IncreaseOrderPriceAsync(string id, decimal amount)
        {
            var order = this.GetOrderById(id);

            if (order != null)
            {
                order.TotalPrice += amount;

                this.orderRepository.Update(order);
                await this.orderRepository.SaveChangesAsync();

                return true;
            }

            return false;
        }

        public async Task<string> AddToFavouriteOrder(CreateOrderInputModel input)
        {
            if (input != null)
            {
                var order = new FavouriteOrder()
                {
                    ApplicationUser = input.ApplicationUser,
                    ApplicationUserId = input.ApplicationUserId,
                    Location = input.Location,
                    LocationLat = input.LocationLat,
                    LocationLong = input.LocationLong,
                    Destination = input.Destination,
                    DestinationLat = input.DestinationLat,
                    DestinationLong = input.DestinationLong,
                    IncreasePrice = input.IncreasePrice,
                    TotalPrice = input.TotalPrice,
                    CreatedOn = DateTime.UtcNow
                };

                this.favOrderRepository.Add(order);

                await this.favOrderRepository.SaveChangesAsync();


                return order.ToString();
            }

            throw new InvalidOperationException("Creating order failed!");
        }

        public async Task<IList<FavouriteOrder>> GetAllFavouriteOrdersAsync()
        => await this.favOrderRepository
            .All()
            .Where(x => x.IsDeleted == false)
            .Include(x => x.ApplicationUser)
            .OrderBy(x => x.CreatedOn)
            .ToListAsync();

        public async Task<IList<FavouriteOrder>> GetAllFavouriteOrdersForUserAsync(string userId)
         => await this.favOrderRepository
            .All()
            .Where(x => x.IsDeleted == false && x.ApplicationUserId == userId)
            .Include(x => x.ApplicationUser)
            .OrderBy(x => x.CreatedOn)
            .ToListAsync();

        public async Task<bool> DeleteFavourite(string orderId)
        {
            var favOrder = this.GetFavouriteOrderById(orderId);

            this.favOrderRepository.Delete(favOrder);

            var result = await this.favOrderRepository.SaveChangesAsync();

            return result > 0;
        }

        public FavouriteOrder GetFavouriteOrderById(string id)
        => this.favOrderRepository.All()?.FirstOrDefault(x => x.Id == id);

        public Order GetCurrentOrder(string userId)
            => this.orderRepository.All().FirstOrDefault(x => x.Status == "Accepted" && x.ApplicationUserId == userId || x.Status == "Accepted" && x.AcceptedBy == userId);

        public async Task<IList<Order>> GetNormalOrdersAsync()
        => await this.orderRepository
            .All()
            .Where(x => x.Status == "Waiting" && x.IsDeleted == false && x.CarType == "Normal")
            .Include(x => x.ApplicationUser)
            .OrderBy(x => x.CreatedOn)
            .ToListAsync();

        public async Task<IList<Order>> GetComfortOrdersAsync()
         => await this.orderRepository
            .All()
            .Where(x => x.Status == "Waiting" && x.IsDeleted == false && x.CarType == "Comfort")
            .Include(x => x.ApplicationUser)
            .OrderBy(x => x.CreatedOn)
            .ToListAsync();

        public async Task<bool> UpdateEtaAsync(string id, string value)
        {
            var currentOrder = this.GetOrderById(id);

            if (currentOrder != null)
            {
                currentOrder.ETA = value;

                this.orderRepository.Update(currentOrder);

                await this.orderRepository.SaveChangesAsync();

                return true;
            }

            throw new InvalidOperationException("Updating a order failed!");

        }

        public async Task<bool> UpdateDriverArrivedAsync(string id)
        {
            var order = this.orderRepository.All()?.FirstOrDefault(x => x.Id == id);

            if (order != null)
            {
                order.IsDriverArrived = true;

                await this.orderRepository.SaveChangesAsync();
                this.orderRepository.Update(order);
                return true;
            }
            return false;
        }

        public async Task<bool> UpdatePriceIncreasedAsync(string id, decimal amount, string driverId)
        {
            var order = this.orderRepository.All()?.FirstOrDefault(x => x.Id == id);

            if (order != null)
            {
                order.IncreasedByDriver = amount;
                order.IncreasedBy = driverId;
                await this.orderRepository.SaveChangesAsync();
                this.orderRepository.Update(order);
                return true;
            }
            return false;
        }

        public async Task<bool> UpdateIncreaseAcceptedAsync(string id, bool value)
        {
            var order = this.orderRepository.All()?.FirstOrDefault(x => x.Id == id);
            if (order != null)
            {
                order.IncreaseAccepted = value;
                await this.orderRepository.SaveChangesAsync();
                this.orderRepository.Update(order);
                return true;
            }
            return false;
        }

        public async Task<bool> IncrementPriceAsync(string id)
        {
            var order = this.orderRepository.All()?.FirstOrDefault(x => x.Id == id);
            if (order != null)
            {
                order.TotalPrice += 1;
                await this.orderRepository.SaveChangesAsync();
                this.orderRepository.Update(order);
                return true;
            }
            return false;
        }

        public async Task<bool> DecrementPriceAsync(string id)
        {
            var order = this.orderRepository.All()?.FirstOrDefault(x => x.Id == id);
            if (order != null)
            {
                order.TotalPrice -= 1;
                await this.orderRepository.SaveChangesAsync();
                this.orderRepository.Update(order);
                return true;
            }
            return false;
        }

        public async Task<bool> MakeOrderInWaitingAsync(string id)
        {
            var currentOrder = this.GetOrderById(id);

            if (currentOrder != null)
            {
                //TODO: ERRS
                currentOrder.Status = "Waiting";
                currentOrder.AcceptedBy = null;

                _ = driverService.RemoveDriving(currentOrder.AcceptedBy);

                this.orderRepository.Update(currentOrder);

                await this.orderRepository.SaveChangesAsync();

                return true;
            }

            throw new InvalidOperationException("Problem in status.");
        }
    }
}
