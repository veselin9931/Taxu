import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { AlertController } from '@ionic/angular';
import { Order, Trip, User } from 'src/_models';
import { Car } from 'src/_models/car';
import { AccountService, AlertService } from 'src/_services';
import { DriverService } from 'src/_services/driver/driver.service';
import { OrderService } from 'src/_services/order/order.service';
import { TripService } from 'src/_services/trip/trip.service';

@Component({
  selector: 'app-travelling',
  templateUrl: './travelling.page.html',
  styleUrls: ['./travelling.page.scss'],
})
export class TravellingPage implements OnInit {
  public currentTrip: Trip;
  isLoggedIn;
  order: Order;
  userId: string;
  form: FormGroup;
  driverData: User;
  activeCarData: Car;
  lastOrder: Order;

  //Car html properties;
  carModel = "";
  carColor = "";

  //User html properties
  firstName = "";
  lastName = "";

  orderStatus = false;
  isSubmitted = false;
  isCompleted = false;
  isAccepted = false;

  constructor(private formBuilder: FormBuilder,
    private route: Router,
    private orderService: OrderService,
    private alertService: AlertService,
    private accountService: AccountService,
    private tripService: TripService,
    private driverService: DriverService,
    private alertController: AlertController) {
    this.userId = this.accountService.userValue.id;
  }

  ngOnInit() {
    this.checkorder();

    this.form = this.formBuilder.group({
      applicationUserId: [''],
      location: ['', Validators.required],
      destination: ['', Validators.required],
      increasePrice: [0]
    })

    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl('https://localhost:44329/orderHub', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .build();

    connection.start().then(function () {
      console.log('signalR Connected in travelling');
    }).catch(function (err) {
      return console.log(err.toString());
    });

    connection.on('BroadcastMessage', () => {
      this.checkorder();
    });

  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.form.value.increasePrice = (+this.form.value.increasePrice);
    let userId = this.accountService.userValue.id;
    this.form.value.applicationUserId = userId;

    this.isSubmitted = true;
    if (!this.form.valid) {
      return false;
    } else {
      this.orderService.createOrder(this.form.value)
        .subscribe(() => {
          this.alertService.success('You have created an order.', { autoClose: true });
          this.isCompleted = true;
        })
    }
  }

  checkorder() {
    this.orderService.getMyOrder(this.userId)
      .subscribe(data => {
        console.log(`Travelling page data`)
        
        if(data == null){
          console.log('Still no order!')
          return;
        }
        //get accepted by user id
        this.order = data;
        
        this.orderStatus = data.isAccepted
        
        console.log(data)
        
        this.isAccepted = data.isAccepted;
        
        if (this.orderStatus == false) {
          this.isCompleted = true;
        }
        
        if (this.orderStatus == true) {
          this.isCompleted = false;
          this.isSubmitted = false;
          this.clearForm();
          
          console.log('your order is accepted')
          this.orderService.order = data;

          if(data.acceptedBy != null){
            this.getUserById(data.acceptedBy);
            this.getAcceptedTrip(data.acceptedBy);
          }
        }
      },
        error => {
          console.log(error)
        })
  }

  getUserById(driverId: string) {
    this.accountService.getById(driverId)
      .subscribe(userData => {
        this.firstName = userData.firstName;
        this.lastName = userData.lastName;
        this.driverService.getDriverActiveCar(userData.driverId)
        .subscribe(car => {
          this.carModel = car.model;
          this.carColor = car.color;
        })
      })
  }

  getAcceptedTrip(driverId: string) {
    this.tripService.getTrip(driverId)
      .subscribe(x => {
        if(x == null){
          console.log("Error occured");
          return;
        }

        console.log("Trip data")
        console.log(x);
        this.currentTrip = x;
      });
  }

  completeOrder() {
    this.orderService.completeOrder(this.order.id)
      .subscribe(data => {
        console.log(data)
      });

    // this.tripService.completeTrip(this.currentTrip.id)
    //   .subscribe(data => {
    //     console.log('Completed trip')
    //   })

    // this.accountService.updateDriving(this.order.acceptedBy, false)
    //   .subscribe(data => {
    //     console.log('Successfull updated driver data!')
    //   });
  }

  cancelOrder() {
    this.orderService.getMyOrder(this.userId)
      .subscribe(data => {
        this.orderService.deleteOrder(data.id)
          .subscribe(order => {
            this.isCompleted = false;
            console.log('Canceled order:');
            console.log(order);
          })
        this.clearForm();
      })


  }

  logout() {
    this.accountService.logout();
    this.isLoggedIn = "";
    this.route.navigate(['tabs/home'])
    .then(() => {
      window.location.reload();
    })
  }

  clearForm() {
    this.form.reset({
      'location': '',
      'destination': '',
      'increaseAmount': ''
    })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Order completed',
      message: 'You have reached your destination!',
      buttons: ['OK']
    });

    await alert.present();
  }

}
