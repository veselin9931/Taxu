using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TaxiMi.Infrastructure.InputModels.ReportInput;
using TaxiMi.Models;

namespace TaxiMi.Services.ReportService
{
    public interface IReportService
    {
        public Report GetById(string id);

        public IEnumerable<Report> GetAll();

        public Task<string> Create(CreateReportInputModel model);

        public Task<bool> Delete(string id);

        public IEnumerable<ReportType> GetRepotTypes();
    }
}
