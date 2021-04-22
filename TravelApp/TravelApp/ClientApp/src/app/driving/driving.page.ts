import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { Order } from 'src/_models';
import { AccountService } from 'src/_services';
import { OrderService } from 'src/_services/order/order.service';
import { SignalRService } from 'src/_services/signal-r.service';
import { ProfitService } from 'src/_services/profit/profit.service';
import { TripService } from 'src/_services/trip/trip.service';
import { WalletService } from 'src/_services/wallet/wallet.service';
import { AlertController, PopoverController } from '@ionic/angular';
import { DriverService } from 'src/_services/driver/driver.service';
import { ChatService } from 'src/_services/chat/chat.service';
import { environment } from 'src/environments/environment';
import { Plugins } from '@capacitor/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';

const { Geolocation } = Plugins;
declare var google: any;

@Component({
  selector: 'app-driving',
  templateUrl: './driving.page.html',
  styleUrls: ['./driving.page.scss'],
})
export class DrivingPage implements OnInit {
  categoryType;

  tripPriceForDriver: number;

  applicationUserId = this.accountService.userValue.id;
  isDrivingNow = this.accountService.userValue.isDrivingNow;

  orders: Order[] = [];

  //Map
  distance: string;
  eta: string;

  constructor(private route: Router,
    private orderService: OrderService,
    private accountService: AccountService,
    private tripService: TripService,
    public signalRService: SignalRService,
    private walletService: WalletService,
    private alertController: AlertController,
    private driverService: DriverService,
    private translate: TranslateService,
    private popoverController: PopoverController) {
    this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
  }


  ngOnInit(): void {
    this.categoryType = this.driverService.categoryType;
    this.getData();

    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(`${environment.signalRUrl}/orderHub`)
      .build();

    connection.start().then(function () {
      console.log('signalR Connected in driving');
    }).catch(function (err) {
      return console.log(err);
    });

    connection.on('BroadcastMessage', () => {
      this.getData();
    });
  }

  ionViewDidEnter() {
    this.categoryType = this.driverService.categoryType;
    this.getData();
  }

  //Actively get the driver's location to illustrate the car img on traveller's phone
  // async postLocation() {
  //   const coordinates = await Geolocation.getCurrentPosition();
  //   const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };

  //   this.accountService.getById(this.applicationUserId)
  //     .subscribe(user => {
  //       this.driverService.locateDriver(user.driverId, myLatLng.lat, myLatLng.lng)
  //         .subscribe(x => {
  //           console.log(x);
  //         })
  //     })
  // }


  getData() {
    if(this.accountService.userValue.isDrivingNow === true){
      this.route.navigate(['menu/driving-mode'])
    }
    this.driverService.getDriver(this.accountService.userValue.driverId)
      .subscribe(x => {
        if (this.driverService.categoryType == 'Normal') {
          this.getNormalOrders(x.rating);
        } else if (this.driverService.categoryType == 'Comfort') {
          this.getComfortOrders(x.rating);
        } else if (this.driverService.categoryType == 'Closest') {
          this.getClosestOrders(x.rating);
        } else {
          this.getAllOrders(x.rating);
        }
      })

  }

  getAllOrders(rating) {
    this.orderService.getAllOrders()
      .subscribe(data => {
        if (data == null) {
          return;
        }
        data.forEach(order => this.calculateEta(order));
        this.orders = data;
        this.orders.sort((a, b) => {
          return <any>new Date(b.createdOn) - <any>new Date(a.createdOn);
        });

      })

  }

  //Get normal orders based by rating
  getNormalOrders(rating) {
    this.orderService.getNormalOrders()
      .subscribe(data => {
        if (data == null) {
          return;
        }
        this.orders = data;
        this.orders.forEach(order => this.calculateEta(order));
      })
  }

