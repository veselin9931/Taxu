import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { Order } from 'src/_models';
import { SubOrder } from 'src/_models/suborder';
import { AccountService } from 'src/_services';
import { OrderService } from 'src/_services/order/order.service';
import { PopoverController } from '@ionic/angular';
import { DriverService } from 'src/_services/driver/driver.service';
import { environment } from 'src/environments/environment';
import { Plugins } from '@capacitor/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';
import { Subscription } from 'rxjs';
import { HttpTransportType } from '@aspnet/signalr';
import { SuborderService } from '../../_services/suborder/suborder.service';
import { OptionsService } from '../../_services/suborder/options.service';
import { SubOrderOpt } from '../../_models/suporder-opt';

const { Geolocation } = Plugins;
declare var google: any;

@Component({
  selector: 'app-driving',
  templateUrl: './driving.page.html',
  styleUrls: ['./driving.page.scss'],
})
export class DrivingPage implements OnInit {
    categoryType;
    isSubOreder;

    orders: Order[] = [];
    subOrders: SubOrder[] = [];
    closeOrders: Order[] = [];
  //Map
  distance: any;

  myLat: string;
  myLng: string;
  private subscriptions: Subscription[] = [];

  constructor(private route: Router,
    private orderService: OrderService,
    private accountService: AccountService,
    private driverService: DriverService,
    private translate: TranslateService,
      private popoverController: PopoverController,
      private subOrderService: SuborderService,
      private optionService: OptionsService

  ) {
    this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
    this.getMyLocation();
  }

