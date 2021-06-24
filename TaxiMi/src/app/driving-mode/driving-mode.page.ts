import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Capacitor, Plugins } from '@capacitor/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Message, Order, Trip } from 'src/_models';
import { AccountService } from 'src/_services';
import { ChatService } from 'src/_services/chat/chat.service';
import { DriverService } from 'src/_services/driver/driver.service';
import { OrderService } from 'src/_services/order/order.service';
import { ProfitService } from 'src/_services/profit/profit.service';
import { TripService } from 'src/_services/trip/trip.service';
import { WalletService } from 'src/_services/wallet/wallet.service';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';
import * as signalR from '@aspnet/signalr';
import { environment } from 'src/environments/environment';
import { CallNumber } from '@ionic-native/call-number/ngx';

const { Geolocation } = Plugins;
declare var google: any;
@Component({
  selector: 'app-driving-mode',
  templateUrl: './driving-mode.page.html',
  styleUrls: ['./driving-mode.page.scss'],
})
export class DrivingModePage implements OnInit, OnDestroy {
  public currentTrip: Trip;
  categoryType;

  tripStatus: string;

  location: string;
  destination: string;

  tripDistance: any;
  tripPriceForDriver: number;

  driverId = this.tripService.currentTripDriverId;
  applicationUserId = this.accountService.userValue.id;
  isDrivingNow = this.accountService.userValue.isDrivingNow;
  isStarted: boolean;

  order: Order;
  orders: Order[] = [];
  closestOrders: Order[] = [];

  totalPrice: number;

  //Map
  map: any;

  address: string;

  userLatitude: any;
  userLongitude: any;

  userDestinationLat: any;
  userDestinationLng: any;

  myLat: string;
  myLng: string;

  distance: string;
  eta: string;

  messages = this.chatService.messages;
  chatStyle = "";

  orderDiv = document.getElementById("orderDiv");
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;


  id: any;
  target: any;
  options: any;

  private subscriptions: Subscription[] = [];


