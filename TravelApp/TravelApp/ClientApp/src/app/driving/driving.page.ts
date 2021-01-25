import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { IonInfiniteScroll } from '@ionic/angular';
import { interval, Subject } from 'rxjs';
import { concatMap, startWith } from 'rxjs/operators';
import { Order } from 'src/_models';
import { AccountService } from 'src/_services';
import { OrderService } from 'src/_services/order/order.service';
import { SignalRService } from 'src/_services/signal-r.service';
import { TripService } from 'src/_services/trip/trip.service';

@Component({
  selector: 'app-driving',
  templateUrl: './driving.page.html',
  styleUrls: ['./driving.page.scss'],
})
export class DrivingPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  private readonly getOrdersAction$ = new Subject();

  isDrivingNow = this.accountService.userValue.isDrivingNow;
  verifiedAccount = true;
  isSubmitted = false;
  form: FormGroup;
  loading = false;
  orders: Order[] = [];

  constructor(private route: Router,
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private accountService: AccountService,
    private tripService: TripService,
    public signalRService: SignalRService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();

    if(this.isDrivingNow == true){
      this.route.navigate(['tabs/accepted-order']);
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
    });
  }

  getData(){
    // if(this.isDrivingNow == true){
    //   this.route.navigate(['tabs/accepted-order']);
    // }

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
      this.route.navigate(['tabs/accepted-order']);
      console.log(data);
    })
  }

  goBack() {
    this.route.navigate(['tabs/home']);
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.form.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log('Successfully uploaded your data.')
      this.route.navigate(['tabs/verifying']);
    }

    this.clearForm();
  }


  uploadLicense() {
    console.log('Uploaded drivers license!')
  }

  uploadCarTicket() {
    console.log('Uploaded car ticket!')
  }

  uploadCarPic() {
    console.log('Uploaded car picture!')
  }

  clearForm() {
    this.form.reset({
      'firstName': ''
    })
  }

}
