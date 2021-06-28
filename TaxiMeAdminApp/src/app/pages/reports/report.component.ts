import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '_services';
import { ReportService } from '_services/report.service';

@Component({
    selector: 'report-cmp',
    moduleId: module.id,
    templateUrl: 'report.component.html'
})

export class ReportComponent {
    isLoggedIn;
    reports = [];
    users = [];
    firstName: string;
    lastName: string;
    constructor(private repotService: ReportService,
        private route: Router) { }

    ngOnInit() {
        this.isLoggedIn = localStorage.getItem("user");
        if (!this.isLoggedIn) {
            this.route.navigate(['/login'])
        }
        this.repotService.getAll().subscribe(data => {
            this.reports = data
        });
    }
}
