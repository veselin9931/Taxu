import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService, AlertService } from '_services';
import { CarService } from '_services/car.service';
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
        private driverService: DriverService,
        private carService: CarService,
        private route: Router
        ) { }

        public userStatus;
        public driverData;
        public carData;
        public driverUserData = [];
    ngOnInit(){
        this.accountService.getAll().subscribe(data => {
           this.userStatus = data
          });

          this.driverService.getAll().subscribe(data => {
            this.driverData = data;
           });

           this.carService.getAllUnconfirmedCars()
           .subscribe(cars => {
             this.carData = cars;
           })
    }
    
    
}
