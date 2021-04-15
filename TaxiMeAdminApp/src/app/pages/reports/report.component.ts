import { Component } from '@angular/core';
import { AccountService } from '_services';
import { ReportService } from '_services/report.service';

@Component({
    selector: 'report-cmp',
    moduleId: module.id,
    templateUrl: 'report.component.html'
})

export class ReportComponent{
    reports = [];
    users = [];
    firstName: string;
    lastName: string;
    constructor(private repotService: ReportService,
        private accountService: AccountService) {}

    ngOnInit(){
        this.repotService.getAll().subscribe(data => {
           this.reports = data
            console.log(data)
          });
    }
}
