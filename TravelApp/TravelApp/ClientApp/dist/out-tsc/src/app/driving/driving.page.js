import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { environment } from 'src/environments/environment';
import { Plugins } from '@capacitor/core';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';
const { Geolocation } = Plugins;
let DrivingPage = class DrivingPage {
    constructor(route, orderService, accountService, driverService, translate, popoverController) {
        this.route = route;
        this.orderService = orderService;
        this.accountService = accountService;
        this.driverService = driverService;
        this.translate = translate;
        this.popoverController = popoverController;
        this.orders = [];
        this.closeOrders = [];
        this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
        this.getMyLocation();
    }
    ngOnInit() {
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
    getMyLocation() {
        return __awaiter(this, void 0, void 0, function* () {
            const coordinates = yield Geolocation.getCurrentPosition();
            const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };
            this.myLat = myLatLng.lat.toString();
            this.myLng = myLatLng.lng.toString();
        });
    }
    getData() {
        if (this.accountService.userValue.isDrivingNow === true) {
            this.route.navigate(['menu/driving-mode']);
        }
        this.driverService.getDriver(this.accountService.userValue.driverId)
            .subscribe(x => {
            if (this.driverService.categoryType == 'Normal') {
                this.getNormalOrders(x.rating);
            }
            else if (this.driverService.categoryType == 'Comfort') {
                this.getComfortOrders(x.rating);
            }
            else if (this.driverService.categoryType == 'Closest') {
                this.getClosestOrders(x.rating);
            }
            else if (this.driverService.categoryType == 'All') {
                this.getAllOrders(x.rating);
            }
            else if (this.driverService.categoryType == undefined) {
                this.driverService.categoryType == 'All';
                this.getAllOrders(x.rating);
            }
        });
    }
    getAllOrders(rating) {
        this.orderService.getAllOrders()
            .subscribe(data => {
            if (data == null) {
                return;
            }
            if (data.length < this.orders.length) {
                this.orders = data;
                return;
            }
            data.sort((a, b) => {
                return new Date(b.createdOn) - new Date(a.createdOn);
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
        });
    }
    //Get normal orders based by rating
    getNormalOrders(rating) {
        this.orderService.getNormalOrders()
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
        });
    }
    //Get comfort orders based by rating
    getComfortOrders(rating) {
        this.orderService.getComfortOrders()
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
        });
    }
    getClosestOrders(rating) {
        this.orderService.getAllOrders()
            .subscribe(data => {
            if (data == null) {
                return;
            }
            this.calculateEta(data);
            this.driverService.categoryCloseCount = this.orders.length;
        });
    }
    calculateClosest() {
        this.closeOrders = [];
        this.orders.forEach((order) => __awaiter(this, void 0, void 0, function* () {
            const coordinates = yield Geolocation.getCurrentPosition();
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
        }));
    }
    calculateEta(orders) {
        this.orders = [];
        orders.forEach((order) => __awaiter(this, void 0, void 0, function* () {
            const coordinates = yield Geolocation.getCurrentPosition();
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
        }));
        this.closeOrders = orders;
        this.orders = orders;
    }
    openLanguagePopover(ev) {
        return __awaiter(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: LanguagePopoverPage,
                event: ev
            });
            yield popover.present();
        });
    }
};
DrivingPage = __decorate([
    Component({
        selector: 'app-driving',
        templateUrl: './driving.page.html',
        styleUrls: ['./driving.page.scss'],
    })
], DrivingPage);
export { DrivingPage };
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
//# sourceMappingURL=driving.page.js.map