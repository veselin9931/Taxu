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
    private driverService: DriverService,
    private chatService: ChatService,
    private translate: TranslateService,
    private popoverController: PopoverController) {
    this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
  }

  ngOnInit() {
    this.chatService.stop();
    
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
    this.chatService.stop();
    if(this.accountService.userValue.isTravellingNow == true){
      this.route.navigate(['menu/travel-mode'])
    }
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
      this.form.get('location').setValue(this.order.location);
      this.form.get('destination').setValue(this.order.destination);
    }
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

  //Order functionallity - waiting for driver
  checkorder() {
    this.orderService.getMyOrder(this.user.id)
      .subscribe(data => {
        if (data) {
          this.orderService.currentOrderId = data.id;
          this.location = data.location;
          this.destination = data.destination;
          (Math.round(this.orderTotalPrice * 100) / 100).toFixed(2);
          this.orderTotalPrice = data.totalPrice;
          this.estimatedDuration = data.eta;
          
          if (data.status == "Accepted" && data != null) {
            this.accountService.userValue.isTravellingNow = true;
                this.accountService.updateTravel(this.user.id, true)
                .subscribe(() => this.route.navigate(['menu/travel-mode']));
          }

          if (this.orderStatus == "Waiting" && data != null) {
            this.isCompleted = true;
  
            // User can increase order price.
            this.selector(0);
          }
        } else {
          this.orderTotalPrice = 0;
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

  async openLanguagePopover(ev) {
    const popover = await this.popoverController.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
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


