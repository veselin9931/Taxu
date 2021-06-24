(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["driving-mode-driving-mode-module"],{

/***/ "30kx":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/driving-mode/driving-mode.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>\r\n      <ion-label>{{'Accepted order' | translate}}</ion-label>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon (click)='openLanguagePopover($event)' id=\"toolbarIcon\" name=\"language-outline\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding class=\"noScroll\">\r\n\r\n  <div class=\"col-md-10\">\r\n    <div id=\"orderDiv\" class=\"list-group mt-2\">\r\n\r\n      <a class=\"text list-group-item list-group-item-action flex-column align-items-start\">\r\n        <div class=\"d-flex w-100 justify-content-between\">\r\n          <h5 class=\"mb-1 fonted\"></h5>\r\n        </div>\r\n        <p>\r\n          <ion-icon class=\"mr-2\" name=\"analytics-outline\"></ion-icon>{{this.location}}\r\n        </p>\r\n        <hr />\r\n        <p>\r\n          <ion-icon class=\"mr-2\" name=\"arrow-forward-outline\"></ion-icon>{{this.destination}}\r\n        </p>\r\n        <div class=\"text-center\">\r\n          <p> <button (click)=\"navigateToUserAndCalculateDistance()\" type=\"button\" [disabled]=\"tripStatus=='Started'\"\r\n              class=\"fonted btn btn-info btn-sm btn-block\">{{'Navigate to user' | translate}}</button></p>\r\n\r\n          <p>\r\n            <button (click)=\"navigateToPointAndCalculateDistance()\" type=\"button\" color=\"primary\"\r\n              class=\"fonted btn btn-info btn-sm btn-block\" [disabled]=\"tripStatus=='!Processing'\">{{'Start trip' |\r\n              translate}}</button>\r\n          </p>\r\n          <p>\r\n            <button [disabled]=\"tripStatus=='Processing'\" class=\"fonted btn btn-success btn-sm btn-block\"\r\n              (click)=\"finishTrip()\" type=\"button\">\r\n              {{'Finish trip' | translate}}</button>\r\n          </p>\r\n\r\n          <p>\r\n            <button *ngIf=\"tripStatus == 'Navigating'\" (click)=\"onTheAddress()\" type=\"button\"\r\n              class=\"fonted btn btn-info btn-sm btn-block\">{{'Im on the address' | translate}}</button>\r\n          </p>\r\n\r\n          <p>\r\n            <button (click)=\"callDriver()\" class=\"fonted btn btn-warning btn-sm btn-block\" (click)=\"clearMessages()\"\r\n              type=\"button\">\r\n              <ion-icon name=\"call\" class=\"mr-2\"></ion-icon>{{'Call passenger' | translate}}\r\n            </button>\r\n          </p>\r\n\r\n          <p>\r\n            <button *ngIf=\"tripStatus == 'Processing'\" (click)=\"cancelOrder()\"\r\n              class=\"fonted btn btn-warning btn-sm btn-block\" type=\"button\">\r\n              {{'Cancel' | translate}}\r\n            </button>\r\n          </p>\r\n        </div>\r\n\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- <div #map id=\"map\"></div> -->\r\n</ion-content>\r\n\r\n\r\n<ion-footer class=\"ion-no-border page-wrap\">\r\n  <div id=\"chat\" class=\"row chat\">\r\n\r\n    <div class=\"col\">\r\n      <ion-card>\r\n\r\n        <div class=\"msg-box\">\r\n          <ul *ngIf=\"this.msgInboxArray.length == 0\" class=\"text-center mr-5\">\r\n            <li>{{'No messages for now' | translate}}</li>\r\n          </ul>\r\n          <ul *ngFor=\"let mObj of msgInboxArray\">\r\n            <li [ngClass]=\"mObj.user === msgDto.user ? 'in-msg' : 'ex-msg'\">\r\n              {{mObj.user}}:\r\n              {{mObj.text}}\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n      </ion-card>\r\n\r\n      <ion-card class=\"type\">\r\n        <ion-item>\r\n          <ion-input [(ngModel)]=\"msgDto.text\" [placeholder]='\"Type your message...\" | translate'>\r\n\r\n          </ion-input>\r\n          <ion-icon (click)=\"send()\" name=\"send-outline\"></ion-icon>\r\n\r\n        </ion-item>\r\n      </ion-card>\r\n    </div>\r\n\r\n  </div>\r\n</ion-footer>\r\n\r\n\r\n<!-- <ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar class=\"text-center\">\r\n    <ion-text class=\"textTravel\">\r\n      <button (click)=\"navigateToUserAndCalculateDistance()\" type=\"button\" [disabled]=\"tripStatus=='Started'\"\r\n        class=\"fonted btn btn-info\">{{'Navigate to user' | translate}}</button>\r\n      <button (click)=\"navigateToPointAndCalculateDistance()\" type=\"button\" color=\"primary\"\r\n      class=\"fonted btn btn-info ml-1\" [disabled]=\"tripStatus=='!Processing'\">{{'Start trip' | translate}}</button>\r\n      <button (click)=\"callDriver()\" class=\"fonted btn btn-warning ml-1\" (click)=\"clearMessages()\" type=\"button\"><ion-icon name=\"call\" class=\"mr-2\"></ion-icon>Call driver\r\n      </button>\r\n      <ion-text class=\"centered\" color=\"dark\">\r\n        <p class=\"text\">{{this.destination}}</p>\r\n      </ion-text>\r\n    </ion-text>\r\n\r\n  </ion-toolbar>\r\n</ion-footer> -->\r\n\r\n<!-- <ion-footer class=\"ion-no-border site-footer\">\r\n  <ion-toolbar class=\"text-center\">\r\n    <button [disabled]=\"tripStatus=='Processing'\" class=\"fonted btn btn-success\" (click)=\"finishTrip()\" type=\"button\">\r\n      {{'Finish trip' | translate}}</button>\r\n    <button (click)=\"chat()\" class=\"fonted btn btn-secondary ml-1\" type=\"button\" (click)=\"clearMessages()\">\r\n      {{'Chat'| translate}}</button>\r\n\r\n      <button *ngIf=\"tripStatus == 'Navigating'\" (click)=\"onTheAddress()\" type=\"button\"\r\n      class=\"fonted btn btn-info ml-1\">Im on the address</button>\r\n      <button *ngIf=\"tripStatus == 'Processing'\" (click)=\"cancelOrder()\" class=\"fonted btn btn-warning ml-1\" type=\"button\">\r\n        {{'Cancel' | translate}}\r\n      </button>\r\n    <br />\r\n    <ion-label class=\"blink_me\" *ngIf=\"messages.length != 0  && chatStyle == 'none'\">{{'You have new message' |\r\n      translate}}.</ion-label>\r\n  </ion-toolbar>\r\n  \r\n  <div id=\"chat\" style=\"display: none;\" class=\"row chat\">\r\n\r\n    <div class=\"col\">\r\n      <ion-card>\r\n\r\n        <div class=\"msg-box\">\r\n          <ul *ngIf=\"this.msgInboxArray.length == 0\" class=\"text-center mr-5\">\r\n            <li>{{'No messages for now' | translate}}</li>\r\n          </ul>\r\n          <ul *ngFor=\"let mObj of msgInboxArray\">\r\n            <li [ngClass]=\"mObj.user === msgDto.user ? 'in-msg' : 'ex-msg'\">\r\n              {{mObj.user}}:\r\n              {{mObj.text}}\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n      </ion-card>\r\n\r\n      <ion-card class=\"type\">\r\n        <ion-item>\r\n          <ion-input [(ngModel)]=\"msgDto.text\" [placeholder]='\"Type your message...\" | translate'>\r\n\r\n          </ion-input>\r\n          <ion-icon (click)=\"send()\" name=\"send-outline\"></ion-icon>\r\n\r\n        </ion-item>\r\n      </ion-card>\r\n    </div>\r\n\r\n  </div>\r\n</ion-footer> -->");

/***/ }),

