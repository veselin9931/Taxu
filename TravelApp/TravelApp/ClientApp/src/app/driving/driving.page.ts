import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { Order, Trip, User } from 'src/_models';
import { AccountService } from 'src/_services';
import { OrderService } from 'src/_services/order/order.service';
import { SignalRService } from 'src/_services/signal-r.service';
import { TripService } from 'src/_services/trip/trip.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-driving',
  templateUrl: './driving.page.html',
  styleUrls: ['./driving.page.scss'],
})
export class DrivingPage implements OnInit {
  public currentTrip: Trip;
  
  orders: Order[] = [];
  orderId: string;
  location: string;
  totalPrice: number;
  destination: string;
  appUserDriver: User;
  
  loading = false;
  isSubmitted = false;
  verifiedAccount = false;
  driverId = this.tripService.currentTripDriverId;
  isDrivingNow = this.accountService.userValue.isDrivingNow;
  applicationUserId = this.accountService.userValue.id;
  constructor(private route: Router,
    private orderService: OrderService,
    private accountService: AccountService,
    private tripService: TripService,
    public signalRService: SignalRService,
    private locationPage: Location) { 
      if(this.isDrivingNow == true){
        this.getAcceptedTrip()
      }
    }

  ngOnInit(): void {
    this.getData();

    if(this.isDrivingNow == true){
      this.getAcceptedTrip()
    }

    //SignalR data logic:
    const connection = new signalR.HubConnectionBuilder()
    .configureLogging(signalR.LogLevel.Information)
    .withUrl('https://localhost:44329/orderHub', {
          skipNegotiation: true,
          transport: signalR.HttpTransportType.WebSockets
        })
    .build();

    connection.start().then(function() {
      console.log('signalR Connected');
    }).catch(function(err){
      return console.log(err.toString());
    });

    connection.on('BroadcastMessage', () => {
      this.getData();
      this.getAcceptedTrip();
    });
  }

  getData(){
    this.orderService.getAllOrders().subscribe(data => {
      this.orders = data;
      console.log("Driving page orders")
      console.log(this.orders)
    })
  }

  acceptOrder(order){
    let applicationUserId = this.accountService.userValue.id;
    let value = this.accountService.userValue.isDrivingNow = true;

    this.accountService.updateDriving(applicationUserId, value)
    .subscribe(data => {
      console.log(data)
    });

    this.isDrivingNow = this.accountService.userValue.isDrivingNow;
    order.acceptedBy = applicationUserId;

    this.orderService.acceptOrder(order.id, applicationUserId)
    .subscribe(data => {
      console.log(data);
    })

    let orderId = order.id;

    let data = {orderId, applicationUserId, order};

    this.tripService.createTrip(data)
    .subscribe(data => {
      //this.route.navigate(['tabs/accepted-order']);
      console.log(data);
    })

    this.route.navigateByUrl('tabs/driving', { skipLocationChange: true });
  
  }

  getAcceptedTrip(){
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
      window.location.reload();
    });
     
  }

  goBack() {
    this.locationPage.back();
  }

}
