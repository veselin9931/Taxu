import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { Order } from 'src/_models';
import { AccountService } from 'src/_services';
import { OrderService } from 'src/_services/order/order.service';
import { PopoverController } from '@ionic/angular';
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

  orders: Order[] = [];
  closeOrders: Order[] = [];
  //Map
  distance: string;

  myLat: string;
  myLng: string;

  constructor(private route: Router,
    private orderService: OrderService,
    private accountService: AccountService,
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

    this.orderService.getAllOrders()
      .subscribe(data => {
        if (data == null) {
          return;
        }
        data.sort((a, b) => {
          return <any>new Date(b.createdOn) - <any>new Date(a.createdOn);
        });
        this.orders = data;
        this.calculateClosest();
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
      })

  }

  getClosestOrders(rating) {
    this.orderService.getAllOrders()
      .subscribe(data => {
        if (data == null) {
          return;
        }
        this.calculateEta(data);
        this.driverService.categoryCloseCount = this.orders.length;

      })
  }

  calculateClosest() {
    this.closeOrders = [];
    this.orders.forEach(async order => {
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

      if(order.km > 5){
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

      if(order.km > 5){
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