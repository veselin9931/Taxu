import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order, Trip } from 'src/_models';
import { AccountService } from 'src/_services';
import { OrderService } from 'src/_services/order/order.service';
import { TripService } from 'src/_services/trip/trip.service';

@Component({
  selector: 'app-accepted-order',
  templateUrl: './accepted-order.page.html',
  styleUrls: ['./accepted-order.page.scss'],
})
export class AcceptedOrderPage implements OnInit {
  public currentTrip: Trip;
  orderId: string;
  location: string;
  destination: string;
  totalPrice: number;
  isDrivingNow = this.accountService.userValue.isDrivingNow;
  driverId = this.tripService.currentTripDriverId;
  

  constructor(private accountService: AccountService,
    private route: Router,
    private tripService: TripService,
    private orderService: OrderService) { }

  ngOnInit() {
    this.tripService.getTrip(this.driverId)
    .subscribe(x => {
      console.log("Trip data")
      console.log(x);
      this.currentTrip = x;
      this.orderId = x.orderId;

      this.orderService.getOrderById(x.orderId).subscribe(order => {
        x.order = order;
        this.location = order.location;
        this.destination = order.destination;
        this.totalPrice = order.totalPrice;
      })
    });
  }

  finishTrip(){
    this.tripService.completeTrip(this.currentTrip.id)
    .subscribe(data => {
      console.log('Completed trip')
    })
    
    //trigger the driver's driving now property to false
    let driverId = this.accountService.userValue.id;
    let value = this.accountService.userValue.isDrivingNow = false;

    this.accountService.updateDriving(driverId, value)
    .subscribe(data => {
      this.route.navigate(['tabs/driving']);
    });

  }

  goBack() {
    this.route.navigate(['tabs/driving']);
  }
}
