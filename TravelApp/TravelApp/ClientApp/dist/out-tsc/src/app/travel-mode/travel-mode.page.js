import { __awaiter, __decorate } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { Plugins } from '@capacitor/core';
import { environment } from 'src/environments/environment';
import { Message } from 'src/_models';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';
const { Geolocation, LocalNotifications } = Plugins;
let TravelModePage = class TravelModePage {
    constructor(route, orderService, accountService, tripService, driverService, alertController, chatService, translate, popoverController, callNumber) {
        this.route = route;
        this.orderService = orderService;
        this.accountService = accountService;
        this.tripService = tripService;
        this.driverService = driverService;
        this.alertController = alertController;
        this.chatService = chatService;
        this.translate = translate;
        this.popoverController = popoverController;
        this.callNumber = callNumber;
        this.user = this.accountService.userValue;
        this.driverId = this.accountService.userValue.driverId;
        //Car html properties;
        this.carModel = "";
        this.carColor = "";
        //User html properties
        this.firstName = "";
        this.lastName = "";
        this.messages = this.chatService.messages;
        this.chatStyle = "";
        this.maxTime = 30000;
        this.msgDto = new Message();
        this.msgInboxArray = [];
        this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkorder();
            yield LocalNotifications.requestPermission();
            this.chatService.retrieveMappedObject()
                .subscribe((receivedObj) => { this.addToInbox(receivedObj); });
            const connection = new signalR.HubConnectionBuilder()
                .configureLogging(signalR.LogLevel.Information)
                .withUrl(`${environment.signalRUrl}/orderHub`)
                .build();
            connection.start().then(function () {
                console.log('signalR Connected in travel-mode');
            }).catch(function (err) {
                return console.log(err);
            });
            connection.on('BroadcastMessage', () => {
                this.checkorder();
            });
            connection.on('OrderAccepted', () => {
                this.presentOrderAcceptedNotification();
            });
            connection.on('OrderWaiting', () => {
                this.canceledOrder();
            });
            connection.on('NotifyArrived', () => {
                this.presentDriverArrivedNotification();
                this.accountService.userValue.alertTriggered = true;
                this.accountService.updateAlert(this.user.id, true)
                    .subscribe(() => { });
                this.accountService.userValue.timer = new Date();
                if (this.seconds == 60) {
                    this.seconds = 0;
                }
                this.startTimer();
            });
            connection.on('OrderCompleted', () => {
                this.completedOrderAlert();
            });
        });
    }
    ionViewDidEnter() {
        if (this.accountService.userValue.alertTriggered == true) {
            this.startTimer();
        }
        this.chatService.stop();
        this.chatService.start();
    }
    startTimer() {
        this.startTime = new Date(this.accountService.userValue.timer);
        setInterval(() => {
            if (this.secsDiff == 300) {
                this.orderService.increaseOrderPrice(this.order.id, 1)
                    .subscribe(() => { });
                return;
            }
            this.secsDiff = new Date().getTime() - this.startTime.getTime();
            this.secsDiff = Math.floor(this.secsDiff / 1000);
        }, 1000);
    }
    presentOrderAcceptedNotification() {
        return __awaiter(this, void 0, void 0, function* () {
            yield LocalNotifications.schedule({
                notifications: [
                    {
                        title: "Order alert",
                        body: "Your order is accepted",
                        id: 1,
                    }
                ]
            });
        });
    }
    presentDriverArrivedNotification() {
        return __awaiter(this, void 0, void 0, function* () {
            yield LocalNotifications.schedule({
                notifications: [
                    {
                        title: "Order alert",
                        body: "Your driver is on the address",
                        id: 2,
                    }
                ]
            });
        });
    }
    //CHAT FUNCTIONALLITY
    chat() {
        var x = document.getElementById("chat");
        if (x.style.display === "none") {
            x.style.display = "block";
            this.chatStyle = 'block';
        }
        else {
            x.style.display = "none";
            this.chatStyle = 'none';
        }
    }
    send() {
        if (this.msgDto) {
            if (this.msgDto.text.length == 0) {
                window.alert("Text field is required.");
                return;
            }
            else {
                this.msgDto.user = `${this.accountService.userValue.firstName} ${this.accountService.userValue.lastName}`;
                this.chatService.broadcastMessage(this.msgDto); // Send the message via a service
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
    checkorder() {
        this.subscription = this.orderService.getMyOrder(this.user.id)
            .subscribe(data => {
            if (data) {
                this.totalPrice = data.totalPrice;
                this.orderStatus = data.status;
                this.orderAcceptedBy = data.acceptedBy;
                this.orderService.currentOrderId = data.id;
                this.location = data.location;
                this.destination = data.destination;
                (Math.round(this.orderTotalPrice * 100) / 100).toFixed(2);
                this.orderTotalPrice = data.totalPrice;
                this.order = data;
                this.estimatedDuration = data.eta;
                if (data.acceptedBy != null) {
                    this.getUserById(data.acceptedBy);
                    this.getAcceptedTrip(data.acceptedBy);
                    this.driverId = data.acceptedBy;
                }
            }
            else {
                this.accountService.userValue.alertTriggered = false;
                this.accountService.updateAlert(this.user.id, false)
                    .subscribe(() => { });
                this.orderTotalPrice = 0;
            }
        }, error => {
            console.log(error);
        });
    }
    getUserById(driverId) {
        this.accountService.getById(driverId)
            .subscribe(userData => {
            this.firstName = userData.firstName;
            this.lastName = userData.lastName;
            this.driverId = userData.driverId;
            this.phoneNumber = userData.phone;
            this.driverService.getDriverActiveCar(userData.driverId)
                .subscribe(car => {
                this.carModel = car.model;
                this.carColor = car.color;
            });
        });
    }
    callDriver() {
        let phone = this.phoneNumber.toString();
        this.callNumber.callNumber(phone, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    //Get current trip to manage data.
    getAcceptedTrip(userId) {
        this.tripService.getTrip(userId)
            .subscribe(x => {
            if (x == null) {
                console.log("No trip!");
                return;
            }
            this.tripStatus = x.status;
            if (x.status == 'Started') {
                this.accountService.userValue.alertTriggered = false;
                this.accountService.updateAlert(this.user.id, false)
                    .subscribe(() => { });
            }
            this.currentTrip = x;
            this.loadMap(this.mapRef, userId);
        });
    }
    addToFavourite() {
        let data = {
            applicationUserId: this.order.applicationUserId,
            location: this.order.location,
            locationLat: this.order.locationLat,
            locationLong: this.order.locationLong,
            destination: this.order.destination,
            destinationLat: this.order.destinationLat,
            destinationLong: this.order.destinationLong,
            totalPrice: this.order.totalPrice
        };
        if (data) {
            this.orderService.addToFavourites(data)
                .subscribe(() => {
                this.successAddedFavourite();
            });
        }
        else {
            console.log('Problem with data occured');
        }
    }
    //MAPS FUNCTIONALLITY
    loadMap(mapRef, driverId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.accountService.getById(driverId)
                .subscribe(driver => {
                this.driverService.getDriver(driver.driverId)
                    .subscribe(data => {
                    const driverLatLng = { lat: +data.currentLocationLat, lng: +data.currentLocationLong };
                    const options = {
                        center: new google.maps.LatLng(driverLatLng.lat, driverLatLng.lng),
                        zoom: 15,
                        disableDefaultUI: true,
                    };
                    if (mapRef != null) {
                        this.map = new google.maps.Map(mapRef.nativeElement, options);
                    }
                    var icon = {
                        url: 'https://images.vexels.com/media/users/3/154573/isolated/preview/bd08e000a449288c914d851cb9dae110-hatchback-car-top-view-silhouette-by-vexels.png',
                        scaledSize: new window.google.maps.Size(25, 25),
                        anchor: { x: 10, y: 10 }
                    };
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(driverLatLng),
                        icon: icon,
                        map: this.map
                    });
                });
            });
        });
    }
    cancelTrip() {
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
                            this.tripService.getTrip(this.orderAcceptedBy)
                                .subscribe(trip => {
                                this.tripService.cancelTrip(trip.id)
                                    .subscribe(x => {
                                    this.accountService.updateDriving(this.orderAcceptedBy, false)
                                        .subscribe(() => {
                                    });
                                    this.accountService.userValue.isDrivingNow = false;
                                    this.orderService.deleteOrder(trip.orderId)
                                        .subscribe(() => this.route.navigate(['menu/travelling']));
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
    openLanguagePopover(ev) {
        return __awaiter(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: LanguagePopoverPage,
                event: ev
            });
            yield popover.present();
        });
    }
    //ALERTS
    completedOrderAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            const popup = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'You have reached the final destination! Did you enjoyed the trip?',
                //message: '<img src = "../assets/default.png" width="1px" height="1px">',
                buttons: [
                    {
                        text: 'Yes',
                        role: 'cancel',
                        handler: () => {
                            this.driverService.voteUp(this.driverId)
                                .subscribe(x => { });
                            this.route.navigate(['menu/travelling']);
                        }
                    },
                    {
                        text: 'No',
                        role: 'no',
                        handler: () => {
                            this.driverService.voteDown(this.driverId)
                                .subscribe(x => { });
                            this.route.navigate(['menu/travelling']);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            this.route.navigate(['menu/travelling']);
                        }
                    },
                    {
                        text: 'Report a problem',
                        role: 'cancel',
                        handler: () => {
                            this.route.navigate(['menu/report']);
                        },
                    }
                ]
            });
            this.route.navigate(['menu/travelling']);
            yield popup.present();
        });
    }
    successAddedFavourite() {
        return __awaiter(this, void 0, void 0, function* () {
            const popup = yield this.alertController.create({
                header: 'Successfully added to favourites!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    }
                ]
            });
            yield popup.present();
        });
    }
    canceledOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            const popup = yield this.alertController.create({
                header: 'Order is cancelled by the driver.',
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            this.route.navigate(['menu/travelling']);
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
], TravelModePage.prototype, "mapRef", void 0);
TravelModePage = __decorate([
    Component({
        selector: 'app-travel-mode',
        templateUrl: './travel-mode.page.html',
        styleUrls: ['./travel-mode.page.scss'],
    })
], TravelModePage);
export { TravelModePage };
//# sourceMappingURL=travel-mode.page.js.map