import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { environment } from 'src/environments/environment';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';
import { LocalNotifications } from '@capacitor/core';
let TravellingPage = class TravellingPage {
    constructor(formBuilder, route, orderService, accountService, translate, popoverController, alertController) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.orderService = orderService;
        this.accountService = accountService;
        this.translate = translate;
        this.popoverController = popoverController;
        this.alertController = alertController;
        this.user = this.accountService.userValue;
        //Car html properties;
        this.carModel = "";
        this.carColor = "";
        //User html properties
        this.firstName = "";
        this.lastName = "";
        this.isSubmitted = false;
        this.isCompleted = false;
        this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            applicationUserId: [''],
            location: this.orderService.chosenLocation,
            locationLat: this.orderService.userLocationLat,
            locationLong: this.orderService.userLocationLong,
            destination: this.orderService.chosenDestination,
            destinationLat: this.orderService.userDestinationLat,
            destinationLong: this.orderService.userDestinationLong,
            totalPrice: this.orderTotalPrice,
            tripDistance: 0,
            userDistance: 0,
            increasePrice: [0],
            status: 'Waiting',
            eta: '',
            withPets: false,
            withStroller: false,
            special: false,
            carType: ''
        });
        const connection = new signalR.HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Information)
            .withUrl(`${environment.signalRUrl}/orderHub`)
            .build();
        connection.start().then(function () {
            console.log('signalR Connected in travelling');
        }).catch(function (err) {
            return console.log(err);
        });
        connection.on('BroadcastMessage', () => {
            this.checkorder();
        });
        connection.on('NotifyUser', () => {
            this.orderService.getMyOrder(this.user.id)
                .subscribe(x => {
                this.increasedBy = x.increasedBy;
                this.driverPrice = x.increasedByDriver;
                this.driverIncreased = x.increasedByDriver + this.orderTotalPrice;
                this.increasedOrder();
            });
        });
        connection.on('NotifyDriver', () => {
        });
        connection.on('OrderAccepted', () => {
            console.log('Order Accepted');
            this.presentOrderAcceptedNotification();
        });
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
    ngOnDestroy() {
        this.subscription.unsubscribe();
        console.log('unsubscribed');
    }
    ionViewDidEnter() {
        this.checkorder();
        if (this.orderService.selectedFavourite) {
            this.orderService.chosenLocation = this.orderService.selectedFavourite.location;
            this.form.get('location').setValue(this.orderService.selectedFavourite.location);
            this.form.get('locationLat').setValue(+this.orderService.selectedFavourite.locationLat);
            this.form.get('locationLong').setValue(+this.orderService.selectedFavourite.locationLong);
            this.orderService.chosenDestination = this.orderService.selectedFavourite.destination;
            this.form.get('destination').setValue(this.orderService.selectedFavourite.destination);
            this.form.get('destinationLat').setValue(+this.orderService.selectedFavourite.destinationLat);
            this.form.get('destinationLong').setValue(+this.orderService.selectedFavourite.destinationLong);
        }
        else {
            this.form.get('location').setValue(this.orderService.chosenLocation);
            this.form.get('locationLat').setValue(this.orderService.userLocationLat);
            this.form.get('locationLong').setValue(this.orderService.userLocationLong);
            this.form.get('destination').setValue(this.orderService.chosenDestination);
            this.form.get('destinationLat').setValue(this.orderService.userDestinationLat);
            this.form.get('destinationLong').setValue(this.orderService.userDestinationLong);
        }
        if (this.isCompleted) {
            this.form.get('location').setValue(this.order.location);
            this.form.get('destination').setValue(this.order.destination);
        }
    }
    //GET LOCATION AND DESTINATION AND SEARCH DRIVER
    get f() { return this.form.controls; }
    locationMap() {
        this.route.navigate(['menu/location']);
    }
    destinationMap() {
        this.route.navigate(['menu/destination']);
    }
    onSubmit() {
        this.isSubmitted = true;
        //Gets the loc and lng if we come from "Favourites" page
        if (this.form.value.location == undefined) {
            this.locationError();
        }
        if (this.form.value.destination == undefined) {
            this.destinationError();
        }
        if (!this.form.valid) {
            return;
        }
        //Gets information for directions - price, km and etc
        const directionsService = new google.maps.DirectionsService();
        directionsService.route({
            origin: {
                lat: this.form.value.locationLat,
                lng: this.form.value.locationLong
            },
            destination: {
                lat: this.form.value.destinationLat,
                lng: this.form.value.destinationLong,
            },
            travelMode: google.maps.TravelMode.DRIVING,
        }, (response, status) => {
            if (status === "OK") {
                // this.estimatedDuration = response.routes[0].legs[0].duration.text;
                this.orderTotalDestination = response.routes[0].legs[0].distance.value / 1000;
                this.orderTotalPrice = this.orderTotalDestination * 0.90;
                //Additional option with additional price
                if (this.form.value.withPets == true) {
                    this.orderTotalPrice += 2.20;
                }
                if (this.form.value.carType == "Comfort") {
                    this.orderTotalPrice += 1;
                }
                this.form.value.totalPrice = this.orderTotalPrice;
                this.form.value.tripDistance = this.orderTotalDestination;
                this.form.value.increasePrice = (+this.form.value.increasePrice);
                this.form.value.eta = this.estimatedDuration;
                this.form.value.applicationUserId = this.user.id;
                this.isSubmitted = true;
                if (!this.form.valid) {
                    return false;
                }
                else {
                    this.subscription = this.orderService.createOrder(this.form.value)
                        .subscribe(x => {
                        this.form.value.locationLat = this.form.value.locationLat.toString();
                        this.form.value.locationLong = this.form.value.locationLong.toString();
                        this.orderStatus = this.form.value.status;
                        this.subscription = this.orderService.getMyOrder(this.user.id)
                            .subscribe();
                    });
                }
            }
            else {
                window.alert("Directions request failed due to " + status);
            }
        });
    }
    offer(value) {
        this.form.value.increasePrice = value;
    }
    //Increase the price for the order.
    selector($event) {
        let amount = +$event;
        if (amount != 0 || $event != "") {
            this.subscription = this.orderService.increaseOrderPrice(this.order.id, amount)
                .subscribe();
        }
    }
    increment() {
        this.orderService.incrementOrderPrice(this.order.id)
            .subscribe(() => { });
    }
    decrement() {
        if (this.orderTotalPrice >= 1) {
            this.orderService.decrementOrderPrice(this.order.id)
                .subscribe(() => { });
        }
    }
    //Order functionallity - waiting for driver
    checkorder() {
        this.subscription = this.orderService.getMyOrder(this.user.id)
            .subscribe(data => {
            if (data) {
                this.orderService.currentOrderId = data.id;
                this.location = data.location;
                this.destination = data.destination;
                (Math.round(this.orderTotalPrice * 100) / 100).toFixed(2);
                this.orderTotalPrice = data.totalPrice;
                this.order = data;
                this.estimatedDuration = data.eta;
                if (data.status == "Waiting" && data != null) {
                    this.orderStatus = data.status;
                    this.isCompleted = true;
                    // User can increase order price.
                    //this.selector(0);
                }
                if (data.status == "Accepted" && data != null) {
                    this.route.navigate(['menu/travel-mode']);
                    this.isCompleted = false;
                }
            }
            else {
                this.orderTotalPrice = 0;
            }
        }, error => {
            console.log(error);
        });
    }
    cancelOrder() {
        this.subscription = this.orderService.getMyOrder(this.user.id)
            .subscribe(data => {
            this.subscription = this.orderService.deleteOrder(data.id)
                .subscribe(() => {
                this.isCompleted = false;
                this.orderStatus = null;
                this.orderTotalPrice = 0;
                this.clearForm();
            });
        });
    }
    onSelectCar($event) {
        let type = $event.detail.value;
        if (type == "Normal") {
            this.form.value.carType = type;
        }
        if (type == "Comfort") {
            this.form.value.carType = type;
        }
    }
    onSelectChange($event) {
        $event.detail.value.forEach(element => {
            if (element == "With pets") {
                this.form.value.withPets = true;
            }
            if (element == "With stroller") {
                this.form.value.withStroller = true;
            }
            if (element == "Special needs") {
                this.form.value.special = true;
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
    locationError() {
        return __awaiter(this, void 0, void 0, function* () {
            const popup = yield this.alertController.create({
                header: 'Location field is required !',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'Ok',
                    }
                ]
            });
            yield popup.present();
        });
    }
    destinationError() {
        return __awaiter(this, void 0, void 0, function* () {
            const popup = yield this.alertController.create({
                header: 'Destination field is required !',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'Ok',
                    }
                ]
            });
            yield popup.present();
        });
    }
    increasedOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            const popup = yield this.alertController.create({
                header: `Driver offers you ${this.driverIncreased.toFixed(2)}$ for the order`,
                buttons: [
                    {
                        text: 'Accept',
                        handler: () => {
                            this.orderService.getMyOrder(this.user.id).subscribe(order => {
                                this.orderService.increasedOrderAccept(order.id, true)
                                    .subscribe(() => {
                                    this.orderService.increaseOrderPrice(order.id, this.driverPrice)
                                        .subscribe(() => {
                                    });
                                });
                            });
                        }
                    },
                    {
                        text: 'Cancel',
                        handler: () => {
                            this.orderService.getMyOrder(this.user.id).subscribe(order => {
                                this.orderService.increasedOrderAccept(order.id, false)
                                    .subscribe(() => { });
                            });
                        }
                    },
                ]
            });
            yield popup.present();
        });
    }
    clearForm() {
        this.form.reset({
            'location': '',
            'destination': '',
            'increaseAmount': '',
            'applicationUserId': '',
            'locationLat': 0,
            'locationLong': 0,
            'destinationLat': 0,
            'destinationLong': 0,
            'totalPrice': 0,
            'tripDistance': 0,
            'userDistance': 0,
            'increasePrice': 0,
            'status': 'Waiting',
            'eta': '',
            'withPets': false,
            'withStroller': false,
            'special': false
        });
    }
};
TravellingPage = __decorate([
    Component({
        selector: 'app-travelling',
        templateUrl: './travelling.page.html',
        styleUrls: ['./travelling.page.scss'],
    })
], TravellingPage);
export { TravellingPage };
//# sourceMappingURL=travelling.page.js.map