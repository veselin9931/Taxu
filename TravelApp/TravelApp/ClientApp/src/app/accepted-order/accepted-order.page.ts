import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/_models';
import { AccountService } from 'src/_services';
import { TripService } from 'src/_services/trip/trip.service';

@Component({
  selector: 'app-accepted-order',
  templateUrl: './accepted-order.page.html',
  styleUrls: ['./accepted-order.page.scss'],
})
export class AcceptedOrderPage implements OnInit {
  isDrivingNow = this.accountService.userValue.isDrivingNow;
  
  order = "";
  orderId = "";
  driverId = this.tripService.currentTripDriverId;
  

  constructor(private accountService: AccountService,
    private route: Router,
    private tripService: TripService) { 
      this.orderId = this.tripService.currentTripOrderId; 
      this.order = this.tripService.currentOrder;
      console.log('thepage  ')
      this.ngOnInit();
    }

  ngOnInit() {
    this.order = this.tripService.currentOrder;
    this.orderId = this.tripService.currentTripOrderId;

    this.tripService.getTrip(this.driverId)
    .subscribe(x => {
      console.log("Trip data")
      console.log(x);
    });
  }

  finishTrip(){
    //trigger the driver's driving now property to false

    let driverId = this.accountService.userValue.id;
    let value = this.accountService.userValue.isDrivingNow = false;
    this.accountService.updateDriving(driverId, value)
    .subscribe(data => {
      this.route.navigate(['tabs/driving']);
      console.log(data)
    });
  }

  goBack() {
    this.route.navigate(['tabs/driving']);
  }
}
