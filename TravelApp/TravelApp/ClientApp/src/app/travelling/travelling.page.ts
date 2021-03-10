import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Message, Order, Trip, User } from 'src/_models';
import { Car } from 'src/_models/car';
import { AccountService, AlertService } from 'src/_services';
import { ChatService } from 'src/_services/chat/chat.service';
import { DriverService } from 'src/_services/driver/driver.service';
import { OrderService } from 'src/_services/order/order.service';
import { TripService } from 'src/_services/trip/trip.service';
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;
declare var google: any;

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
  ordercost: string;
  orderTotalDestination: any;
  estimatedDuration: any;
  //Car html properties;
  carModel = "";
  carColor = "";

  //User html properties
  firstName = "";
  lastName = "";

  location: string;
  destination: string;

  statusForOrder = false;
  isSubmitted = false;
  isCompleted = false;
  isAccepted = false;

  map: any;
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;
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
    //this.calculateRoutePrice(this.orderService.userLocationLat, this.orderService.userLocationLong, this.orderService.userDestinationLat, this.orderService.userDestinationLong);
    this.chatService.retrieveMappedObject()
      .subscribe((receivedObj: Message) => { this.addToInbox(receivedObj); });  // calls the service method to get the new messages sent

    this.checkorder();

    this.form = this.formBuilder.group({
      applicationUserId: [''],
      location: this.orderService.chosenLocation,
      locationLat: this.orderService.userLocationLat,
      locationLong: this.orderService.userLocationLong,
      destination: this.orderService.chosenDestination,
      destinationLat: this.orderService.userDestinationLat,
      destinationLong: this.orderService.userDestinationLong,
      totalPrice: this.orderTotalPrice,
      increasePrice: [0],
      status: 'Waiting',
      eta: '',
    })


    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(`${environment.apiUrl}/orderHub`, {
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

  ionViewDidEnter() {
    this.loadMap(this.mapRef);
    this.calculateRoutePrice(this.orderService.userLocationLat, this.orderService.userLocationLong, this.orderService.userDestinationLat, this.orderService.userDestinationLong);
    this.form.get('location').setValue(this.orderService.chosenLocation);
    this.form.get('locationLat').setValue(this.orderService.userLocationLat);
    this.form.get('locationLong').setValue(this.orderService.userLocationLong);

    this.form.get('destination').setValue(this.orderService.chosenDestination);
    this.form.get('destinationLat').setValue(this.orderService.userDestinationLat);
    this.form.get('destinationLong').setValue(this.orderService.userDestinationLong);

    
  }

  msgDto: Message = new Message();
  msgInboxArray: Message[] = [];

  get f() { return this.form.controls; }

  send(): void {
    if (this.msgDto) {
      if (this.msgDto.text.length == 0) {
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

  locationMap() {
    this.route.navigate(['menu/location'])
  }

  destinationMap() {
    this.route.navigate(['menu/destination'])
  }

  async loadMap(mapRef: ElementRef) {
    const coordinates = await Geolocation.getCurrentPosition();
    const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };

    this.orderService.userDestinationLat = myLatLng.lat;
    this.orderService.userDestinationLong = myLatLng.lng;

    const options: google.maps.MapOptions = {
      center: new google.maps.LatLng(myLatLng.lat, myLatLng.lng),
      zoom: 15,
      disableDefaultUI: true,
    };

    this.map = new google.maps.Map(mapRef.nativeElement, options);

  }

  onSubmit() {
    this.calculateRoutePrice(this.orderService.userLocationLat, this.orderService.userLocationLong, this.orderService.userDestinationLat, this.orderService.userDestinationLong);

    this.form.value.totalPrice = this.orderTotalPrice;
    (Math.round(this.orderTotalPrice * 100) / 100).toFixed(2);
    this.form.value.increasePrice = (+this.form.value.increasePrice);
    this.form.value.eta = this.estimatedDuration;
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

  calculateRoutePrice(locLat, locLng, destLat, destLng) {
    const directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin: {
          lat: locLat,
          lng: locLng
        },
        destination: {
          lat: destLat,
          lng: destLng,
        },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK") {
          this.estimatedDuration = response.routes[0].legs[0].duration.text;
          this.orderTotalDestination = response.routes[0].legs[0].distance.value / 1000;
          this.orderTotalPrice = this.orderTotalDestination * 0.90;
          this.ordercost = this.orderTotalPrice.toFixed(2);
          // (Math.round(this.orderTotalPrice * 100) / 100).toFixed(2);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }

  checkorder() {
    this.orderService.getMyOrder(this.userId)
      .subscribe(data => {

        if (data) {
          this.location = data.location;
          this.destination = data.destination;
          (Math.round(this.orderTotalPrice * 100) / 100).toFixed(2);
          this.orderTotalPrice = data.totalPrice;
          this.estimatedDuration = data.eta;
        } else {
          this.orderTotalPrice = 0;
        }

        if (this.orderStatus == 'Completed') {
          this.completedOrderAlert();
          this.orderStatus = null;
        }

        if (data == null) {
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

          if (data.acceptedBy != null) {
            this.getUserById(data.acceptedBy);
            this.getAcceptedTrip(data.acceptedBy);
          }
        }
      },
        error => {
          console.log(error)
        })
  }

  selector($event) {
    let amount = +$event;
    if (amount != 0 || $event != "") {
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
        if (x == null) {
          this.orderStatus = "Completed";
          console.log("No trip!");
          return;
        }
        if (x.status == "Completed") {
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
            this.form.get('location').setValue('Choose starting location')
            this.form.get('destination').setValue('Choose destination')
          })
      })
  }

  logout() {
    this.accountService.logout();
    this.isLoggedIn = "";
    this.route.navigate(['menu/home'])
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
            this.route.navigate(['menu/report']);
          }
        }
      ]
    });

    await popup.present();

  }
}
