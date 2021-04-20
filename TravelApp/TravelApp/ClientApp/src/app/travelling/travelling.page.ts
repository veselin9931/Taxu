import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { AlertController, PopoverController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Message, Order, Trip, User } from 'src/_models';
import { Car } from 'src/_models/car';
import { AccountService, AlertService } from 'src/_services';
import { ChatService } from 'src/_services/chat/chat.service';
import { DriverService } from 'src/_services/driver/driver.service';
import { OrderService } from 'src/_services/order/order.service';
import { TripService } from 'src/_services/trip/trip.service';
import { Plugins } from '@capacitor/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';


const { Geolocation } = Plugins;
declare var google: any;
@Component({
  selector: 'app-travelling',
  templateUrl: './travelling.page.html',
  styleUrls: ['./travelling.page.scss'],
})
export class TravellingPage implements OnInit {
  public currentTrip: Trip;
  private user = this.accountService.userValue;
  private driverId = this.accountService.userValue.driverId;
  language: string = this.translate.currentLang;
  isLoggedIn;
  order: Order;
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

  //User html properties
  firstName = "";
  lastName = "";

  location: string;
  destination: string;

  statusForOrder = false;
  isSubmitted = false;
  isCompleted = false;
  isAccepted = false;

  messages = this.chatService.messages;
  chatStyle = "";

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
    private chatService: ChatService,
    private translate: TranslateService,
    private popoverController: PopoverController) {
    this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
  }

  ngOnInit() {
    this.chatService.retrieveMappedObject()
      .subscribe((receivedObj: Message) => { this.addToInbox(receivedObj); });

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
      withStroller: false,
      special: false,
      carType: ''
    })

    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(`${environment.signalRUrl}/orderHub`)
      .build();

    connection.start().then(function () {
      console.log('signalR Connected in travelling');
    }).catch(function (err) {
      return console.log(err);
    });

    connection.on('BroadcastMessage', () => {
      this.checkorder();
    });

  }

  ionViewDidEnter() {
    this.checkorder();
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

  }


  //CHAT FUNCTIONALLITY
  chat() {
    var x = document.getElementById("chat");

    if (x.style.display === "none") {
      x.style.display = "block";
      this.chatStyle = 'block';
    } else {
      x.style.display = "none";
      this.chatStyle = 'none';
    }
  }
  msgDto: Message = new Message();
  msgInboxArray: Message[] = [];

  send(): void {
    if (this.msgDto) {
      if (this.msgDto.text.length == 0) {
        window.alert("Text field is required.");
        return;
      } else {
        this.msgDto.user = `${this.accountService.userValue.firstName} ${this.accountService.userValue.lastName}`;
        this.chatService.broadcastMessage(this.msgDto);                   // Send the message via a service
      }
    }
  }

  clearMessages() {
    this.messages.length = 0;
  }

  addToInbox(obj: Message) {
    let newObj = new Message();
    newObj.user = obj.user;
    newObj.text = obj.text;
    this.msgInboxArray.push(newObj);
    this.msgDto.text = '';
  }

  //GET LOCATION AND DESTINATION AND SEARCH DRIVER
  get f() { return this.form.controls; }

  locationMap() {
    this.route.navigate(['menu/location'])
  }

  destinationMap() {
    this.route.navigate(['menu/destination'])
  }

  onSubmit() {
    this.isSubmitted = true;

    //Gets the loc and lng if we come from "Favourites" page
    if (this.form.value.location == undefined) {
      this.form.controls['location'].setErrors({ 'incorrect': true });
    }

    if (this.form.value.destination == undefined) {
      this.form.controls['destination'].setErrors({ 'incorrect': true });
    }

    if (!this.form.valid) {
      return;
    }

    //Gets information for directions - price, km and etc
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
          // this.estimatedDuration = response.routes[0].legs[0].duration.text;
          this.orderTotalDestination = response.routes[0].legs[0].distance.value / 1000;
          this.orderTotalPrice = this.orderTotalDestination * 0.90;

          //Additional option with additional price
          if (this.form.value.withPets == true) {
            this.orderTotalPrice += 2.20;
          }
          this.form.value.totalPrice = this.orderTotalPrice;
          this.form.value.tripDistance = this.orderTotalDestination;

          this.form.value.increasePrice = (+this.form.value.increasePrice);
          this.form.value.eta = this.estimatedDuration;
          this.form.value.applicationUserId = this.user.id;
          this.isSubmitted = true;
          if (!this.form.valid) {
            return false;
          } else {
            this.orderService.createOrder(this.form.value)
              .subscribe(x => {
                this.alertService.success('You have created an order.', { autoClose: true });
                this.orderStatus = this.form.value.status;
                this.orderService.getMyOrder(this.user.id)
                  .subscribe();
              })
          }
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }

  //Favourites page func

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
        .subscribe(() => {
          this.successAddedFavourite();
        });

    } else {
      console.log('Problem with data occured')
    }
  }

  //Order functionallity - waiting for driver
  checkorder() {
    this.orderService.getMyOrder(this.user.id)
      .subscribe(data => {
        if (data) {
          this.orderStatus = data.status;
          this.orderService.currentOrderId = data.id;
          this.location = data.location;
          this.destination = data.destination;
          (Math.round(this.orderTotalPrice * 100) / 100).toFixed(2);
          this.orderTotalPrice = data.totalPrice;
          this.order = data;
          this.estimatedDuration = data.eta;
          } else {
            this.orderTotalPrice = 0;
          }

          if (this.orderStatus == "Waiting" && data != null) {
            this.isCompleted = true;
  
            // User can increase order price.
            this.selector(0);
          }
  
          if (this.orderStatus == "Accepted" && data != null) {
            this.loadMap(this.mapRef);
            //Reset the data
            this.isCompleted = false;
            this.isSubmitted = false;
            this.clearForm();
  
            this.orderService.order = data;
            this.order = data;
  
            this.chatService.stop();
  
            if (data.acceptedBy != null) {
              this.getUserById(data.acceptedBy);
              this.getAcceptedTrip(data.acceptedBy);
              this.driverId = data.acceptedBy;
            }
        } 

        if (data == null) {
          this.orderService.getLastCompletedOrder(this.user.id)
          .subscribe(x => {
            if(x.isRated == false){
              this.orderService.rateOrder(x.id)
              .subscribe();
              return this.completedOrderAlert();
            }
          })
        }
      },
        error => {
          console.log(error)
        })
  }

  cancelOrder() {
    this.orderService.getMyOrder(this.user.id)
      .subscribe(data => {
        this.orderService.deleteOrder(data.id)
          .subscribe(() => {
            this.isCompleted = false;
            this.orderStatus = null;
            this.orderTotalPrice = 0;
            this.clearForm();
          })
      })
  }

  //Increase the price for the order.
  selector($event) {
    let amount = +$event;
    if (amount != 0 || $event != "") {
      this.orderService.increaseOrderPrice(this.order.id, amount)
        .subscribe()
    }
  }

  //Get data for the driver and his car.
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

  //Get current trip to manage data.
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
        this.loadMap(this.mapRef);
      });
  }

  //MAPS FUNCTIONALLITY
  async loadMap(mapRef: ElementRef) {
    this.accountService.getById(this.order.acceptedBy)
      .subscribe(driver => {
        this.driverService.getDriver(driver.driverId)
          .subscribe(data => {
            const driverLatLng = { lat: data.currentLocationLat, lng: data.currentLocationLong };

            const options: google.maps.MapOptions = {
              center: new google.maps.LatLng(driverLatLng.lat, driverLatLng.lng),
              zoom: 15,
              disableDefaultUI: true,
            };

            if (mapRef != null) {
              this.map = new google.maps.Map(mapRef.nativeElement, options);
            }

            var icon = {
              url: 'https://images.vexels.com/media/users/3/154573/isolated/preview/bd08e000a449288c914d851cb9dae110-hatchback-car-top-view-silhouette-by-vexels.png',
              scaledSize: new window.google.maps.Size(25, 25),
              anchor: { x: 10, y: 10 }
            };

            var marker = new google.maps.Marker({
              position: new google.maps.LatLng(driverLatLng),
              icon: icon,
              map: this.map
            });
          })
      })
  }

  async openLanguagePopover(ev) {
    const popover = await this.popoverController.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }

  //ALERTS
  async completedOrderAlert() {
    const popup = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'You have reached the final destination! Did you enjoyed the trip?',
      //message: '<img src = "../assets/default.png" width="1px" height="1px">',
      inputs: [
        {
          name: 'Like',
          type: 'checkbox',
          label: 'Yes',
          handler: () => {
            this.driverService.voteUp(this.driverId)
              .subscribe(x => {
                window.location.reload();
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
                window.location.reload();
              })
          }
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Report a problem',
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
  //END ALERTS

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
  //END JUNK
}


