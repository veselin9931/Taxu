import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, Image } from '_models';
import { Car } from '_models/car';
import { Driver } from '_models/driver';
import { AccountService } from '_services';
import { CarService } from '_services/car.service';
import { DriverService } from '_services/drver.services';
import { SharedService } from '_services/shared-service/shared.service';

@Component({
  selector: 'app-user-details',
  moduleId: module.id,
  templateUrl: 'user-details.component.html'
})
export class UserDetailsComponent implements OnInit {
  isLoggedIn;
  driverId = this.route.snapshot.params.id;
  driver: Driver;
  user: User;
  cars: Car[];
  images: Image[];
  carImages: Image[];

  constructor(private accountService: AccountService,
    private driverService: DriverService,
    private router: Router,
    private route: ActivatedRoute,
    private carService: CarService,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem("user");
    if (!this.isLoggedIn) {
      this.router.navigate(['/login'])
    }
    this.getDriver();
    this.getDriverCars();
    this.getDriverDocuments();
    this.getDriverCarImages();
  }

  getDriver() {
    this.driverService.getById(this.driverId)
      .subscribe(driver => {
        console.log('Driver data')
        console.log(driver);
        this.driver = driver;
        this.accountService.getById(driver.applicationUserId)
          .subscribe(user => {
            console.log('User data')
            console.log(user);
            this.user = user;
          })
      })
  }

  getDriverCars() {
    this.carService.getDriverCars(this.driverId)
      .subscribe(cars => {
        console.log('Driver cars')
        console.log(cars);
        this.cars = cars;
      })
  }

  getDriverCarImages() {
    this.driverService.getById(this.driverId)
      .subscribe(driver => {
        this.sharedService.getCarsImages(driver.applicationUserId)
          .subscribe(cars => {
            this.carImages = cars;
          })
      })
  }

  getDriverDocuments() {
    this.driverService.getById(this.driverId)
      .subscribe(driver => {
        this.sharedService.getDriverDocuments(driver.applicationUserId)
          .subscribe(docs => {
            this.images = docs;
            console.log('Docs here');
            console.log(docs)
          })
      })
  }

  confirmDriver(id) {
    this.driverService.confirmDriver(id).subscribe(data => {
      console.log(data);
    });
  }
  confirm(id) {
    this.carService.confirm(id).subscribe(data => {
      console.log(data);
    });
  }
}
