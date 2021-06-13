import { __awaiter, __decorate } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { Plugins } from '@capacitor/core';
import { environment } from 'src/environments/environment';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';
const { Geolocation } = Plugins;
let OrderDetailsPage = class OrderDetailsPage {
    constructor(translate, popoverController, accountService, router, route, orderService, driverService, walletService, tripService, alertController) {
        this.translate = translate;
        this.popoverController = popoverController;
        this.accountService = accountService;
        this.router = router;
        this.route = route;
        this.orderService = orderService;
        this.driverService = driverService;
        this.walletService = walletService;
        this.tripService = tripService;
        this.alertController = alertController;
        this.orderId = this.route.snapshot.params.id;
        this.applicationUserId = this.accountService.userValue.id;
        this.isDrivingNow = this.accountService.userValue.isDrivingNow;
        this.order = {
            id: '',
            location: '',
            locationLat: '',
            locationLong: '',
            destination: '',
            destinationLat: '',
            destinationLong: '',
            increasePrice: '',
            isAccepted: null,
            isCompleted: null,
            createdOn: null,
            status: null,
            applicationUser: null,
            applicationUserId: null,
            totalPrice: null,
            acceptedBy: null,
            tripDistance: null,
            userDistance: null,
            withPets: null,
            withStroller: null,
            carType: null,
            isRated: null,
            km: null,
            distanceText: null,
            eta: null,
            isDeleted: null,
            isDriverArrived: null,
            increasedByDriver: null,
            increaseAccepted: null,
            increasedBy: null
        };
        this.mapVisible = false;
        this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
    }
    ngOnInit() {
        this.mapId = document.getElementById("map");
        this.mapId.style.display = 'none';
        this.orderDiv = document.getElementById("order");
        this.orderDiv.style.display = 'block';
        const connection = new signalR.HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Information)
            .withUrl(`${environment.signalRUrl}/orderHub`)
            .build();
        connection.start().then(function () {
            console.log('signalR Connected in travel-mode');
        }).catch(function (err) {
            return console.log(err);
        });
        connection.on('NotifyDriver', () => {
            this.orderService.getOrderById(this.order.id)
                .subscribe(order => {
                if (order.increaseAccepted == true) {
                    this.IncreaseAccepted(order);
                }
                else if (order.increaseAccepted == false) {
                    this.IncreaseRefused();
                }
            });
        });
        connection.on('BroadcastMessage', () => {
        });
        connection.on('NotifyUser', () => {
        });
    }
    ionViewDidEnter() {
        this.orderDiv.style.display = 'block';
        this.mapId.style.display = 'none';
        this.orderService.getOrderById(this.orderId)
            .subscribe(order => {
            if (order == null) {
                return this.OrderTaken();
            }
            if (order.totalPrice <= 3.50) {
                this.canIncrease = true;
            }
            else {
                this.canIncrease = false;
            }
            this.order = order;
            //this.calculateDistance(this.order);
            this.calculateEta(this.order);
            this.loadMap(this.mapRef);
        });
    }
    loadMap(mapRef) {
        return __awaiter(this, void 0, void 0, function* () {
            const userLocationLatLng = { lat: +this.order.locationLat, lng: +this.order.locationLong };
            const options = {
                center: new google.maps.LatLng(userLocationLatLng.lat, userLocationLatLng.lng),
                zoom: 14,
                disableDefaultUI: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                zoomControl: false
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
            this.navigateToUserAndCalculateDistance(marker);
        });
    }
    navigateToUserAndCalculateDistance(marker) {
        return __awaiter(this, void 0, void 0, function* () {
            const directionsService = new google.maps.DirectionsService();
            const directionsRenderer = new google.maps.DirectionsRenderer();
            const coordinates = yield Geolocation.getCurrentPosition();
            const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };
            const userLatLng = { lat: this.order.locationLat, lng: this.order.locationLong };
            let userLat = +userLatLng.lat;
            let userLng = +userLatLng.lng;
            directionsService.route({
                origin: {
                    lat: myLatLng.lat,
                    lng: myLatLng.lng
                },
                destination: {
                    lat: userLat,
                    lng: userLng,
                },
                travelMode: google.maps.TravelMode.DRIVING,
            }, (response, status) => {
                if (status === "OK") {
                    directionsRenderer.setDirections(response);
                    var p1 = new google.maps.LatLng(myLatLng.lat, myLatLng.lng);
                    var p2 = new google.maps.LatLng(userLat, userLng);
                    this.distance = (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
                    var infowindow = new google.maps.InfoWindow({
                        content: `${this.distance} km from you.`
                    });
                    infowindow.open(this.map, marker);
                }
                else {
                    window.alert("Directions request failed due to " + status);
                }
            });
            directionsRenderer.setMap(this.map);
        });
    }
    hideMap() {
        this.orderDiv.style.display = 'block';
        this.mapId.style.display = 'none';
        this.mapVisible = false;
        if (this.orderDiv.cancelable) {
            this.orderDiv.preventDefault();
        }
        if (this.mapId.cancelable) {
            this.mapId.preventDefault();
        }
    }
    showMap() {
        this.orderDiv.style.display = 'none';
        this.mapId.style.display = 'block';
        this.mapVisible = true;
        this.loadMap(this.mapRef);
        if (this.orderDiv.cancelable) {
            this.orderDiv.preventDefault();
        }
        if (this.mapId.cancelable) {
            this.mapId.preventDefault();
        }
    }
    offer(value) {
        this.orderService.getOrderById(this.order.id)
            .subscribe(x => {
            if (x == null) {
                this.OrderTaken();
                this.router.navigate(['menu/driving']);
                return;
            }
            else {
                this.orderService.driverIncreaseOrderPrice(this.order.id, value, this.accountService.userValue.driverId)
                    .subscribe(() => { });
            }
        });
    }
    // async calculateDistance(order) {
    //   const coordinates = await Geolocation.getCurrentPosition();
    //   const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };
    //   const orderLatLng = { lat: order.locationLat, lng: order.locationLong };
    //   var p1 = new google.maps.LatLng(myLatLng.lat, myLatLng.lng);
    //   var p2 = new google.maps.LatLng(orderLatLng.lat, orderLatLng.lng);
    //   this.distance = (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
    //   if (this.distance == null || this.distance == undefined) {
    //     this.distance = (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
    //   }
    // }
    calculateEta(order) {
        return __awaiter(this, void 0, void 0, function* () {
            const coordinates = yield Geolocation.getCurrentPosition();
            const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };
            this.myLat = myLatLng.lat;
            this.myLng = myLatLng.lng;
            const directionsService = new google.maps.DirectionsService();
            const orderLatLng = { lat: order.locationLat, lng: order.locationLong };
            let orderLat = +orderLatLng.lat;
            let orderLng = +orderLatLng.lng;
            directionsService.route({
                origin: {
                    lat: +this.myLat,
                    lng: +this.myLng
                },
                destination: {
                    lat: orderLat,
                    lng: orderLng,
                },
                travelMode: google.maps.TravelMode.DRIVING,
            }, (response, status) => {
                if (status === "OK") {
                    order.eta = response.routes[0].legs[0].duration.text;
                }
            });
        });
    }
    acceptOrder(order) {
        this.orderService.getOrderById(order.id)
            .subscribe(x => {
            if (x == null) {
                this.OrderTaken();
                this.router.navigate(['menu/driving']);
                return;
            }
            else {
                this.driverService.getDriverActiveCar(this.accountService.userValue.driverId)
                    .subscribe(car => {
                    if (car.typeId == 1 && order.carType == 'Comfort') {
                        return this.WrongCarAlert();
                    }
                    else {
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
                                }
                                else {
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
                                        this.orderService.updateOrderEta(orderId, order.eta)
                                            .subscribe();
                                    });
                                    let orderId = order.id;
                                    let data = { orderId, applicationUserId, order };
                                    //Creating trip to manage data
                                    this.tripService.createTrip(data)
                                        .subscribe(() => {
                                    });
                                    this.router.navigate(['menu/driving-mode']);
                                }
                            });
                        });
                    }
                });
            }
        });
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
    NotEnoughCashAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Balance',
                message: 'Your wallet balance is not enough for this order!',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    OrderTaken() {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Sorry',
                message: 'This order is no longer active',
                buttons: [{
                        text: 'OK',
                        handler: () => {
                            this.router.navigate(['menu/driving']);
                        }
                    },
                ],
            });
            yield alert.present();
        });
    }
    IncreaseRefused() {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Order increasing refused.',
                buttons: [{
                        text: 'Ok',
                        role: 'cancel'
                    },
                ],
            });
            yield alert.present();
        });
    }
    IncreaseAccepted(order) {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Order increasing accepted.',
                message: 'You can accept the order now',
                buttons: [
                    {
                        text: 'Accept',
                        handler: () => {
                            this.acceptOrder(order);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                ],
            });
            yield alert.present();
        });
    }
    WrongCarAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Order information',
                message: 'Your car is of type "Normal" but the order desired car type is "Comfort"! ',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
};
__decorate([
    ViewChild('map', { read: ElementRef, static: false })
], OrderDetailsPage.prototype, "mapRef", void 0);
OrderDetailsPage = __decorate([
    Component({
        selector: 'app-order-details',
        templateUrl: './order-details.page.html',
        styleUrls: ['./order-details.page.scss'],
    })
], OrderDetailsPage);
export { OrderDetailsPage };
//# sourceMappingURL=order-details.page.js.map