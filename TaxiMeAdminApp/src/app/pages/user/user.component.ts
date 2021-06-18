import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService, AlertService } from '_services';
import { CarService } from '_services/car.service';
import { DriverService } from '_services/drver.services';
@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html',
    styleUrls: ['user.component.css']
})


export class UserComponent implements OnInit {
    isLoggedIn;
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
    ngOnInit() {
        this.isLoggedIn = localStorage.getItem("user");
        if (!this.isLoggedIn) {
            this.route.navigate(['/login'])
        }
        this.driverService.getConfirmed().subscribe(data => {
            data.forEach(driver => {
                this.accountService.getById(driver.applicationUserId)
                .subscribe(user => {
                    driver.firstName = user.firstName;
                    driver.lastName = user.lastName;
                    driver.phone = user.phone;
                    driver.userName = user.userName;
                })
            });
            this.userStatus = data
        });

        this.driverService.getAll().subscribe(data => {
            data.forEach(driver => {
                this.accountService.getById(driver.applicationUserId)
                .subscribe(user => {
                    driver.firstName = user.firstName;
                    driver.lastName = user.lastName;
                })
            });
            this.driverData = data;
            console.log(data)

        });

        this.carService.getAllUnconfirmedCars()
            .subscribe(cars => {
                this.carData = cars;
            })
    }


}
