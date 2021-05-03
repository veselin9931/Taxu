import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { Plugins } from '@capacitor/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Message, Order, Trip } from 'src/_models';
import { AccountService } from 'src/_services';
import { ChatService } from 'src/_services/chat/chat.service';
import { DriverService } from 'src/_services/driver/driver.service';
import { OrderService } from 'src/_services/order/order.service';
import { TripService } from 'src/_services/trip/trip.service';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';

const { Geolocation } = Plugins;
declare var google: any;

@Component({
  selector: 'app-travel-mode',
  templateUrl: './travel-mode.page.html',
  styleUrls: ['./travel-mode.page.scss'],
})
export class TravelModePage implements OnInit {
  public currentTrip: Trip;
  private user = this.accountService.userValue;
  private driverId = this.accountService.userValue.driverId;
  isLoggedIn;
  order: Order;
  orderStatus: string;
  orderTotalPrice: any;
  estimatedDuration: any;
  //Car html properties;
  carModel = "";
  carColor = "";

  //User html properties
  firstName = "";
  lastName = "";

  location: string;
  destination: string;

  messages = this.chatService.messages;
  chatStyle = "";

  subscription: Subscription;

  map: any;
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;

  constructor(private route: Router,
    private orderService: OrderService,
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
    this.checkorder();

    this.chatService.retrieveMappedObject()
      .subscribe((receivedObj: Message) => { this.addToInbox(receivedObj); });

    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(`${environment.signalRUrl}/orderHub`)
      .build();

    connection.start().then(function () {
      console.log('signalR Connected in travel-mode');
    }).catch(function (err) {
      return console.log(err);
    });

    connection.on('BroadcastMessage', () => {
      this.checkorder();
    });
  }

  ionViewDidEnter() {
    this.chatService.stop();
    this.chatService.start();
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

  checkorder() {
    this.subscription = this.orderService.getMyOrder(this.user.id)
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

          if (data.acceptedBy != null) {
            this.getUserById(data.acceptedBy);
            this.getAcceptedTrip(data.acceptedBy);
            this.driverId = data.acceptedBy;
          }
        } else {
          this.orderTotalPrice = 0;
        }

        if (data == null) {
          this.orderService.getLastCompletedOrder(this.user.id)
            .subscribe(x => {
              if (x.isRated == false) {
                this.subscription.unsubscribe();
                this.completedOrderAlert();
                this.orderService.rateOrder(x.id)
                  .subscribe();

              }
            })
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
        this.loadMap(this.mapRef, driverId);
      });
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
        .subscribe(() => {
          this.successAddedFavourite();
        });

    } else {
      console.log('Problem with data occured')
    }
  }

  //MAPS FUNCTIONALLITY
  async loadMap(mapRef: ElementRef, driverId: string) {
    this.accountService.getById(driverId)
      .subscribe(driver => {
        this.driverService.getDriver(driver.driverId)
          .subscribe(data => {
            const driverLatLng = { lat: +data.currentLocationLat, lng: +data.currentLocationLong };

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

      buttons: [
        {
          text: 'Yes',
          role: 'cancel',
          handler: () => {
            this.driverService.voteUp(this.driverId)
              .subscribe(x => {});
              this.route.navigate(['menu/travelling']);
          }
        },
        {
          text: 'No',
          role: 'no',
          handler: () => {
            this.driverService.voteDown(this.driverId)
              .subscribe(x => {});
              this.route.navigate(['menu/travelling']);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.route.navigate(['menu/travelling']);
          }
        },
        {
          text: 'Report a problem',
          role: 'cancel',
          handler: () => {
            this.route.navigate(['menu/report']);
          },
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
