import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Capacitor, Plugins } from '@capacitor/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AnyTxtRecord } from 'dns';
import { interval, Subscription } from 'rxjs';
import { Message, Order, Trip } from 'src/_models';
import { AccountService } from 'src/_services';
import { ChatService } from 'src/_services/chat/chat.service';
import { DriverService } from 'src/_services/driver/driver.service';
import { OrderService } from 'src/_services/order/order.service';
import { ProfitService } from 'src/_services/profit/profit.service';
import { TripService } from 'src/_services/trip/trip.service';
import { WalletService } from 'src/_services/wallet/wallet.service';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import * as signalR from '@aspnet/signalr';
import { environment } from 'src/environments/environment';
// const { Geolocation } = Plugins;
declare var google: any;
@Component({
  selector: 'app-driving-mode',
  templateUrl: './driving-mode.page.html',
  styleUrls: ['./driving-mode.page.scss'],
})
export class DrivingModePage implements OnInit {
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
  subscription: Subscription;

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
    private gps: Geolocation) {
    this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
    this.watchPos();
  }

  ngOnInit() {
    this.isStarted = false;

    this.chatService.retrieveMappedObject()
      .subscribe((receivedObj: Message) => { this.addToInbox(receivedObj); });  // calls the service method to get the new messages sent
    this.getAcceptedTrip();

    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(`${environment.signalRUrl}/orderHub`)
      .build();

    connection.start().then(function () {
      console.log('signalR Connected in travel-mode');
    }).catch(function (err) {
      return console.log(err);
    });

    connection.on('OrderDeleted', () => {
      this.canceledOrder();
    });

    connection.on('BroadcastMessage', () => {
      console.log('kur')
    });
  }


  ionViewDidEnter() {
    if (this.accountService.userValue.isDrivingNow == true) {
      this.getAcceptedTrip();

      this.chatService.stop();
      this.chatService.start();
    }
  }

  async watchPos() {
    let watch = this.gps.watchPosition();

    watch.subscribe((data) => {
      if ('coords' in data) {
        this.driverService.locateDriver(this.accountService.userValue.driverId, data.coords.latitude.toString(), data.coords.longitude.toString())
          .subscribe(x => { });
      }

    })
  }

  async loadMap(mapRef: ElementRef) {
    const userLocationLatLng = { lat: +this.order.locationLat, lng: +this.order.locationLong };
    const options: google.maps.MapOptions = {
      center: new google.maps.LatLng(userLocationLatLng.lat, userLocationLatLng.lng),
      zoom: 15,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    if (mapRef != null) {
      this.map = new google.maps.Map(mapRef.nativeElement, options);
    }

    var icon = {
      url: 'https://www.freeiconspng.com/uploads/-human-male-man-people-person-profile-red-user-icon--icon--23.png',
      scaledSize: new window.google.maps.Size(25, 25),
      anchor: { x: 10, y: 10 }
    };

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(userLocationLatLng),
      icon: icon,
      map: this.map
    });
  }

  async navigateToUserAndCalculateDistance() {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const coordinates = this.gps.getCurrentPosition();
    const myLatLng = { lat: (await coordinates).coords.latitude, lng: (await coordinates).coords.longitude };
    const userLatLng = { lat: this.order.locationLat, lng: this.order.locationLong };
    let userLat = +userLatLng.lat;
    let userLng = +userLatLng.lng;
    directionsService.route(
      {
        origin: {
          lat: myLatLng.lat,
          lng: myLatLng.lng
        },
        destination: {
          lat: userLat,
          lng: userLng,
        },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK") {
          if (Capacitor.getPlatform() === 'ios') {
            console.log('ios platform')
            directionsRenderer.setDirections(response);
            window.open(`http://maps.apple.com/maps?q=${userLat},${userLng}&t=m&dirflg=d`);
            this.isStarted = true;
          }

          if (Capacitor.platform == 'web') {
            directionsRenderer.setDirections(response);
            window.open(`https://www.google.com/maps/dir/?api=1&destination=${userLat},${userLng}&travelmode=driving`);
            this.isStarted = true;
          }

          if (Capacitor.platform == 'android') {
            directionsRenderer.setDirections(response);
            window.open(`https://www.google.com/maps/dir/?api=1&destination=${userLat},${userLng}&travelmode=driving`);
            this.isStarted = true;
          }


        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
    directionsRenderer.setMap(this.map);
  }

  //Set directions to user's destination
  async navigateToPointAndCalculateDistance() {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const coordinates = this.gps.getCurrentPosition();
    const myLatLng = { lat: (await coordinates).coords.latitude, lng: (await coordinates).coords.longitude };
    const userLatLng = { lat: this.order.destinationLat, lng: this.order.destinationLong };
    let userLat = +userLatLng.lat;
    let userLng = +userLatLng.lng;
    directionsService.route(
      {
        origin: {
          lat: myLatLng.lat,
          lng: myLatLng.lng
        },
        destination: {
          lat: userLat,
          lng: userLng,
        },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK") {
          if (Capacitor.getPlatform() == 'ios') {
            console.log('ios platform')
            directionsRenderer.setDirections(response);
            window.open(`http://maps.apple.com/maps?q=${userLat},${userLng}&t=m&dirflg=d`)
            this.startTrip();
          }
          if (Capacitor.getPlatform() == 'android' || Capacitor.getPlatform() == 'web') {
            console.log('android or web platform')

            directionsRenderer.setDirections(response);
            window.open(`https://www.google.com/maps/dir/?api=1&destination=${userLat},${userLng}&travelmode=driving`);
            this.startTrip();

          }
        } else {
          console.log("failed")

          window.alert("Directions request failed due to " + status);
        }
      }
    );
    directionsRenderer.setMap(this.map);
  }

  //CHAT
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

  //Navigate to user and discharge his wallet.
  startTrip() {
    this.tripService.startTrip(this.currentTrip.id)
      .subscribe(trip => {
        if (trip) {
          this.tripStatus = trip.status;
          this.walletService.dischargeWallet(this.applicationUserId, this.tripPriceForDriver)
            .subscribe(x => {
              this.profitService.addToProfit(this.tripPriceForDriver)
                .subscribe(() => { });
            })
        }
      })
  }

  finishTrip() {
    this.tripService.completeTrip(this.currentTrip.id)
      .subscribe(trip => {
        if (trip) {
          this.tripStatus = trip.status;
        }
        this.orderService.completeOrder(this.currentTrip.orderId)
          .subscribe(() => { });

      })

    //trigger the driver's driving now property to false
    let userId = this.accountService.userValue.id;
    let value = this.accountService.userValue.isDrivingNow = false;

    this.accountService.updateDriving(userId, value)
      .subscribe();
    this.isDrivingNow = this.accountService.userValue.isDrivingNow;
    this.route.navigate(['menu/driving'])
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
    const coordinates = this.gps.getCurrentPosition();
    const myLatLng = { lat: (await coordinates).coords.latitude, lng: (await coordinates).coords.longitude };
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
    this.tripService.getTrip(this.driverId)
      .subscribe(x => {
        if (x == null) {
          // this.accountService.updateDriving(this.applicationUserId, false)
          //   .subscribe(() => {
          //   });
          // this.accountService.userValue.isDrivingNow = false;
          // this.canceledOrder();

          return;
        }

        this.tripStatus = x.status;
        this.currentTrip = x;

        this.orderService.getOrderById(x.orderId).subscribe(order => {
          x.order = order;

          this.order = x.order;
          this.loadMap(this.mapRef);

          this.location = order.location;
          this.destination = order.destination;

          this.totalPrice = order.totalPrice;

          this.userLatitude = order.locationLat;
          this.userLongitude = order.locationLong;

          this.userDestinationLat = order.destinationLat;
          this.userDestinationLng = order.destinationLong;

          this.tripDistance = order.tripDistance;
          this.calculateEta(order);

          this.driverService.getDriver(this.accountService.userValue.driverId)
            .subscribe(s => {
              this.tripPriceForDriver = (order.totalPrice * (s.comission / 100));
            })

        })
      });
  }

  async onTheAddress() {
    this.orderService.updateDriverArrived(this.order.id)
      .subscribe(() => { });
  }

  async cancelOrder() {
    this.driverService.cancelOrderFromDriver(this.order.id)
      .subscribe(x => {
        this.accountService.userValue.isDrivingNow = false;
        this.accountService.updateDriving(this.applicationUserId, false)
          .subscribe(() => {
            this.route.navigate(['menu/driving']);
          });
      })
  }

  // async cancelTrip() {
  //   this.tripService.getTrip(this.applicationUserId)
  //     .subscribe(trip => {
  //       this.tripService.cancelTrip(trip.id)
  //         .subscribe(x => {
  //           this.accountService.updateDriving(this.applicationUserId, false)
  //             .subscribe(() => {
  //             });
  //           this.accountService.userValue.isDrivingNow = false;
  //           this.orderService.deleteOrder(trip.orderId)
  //             .subscribe(() => this.route.navigate(['menu/driving']));

  //         });
  //     })
  // }

  async canceledOrder() {
    const popup = await this.alertController.create({
      header: 'Order is cancelled by the customer.',

      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.accountService.userValue.isDrivingNow = false;

            this.accountService.updateDriving(this.applicationUserId, false)
              .subscribe(() => {
                this.route.navigate(['menu/driving']);
              });

          }
        }
      ]
    });
    await popup.present();
  }
}
