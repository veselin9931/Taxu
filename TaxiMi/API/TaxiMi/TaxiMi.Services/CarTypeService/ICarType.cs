using System;
using System.Collections.Generic;
using System.Text;

namespace TaxiMi.Services.CarType
{
    public interface ICarType
    {
        public IEnumerable<string> GetTypes();
    }
}