  constructor(private route: Router,
    private orderService: OrderService,
    private accountService: AccountService,
    private tripService: TripService,
    private walletService: WalletService,
    private driverService: DriverService,
    private chatService: ChatService,
    private profitService: ProfitService,
    private translate: TranslateService,
    private popoverController: PopoverController,
    private alertController: AlertController,
    private callNumber: CallNumber) {
    this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);

  }

  ngOnInit() {

    this.id = setInterval(() => {
      this.watchPos();
    }, 3000);

    this.getAcceptedTrip();
    this.isStarted = false;
    this.subscriptions.push(this.chatService.retrieveMappedObject()
      .subscribe((receivedObj: Message) => { this.addToInbox(receivedObj); }));  // calls the service method to get the new messages sent


    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(`${environment.signalRUrl}/orderHub`)
      .build();

    connection.start().then(function () {
      console.log('signalR Connected in driving-mode');
    }).catch(function (err) {
      console.log("Reconnecting in 1 sec.");
      setTimeout(() => connection.start(), 1000);
    });



    connection.on('OrderDeleted', (orderId: string) => {
      this.subscriptions.push(this.orderService.getCanceledOrderById(orderId)
        .subscribe(order => {
          if (order.acceptedBy == this.applicationUserId) {
            this.canceledOrder();
          }
        }))
    });

    connection.on('OrderAccepted', (orderId: string) => {
      this.subscriptions.push(this.orderService.getOrderById(orderId)
        .subscribe(order => {
          if (order.acceptedBy == this.applicationUserId) {
            this.getAcceptedTrip();

          }
        }))
    });

    connection.on('Navigate', (orderId: string) => {
      this.subscriptions.push(this.orderService.getOrderById(orderId)
        .subscribe(order => {
          if (order.acceptedBy == this.applicationUserId) {
            this.getAcceptedTrip();
          }
        }))
    });

    connection.on('LocateDriver', (driverId: string) => {

    });

    connection.on('WalletAction', () => {

    });

    connection.on('CompleteOrder', () => {

    });


  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }

  ionViewDidEnter() {
    if (this.accountService.userValue.isDrivingNow == true) {
      this.getAcceptedTrip();
    }
  }

  async callDriver() {
    let phone = this.order.applicationUser.phone.toString();
    this.callNumber.callNumber(phone, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  async watchPos() {
    let coordinates = await Geolocation.getCurrentPosition();
    const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };
    this.subscriptions.push(this.driverService.locateDriver(this.accountService.userValue.driverId, myLatLng.lat.toString(), myLatLng.lng.toString())
      .subscribe(x => { }));

  }

  async navigateToUserAndCalculateDistance() {
    const userLatLng = { lat: this.order.locationLat, lng: this.order.locationLong };
    let userLat = +userLatLng.lat;
    let userLng = +userLatLng.lng;

    this.subscriptions.push(this.tripService.navigateToUser(this.currentTrip.id, this.order.id)
      .subscribe(() => { }));

    if (Capacitor.platform === 'ios') {
      window.open(`maps://maps.apple.com/maps?q=${userLat},${userLng}&t=m&dirflg=d`);
      this.isStarted = true;
    }

    if (Capacitor.platform == 'android') {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${userLat},${userLng}&travelmode=driving`);
      this.isStarted = true;
    }
    else {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${userLat},${userLng}&travelmode=driving`);
      this.isStarted = true;
    }

  }

  //Set directions to user's destination
  async navigateToPointAndCalculateDistance() {
    const userLatLng = { lat: this.order.destinationLat, lng: this.order.destinationLong };
    let userLat = +userLatLng.lat;
    let userLng = +userLatLng.lng;



    if (Capacitor.platform === 'ios') {
      window.open(`maps://maps.apple.com/maps?q=${userLat},${userLng}&t=m&dirflg=d`);
      this.isStarted = true;
    }

    if (Capacitor.platform == 'android') {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${userLat},${userLng}&travelmode=driving`);
      this.isStarted = true;
    }
    else {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${userLat},${userLng}&travelmode=driving`);
      this.isStarted = true;
    }
    this.subscriptions.push(this.tripService.startTrip(this.currentTrip.id)
      .subscribe(() => {
        this.startTrip();
      }));
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
        var c = this.chatService.broadcastMessage(this.msgDto);
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

  startTrip() {
    this.subscriptions.push(this.tripService.startTrip(this.currentTrip.id)
      .subscribe(trip => {
        if (trip) {
          this.tripStatus = trip.status;

        }
      }))
  }

  finishTrip() {
    this.completeTripAlert();
  }

  async openLanguagePopover(ev) {
    const popover = await this.popoverController.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }

  async calculateEta(order) {
    const directionsService = new google.maps.DirectionsService();
    const coordinates = await Geolocation.getCurrentPosition();
    const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };
    directionsService.route(
      {
        origin: {
          lat: myLatLng.lat,
          lng: myLatLng.lng
        },
        destination: {
          lat: +order.locationLat,
          lng: +order.locationLong,
        },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK") {
          this.eta = response.routes[0].legs[0].duration.text;
          order.km = response.routes[0].legs[0].distance.value / 1000;
          order.distanceText = response.routes[0].legs[0].distance.text;
          order.eta = response.routes[0].legs[0].duration.text;
          this.distance = order.distanceText;
        }
      }
    );
  }

  getAcceptedTrip() {
    this.subscriptions.push(this.tripService.getTrip(this.driverId)
      .subscribe(x => {
        if (x == null) {
          return;
        }
        this.chatService.stop();
        this.chatService.start();
        this.tripStatus = x.status;
        this.currentTrip = x;

        this.subscriptions.push(this.orderService.getOrderById(x.orderId).subscribe(order => {
          if (order != null) {
            x.order = order;

            this.order = x.order;

            this.location = order.location;
            this.destination = order.destination;

            this.totalPrice = order.totalPrice;

            this.userLatitude = order.locationLat;
            this.userLongitude = order.locationLong;

            this.userDestinationLat = order.destinationLat;
            this.userDestinationLng = order.destinationLong;

            this.tripDistance = order.tripDistance;
            this.calculateEta(order);

            this.subscriptions.push(this.driverService.getDriver(this.accountService.userValue.driverId)
              .subscribe(s => {
                this.tripPriceForDriver = (order.totalPrice * (s.comission / 100));
              }))
          }
        }))
      }));
  }

  onTheAddress() {
    this.subscriptions.push(this.orderService.updateDriverArrived(this.order.id)
      .subscribe(() => { }));
  }

  cancelOrder() {
    this.alertForCancel();
  }

  async alertForCancel() {
    this.translate.get(['Are you sure you want to cancel the order?', 'Your rating will decrease!', 'Confirm', 'Cancel'])
      .subscribe(async text => {
        const popup = await this.alertController.create({
          header: text['Are you sure you want to cancel the order?'],
          message: text['Your rating will decrease!'],
          buttons: [
            {
              text: text['Cancel'],
              role: 'cancel'
            },
            {
              text: text['Confirm'],
              handler: () => {
                this.subscriptions.push(this.driverService.cancelOrderFromDriver(this.order.id)
                  .subscribe(x => {
                    this.subscriptions.push(this.tripService.cancelTrip(this.currentTrip.id)
                      .subscribe(() => {
                        this.accountService.userValue.isDrivingNow = false;
                        this.subscriptions.push(this.accountService.updateDriving(this.applicationUserId, false)
                          .subscribe(() => {
                            this.subscriptions.push(this.driverService.voteDown(this.accountService.userValue.driverId)
                              .subscribe(() => {
                                this.route.navigate(['menu/driving']);
                              }))
                          }));
                      }))
                  }));
              }
            }
          ]
        });
        await popup.present();
      })

  }

  async canceledOrder() {
    this.translate.get(['Order is cancelled by the customer.'])
      .subscribe(async text => {
        const popup = await this.alertController.create({
          header: text['Order is cancelled by the customer.'],

          buttons: [
            {
              text: 'Ok',
              handler: () => {
                this.accountService.userValue.isDrivingNow = false;

                this.subscriptions.push(this.accountService.updateDriving(this.applicationUserId, false)
                  .subscribe(() => {
                    this.route.navigate(['menu/driving']);
                  }));
              }
            }
          ]
        });
        await popup.present();
      })

  }


  async completeTripAlert() {
    this.translate.get(['Are you sure you want to finish the trip?', 'Yes', 'No'])
      .subscribe(async text => {
        const popup = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: text['Are you sure you want to finish the trip?'],
          //message: '<img src = "../assets/default.png" width="1px" height="1px">',

          buttons: [
            {
              text: text['No']
            },
            {
              text: text['Yes'],
              handler: () => {
                this.subscriptions.push(this.tripService.completeTrip(this.currentTrip.id)
                  .subscribe(trip => {
                    this.subscriptions.push(this.walletService.dischargeWallet(this.applicationUserId, this.tripPriceForDriver)
                      .subscribe(x => {
                        this.subscriptions.push(this.profitService.addToProfit(this.tripPriceForDriver)
                          .subscribe(() => { }));
                      }))
                    if (trip) {
                      this.tripStatus = trip.status;
                    }
                    this.subscriptions.push(this.orderService.completeOrder(this.currentTrip.orderId)
                      .subscribe(() => { }));

                    //trigger the driver's driving now property to false
                    let userId = this.accountService.userValue.id;
                    let value = this.accountService.userValue.isDrivingNow = false;

                    this.subscriptions.push(this.accountService.updateDriving(userId, value)
                      .subscribe());
                    this.isDrivingNow = this.accountService.userValue.isDrivingNow;
                    this.route.navigate(['menu/driving']);
                  }))
              }
            }
          ]
        });

        await popup.present();
      })

  }
}
