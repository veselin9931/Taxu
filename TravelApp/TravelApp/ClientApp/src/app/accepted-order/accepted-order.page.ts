import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/_services';
import { TripService } from 'src/_services/trip/trip.service';

@Component({
  selector: 'app-accepted-order',
  templateUrl: './accepted-order.page.html',
  styleUrls: ['./accepted-order.page.scss'],
})
export class AcceptedOrderPage implements OnInit {
  isDrivingNow = this.accountService.userValue.isDrivingNow;
  
  orderId = this.tripService.currentTripOrderId;
  driverId = this.tripService.currentTripDriverId;
  order = this.tripService.currentOrder;

  constructor(private accountService: AccountService,
    private route: Router,
    private tripService: TripService) { }

  ngOnInit() {
    this.tripService.getTrip(this.orderId, this.driverId)
    .subscribe(x => {
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
    this.route.navigate(['tabs/home']);
  }
}
