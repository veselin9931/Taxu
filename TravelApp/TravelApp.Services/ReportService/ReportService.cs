using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelApp.Common.Repositories;
using TravelApp.Infrastructure.InputModels.ReportInput;
using TravelApp.Models;

namespace TravelApp.Services.ReportService
{
    public class ReportService : IReportService
    {
        private readonly IRepository<ReportType> repoTypes;
        private readonly IDeletableEntityRepository<Report> repository;

        public ReportService(IRepository<ReportType> repoTypes, IDeletableEntityRepository<Report> repository)
        {
            this.repoTypes = repoTypes;
            this.repository = repository;
        }

        public async Task<string> Create(CreateReportInputModel model)
        {
            if (model == null)
            {
                return null;
            }

            var repot = new Report()
            {
                Description = model.Description,
                Title = model.Title,
                ReporterId = model.ReporterId,
                SuspectedUserId = model.SuspectedUserId,
                ImgUrl = model.ImgUrl,
                TypeId = model.TypeId
            };

            this.repository.Add(repot);

            var r = await this.repository.SaveChangesAsync();

            if (r > 0)
            {
                return repot.Id;
            }

            return null;
        }

        public async Task<bool> Delete(string id)
        {
            var report = this.repository.All().FirstOrDefault(r => r.Id == id);

            if (repository != null)
            {
                report.IsDeleted = true;

                this.repository.Update(report);
            }

            var r = await this.repository.SaveChangesAsync();

            return r > 0;
        }

        public IEnumerable<Report> GetAll()
         => this.repository.All();

        public Report GetById(string id)
         => this.repository.All().FirstOrDefault(a => a.Id == id);

        public IEnumerable<ReportType> GetRepotTypes()
         => this.repoTypes.All();
    }
}