/***/ "8u0E":
/*!***************************************************!*\
  !*** ./src/app/driving-mode/driving-mode.page.ts ***!
  \***************************************************/
/*! exports provided: DrivingModePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrivingModePage", function() { return DrivingModePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_driving_mode_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./driving-mode.page.html */ "30kx");
/* harmony import */ var _driving_mode_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./driving-mode.page.scss */ "O20S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/_models */ "VeQZ");
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/_services */ "8Xdb");
/* harmony import */ var src_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/_services/chat/chat.service */ "RX8M");
/* harmony import */ var src_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/_services/driver/driver.service */ "exMm");
/* harmony import */ var src_services_order_order_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/_services/order/order.service */ "8k+r");
/* harmony import */ var src_services_profit_profit_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/_services/profit/profit.service */ "hinB");
/* harmony import */ var src_services_trip_trip_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/_services/trip/trip.service */ "e7jj");
/* harmony import */ var src_services_wallet_wallet_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/_services/wallet/wallet.service */ "Hmjx");
/* harmony import */ var _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../language-popover/language-popover.page */ "oXKM");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @aspnet/signalr */ "Gpoy");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "Wwn5");




















const { Geolocation } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
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
        this.subscriptions = [];
        this.msgDto = new src_models__WEBPACK_IMPORTED_MODULE_8__["Message"]();
        this.msgInboxArray = [];
        this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
    }
    ngOnInit() {
        this.id = setInterval(() => {
            this.watchPos();
        }, 3000);
        this.getAcceptedTrip();
        this.isStarted = false;
        this.subscriptions.push(this.chatService.retrieveMappedObject()
            .subscribe((receivedObj) => { this.addToInbox(receivedObj); })); // calls the service method to get the new messages sent
        const connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_17__["HubConnectionBuilder"]()
            .configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_17__["LogLevel"].Information)
            .withUrl(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].signalRUrl}/orderHub`)
            .build();
        connection.start().then(function () {
            console.log('signalR Connected in driving-mode');
        }).catch(function (err) {
            console.log("Reconnecting in 1 sec.");
            setTimeout(() => connection.start(), 1000);
        });
        connection.on('OrderDeleted', (orderId) => {
            this.subscriptions.push(this.orderService.getCanceledOrderById(orderId)
                .subscribe(order => {
                if (order.acceptedBy == this.applicationUserId) {
                    this.canceledOrder();
                }
            }));
        });
        connection.on('OrderAccepted', (orderId) => {
            this.subscriptions.push(this.orderService.getOrderById(orderId)
                .subscribe(order => {
                if (order.acceptedBy == this.applicationUserId) {
                    this.getAcceptedTrip();
                }
            }));
        });
        connection.on('Navigate', (orderId) => {
            this.subscriptions.push(this.orderService.getOrderById(orderId)
                .subscribe(order => {
                if (order.acceptedBy == this.applicationUserId) {
                    this.getAcceptedTrip();
                }
            }));
        });
        connection.on('LocateDriver', (driverId) => {
        });
        connection.on('WalletAction', () => {
        });
        connection.on('CompleteOrder', () => {
        });
    }
    ngOnDestroy() {
        if (this.id) {
            clearInterval(this.id);
        }
    }
    ionViewDidEnter() {
        if (this.accountService.userValue.isDrivingNow == true) {
            this.getAcceptedTrip();
        }
    }
    callDriver() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let phone = this.order.applicationUser.phone.toString();
            this.callNumber.callNumber(phone, true)
                .then(res => console.log('Launched dialer!', res))
                .catch(err => console.log('Error launching dialer', err));
        });
    }
    watchPos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let coordinates = yield Geolocation.getCurrentPosition();
            const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };
            this.subscriptions.push(this.driverService.locateDriver(this.accountService.userValue.driverId, myLatLng.lat.toString(), myLatLng.lng.toString())
                .subscribe(x => { }));
        });
    }
    navigateToUserAndCalculateDistance() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userLatLng = { lat: this.order.locationLat, lng: this.order.locationLong };
            let userLat = +userLatLng.lat;
            let userLng = +userLatLng.lng;
            this.subscriptions.push(this.tripService.navigateToUser(this.currentTrip.id, this.order.id)
                .subscribe(() => { }));
            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Capacitor"].platform === 'ios') {
                window.open(`maps://maps.apple.com/maps?q=${userLat},${userLng}&t=m&dirflg=d`);
                this.isStarted = true;
            }
            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Capacitor"].platform == 'android') {
                window.open(`https://www.google.com/maps/dir/?api=1&destination=${userLat},${userLng}&travelmode=driving`);
                this.isStarted = true;
            }
            else {
                window.open(`https://www.google.com/maps/dir/?api=1&destination=${userLat},${userLng}&travelmode=driving`);
                this.isStarted = true;
            }
        });
    }
    //Set directions to user's destination
    navigateToPointAndCalculateDistance() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userLatLng = { lat: this.order.destinationLat, lng: this.order.destinationLong };
            let userLat = +userLatLng.lat;
            let userLng = +userLatLng.lng;
            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Capacitor"].platform === 'ios') {
                window.open(`maps://maps.apple.com/maps?q=${userLat},${userLng}&t=m&dirflg=d`);
                this.isStarted = true;
            }
            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Capacitor"].platform == 'android') {
                window.open(`https://www.google.com/maps/dir/?api=1&destination=${userLat},${userLng}&travelmode=driving`);
                this.isStarted = true;
            }
            else {
                window.open(`https://www.google.com/maps/dir/?api=1&destination=${userLat},${userLng}&travelmode=driving`);
                this.isStarted = true;
            }
            this.subscriptions.push(this.tripService.startTrip(this.currentTrip.id)
                .subscribe(() => {
                this.startTrip();
            }));
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
        let newObj = new src_models__WEBPACK_IMPORTED_MODULE_8__["Message"]();
        newObj.user = obj.user;
        newObj.text = obj.text;
        this.msgInboxArray.push(newObj);
        this.msgDto.text = '';
    }
    startTrip() {
        this.subscriptions.push(this.tripService.startTrip(this.currentTrip.id)
            .subscribe(trip => {
            if (trip) {
                this.tripStatus = trip.status;
            }
        }));
    }
    finishTrip() {
        this.completeTripAlert();
    }
    openLanguagePopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_16__["LanguagePopoverPage"],
                event: ev
            });
            yield popover.present();
        });
    }
    calculateEta(order) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        this.subscriptions.push(this.tripService.getTrip(this.driverId)
            .subscribe(x => {
            if (x == null) {
                return;
            }
            this.chatService.stop();
            this.chatService.start();
            this.tripStatus = x.status;
            this.currentTrip = x;
            this.subscriptions.push(this.orderService.getOrderById(x.orderId).subscribe(order => {
                if (order != null) {
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
                    this.subscriptions.push(this.driverService.getDriver(this.accountService.userValue.driverId)
                        .subscribe(s => {
                        this.tripPriceForDriver = (order.totalPrice * (s.comission / 100));
                    }));
                }
            }));
        }));
    }
    onTheAddress() {
        this.subscriptions.push(this.orderService.updateDriverArrived(this.order.id)
            .subscribe(() => { }));
    }
    cancelOrder() {
        this.alertForCancel();
    }
    alertForCancel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.translate.get(['Are you sure you want to cancel the order?', 'Your rating will decrease!', 'Confirm', 'Cancel'])
                .subscribe((text) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const popup = yield this.alertController.create({
                    header: text['Are you sure you want to cancel the order?'],
                    message: text['Your rating will decrease!'],
                    buttons: [
                        {
                            text: text['Cancel'],
                            role: 'cancel'
                        },
                        {
                            text: text['Confirm'],
                            handler: () => {
                                this.subscriptions.push(this.driverService.cancelOrderFromDriver(this.order.id)
                                    .subscribe(x => {
                                    this.subscriptions.push(this.tripService.cancelTrip(this.currentTrip.id)
                                        .subscribe(() => {
                                        this.accountService.userValue.isDrivingNow = false;
                                        this.subscriptions.push(this.accountService.updateDriving(this.applicationUserId, false)
                                            .subscribe(() => {
                                            this.subscriptions.push(this.driverService.voteDown(this.accountService.userValue.driverId)
                                                .subscribe(() => {
                                                this.route.navigate(['menu/driving']);
                                            }));
                                        }));
                                    }));
                                }));
                            }
                        }
                    ]
                });
                yield popup.present();
            }));
        });
    }
    canceledOrder() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.translate.get(['Order is cancelled by the customer.'])
                .subscribe((text) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const popup = yield this.alertController.create({
                    header: text['Order is cancelled by the customer.'],
                    buttons: [
                        {
                            text: 'Ok',
                            handler: () => {
                                this.accountService.userValue.isDrivingNow = false;
                                this.subscriptions.push(this.accountService.updateDriving(this.applicationUserId, false)
                                    .subscribe(() => {
                                    this.route.navigate(['menu/driving']);
                                }));
                            }
                        }
                    ]
                });
                yield popup.present();
            }));
        });
    }
    completeTripAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.translate.get(['Are you sure you want to finish the trip?', 'Yes', 'No'])
                .subscribe((text) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const popup = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: text['Are you sure you want to finish the trip?'],
                    //message: '<img src = "../assets/default.png" width="1px" height="1px">',
                    buttons: [
                        {
                            text: text['No']
                        },
                        {
                            text: text['Yes'],
                            handler: () => {
                                this.subscriptions.push(this.tripService.completeTrip(this.currentTrip.id)
                                    .subscribe(trip => {
                                    this.subscriptions.push(this.walletService.dischargeWallet(this.applicationUserId, this.tripPriceForDriver)
                                        .subscribe(x => {
                                        this.subscriptions.push(this.profitService.addToProfit(this.tripPriceForDriver)
                                            .subscribe(() => { }));
                                    }));
                                    if (trip) {
                                        this.tripStatus = trip.status;
                                    }
                                    this.subscriptions.push(this.orderService.completeOrder(this.currentTrip.orderId)
                                        .subscribe(() => { }));
                                    //trigger the driver's driving now property to false
                                    let userId = this.accountService.userValue.id;
                                    let value = this.accountService.userValue.isDrivingNow = false;
                                    this.subscriptions.push(this.accountService.updateDriving(userId, value)
                                        .subscribe());
                                    this.isDrivingNow = this.accountService.userValue.isDrivingNow;
                                    this.route.navigate(['menu/driving']);
                                }));
                            }
                        }
                    ]
                });
                yield popup.present();
            }));
        });
    }
};
DrivingModePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_services_order_order_service__WEBPACK_IMPORTED_MODULE_12__["OrderService"] },
    { type: src_services__WEBPACK_IMPORTED_MODULE_9__["AccountService"] },
    { type: src_services_trip_trip_service__WEBPACK_IMPORTED_MODULE_14__["TripService"] },
    { type: src_services_wallet_wallet_service__WEBPACK_IMPORTED_MODULE_15__["WalletService"] },
    { type: src_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_11__["DriverService"] },
    { type: src_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_10__["ChatService"] },
    { type: src_services_profit_profit_service__WEBPACK_IMPORTED_MODULE_13__["ProfitService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_19__["CallNumber"] }
];
DrivingModePage.propDecorators = {
    mapRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['map', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], static: false },] }]
};
DrivingModePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-driving-mode',
        template: _raw_loader_driving_mode_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_driving_mode_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DrivingModePage);



