import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { Plugins } from '@capacitor/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { title } from 'process';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Message, Order, Trip } from 'src/_models';
import { AccountService } from 'src/_services';
import { ChatService } from 'src/_services/chat/chat.service';
import { DriverService } from 'src/_services/driver/driver.service';
import { OrderService } from 'src/_services/order/order.service';
import { TripService } from 'src/_services/trip/trip.service';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { HttpTransportType } from '@aspnet/signalr';
const { Geolocation, LocalNotifications } = Plugins;
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
  private orderAcceptedBy: any;
  isLoggedIn;
  order: Order;
  orderStatus: string;
  tripStatus: string;
  orderTotalPrice: any;
  estimatedDuration: any;
  //Car html properties;
  carModel = "";
  carColor = "";

  //User html properties
  firstName = "";
  lastName = "";
  phoneNumber: any;

  location: string;
  destination: string;
  totalPrice: any;
  messages = this.chatService.messages;
  chatStyle = "";
  isDriverArrived: any;
  private subscriptions: Subscription[] = [];
  maxTime: any = 30000;
  startTime: any;
  timer: any;
  hidevalue: any;
  minutes: any;
  secsDiff: any;
  seconds: any;
  map: any;
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;

  constructor(private route: Router,
    private orderService: OrderService,
    public accountService: AccountService,
    private tripService: TripService,
    private driverService: DriverService,
    private alertController: AlertController,
    private chatService: ChatService,
    private translate: TranslateService,
    private popoverController: PopoverController,
    private callNumber: CallNumber) {
    this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
  }


  ngOnInit() {
    this.checkorder();
    // this.chatService.stop();
    // this.chatService.start();

    this.chatService.retrieveMappedObject()
      .subscribe((receivedObj: Message) => { this.addToInbox(receivedObj); });

    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(`${environment.signalRUrl}/orderHub`)
      .build();

    connection.start().then(function () {
      console.log('signalR Connected in travel-mode');
    }).catch(function (err) {
      console.log("Reconnecting in 1 sec.");
      setTimeout(() => connection.start(), 1000);
    });

    connection.on('BroadcastMessage', () => {
      console.log('broadcasted from travel-mode')
    });

    connection.on('StartTrip', () => {
      this.checkorder();
    });

    connection.on('Navigate', () => {
      this.checkorder();
    });

    connection.on('OrderAccepted', (orderId: string) => {
      this.subscriptions.push(this.orderService.getOrderById(orderId)
        .subscribe(order => {
          if (order.id == this.order.id && order.status == 'Accepted') {
            this.presentOrderAcceptedNotification();
          }
        }))
    });

    connection.on('OrderWaiting', (orderId) => {
      this.subscriptions.push(this.orderService.getMyOrder(this.user.id)
        .subscribe(order => {
          if (order.id == orderId) {
            this.canceledOrder();
          }
        }))
    });

    // connection.on('LocateDriver', (driverId) => {
    //   this.subscriptions.push(this.orderService.getMyOrder(this.user.id)
    //     .subscribe(x => {
    //       this.subscriptions.push(this.driverService.getDriver(driverId)
    //         .subscribe(driver => {
    //           if (driver.id == driverId) {
    //             this.loadMap(this.mapRef, driver.applicationUserId);
    //           }
    //         }))
    //     }))
    // });

    connection.on('NotifyArrived', (orderId: string) => {
      this.subscriptions.push(this.orderService.getOrderById(orderId)
        .subscribe(order => {
          if (order.isDriverArrived == true && this.order.id == orderId) {
            this.presentDriverArrivedNotification();
            this.accountService.userValue.alertTriggered = true;
            this.subscriptions.push(this.accountService.updateAlert(this.user.id, true)
              .subscribe(() => { }));

            this.accountService.userValue.timer = new Date();
            if (this.seconds == 60) {
              this.seconds = 0;
            }
            this.startTimer();
          }
        }))
    });


    connection.on('CompleteOrder', (orderId: string) => {
      if (this.order.id == orderId) {
        this.completedOrderAlert();
      }
    });
  }

  // ionViewDidLeave() {
  //   for (const subscription of this.subscriptions) {
  //     console.log(subscription)
  //     subscription.unsubscribe();
  //   }
  // }

  ionViewDidEnter() {
    this.checkorder();
    if (this.accountService.userValue.alertTriggered == true) {
      this.startTimer();
    }
  }

  checkorder() {
    this.subscriptions.push(this.orderService.getMyOrder(this.user.id)
      .subscribe(data => {
        if (data) {
          this.totalPrice = data.totalPrice;
          this.orderStatus = data.status;
          this.orderAcceptedBy = data.acceptedBy;
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
          this.accountService.userValue.alertTriggered = false;
          this.subscriptions.push(this.accountService.updateAlert(this.user.id, false)
            .subscribe(() => { }));
          this.orderTotalPrice = 0;
        }
      },
        error => {
          console.log(error)
        }))
  }

  startTimer() {
    this.startTime = new Date(this.accountService.userValue.timer);
    setInterval(() => {
      if (this.secsDiff == 300) {
        this.subscriptions.push(this.orderService.increaseOrderPrice(this.order.id, 1)
          .subscribe(() => { }));
        return;
      }
      this.secsDiff = new Date().getTime() - this.startTime.getTime();

      this.secsDiff = Math.floor(this.secsDiff / 1000);
    }, 1000);
  }

  async presentOrderAcceptedNotification() {
    await LocalNotifications.schedule({
      notifications: [
        {
          title: "Order alert",
          body: "Your order is accepted",
          id: 1,
        }
      ]
    })


  }

  async presentDriverArrivedNotification() {
    await LocalNotifications.schedule({
      notifications: [
        {
          title: "Order alert",
          body: "Your driver is on the address",
          id: 2,
        }
      ]
    })
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



  getUserById(driverId: string) {
    this.subscriptions.push(this.accountService.getById(driverId)
      .subscribe(userData => {
        this.firstName = userData.firstName;
        this.lastName = userData.lastName;
        this.driverId = userData.driverId;
        this.phoneNumber = userData.phone;
        this.subscriptions.push(this.driverService.getDriverActiveCar(userData.driverId)
          .subscribe(car => {
            this.carModel = car.model;
            this.carColor = car.color;
          }))
      }))
  }

  callDriver() {
    let phone = this.phoneNumber.toString();
    this.callNumber.callNumber(phone, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  //Get current trip to manage data.
  getAcceptedTrip(userId: string) {
    this.subscriptions.push(this.tripService.getTrip(userId)
      .subscribe(x => {
        if (x == null) {
          console.log("No trip!");
          return;
        }
        this.tripStatus = x.status;
        if (x.status == 'Started') {
          this.accountService.userValue.alertTriggered = false;
          this.subscriptions.push(this.accountService.updateAlert(this.user.id, false)
            .subscribe(() => { }));
        }
        this.currentTrip = x;
        this.loadMap(this.mapRef, userId);
      }));
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
      this.subscriptions.push(this.orderService.addToFavourites(data)
        .subscribe(() => {
          this.successAddedFavourite();
        }));

    } else {
      console.log('Problem with data occured')
    }
  }

  //MAPS FUNCTIONALLITY
  async loadMap(mapRef: ElementRef, driverId: string) {
    this.subscriptions.push(this.accountService.getById(driverId)
      .subscribe(driver => {
        this.subscriptions.push(this.driverService.getDriver(driver.driverId)
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
          }))
      }))
  }

  async cancelTrip() {
    this.alertForCancel();
  }

  async alertForCancel() {
    const popup = await this.alertController.create({
      header: 'Are you sure you want to cancel the order?',
      message: 'Your rating will decrease!',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            this.subscriptions.push(this.tripService.getTrip(this.orderAcceptedBy)
              .subscribe(trip => {
                this.subscriptions.push(this.tripService.cancelTrip(trip.id)
                  .subscribe(x => {
                    this.subscriptions.push(this.accountService.updateDriving(this.orderAcceptedBy, false)
                      .subscribe(() => {
                      }));
                    this.accountService.userValue.isDrivingNow = false;
                    this.subscriptions.push(this.orderService.deleteOrder(trip.orderId)
                      .subscribe(() => this.route.navigate(['menu/travelling'])));

                  }));
              }))
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await popup.present();
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
            this.subscriptions.push(this.driverService.voteUp(this.driverId)
              .subscribe(x => { }));
            this.route.navigate(['menu/travelling']);
            window.location.reload();
          }
        },
        {
          text: 'No',
          role: 'no',
          handler: () => {
            this.subscriptions.push(this.driverService.voteDown(this.driverId)
              .subscribe(x => { }));
            this.route.navigate(['menu/travelling']);
            window.location.reload();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.route.navigate(['menu/travelling']);
            window.location.reload();
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
    this.route.navigate(['menu/travelling']);

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

  async canceledOrder() {
    const popup = await this.alertController.create({
      header: 'Order is cancelled by the driver.',

      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.route.navigate(['menu/travelling']);
          }
        }
      ]
    });
    await popup.present();
  }
}