  //Get comfort orders based by rating
  getComfortOrders(rating) {
    this.orderService.getComfortOrders()
      .subscribe(data => {
        if (data == null) {
          return;
        }
        this.orders = data;
        this.orders.forEach(order => this.calculateEta(order));
      })

  }

  getClosestOrders(rating) {
    this.orderService.getAllOrders()
      .subscribe(data => {
        if (data == null) {
          return;
        }
        
        this.orders = data;
        data.sort((a, b) => a.km - b.km);
        this.orders.forEach(order => this.calculateEta(order));
      })
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
          lat: order.locationLat,
          lng: order.locationLong,
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

  //Accept order and manage the data inside
  acceptOrder(order) {
    this.driverService.getDriverActiveCar(this.accountService.userValue.driverId)
      .subscribe(car => {
        if (car.typeId == 1 && order.carType == 'Comfort') {
          return this.WrongCarAlert();
        } else {
          //Get user's id to get drivers data

          //Get driver's data
          this.driverService.getDriver(this.accountService.userValue.driverId)
            .subscribe(driver => {
              this.tripPriceForDriver = (order.totalPrice * (driver.comission / 100));

              //Get drivers wallet
              this.walletService.getMyWallet(this.applicationUserId)
                .subscribe(wallet => {
                  if (wallet.ammount < this.tripPriceForDriver) {
                    this.NotEnoughCashAlert();
                    return;
                  } else {
                    let applicationUserId = this.accountService.userValue.id;
                    this.accountService.userValue.isDrivingNow = true;
                    this.accountService.updateDriving(this.applicationUserId, true)
                      .subscribe(() => {
                      });

                    this.isDrivingNow = this.accountService.userValue.isDrivingNow;
                    order.acceptedBy = applicationUserId;

                    //Accepting order
                    this.orderService.acceptOrder(order.id, applicationUserId)
                      .subscribe(() => {
                        this.orderService.updateOrderEta(orderId, this.eta)
                          .subscribe();
                      });

                    let orderId = order.id;
                    let data = { orderId, applicationUserId, order };

                    //Creating trip to manage data
                    this.tripService.createTrip(data)
                      .subscribe(() => {
                      });
                      this.route.navigate(['menu/driving-mode'])
                  }
                });
            });
        }
      });
  }

  async openLanguagePopover(ev) {
    const popover = await this.popoverController.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }

  //ALERTS
  async NotEnoughCashAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Balance',
      message: 'Your wallet balance is not enough for this order!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async WrongCarAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Order information',
      message: 'Your car is of type "Normal" but the order desired car type is "Comfort"! ',
      buttons: ['OK']
    });

    await alert.present();
  }

}

//RATING BASED ORDERS .. FOR LATER

// getNormalOrders(rating) {
//   if (rating < 1) {
//     this.orderService.getNormalOrders().subscribe(data => {
//       if (data == null) {
//         return;
//       }
//       this.orders = data;
//     })
//   } else if (rating >= 1 && rating < 2) {
//     this.orderService.getNormalOrders().subscribe(data => {
//       if (data == null) {
//         return;
//       }
//       this.orders = data;
//     })
//   } else if (rating >= 2 && rating < 3) {
//     this.orderService.getNormalOrders().subscribe(data => {
//       if (data == null) {
//         return;
//       }
//       this.orders = data;
//     })
//   } else if (rating >= 3 && rating < 4) {
//     this.orderService.getNormalOrders().subscribe(data => {
//       if (data == null) {
//         return;
//       }
//       this.orders = data;
//     })
//   } else if (rating >= 4) {
//     this.orderService.getNormalOrders().subscribe(data => {
//       if (data == null) {
//         return;
//       }
//       this.orders = data;
//     })
//   }
// }

  //Get all orders based by rating
  // setTimeout(() => {
        //   var orderDiv = document.getElementById("orderDiv");
        //   if (orderDiv != null) {
        //     orderDiv.style.display = 'block'
        //   }
        // }, 40000);
        // here sets the time for distributing orders.