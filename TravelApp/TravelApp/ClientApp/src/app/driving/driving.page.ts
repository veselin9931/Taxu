import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { Order, Trip } from 'src/_models';
import { AccountService } from 'src/_services';
import { DriverService } from 'src/_services/driver/driver.service';
import { OrderService } from 'src/_services/order/order.service';
import { SignalRService } from 'src/_services/signal-r.service';
import { TripService } from 'src/_services/trip/trip.service';

@Component({
  selector: 'app-driving',
  templateUrl: './driving.page.html',
  styleUrls: ['./driving.page.scss'],
})
export class DrivingPage implements OnInit {
  public currentTrip: Trip;

  form: FormGroup;
  orders: Order[] = [];
  orderId: string;
  location: string;
  totalPrice: number;
  destination: string;
  
  loading = false;
  isSubmitted = false;
  verifiedAccount = false;
  driverId = this.tripService.currentTripDriverId;
  isDrivingNow = this.accountService.userValue.isDrivingNow;
  applicationUserId = this.accountService.userValue.id;

  constructor(private route: Router,
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private accountService: AccountService,
    private tripService: TripService,
    public signalRService: SignalRService,
    private driverService: DriverService) { 
      if(this.isDrivingNow == true){
        this.getAcceptedTrip()
      }
    }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      driverLicense: ['', Validators.required],
      idCardNumber: ['', Validators.required],
      applicationUserId: [''],

    })

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

  get f() { return this.form.controls; }

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
    this.route.navigate(['tabs/home']);
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.form.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      this.form.value.applicationUserId = this.applicationUserId;
      this.driverService.createDriver(this.form.value)
      .subscribe(data => {
        this.clearForm();
        console.log(data);
        console.log('Successfully uploaded your data.')
        this.route.navigate(['tabs/register-car']);

      })
    }

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
      'driverLicense': '',
      'idCardNumber': ''
    })
  }

}
