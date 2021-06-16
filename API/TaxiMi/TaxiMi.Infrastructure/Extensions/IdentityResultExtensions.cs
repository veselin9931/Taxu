namespace TaxiMi.Infrastructure.Extensions
{
    using Microsoft.AspNet.Identity;
    using System;
    using System.Linq;
    public static class IdentityResultExtensions
    {
        public static string GetFirstError(this IdentityResult identityResult)
        {
            if (identityResult == null)
            {
                throw new ArgumentNullException(nameof(identityResult));
            }

            return identityResult.Errors.FirstOrDefault();
        }
    }
}
