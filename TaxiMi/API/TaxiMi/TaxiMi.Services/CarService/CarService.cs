using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaxiMi.Common.Repositories;
using TaxiMi.Infrastructure.InputModels.CarInput;
using TaxiMi.Infrastructure.ViewModels;
using TaxiMi.Mappings;
using TaxiMi.Models;

namespace TaxiMi.Services.CarService
{

    public class CarService : ICarService
    {
        private readonly IDeletableEntityRepository<Car> repository;

        public CarService(IDeletableEntityRepository<Car> repository)
        {
            this.repository = repository;
        }

        public async Task<CarViewModel> CreateCar(CreateCarInputModel carInputModel)
        {
            var car = new Car()
            {
                Capacity = carInputModel.Capacity,
                Color = carInputModel.Color,
                Confirmation = false,
                Model = carInputModel.Model,
                RegistrationNumber = carInputModel.RegistrationNumber,
                TypeId = carInputModel.Type,
                IsActive = false,
                CreatedOn = DateTime.UtcNow
            };

            this.repository.Add(car);

            var result = await this.repository.SaveChangesAsync();
            var viewModel = new CarViewModel() { Id = car.Id, Capacity = car.Capacity, Color = car.Color, Model = car.Model, RegistrationNumber = car.RegistrationNumber };

            if (result > 0)
            {
                return viewModel;
            }

            return null;

            //TODO: Refactor
        }

        public async Task<bool> DeleteCar(string carId)
        {
            var car = await this.repository.GetByIdAsync(carId);

            this.repository.Delete(car);

            var result = await this.repository.SaveChangesAsync();

            return result > 0;
        }

        public Car Get(string carId)
        {
            var car = this.repository.All()
                 .FirstOrDefault(c => c.Id == carId);

            return car;
        }

        public CarViewModel GetCar(string carId)
        {
            var car = this.repository.All()
                .FirstOrDefault(c => c.Id == carId);

            if (car == null)
            {
                return null;
            }

            return new CarViewModel() { Id = carId, Color = car.Color, Capacity = car.Capacity, Model = car.Model, RegistrationNumber = car.RegistrationNumber, DriverId = car.DriverId, Confirmation = car.Confirmation, TypeId = car.TypeId };
        }

        public async Task<IList<Car>> GetAllCarsAsyncForDriver(string driverId)
        => await this.repository
           .All()
           .Where(x => x.DriverId == driverId)
           .ToListAsync();

        public async Task<IList<Car>> GetAllCarsAsync()
         => await this.repository
            .All()
            .Where(x => x.IsDeleted == false)
            .ToListAsync();

        public async Task<IList<Car>> GetUnconfirmedCarsAsync()
         => await this.repository
            .All()
            .Where(x => x.Confirmation == false) 
            .ToListAsync();

        public async Task<bool> ActivateCar(string id, string driverId)
        {
            var currentCar = this.repository.All().FirstOrDefault(x => x.Id == id);

            if (currentCar != null)
            {
                //Activate only this car
                currentCar.IsActive = true;

                this.repository.Update(currentCar);
            }

            var carsWithoutChosen = this.repository.All().Where(x => x.Id != id && x.DriverId == driverId);

            if (carsWithoutChosen != null)
            {
                //Update all other cars value to zero to deselect items.
                foreach (var car in carsWithoutChosen)
                {
                    car.IsActive = false;
                    this.repository.Update(car);
                }
            }
            

            var result = await this.repository.SaveChangesAsync();

            if (result != 0)
            {
                return true;
            }

            return false;

        }

        public async Task<IList<Car>> GetAllCarsForConfirmationAsync(string driverId)
        => await this.repository
            .All()
            .Where(x => x.IsDeleted == false && x.Confirmation == false && x.DriverId == driverId)
            .ToListAsync();

        public async Task<bool> VerifyCar(string id)
        {
           var car = await this.repository.All().FirstOrDefaultAsync(a => a.Id == id);

            car.Confirmation = true;

            this.repository.Update(car);

            var result = await this.repository.SaveChangesAsync();

            return result > 0;
        }

        public Car GetActiveCar(string driverId)
         => this.repository.All()?.FirstOrDefault(x => x.DriverId == driverId && x.IsActive == true);
    }
}
