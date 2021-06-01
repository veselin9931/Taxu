using System;

namespace TravelApp.Common
{
    public interface IDbQueryRunner : IDisposable
    {
        void RunQuery(string query, params object[] parameters);
    }
}
