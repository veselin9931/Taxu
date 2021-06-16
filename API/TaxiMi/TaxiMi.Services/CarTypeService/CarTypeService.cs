using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TaxiMi.Common.Repositories;
using TaxiMi.Models;

namespace TaxiMi.Services.CarType
{
    public class CarTypeService : ICarType
    {
        private readonly IRepository<Models.CarType> repository;

        public CarTypeService(IRepository<Models.CarType> repository)
        {
            this.repository = repository;
        }

        public IEnumerable<string> GetTypes()
        {
            return this.repository.All().ToList().Select(a => a.Name);
            
        }
    }
}
