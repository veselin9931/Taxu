using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TravelApp.Common.Repositories;
using TravelApp.Models;

namespace TravelApp.Services.CarType
{
    public class CarTypeService : ICarType
    {
        private readonly IRepository<TravelApp.Models.CarType> repository;

        public CarTypeService(IRepository<TravelApp.Models.CarType> repository)
        {
            this.repository = repository;
        }

        public IEnumerable<string> GetTypes()
        {
            return this.repository.All().ToList().Select(a => a.Name);
            
        }
    }
}