/***/ }),

/***/ "O20S":
/*!*****************************************************!*\
  !*** ./src/app/driving-mode/driving-mode.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#e9e9e9;\n}\n\nion-toolbar {\n  --ion-background-color:#eeeeee;\n}\n\nion-title {\n  text-align: center;\n}\n\n#toolbarIcon {\n  font-size: 1.7em;\n}\n\n.fonted {\n  font-family: Open Sans Light;\n}\n\n.centered {\n  text-align: center;\n}\n\n.text {\n  font-family: Open Sans Light;\n}\n\nhr {\n  background: #eeeeee;\n  width: 70% !important;\n}\n\n.blink_me {\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite;\n}\n\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n\n.msg-box {\n  width: 100%;\n  height: 140px;\n  padding: 10px 30px;\n  font-size: 14px;\n  font-family: Open Sans Light;\n  overflow: auto;\n}\n\n.msg-box ul {\n  margin: -5px;\n  list-style: none;\n}\n\n.msg-box ul .ex-msg {\n  text-align: right;\n}\n\n.msg-box ul .in-msg {\n  text-align: left;\n  margin-left: -60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRyaXZpbmctbW9kZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSw4QkFBQTtBQUFKOztBQUtBO0VBQ0ksOEJBQUE7QUFGSjs7QUFZQTtFQUNJLGtCQUFBO0FBVEo7O0FBWUE7RUFDSSxnQkFBQTtBQVRKOztBQVlBO0VBQ0ksNEJBQUE7QUFUSjs7QUFZQTtFQUNJLGtCQUFBO0FBVEo7O0FBWUE7RUFFSSw0QkFBQTtBQVZKOztBQWFBO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtBQVZKOztBQWVBO0VBQ0ksNkNBQUE7VUFBQSxxQ0FBQTtBQVpKOztBQWVFO0VBQ0U7SUFDRSxVQUFBO0VBWko7QUFDRjs7QUFTRTtFQUNFO0lBQ0UsVUFBQTtFQVpKO0FBQ0Y7O0FBZ0JBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7QUFkSjs7QUFnQkk7RUFDSSxZQUFBO0VBRUEsZ0JBQUE7QUFmUjs7QUFnQlE7RUFDSSxpQkFBQTtBQWRaOztBQWlCUTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFmWiIsImZpbGUiOiJkcml2aW5nLW1vZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAvLy0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy93cDQ3OTI3ODAtZGFyay1waG9uZS13YWxscGFwZXJzLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNlOWU5ZTk7XHJcblxyXG5cclxufVxyXG5cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNlZWVlZWU7XHJcbn1cclxuXHJcbiAgICAvLyAjbWFwIHtcclxuICAgIC8vICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIC8vIH1cclxuICAgIFxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3Rvb2xiYXJJY29ue1xyXG4gICAgZm9udC1zaXplOiAxLjdlbTtcclxufVxyXG5cclxuLmZvbnRlZHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgTGlnaHQ7XHJcbn1cclxuXHJcbi5jZW50ZXJlZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHR7ICBcclxuICAgIC8vZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBMaWdodDtcclxufVxyXG5cclxuaHJ7XHJcbiAgICBiYWNrZ3JvdW5kOiNlZWVlZWU7XHJcbiAgICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vY2hhdFxyXG5cclxuLmJsaW5rX21lIHtcclxuICAgIGFuaW1hdGlvbjogYmxpbmtlciAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgYmxpbmtlciB7XHJcbiAgICA1MCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4ubXNnLWJveCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIExpZ2h0O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgdWwge1xyXG4gICAgICAgIG1hcmdpbjogLTVweDtcclxuXHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAuZXgtbXNnIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW4tbXNnIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC02MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "hinB":
/*!************************************************!*\
  !*** ./src/_services/profit/profit.service.ts ***!
  \************************************************/
