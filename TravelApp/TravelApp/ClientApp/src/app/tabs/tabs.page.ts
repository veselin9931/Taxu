import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/_services';
import { DriverService } from 'src/_services/driver/driver.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  isLoggedIn;
  driverId: string;
  isVerified: boolean;
  documentConfirmed: boolean;
  driverCars = [];
  constructor(private accountService: AccountService,
    private driverService: DriverService,
    private route: Router) {
    this.isLoggedIn = localStorage.getItem("user");

  }
  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem("user");


    if (this.isLoggedIn) {
      this.route.navigate(['tabs/travelling']);
      this.accountService.getById(this.accountService.userValue.id)
        .subscribe(x => {
          this.isVerified = x.isDriver;
          console.log('User -- ')
          console.log(x)

          if (x.driverId != null) {
            this.driverService.getDriver(x.driverId)
              .subscribe(d => {
                this.driverService.getDriverCars(x.driverId)
                .subscribe(cars => {
                  this.driverCars = cars;
                })
                //get all cars for driver
                //this.driverCars = d.cars;

                this.documentConfirmed = d.documentConfirmation;
                console.log('Driver -- ')
                console.log(d)
              })
          }

        })


    }
  }
}
