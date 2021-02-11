import { Component } from '@angular/core';
import { ReportService } from '_services/report.service';

@Component({
    selector: 'report-cmp',
    moduleId: module.id,
    templateUrl: 'report.component.html'
})

export class ReportComponent{ 
    /**
     *
     */
    constructor(private repotService: ReportService) {
       
        
    }

    public reports;

    ngOnInit(){


        this.repotService.getAll().subscribe(data => {
           this.reports = data

           console.log(data);
          });
    }
}
