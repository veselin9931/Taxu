using System;
using System.Collections.Generic;
using System.Text;

namespace TravelApp.Services.CarType
{
    public interface ICarType
    {
        public IEnumerable<string> GetTypes();
    }
}
