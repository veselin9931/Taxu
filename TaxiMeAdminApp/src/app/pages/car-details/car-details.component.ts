import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '_models';
import { Car } from '_models/car';
import { Driver } from '_models/driver';
import { AccountService } from '_services';
import { CarService } from '_services/car.service';
import { DriverService } from '_services/drver.services';
import { SharedService } from '_services/shared-service/shared.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  carId = this.route.snapshot.params.id;
  car: Car;
  images = [];
  ownerData: User;
  constructor(private route: ActivatedRoute,
    private carService: CarService,
    private driverService: DriverService,
    private accountService: AccountService,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    this.carService.getCar(this.carId)
      .subscribe(car => {
        this.car = car;
        this.driverService.getById(car.driverId)
          .subscribe(driver => {
            this.sharedService.getCarsImages(driver.applicationUserId)
              .subscribe(images => {
                this.images = images;
              })
              this.accountService.getById(driver.applicationUserId)
              .subscribe(owner => {
                this.ownerData = owner;
              })
          })
      })
  }


  confirm(id) {
    this.carService.confirm(id).subscribe(data => {
      console.log(data);
    });
  }

}
