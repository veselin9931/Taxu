import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { AlertController } from '@ionic/angular';
import { Message, Order, Trip, User } from 'src/_models';
import { Car } from 'src/_models/car';
import { AccountService, AlertService } from 'src/_services';
import { ChatService } from 'src/_services/chat/chat.service';
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
  lastOrder: Order;
  driverData: User;
  activeCarData: Car;
  orderStatus: string;
  orderTotalPrice = 0;
  //Car html properties;
  carModel = "";
  carColor = "";

  //User html properties
  firstName = "";
  lastName = "";

  statusForOrder = false;
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
    private alertController: AlertController,
    private chatService: ChatService) {
    this.userId = this.accountService.userValue.id;
  }

  ngOnInit() {
    this.chatService.retrieveMappedObject()
    .subscribe( (receivedObj: Message) => { this.addToInbox(receivedObj);});  // calls the service method to get the new messages sent


    this.checkorder();

    this.form = this.formBuilder.group({
      applicationUserId: [''],
      location: ['', Validators.required],
      destination: ['', Validators.required],
      increasePrice: [0],
      status: 'Waiting'
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

  msgDto: Message = new Message();
  msgInboxArray: Message[] = [];

  get f() { return this.form.controls; }

  send(): void {
    if(this.msgDto) {
      if(this.msgDto.text.length == 0){
        window.alert("Text field is required.");
        return;
      } else {
        this.msgDto.user = `${this.accountService.userValue.firstName} ${this.accountService.userValue.lastName}`
        this.chatService.broadcastMessage(this.msgDto);                   // Send the message via a service
      }
    }
  }

  addToInbox(obj: Message) {
    let newObj = new Message();
    newObj.user = obj.user;
    newObj.text = obj.text;
    this.msgInboxArray.push(newObj);

  }

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
          this.orderStatus = this.form.value.status;
        })
    }
  }

  checkorder() {
    this.orderService.getMyOrder(this.userId)
      .subscribe(data => {

        if(data){
          this.orderTotalPrice = data.totalPrice;
        }else{
          this.orderTotalPrice = 0;
        }
        
        if(this.orderStatus == 'Completed'){
          this.completedOrderAlert();
          this.orderStatus = null;
        }

        if(data == null){
          console.log('Still no order!')
          return;
        }
        //get accepted by user id
        this.order = data;
        
        //this.orderStatus = data.isAccepted
        this.orderStatus = data.status;
        
        //this.isAccepted = data.isAccepted;
        
        if (this.orderStatus == "Waiting") {
          this.statusForOrder = false;
          this.isCompleted = true;
          // User can increase order price here.

          this.selector(0);
         
        }
        
        if (this.orderStatus == "Accepted") {
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

  selector($event){
    let amount = +$event;
    if(amount != 0 || $event != ""){
      this.orderService.increaseOrderPrice(this.order.id, amount)
      .subscribe(x => {
        console.log('Order increased');
      })
    }
    
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
          this.orderStatus = "Completed";
          console.log("No trip!");
          return;
        }
        if(x.status == "Completed"){
          this.orderStatus = "Completed";
        }
        this.currentTrip = x;
      });

      
  }

  cancelOrder() {
    this.orderService.getMyOrder(this.userId)
      .subscribe(data => {
        this.orderService.deleteOrder(data.id)
          .subscribe(order => {
            this.isCompleted = false;
            this.orderStatus = null;
            this.orderTotalPrice = 0;
            console.log('Canceled order:');
            console.log(order);
          })
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

  async completedOrderAlert() {
    const popup = await this.alertController.create({
      header: 'You have reached the destination!',
      message: 'Rate your trip',
      inputs: [
        {
          name: 'Rate',
          placeholder: 'Rate'
        }
      ],
      buttons: [
        {
          text: 'Confirm',
          handler: data => {
            
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Report a problem', //route to reportpage
          role: 'report',
          handler: () => {
            this.route.navigate(['tabs/report']);
          }
        }
      ]
    });
    
    await popup.present();
    
  }
}
