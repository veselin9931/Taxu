import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { Order } from 'src/_models';
import { AccountService } from 'src/_services';
import { OrderService } from 'src/_services/order/order.service';
import { TripService } from 'src/_services/trip/trip.service';
import { WalletService } from 'src/_services/wallet/wallet.service';
import { AlertController, PopoverController } from '@ionic/angular';
import { DriverService } from 'src/_services/driver/driver.service';
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
  closeOrders: Order[] = [];
  //Map
  distance: string;
  eta: string;

  myLat: string;
  myLng: string;

  constructor(private route: Router,
    private orderService: OrderService,
    private accountService: AccountService,
    private tripService: TripService,
    private walletService: WalletService,
    private alertController: AlertController,
    private driverService: DriverService,
    private translate: TranslateService,
    private popoverController: PopoverController) {
    this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
    this.getMyLocation();
  }


  ngOnInit(): void {
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
    this.getMyLocation();
    this.categoryType = this.driverService.categoryType;
    this.getData();

  }

  async getMyLocation() {
    const coordinates = await Geolocation.getCurrentPosition();
    const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };

    this.myLat = myLatLng.lat.toString();
    this.myLng = myLatLng.lng.toString();

  }


  getData() {
    if (this.accountService.userValue.isDrivingNow === true) {
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
        } else if (this.driverService.categoryType == 'All') {
          this.getAllOrders(x.rating);
        } else if (this.driverService.categoryType == undefined) {
          this.driverService.categoryType == 'All';
          this.getAllOrders(x.rating);
        }
      })

  }

  getAllOrders(rating) {
    // const promise = await new Promise((resolve, reject) => {
    //   this.http.get<Order[]>(`${environment.apiUrl}/api/order`)
    //     .toPromise()
    //     .then((data: any) => {
    //       data.sort((a, b) => {
    //         return <any>new Date(b.createdOn) - <any>new Date(a.createdOn);
    //       });
    //       data.forEach(order => {
    //         order.distanceText = 'Calculating...'
    //         this.calculateEta(order)
    //       });

    //       this.orders = data;
    //       resolve(data);
    //     },
    //       err => {
    //         reject(err);
    //       })
    // })

    this.orderService.getAllOrders()
      .subscribe(data => {
        if (data == null) {
          return;
        }
        data.sort((a, b) => {
          return <any>new Date(b.createdOn) - <any>new Date(a.createdOn);
        });

        data.forEach(order => {
          order.distanceText = 'Calculating...';
          this.calculateEta(order)
        });
        this.orders = data;

      })

  }

  //Get normal orders based by rating
  getNormalOrders(rating) {
    this.orderService.getNormalOrders()
      .subscribe(data => {
        if (data == null) {
          return;
        }
        data.forEach(order => {
          order.distanceText = 'Calculating...';
          this.calculateEta(order)
        });
        this.orders = data;

      })
  }

  //Get comfort orders based by rating
  getComfortOrders(rating) {
    this.orderService.getComfortOrders()
      .subscribe(data => {
        if (data == null) {
          return;
        }
        data.forEach(order => {
          order.distanceText = 'Calculating...';
          this.calculateEta(order)
        });

        this.orders = data;
      })

  }

  getClosestOrders(rating) {

    this.orderService.getAllOrders()
      .subscribe(data => {
        if (data == null) {
          return;
        }
        data.forEach(order => this.calculateEta(order));
        this.orders = this.orders.filter((order) => order.km <= 5)
        this.driverService.categoryCloseCount = this.orders.length;
      })
  }


  calculateEta(order) {
    this.orders = [];

    const directionsService = new google.maps.DirectionsService();
    const orderLatLng = { lat: order.locationLat, lng: order.locationLong };
    let orderLat = +orderLatLng.lat;
    let orderLng = +orderLatLng.lng;

    directionsService.route(
      {
        origin: {
          lat: +this.myLat,
          lng: +this.myLng
        },
        destination: {
          lat: orderLat,
          lng: orderLng,
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