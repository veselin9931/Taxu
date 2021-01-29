using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Common.Repositories;
using TravelApp.Infrastructure.InputModels.CarInput;
using TravelApp.Infrastructure.ViewModels;
using TravelApp.Models;

namespace TravelApp.Services.CarService
{
    public class CarService : ICarService
    {
        private readonly IDeletableEntityRepository<Car> repository;

        public CarService(IDeletableEntityRepository<Car> repository )
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
                TehnicalReview = carInputModel.TehnicalReview,
                TypeId = 1
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

        public CarViewModel GetCar(string carId)
        {
            var car = this.repository.All()
                .FirstOrDefault(c => c.Id == carId);

            if (car == null)
            {
                return null;
            }

            return new CarViewModel() { Id = carId , Color = car.Color , Capacity = car.Capacity, Model = car.Model, RegistrationNumber = car.RegistrationNumber};
        }
    }
}
