using System;

namespace TaxiMi.Common
{
    public interface IDbQueryRunner : IDisposable
    {
        void RunQuery(string query, params object[] parameters);
    }
}
