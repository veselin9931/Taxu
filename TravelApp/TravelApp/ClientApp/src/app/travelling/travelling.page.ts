import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  orderTotalPrice: any;
  orderTotalDestination: any;
  estimatedDuration: any;
  //Car html properties;
  carModel = "";
  carColor = "";

  driverId: string;
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
      tripDistance: 0,
      userDistance: 0,
      increasePrice: [0],
      status: 'Waiting',
      eta: '',
      withPets: false,
      withStroller:false,
      special: false,
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
      if(this.orderStatus == "Completed"){
        this.completedOrderAlert();
      }
    });

  }
  ionViewDidEnter() {
   
    if (this.orderService.selectedFavourite) {
      this.form.get('location').setValue(this.orderService.selectedFavourite.location);
      this.form.get('locationLat').setValue(this.orderService.selectedFavourite.locationLat);
      this.form.get('locationLong').setValue(this.orderService.selectedFavourite.locationLong);

      this.form.get('destination').setValue(this.orderService.selectedFavourite.destination);
      this.form.get('destinationLat').setValue(this.orderService.selectedFavourite.destinationLat);
      this.form.get('destinationLong').setValue(this.orderService.selectedFavourite.destinationLong);
    } else {
      this.form.get('location').setValue(this.orderService.chosenLocation);
      this.form.get('locationLat').setValue(this.orderService.userLocationLat);
      this.form.get('locationLong').setValue(this.orderService.userLocationLong);

      this.form.get('destination').setValue(this.orderService.chosenDestination);
      this.form.get('destinationLat').setValue(this.orderService.userDestinationLat);
      this.form.get('destinationLong').setValue(this.orderService.userDestinationLong);
    }

    if (this.isCompleted) {
      console.log('should display the loc')
      console.log(this.order)
      this.form.get('location').setValue(this.order.location);
      this.form.get('destination').setValue(this.order.destination);
    }

    if (this.orderStatus == 'Accepted' && this.order != null) {
      this.loadMap(this.mapRef);
    }
    //this.calculateRoutePrice(this.orderService.userLocationLat, this.orderService.userLocationLong, this.orderService.userDestinationLat, this.orderService.userDestinationLong);
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
    this.isSubmitted = true;
    if(this.form.value.location == undefined){
      this.form.controls['location'].setErrors({'incorrect': true});
    }

    if(this.form.value.destination == undefined){
      this.form.controls['destination'].setErrors({'incorrect': true});
    }

    if (!this.form.valid) {
      return;
    }  
    const directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin: {
          lat: this.form.value.locationLat,
          lng: this.form.value.locationLong
        },
        destination: {
          lat: this.form.value.destinationLat,
          lng: this.form.value.destinationLong,
        },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK") {
          
          this.estimatedDuration = response.routes[0].legs[0].duration.text;
          this.orderTotalDestination = response.routes[0].legs[0].distance.value / 1000;
          this.orderTotalPrice = this.orderTotalDestination * 0.90;
          if(this.form.value.withPets == true){
            this.orderTotalPrice += 2.20;
          }
          this.form.value.totalPrice = this.orderTotalPrice;
          this.form.value.tripDistance = this.orderTotalDestination;

          this.form.value.increasePrice = (+this.form.value.increasePrice);
          this.form.value.eta = this.estimatedDuration;
          let userId = this.accountService.userValue.id;
          this.form.value.applicationUserId = userId;
          this.isSubmitted = true;
          if (!this.form.valid) {
            return false;
          } else {
            this.orderService.createOrder(this.form.value)
              .subscribe(x => {
                this.alertService.success('You have created an order.', { autoClose: true });
                this.orderStatus = this.form.value.status;
              })
          }

        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );

  }

  addToFavourite() {
    let data = {
      applicationUserId: this.order.applicationUserId,
      location: this.order.location,
      locationLat: this.order.locationLat,
      locationLong: this.order.locationLong,
      destination: this.order.destination,
      destinationLat: this.order.destinationLat,
      destinationLong: this.order.destinationLong,
      totalPrice: this.order.totalPrice
    };

    if (data) {
      this.orderService.addToFavourites(data)
        .subscribe(x => {
          this.successAddedFavourite();
        });

    } else {
      console.log('Problem with data occured')
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
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }

  addFavourite() {
    console.log(this.order)
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
          this.orderStatus = null;
          this.completedOrderAlert();
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
        })
    }
  }

  getUserById(driverId: string) {
    this.accountService.getById(driverId)
      .subscribe(userData => {
        this.firstName = userData.firstName;
        this.lastName = userData.lastName;
        this.driverId = userData.driverId;
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
            this.clearForm();

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
      'increaseAmount': '',
      'applicationUserId': '',
      'locationLat': 0,
      'locationLong': 0,
      'destinationLat': 0,
      'destinationLong': 0,
      'totalPrice': 0,
      'tripDistance': 0,
      'userDistance': 0,
      'increasePrice': 0,
      'status': 'Waiting',
      'eta': '',
      'withPets': false,
      'withStroller': false,
      'special': false
    })
  }

  async completedOrderAlert() {
    const popup = await this.alertController.create({
      header: 'Did you like the trip?',
      //message: '<img src = "../assets/default.png" width="1px" height="1px">',

      inputs: [
        {
          name: 'Like',
          type: 'checkbox',
          label: 'Yes',
          handler: () => {
            this.driverService.voteUp(this.driverId)
              .subscribe(x => {
                this.route.navigate(['menu/travelling'])
              })
          }
        },
        {
          name: 'Dislike',
          type: 'checkbox',
          label: 'No',
          handler: () => {
            this.driverService.voteDown(this.driverId)
              .subscribe(x => {
                this.route.navigate(['menu/travelling'])
              })
          }
        },
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
  async successAddedFavourite() {
    const popup = await this.alertController.create({
      header: 'Successfully added to favourites!',

      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        }
      ]
    });

    await popup.present();

    }
}