    ngOnInit(): void {

    this.isSubOreder = false;

    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(`${environment.signalRUrl}/orderHub`, HttpTransportType.WebSockets | HttpTransportType.LongPolling)
      .build();

    connection.start().then(function () {
      console.log('signalR Connected in driving');
    }).catch(function (err) {
      console.log("Reconnecting in 1 sec.");
      setTimeout(() => connection.start(), 1000);
    });


    connection.on('BroadcastMessage', () => {
      console.log('broadcasted from driving')
    });

    connection.on('CreatedOrder', () => {
      this.getData();
    });

    connection.on('OrderDeleted', () => {
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
              this.isSubOreder = false;
          this.getNormalOrders(x.rating);
          } else if (this.driverService.categoryType == 'Comfort') {
              this.isSubOreder = false;
            this.getComfortOrders(x.rating);
        } else if (this.driverService.categoryType == 'Out of town') {
            this.getOutOfTown();
          } else if (this.driverService.categoryType == 'Closest') {
              this.isSubOreder = false;
          this.getClosestOrders(x.rating);
          } else if (this.driverService.categoryType == 'All') {
              this.isSubOreder = false;
          this.getAllOrders(x.rating);
          } else if (this.driverService.categoryType == undefined) {
              this.isSubOreder = false;
          this.driverService.categoryType == 'All';
          this.getAllOrders(x.rating);
        }
      })

  }

    getOutOfTown() {
        this.subscriptions.push(this.subOrderService.getAllSubOrders('Waiting')
            .subscribe(data => {
                if (data == null) {
                    return;
                }

                this.isSubOreder = true;

                this.subOrders = data

                this.subOrders.forEach(o => {
                    let id = o.optionsId;
                    this.optionService.getOptionById(id).subscribe(data => {
                        let opt: SubOrderOpt = data;

                        o.location = opt.location
                        o.destination = opt.destination

                    });
                })

                console.log(this.subOrders);
            } ));
    }

    acceptSubOrder(subOrder: SubOrder) {
        this.subscriptions.push(this.subOrderService.editStatus(subOrder.id, { acceptedBy: this.accountService.userValue.id, status: 'Accepted' })
            .subscribe(data => {
                if (data) {
                    this.route.navigate(['menu/reservations'])  
                }

                
            }))
    }

  getAllOrders(rating) {
    this.subscriptions.push(this.orderService.getAllOrders()
      .subscribe(data => {
        if (data == null) {
          return;
        }

        if (data.length < this.orders.length) {
          this.orders = data;
          return;
        }

        data.sort((a, b) => {
          return <any>new Date(b.createdOn) - <any>new Date(a.createdOn);
        });

        if (rating >= 0 && rating <= 2) {
          setTimeout(() => {
            this.orders = data;
          }, 10000);
        }
        if (rating >= 2 && rating <= 4) {
          setTimeout(() => {
            this.orders = data;
          }, 8000);
        }
        if (rating >= 4 && rating <= 6) {
          setTimeout(() => {
            this.orders = data;
          }, 5000);
        }
        if (rating >= 6 && rating <= 8) {
          setTimeout(() => {
            this.orders = data;
          }, 3000);
        }
        if (rating >= 8 && rating <= 10) {
          setTimeout(() => {
            this.orders = data;
          }, 1000);
        }
        this.calculateClosest();
      }))
  }

  //Get normal orders based by rating
  getNormalOrders(rating) {
    this.subscriptions.push(this.orderService.getNormalOrders()
      .subscribe(data => {
        if (data == null) {
          return;
        }

        if (data.length < this.orders.length) {
          this.orders = data;
          return;
        }
        if (rating >= 0 && rating <= 2) {
          setTimeout(() => {
            this.orders = data;
          }, 10000);
        }
        if (rating >= 2 && rating <= 4) {
          setTimeout(() => {
            this.orders = data;
          }, 8000);
        }
        if (rating >= 4 && rating <= 6) {
          setTimeout(() => {
            this.orders = data;
          }, 5000);
        }
        if (rating >= 6 && rating <= 8) {
          setTimeout(() => {
            this.orders = data;
          }, 3000);
        }
        if (rating >= 8 && rating <= 10) {
          setTimeout(() => {
            this.orders = data;
          }, 1000);
        }
      }))
  }

  //Get comfort orders based by rating
  getComfortOrders(rating) {
    this.subscriptions.push(this.orderService.getComfortOrders()
      .subscribe(data => {
        if (data == null) {
          return;
        }

        if (data.length < this.orders.length) {
          this.orders = data;
          return;
        }
        if (rating >= 0 && rating <= 2) {
          setTimeout(() => {
            this.orders = data;
          }, 10000);
        }
        if (rating >= 2 && rating <= 4) {
          setTimeout(() => {
            this.orders = data;
          }, 8000);
        }
        if (rating >= 4 && rating <= 6) {
          setTimeout(() => {
            this.orders = data;
          }, 5000);
        }
        if (rating >= 6 && rating <= 8) {
          setTimeout(() => {
            this.orders = data;
          }, 3000);
        }
        if (rating >= 8 && rating <= 10) {
          setTimeout(() => {
            this.orders = data;
          }, 1000);
        }
      }))

  }

  getClosestOrders(rating) {
    this.subscriptions.push(this.orderService.getAllOrders()
      .subscribe(data => {
        if (data == null) {
          return;
        }
        this.calculateEta(data);
        this.driverService.categoryCloseCount = this.orders.length;

      }))
  }

  calculateClosest() {
    this.closeOrders = [];
    this.orders.forEach(async order => {
      const coordinates = await Geolocation.getCurrentPosition();
      const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };

      const orderLatLng = { lat: order.locationLat, lng: order.locationLong };
      var p1 = new google.maps.LatLng(myLatLng.lat, myLatLng.lng);
      var p2 = new google.maps.LatLng(orderLatLng.lat, orderLatLng.lng);
      //calculates distance between two points in km's
      this.distance = (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);

      if (this.distance > 5) {
        this.closeOrders.push(order);
      }
      this.driverService.categoryCloseCount = this.closeOrders.length;

    });
  }

  calculateEta(orders) {
    this.orders = [];
    orders.forEach(async order => {
      const coordinates = await Geolocation.getCurrentPosition();
      const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };

      const orderLatLng = { lat: order.locationLat, lng: order.locationLong };
      var p1 = new google.maps.LatLng(myLatLng.lat, myLatLng.lng);
      var p2 = new google.maps.LatLng(orderLatLng.lat, orderLatLng.lng);
      this.distance = calcDistance(p1, p2);
      order.km = +this.distance;
      //calculates distance between two points in km's
      function calcDistance(p1, p2) {
        return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
      }

      if (order.km > 5) {
        let index = orders.indexOf(order);
        orders.splice(index, 1);
      }
      this.driverService.categoryCloseCount = orders.length;
    });
    this.closeOrders = orders;
    this.orders = orders;
  }

  async openLanguagePopover(ev) {
    const popover = await this.popoverController.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }
}