/*! exports provided: ProfitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfitService", function() { return ProfitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.service */ "Dsd+");







let ProfitService = class ProfitService {
    constructor(http, sharedService) {
        this.http = http;
        this.sharedService = sharedService;
    }
    getTotalProfit() {
        const headers = this.sharedService.headerGerneration();
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/profit`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    addToProfit(value) {
        const headers = this.sharedService.headerGerneration();
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/profit/${value}`, { headers, responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            console.log('Client side error.');
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // server-side error
            console.log('Server side error.');
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
    }
};
ProfitService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }
];
ProfitService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProfitService);



/***/ }),

/***/ "j/1V":
/*!*************************************************************!*\
  !*** ./src/app/driving-mode/driving-mode-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DrivingModePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrivingModePageRoutingModule", function() { return DrivingModePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _driving_mode_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./driving-mode.page */ "8u0E");




const routes = [
    {
        path: '',
        component: _driving_mode_page__WEBPACK_IMPORTED_MODULE_3__["DrivingModePage"]
    }
];
let DrivingModePageRoutingModule = class DrivingModePageRoutingModule {
};
DrivingModePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DrivingModePageRoutingModule);



/***/ }),

/***/ "xDpq":
/*!*****************************************************!*\
  !*** ./src/app/driving-mode/driving-mode.module.ts ***!
  \*****************************************************/
/*! exports provided: HttpLoaderFactory, DrivingModePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrivingModePageModule", function() { return DrivingModePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _driving_mode_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./driving-mode-routing.module */ "j/1V");
/* harmony import */ var _driving_mode_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./driving-mode.page */ "8u0E");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _language_popover_language_popover_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../language-popover/language-popover.module */ "QhVT");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "Wwn5");












function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http);
}
let DrivingModePageModule = class DrivingModePageModule {
};
DrivingModePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _driving_mode_routing_module__WEBPACK_IMPORTED_MODULE_5__["DrivingModePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                }
            }),
            _language_popover_language_popover_module__WEBPACK_IMPORTED_MODULE_10__["LanguagePopoverPageModule"],
        ],
        providers: [
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_11__["CallNumber"],
        ],
        declarations: [_driving_mode_page__WEBPACK_IMPORTED_MODULE_6__["DrivingModePage"]]
    })
], DrivingModePageModule);



/***/ })

}]);
//# sourceMappingURL=driving-mode-driving-mode-module-es2015.js.map