import { Component, OnInit } from '@angular/core';
import { AccountService, AlertService } from '_services';
import { DriverService } from '_services/drver.services';
@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})


export class UserComponent implements OnInit{
    constructor(
        private alertService: AlertService,
        private accountService: AccountService,
        private driverService: DriverService
        ) { }

        private userStatus;
        private driverData;
    ngOnInit(){


        this.accountService.getAll().subscribe(data => {
           this.userStatus = data

           console.log(data);
          });

          this.driverService.getAll().subscribe(data => {
            this.userStatus = data
 
            console.log(data);
           });
      
    }
}
