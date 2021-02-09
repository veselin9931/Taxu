import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { Driver, Order, Trip, User } from 'src/_models';
import { AccountService } from 'src/_services';
import { OrderService } from 'src/_services/order/order.service';
import { SignalRService } from 'src/_services/signal-r.service';
import { TripService } from 'src/_services/trip/trip.service';
import { Location } from '@angular/common';
import { WalletService } from 'src/_services/wallet/wallet.service';
import { AlertController } from '@ionic/angular';
import { DriverService } from 'src/_services/driver/driver.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-driving',
  templateUrl: './driving.page.html',
  styleUrls: ['./driving.page.scss'],
})
export class DrivingPage implements OnInit {
  public currentTrip: Trip;
  driver: Driver;
  tripStatus: string;
  orders: Order[] = [];
  order: Order;
  orderId: string;
  location: string;
  totalPrice: number;
  destination: string;
  appUserDriver: User;
  tripPriceForDriver: number;
  driverCommission: number;
  loading = false;
  isSubmitted = false;
  verifiedAccount = false;
  driverId = this.tripService.currentTripDriverId;
  isDrivingNow = this.accountService.userValue.isDrivingNow;
  applicationUserId = this.accountService.userValue.id;

  constructor(private route: Router,
    private orderService: OrderService,
    private accountService: AccountService,
    private tripService: TripService,
    public signalRService: SignalRService,
    private locationPage: Location,
    private walletService: WalletService,
    private alertController: AlertController,
    private driverService: DriverService) {
    if (this.isDrivingNow == true) {
      this.getAcceptedTrip()
    }
  }

  ngOnInit(): void {
    this.getData();

    if (this.isDrivingNow == true) {
      this.getAcceptedTrip()
    }

    //SignalR data logic:
    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl('https://localhost:44329/orderHub', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .build();

    connection.start().then(function () {
      console.log('signalR Connected in driving');
    }).catch(function (err) {
      return console.log(err.toString());
    });

    connection.on('BroadcastMessage', () => {
      this.getData();
      this.getAcceptedTrip();
    });
  }

  getData() {
    this.orderService.getAllOrders().subscribe(data => {

      if (data == null) {
        console.log('No trips');
        return;
      }

      this.orders = data;
      console.log("Driving page orders")
      console.log(this.orders)
    })
  }

  acceptOrder(order) {

    this.accountService.getById(this.applicationUserId)
      .subscribe(user => {
        this.driverService.getDriver(user.driverId)
          .subscribe(driver => {
            this.tripPriceForDriver = (order.totalPrice * (driver.comission / 100));
            this.walletService.getMyWallet(this.applicationUserId)
              .subscribe(wallet => {
                if (wallet.ammount < this.tripPriceForDriver) {
                  this.NotEnoughCashAlert();
                  return;
                } else {
                  let applicationUserId = this.accountService.userValue.id;
                  this.accountService.userValue.isDrivingNow = true;
                  this.accountService.updateDriving(applicationUserId, true)
                    .subscribe(data => {
                      console.log(data)
                    });

                  this.isDrivingNow = this.accountService.userValue.isDrivingNow;
                  order.acceptedBy = applicationUserId;

                  this.orderService.acceptOrder(order.id, applicationUserId)
                    .subscribe(data => {
                      console.log(data);
                    })

                  let orderId = order.id;

                  let data = { orderId, applicationUserId, order };

                  this.tripService.createTrip(data)
                    .subscribe(data => {
                      console.log(data);
                    })

                  this.route.navigate(['tabs/driving']);
                }
              })

          })
      })


  }

  startTrip() {
    this.tripService.startTrip(this.currentTrip.id)
      .subscribe(trip => {
        if (trip) {
          this.tripStatus = trip.status;
          this.walletService.dischargeWallet(this.applicationUserId, this.tripPriceForDriver)
            .subscribe(x => {
              console.log('Successfully discharged the user.')
            })
        }
      })
  }

  checkIfDriverHasMoney(order: Order) {
    this.accountService.getById(this.applicationUserId)
      .subscribe(user => {
        this.driverService.getDriver(user.driverId)
          .subscribe(driver => {
            this.tripPriceForDriver = (order.totalPrice * (driver.comission / 100));
            this.walletService.getMyWallet(this.applicationUserId)
              .subscribe(wallet => {
                if (wallet.ammount < this.tripPriceForDriver) {
                  this.NotEnoughCashAlert();
                  return 'No Cash';
                } else {
                  this.walletService.dischargeWallet(this.applicationUserId, this.tripPriceForDriver)
                    .subscribe(x => {
                      console.log('Successfully discharged the user.')
                      return;
                    })
                }
              })

          })
      })


  }

  cancelTrip() {
    this.tripService.completeTrip(this.currentTrip.id)
      .subscribe(trip => {
        if (trip) {
          this.tripStatus = trip.status;
        }
        this.orderService.completeOrder(this.currentTrip.orderId)
          .subscribe(data => {
            console.log('Canceled order')
          });
        console.log('Canceled trip')
      })

    let driverId = this.accountService.userValue.id;
    let value = this.accountService.userValue.isDrivingNow = false;

    this.accountService.updateDriving(driverId, value)
      .subscribe(data => {
      });

    this.isDrivingNow = this.accountService.userValue.isDrivingNow;
  }

  getAcceptedTrip() {
    this.tripService.getTrip(this.driverId)
      .subscribe(x => {
        if (x == null) {
          console.log("No trip");
          return;
        }
        console.log("Trip data")
        console.log(x);
        this.tripStatus = x.status;
        this.currentTrip = x;
        this.orderId = x.orderId;

        this.orderService.getOrderById(x.orderId).subscribe(order => {
          x.order = order;
          this.order = x.order;
          this.location = order.location;
          this.destination = order.destination;
          this.totalPrice = order.totalPrice;
        })

        this.route.navigate(['tabs/driving']);
      });
  }

  finishTrip() {
    this.tripService.completeTrip(this.currentTrip.id)
      .subscribe(trip => {
        if (trip) {
          this.tripStatus = trip.status;
        }
        this.orderService.completeOrder(this.currentTrip.orderId)
          .subscribe(data => {
            console.log(this.orderService.alertForcomplete)
            console.log('Completed order')
          });
        console.log('Completed trip')
      })

    //trigger the driver's driving now property to false
    let driverId = this.accountService.userValue.id;
    let value = this.accountService.userValue.isDrivingNow = false;

    this.accountService.updateDriving(driverId, value)
      .subscribe(data => {
      });

    this.isDrivingNow = this.accountService.userValue.isDrivingNow;
  }

  goBack() {
    this.locationPage.back();
  }

  async NotEnoughCashAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Balance',
      message: 'Your wallet balance is not enough for this order!',
      buttons: ['OK']
    });

    await alert.present();
  }

}
