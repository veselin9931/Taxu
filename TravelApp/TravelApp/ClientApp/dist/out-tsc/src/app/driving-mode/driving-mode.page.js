import { __awaiter, __decorate } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Capacitor, Plugins } from '@capacitor/core';
import { Message } from 'src/_models';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';
import * as signalR from '@aspnet/signalr';
import { environment } from 'src/environments/environment';
const { Geolocation } = Plugins;
let DrivingModePage = class DrivingModePage {
    constructor(route, orderService, accountService, tripService, walletService, driverService, chatService, profitService, translate, popoverController, alertController, callNumber) {
        this.route = route;
        this.orderService = orderService;
        this.accountService = accountService;
        this.tripService = tripService;
        this.walletService = walletService;
        this.driverService = driverService;
        this.chatService = chatService;
        this.profitService = profitService;
        this.translate = translate;
        this.popoverController = popoverController;
        this.alertController = alertController;
        this.callNumber = callNumber;
        this.driverId = this.tripService.currentTripDriverId;
        this.applicationUserId = this.accountService.userValue.id;
        this.isDrivingNow = this.accountService.userValue.isDrivingNow;
        this.orders = [];
        this.closestOrders = [];
        this.messages = this.chatService.messages;
        this.chatStyle = "";
        this.orderDiv = document.getElementById("orderDiv");
        this.msgDto = new Message();
        this.msgInboxArray = [];
        this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
    }
    ngOnInit() {
        this.isStarted = false;
        this.chatService.retrieveMappedObject()
            .subscribe((receivedObj) => { this.addToInbox(receivedObj); }); // calls the service method to get the new messages sent
        this.getAcceptedTrip();
        const connection = new signalR.HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Information)
            .withUrl(`${environment.signalRUrl}/orderHub`)
            .build();
        connection.start().then(function () {
            console.log('signalR Connected in driving-mode');
        }).catch(function (err) {
            return console.log(err);
        });
        connection.on('OrderDeleted', () => {
            this.canceledOrder();
        });
        connection.on('BroadcastMessage', () => {
            // this.getAcceptedTrip();
        });
    }
    ionViewDidEnter() {
        if (this.accountService.userValue.isDrivingNow == true) {
            this.getAcceptedTrip();
            setInterval(() => {
                this.watchPos();
            }, 3000);
            this.chatService.stop();
            this.chatService.start();
        }
    }
    callDriver() {
        return __awaiter(this, void 0, void 0, function* () {
            let phone = this.order.applicationUser.phone.toString();
            this.callNumber.callNumber(phone, true)
                .then(res => console.log('Launched dialer!', res))
                .catch(err => console.log('Error launching dialer', err));
        });
    }
    watchPos() {
        return __awaiter(this, void 0, void 0, function* () {
            let coordinates = yield Geolocation.getCurrentPosition();
            const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };
            this.driverService.locateDriver(this.accountService.userValue.driverId, myLatLng.lat.toString(), myLatLng.lng.toString())
                .subscribe(x => { });
        });
    }
    navigateToUserAndCalculateDistance() {
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
                    this.tripService.navigateToUser(this.currentTrip.id)
                        .subscribe(() => { });
                    if (Capacitor.getPlatform() === 'ios') {
                        window.open(`http://maps.apple.com/maps?q=${userLat},${userLng}&t=m&dirflg=d`);
                        console.log('ios platform');
                        directionsRenderer.setDirections(response);
                        this.isStarted = true;
                    }
                    if (Capacitor.platform == 'android') {
                        window.open(`https://www.google.com/maps/dir/?api=1&destination=${userLat},${userLng}&travelmode=driving`);
                        directionsRenderer.setDirections(response);
                        this.isStarted = true;
                    }
                    else {
                        window.open(`https://www.google.com/maps/dir/?api=1&destination=${userLat},${userLng}&travelmode=driving`);
                        directionsRenderer.setDirections(response);
                        this.isStarted = true;
                    }
                }
                else {
                    window.alert("Directions request failed due to " + status);
                }
            });
            directionsRenderer.setMap(this.map);
        });
    }
    //Set directions to user's destination
    navigateToPointAndCalculateDistance() {
        return __awaiter(this, void 0, void 0, function* () {
            const directionsService = new google.maps.DirectionsService();
            const directionsRenderer = new google.maps.DirectionsRenderer();
            const coordinates = yield Geolocation.getCurrentPosition();
            const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };
            const userLatLng = { lat: this.order.destinationLat, lng: this.order.destinationLong };
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
                    if (Capacitor.getPlatform() == 'ios') {
                        console.log('ios platform');
                        directionsRenderer.setDirections(response);
                        window.open(`http://maps.apple.com/maps?q=${userLat},${userLng}&t=m&dirflg=d`);
                        this.startTrip();
                    }
                    if (Capacitor.getPlatform() == 'android') {
                        console.log('android or web platform');
                        directionsRenderer.setDirections(response);
                        window.open(`https://www.google.com/maps/dir/?api=1&destination=${userLat},${userLng}&travelmode=driving`);
                        this.startTrip();
                    }
                    else {
                        console.log('web platform');
                        directionsRenderer.setDirections(response);
                        window.open(`https://www.google.com/maps/dir/?api=1&destination=${userLat},${userLng}&travelmode=driving`);
                        this.startTrip();
                    }
                }
                else {
                    console.log("failed");
                    window.alert("Directions request failed due to " + status);
                }
            });
            directionsRenderer.setMap(this.map);
        });
    }
    send() {
        if (this.msgDto) {
            if (this.msgDto.text.length == 0) {
                window.alert("Text field is required.");
                return;
            }
            else {
                this.msgDto.user = `${this.accountService.userValue.firstName} ${this.accountService.userValue.lastName}`;
                var c = this.chatService.broadcastMessage(this.msgDto);
            }
        }
    }
    clearMessages() {
        this.messages.length = 0;
    }
    addToInbox(obj) {
        let newObj = new Message();
        newObj.user = obj.user;
        newObj.text = obj.text;
        this.msgInboxArray.push(newObj);
        this.msgDto.text = '';
    }
    startTrip() {
        this.tripService.startTrip(this.currentTrip.id)
            .subscribe(trip => {
            if (trip) {
                this.tripStatus = trip.status;
                this.walletService.dischargeWallet(this.applicationUserId, this.tripPriceForDriver)
                    .subscribe(x => {
                    this.profitService.addToProfit(this.tripPriceForDriver)
                        .subscribe(() => { });
                });
            }
        });
    }
    finishTrip() {
        this.tripService.completeTrip(this.currentTrip.id)
            .subscribe(trip => {
            if (trip) {
                this.tripStatus = trip.status;
            }
            this.orderService.completeOrder(this.currentTrip.orderId)
                .subscribe(() => { });
        });
        //trigger the driver's driving now property to false
        let userId = this.accountService.userValue.id;
        let value = this.accountService.userValue.isDrivingNow = false;
        this.accountService.updateDriving(userId, value)
            .subscribe();
        this.isDrivingNow = this.accountService.userValue.isDrivingNow;
        this.route.navigate(['menu/driving']);
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
    calculateEta(order) {
        return __awaiter(this, void 0, void 0, function* () {
            const directionsService = new google.maps.DirectionsService();
            const coordinates = yield Geolocation.getCurrentPosition();
            const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };
            directionsService.route({
                origin: {
                    lat: myLatLng.lat,
                    lng: myLatLng.lng
                },
                destination: {
                    lat: +order.locationLat,
                    lng: +order.locationLong,
                },
                travelMode: google.maps.TravelMode.DRIVING,
            }, (response, status) => {
                if (status === "OK") {
                    this.eta = response.routes[0].legs[0].duration.text;
                    order.km = response.routes[0].legs[0].distance.value / 1000;
                    order.distanceText = response.routes[0].legs[0].distance.text;
                    order.eta = response.routes[0].legs[0].duration.text;
                    this.distance = order.distanceText;
                }
            });
        });
    }
    getAcceptedTrip() {
        this.tripService.getTrip(this.driverId)
            .subscribe(x => {
            if (x == null) {
                return;
            }
            this.tripStatus = x.status;
            this.currentTrip = x;
            this.orderService.getOrderById(x.orderId).subscribe(order => {
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
                this.driverService.getDriver(this.accountService.userValue.driverId)
                    .subscribe(s => {
                    this.tripPriceForDriver = (order.totalPrice * (s.comission / 100));
                });
            });
        });
    }
    onTheAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            this.orderService.updateDriverArrived(this.order.id)
                .subscribe(() => { });
        });
    }
    cancelOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            this.alertForCancel();
        });
    }
    alertForCancel() {
        return __awaiter(this, void 0, void 0, function* () {
            const popup = yield this.alertController.create({
                header: 'Are you sure you want to cancel the order?',
                message: 'Your rating will decrease!',
                buttons: [
                    {
                        text: 'Confirm',
                        handler: () => {
                            this.driverService.cancelOrderFromDriver(this.order.id)
                                .subscribe(x => {
                                this.tripService.cancelTrip(this.currentTrip.id)
                                    .subscribe(() => {
                                    this.accountService.userValue.isDrivingNow = false;
                                    this.accountService.updateDriving(this.applicationUserId, false)
                                        .subscribe(() => {
                                        this.driverService.voteDown(this.accountService.userValue.driverId)
                                            .subscribe(() => {
                                            this.route.navigate(['menu/driving']);
                                        });
                                    });
                                });
                            });
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield popup.present();
        });
    }
    canceledOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            const popup = yield this.alertController.create({
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
            yield popup.present();
        });
    }
};
__decorate([
    ViewChild('map', { read: ElementRef, static: false })
], DrivingModePage.prototype, "mapRef", void 0);
DrivingModePage = __decorate([
    Component({
        selector: 'app-driving-mode',
        templateUrl: './driving-mode.page.html',
        styleUrls: ['./driving-mode.page.scss'],
    })
], DrivingModePage);
export { DrivingModePage };
//# sourceMappingURL=driving-mode.page.js.map