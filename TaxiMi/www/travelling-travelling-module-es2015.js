(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travelling-travelling-module"],{

/***/ "1L49":
/*!***********************************************!*\
  !*** ./src/app/travelling/travelling.page.ts ***!
  \***********************************************/
/*! exports provided: TravellingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravellingPage", function() { return TravellingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_travelling_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./travelling.page.html */ "dq7I");
/* harmony import */ var _travelling_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./travelling.page.scss */ "XKq/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aspnet/signalr */ "Gpoy");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/_services */ "8Xdb");
/* harmony import */ var src_services_order_order_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/_services/order/order.service */ "8k+r");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../language-popover/language-popover.page */ "oXKM");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @capacitor/core */ "gcOT");














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
        this.subscriptions = [];
        this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
    }
    ngOnInit() {
        this.loading = true;
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
        const connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_6__["HubConnectionBuilder"]()
            .configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_6__["LogLevel"].Information)
            .withUrl(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].signalRUrl}/orderHub`)
            .build();
        connection.start().then(function () {
            console.log('signalR Connected in travelling');
        }).catch(function (err) {
            return console.log(err);
        });
        connection.on('CreatedOrder', () => {
            this.checkorder();
        });
        connection.on("IncrementDecrement", (orderId) => {
            this.subscriptions.push(this.orderService.getOrderById(orderId)
                .subscribe((data) => {
                (Math.round(this.orderTotalPrice * 100) / 100).toFixed(2);
                this.orderTotalPrice = data.totalPrice;
            }));
        });
        connection.on('OfferMorePrice', (orderId) => {
            this.subscriptions.push(this.orderService.getOrderById(orderId)
                .subscribe(x => {
                if (x.id == this.order.id) {
                    if (x.increasedByDriver >= 0.5) {
                        this.driverPrice = x.increasedByDriver;
                        this.driverIncreased = x.increasedByDriver + this.orderTotalPrice;
                        this.increasedOrder();
                    }
                }
            }));
        });
        connection.on('OrderAccepted', () => {
            this.subscriptions.push(this.orderService.getMyOrder(this.user.id)
                .subscribe(x => {
                if (x.status == 'Accepted') {
                    this.presentOrderAcceptedNotification();
                    this.checkorder();
                }
            }));
        });
        connection.on('LocateDriver', (driverId) => {
        });
    }
    presentOrderAcceptedNotification() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _capacitor_core__WEBPACK_IMPORTED_MODULE_13__["LocalNotifications"].schedule({
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
            this.isSubmitted = false;
        }
        if (this.form.value.destination == undefined) {
            this.destinationError();
            this.isSubmitted = false;
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
                    this.subscriptions.push(this.orderService.createOrder(this.form.value)
                        .subscribe(x => {
                        this.form.value.locationLat = this.form.value.locationLat.toString();
                        this.form.value.locationLong = this.form.value.locationLong.toString();
                        this.orderStatus = this.form.value.status;
                        this.subscriptions.push(this.orderService.getMyOrder(this.user.id)
                            .subscribe());
                    }));
                }
            }
            else {
                this.isSubmitted = false;
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
            this.subscriptions.push(this.orderService.increaseOrderPrice(this.order.id, amount)
                .subscribe());
        }
    }
    increment() {
        this.subscriptions.push((this.orderService.incrementOrderPrice(this.order.id)
            .subscribe(() => { })));
    }
    decrement() {
        if (this.orderTotalPrice >= 1) {
            this.subscriptions.push(this.orderService.decrementOrderPrice(this.order.id)
                .subscribe(() => { }));
        }
    }
    //Order functionallity - waiting for driver
    checkorder() {
        this.subscriptions.push(this.orderService.getMyOrder(this.user.id)
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
                    this.isSubmitted = false;
                    this.route.navigate(['menu/travel-mode']);
                    this.isCompleted = false;
                }
            }
            else {
                this.orderTotalPrice = 0;
            }
        }, error => {
            console.log(error);
        }));
    }
    cancelOrder() {
        this.subscriptions.push(this.orderService.getMyOrder(this.user.id)
            .subscribe(data => {
            this.subscriptions.push(this.orderService.deleteOrder(data.id)
                .subscribe(() => {
                this.isCompleted = false;
                this.orderStatus = null;
                this.orderTotalPrice = 0;
                this.clearForm();
                this.isSubmitted = false;
            }));
        }));
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_12__["LanguagePopoverPage"],
                event: ev
            });
            yield popover.present();
        });
    }
    locationError() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popup = yield this.alertController.create({
                header: `Driver offers you ${this.driverIncreased.toFixed(2)}$ for the order`,
                buttons: [
                    {
                        text: 'Accept',
                        handler: () => {
                            this.subscriptions.push(this.orderService.getMyOrder(this.user.id).subscribe(order => {
                                this.subscriptions.push(this.orderService.increasedOrderAccept(order.id, true)
                                    .subscribe(() => {
                                    this.subscriptions.push(this.orderService.increaseOrderPrice(order.id, this.driverPrice)
                                        .subscribe(() => {
                                    }));
                                }));
                            }));
                        }
                    },
                    {
                        text: 'Cancel',
                        handler: () => {
                            this.subscriptions.push(this.orderService.getMyOrder(this.user.id).subscribe(order => {
                                this.subscriptions.push(this.orderService.increasedOrderAccept(order.id, false)
                                    .subscribe(() => {
                                }));
                                this.subscriptions.push(this.orderService.resetIncreasing(this.order.id)
                                    .subscribe(() => {
                                }));
                            }));
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
TravellingPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_services_order_order_service__WEBPACK_IMPORTED_MODULE_10__["OrderService"] },
    { type: src_services__WEBPACK_IMPORTED_MODULE_9__["AccountService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] }
];
TravellingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-travelling',
        template: _raw_loader_travelling_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_travelling_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TravellingPage);



/***/ }),

/***/ "53QH":
/*!*********************************************************!*\
  !*** ./src/app/travelling/travelling-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: TravellingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravellingPageRoutingModule", function() { return TravellingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _travelling_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./travelling.page */ "1L49");




const routes = [
    {
        path: '',
        component: _travelling_page__WEBPACK_IMPORTED_MODULE_3__["TravellingPage"]
    }
];
let TravellingPageRoutingModule = class TravellingPageRoutingModule {
};
TravellingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TravellingPageRoutingModule);



/***/ }),

/***/ "JQQN":
/*!*************************************************!*\
  !*** ./src/app/travelling/travelling.module.ts ***!
  \*************************************************/
/*! exports provided: HttpLoaderFactory, TravellingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravellingPageModule", function() { return TravellingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _travelling_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./travelling-routing.module */ "53QH");
/* harmony import */ var _travelling_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./travelling.page */ "1L49");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _language_popover_language_popover_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../language-popover/language-popover.module */ "QhVT");











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http);
}
let TravellingPageModule = class TravellingPageModule {
};
TravellingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _travelling_routing_module__WEBPACK_IMPORTED_MODULE_5__["TravellingPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                }
            }),
            _language_popover_language_popover_module__WEBPACK_IMPORTED_MODULE_10__["LanguagePopoverPageModule"]
        ],
        providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]],
        declarations: [_travelling_page__WEBPACK_IMPORTED_MODULE_6__["TravellingPage"]]
    })
], TravellingPageModule);



/***/ }),

/***/ "XKq/":
/*!*************************************************!*\
  !*** ./src/app/travelling/travelling.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#e9e9e9;\n}\n\nion-toolbar {\n  --ion-background-color:#eeeeee;\n}\n\nion-title {\n  text-align: center;\n}\n\n.noScroll {\n  overflow: hidden;\n}\n\n#marker {\n  position: absolute;\n  /*url of the marker*/\n  background: url(http://maps.gstatic.com/mapfiles/markers2/marker.png) no-repeat;\n  /*center the marker*/\n  top: 50%;\n  left: 50%;\n  z-index: 1;\n  /*fix offset when needed*/\n  margin-left: -10px;\n  margin-top: -34px;\n  /*size of the image*/\n  height: 34px;\n  width: 20px;\n  cursor: pointer;\n}\n\n#map {\n  height: 100%;\n  width: 100%;\n}\n\n#toolbarIcon {\n  font-size: 1.7em;\n}\n\n.centered {\n  text-align: center;\n}\n\n.textTravel {\n  font-size: 1.5em;\n  font-family: Open Sans Light;\n}\n\n.text {\n  font-size: 1.4em;\n  font-family: Open Sans Light;\n}\n\n.checkbox-icon {\n  color: white;\n}\n\nion-select {\n  color: #383838;\n  background-color: white;\n  border-radius: 10px;\n  border: 3px solid #eeeeee;\n}\n\n.blink_me {\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite;\n}\n\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n\n.backIcon {\n  color: #ffae00;\n  font-size: 150%;\n}\n\n.back {\n  color: #ffae00;\n}\n\n.fonted {\n  font-family: Open Sans Light;\n}\n\n.msg-box {\n  width: 100%;\n  height: 140px;\n  padding: 10px 30px;\n  font-size: 14px;\n  font-family: Open Sans Light;\n  overflow: auto;\n}\n\n.msg-box ul {\n  margin: -5px;\n  list-style: none;\n}\n\n.msg-box ul .ex-msg {\n  text-align: right;\n}\n\n.msg-box ul .in-msg {\n  text-align: left;\n  margin-left: -60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRyYXZlbGxpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQUE7QUFBSjs7QUFHQTtFQUNJLDhCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHSTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSwrRUFBQTtFQUNBLG9CQUFBO0VBQ0EsUUFBQTtFQUFRLFNBQUE7RUFFUixVQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGVBQUE7QUFEUjs7QUFJSTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtBQURKOztBQUtBO0VBQ0ksa0JBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUFGSjs7QUFLQztFQUNJLFlBQUE7QUFGTDs7QUFLQTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFGSjs7QUFLQTtFQUNJLDZDQUFBO1VBQUEscUNBQUE7QUFGSjs7QUFLRTtFQUNFO0lBQ0UsVUFBQTtFQUZKO0FBQ0Y7O0FBREU7RUFDRTtJQUNFLFVBQUE7RUFGSjtBQUNGOztBQUtBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFISjs7QUFNQTtFQUNJLGNBQUE7QUFISjs7QUFNQTtFQUNJLDRCQUFBO0FBSEo7O0FBT0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQUpKOztBQU1JO0VBQ0ksWUFBQTtFQUVBLGdCQUFBO0FBTFI7O0FBTVE7RUFDSSxpQkFBQTtBQUpaOztBQU9RO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUxaIiwiZmlsZSI6InRyYXZlbGxpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAvLy0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy93cDQ3OTI3ODAtZGFyay1waG9uZS13YWxscGFwZXJzLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNlOWU5ZTk7XHJcbn1cclxuXHJcbmlvbi10b29sYmFye1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZWVlZWVlO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubm9TY3JvbGwge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcbiAgICAjbWFya2Vye1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIC8qdXJsIG9mIHRoZSBtYXJrZXIqL1xyXG4gICAgICAgIGJhY2tncm91bmQ6dXJsKGh0dHA6Ly9tYXBzLmdzdGF0aWMuY29tL21hcGZpbGVzL21hcmtlcnMyL21hcmtlci5wbmcpIG5vLXJlcGVhdDtcclxuICAgICAgICAvKmNlbnRlciB0aGUgbWFya2VyKi9cclxuICAgICAgICB0b3A6NTAlO2xlZnQ6NTAlO1xyXG4gICAgICBcclxuICAgICAgICB6LWluZGV4OjE7XHJcbiAgICAgICAgLypmaXggb2Zmc2V0IHdoZW4gbmVlZGVkKi9cclxuICAgICAgICBtYXJnaW4tbGVmdDotMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOi0zNHB4O1xyXG4gICAgICAgIC8qc2l6ZSBvZiB0aGUgaW1hZ2UqL1xyXG4gICAgICAgIGhlaWdodDozNHB4O1xyXG4gICAgICAgIHdpZHRoOjIwcHg7XHJcbiAgICAgIFxyXG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICNtYXAge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4jdG9vbGJhckljb257XHJcbiAgICBmb250LXNpemU6IDEuN2VtO1xyXG59XHJcblxyXG5cclxuLmNlbnRlcmVke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGV4dFRyYXZlbHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIExpZ2h0O1xyXG59XHJcblxyXG4udGV4dHsgIFxyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgTGlnaHQ7XHJcbn1cclxuXHJcbiAuY2hlY2tib3gtaWNvbntcclxuICAgICBjb2xvcjp3aGl0ZTtcclxuIH1cclxuXHJcbmlvbi1zZWxlY3R7XHJcbiAgICBjb2xvcjogcmdiKDU2LCA1NiwgNTYpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2VlZWVlZTtcclxufVxyXG5cclxuLmJsaW5rX21lIHtcclxuICAgIGFuaW1hdGlvbjogYmxpbmtlciAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgYmxpbmtlciB7XHJcbiAgICA1MCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbi5iYWNrSWNvbiB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMTc0LCAwKTtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxufVxyXG5cclxuLmJhY2sge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDE3NCwgMCk7XHJcbn1cclxuXHJcbi5mb250ZWR7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIExpZ2h0O1xyXG59XHJcblxyXG5cclxuLm1zZy1ib3gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBMaWdodDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAgIHVsIHtcclxuICAgICAgICBtYXJnaW46IC01cHg7XHJcblxyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgLmV4LW1zZyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmluLW1zZyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "dq7I":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/travelling/travelling.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding>\r\n    <ion-header>\r\n        <ion-toolbar>\r\n            <ion-buttons slot=\"start\">\r\n                <ion-menu-button></ion-menu-button>\r\n            </ion-buttons>\r\n\r\n\r\n            <ion-title>\r\n                <ion-label>{{'Travel'| translate}}</ion-label>\r\n            </ion-title>\r\n\r\n            <ion-buttons slot=\"end\">\r\n\r\n                <ion-icon (click)='openLanguagePopover($event)' id=\"toolbarIcon\" name=\"language-outline\"></ion-icon>\r\n            </ion-buttons>\r\n        </ion-toolbar>\r\n    </ion-header>\r\n    <div class=\"row mt-2\">\r\n        <div class=\"col\">\r\n            <ion-text>\r\n                <div class=\"row\">\r\n                    <form [formGroup]=\"form\" novalidate class=\"col\">\r\n                        <div *ngIf=\"isCompleted == false\" class=\"form-group col mt-2\">\r\n                            <p (click)=\"locationMap()\" *ngIf=\"this.orderService.chosenLocation != null\">\r\n                                <ion-icon class=\"mr-2\" name=\"location-outline\"></ion-icon>\r\n                                {{this.orderService.chosenLocation}}\r\n                            </p>\r\n                            <p (click)=\"locationMap()\" *ngIf=\"this.orderService.chosenLocation == null\">\r\n                                <ion-icon class=\"mr-2\" name=\"location-outline\"></ion-icon>{{'Take me from here'| translate}}.\r\n                            </p>\r\n                            <hr />\r\n                        </div>\r\n                        <div *ngIf=\"isCompleted == false\" class=\"form-group col mt-3\">\r\n                            <p (click)=\"destinationMap()\" *ngIf=\"this.orderService.chosenDestination != null\">\r\n                                <ion-icon class=\"mr-2\" name=\"arrow-forward-outline\"></ion-icon>\r\n                                {{this.orderService.chosenDestination}}\r\n                            </p>\r\n                            <p (click)=\"destinationMap()\" *ngIf=\"this.orderService.chosenDestination == null\">\r\n                                <ion-icon class=\"mr-2\" name=\"arrow-forward-outline\"></ion-icon>{{'Choose destination' | translate}}.\r\n                            </p>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"isCompleted == true\" class=\"form-group col mt-2\">\r\n                            <p>\r\n                                <ion-icon class=\"mr-2\" name=\"analytics-outline\"></ion-icon>{{order.location}}\r\n                            </p>\r\n                            <hr />\r\n                            <p>\r\n                                <ion-icon class=\"mr-2\" name=\"arrow-forward-outline\"></ion-icon>{{order.destination}}\r\n                            </p>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"isCompleted == false\" class=\"col-md-12 text-center\">\r\n                            <ion-select (ionChange)=\"onSelectChange($event)\"\r\n                                [placeholder]='\"Additional options (optional)\" | translate' multiple=\"true\">\r\n                                <!-- <ion-select-option value=\"With pets\">{{'Pets' | translate}} + 2.20$\r\n                                </ion-select-option> -->\r\n                                <ion-select-option value=\"With pets\">{{'Pets' | translate}} + 2.20$\r\n                                </ion-select-option>\r\n                                <ion-select-option value=\"With stroller\">{{'Baggage' | translate}}\r\n                                </ion-select-option>\r\n                                <ion-select-option value=\"Special needs\">{{'Special needs' | translate}}\r\n                                </ion-select-option>\r\n                            </ion-select>\r\n                        </div>\r\n                        <hr />\r\n\r\n                        <div *ngIf=\"isCompleted == false\" class=\"col-md-12 text-center\">\r\n                            <ion-select (ionChange)=\"onSelectCar($event)\"\r\n                                [placeholder]='\"Car type (optional)\" | translate'>\r\n                                <ion-select-option value=\"Normal\">{{'Normal' | translate}}</ion-select-option>\r\n                                <ion-select-option value=\"Comfort\">{{'Comfort' | translate}} + 1$</ion-select-option>\r\n                            </ion-select>\r\n                        </div>\r\n\r\n\r\n                        <div *ngIf=\"orderStatus == 'Waiting'\" class=\"form-group col mt-3\">\r\n                            <div class=\"d-flex w-100 justify-content-between\">\r\n                                <h5 class=\"fonted\">{{'Increase amount' | translate}}</h5>\r\n                                <a class=\"mr-1\">\r\n                                    <button class=\"btn btn-light btn-sm mr-1\" (click)=\"increment()\">+</button>\r\n                                    <button class=\"btn btn-light btn-sm\">{{orderTotalPrice}}$</button>\r\n                                    <button class=\"btn btn-light btn-sm ml-1\" (click)=\"decrement()\">-</button>\r\n                                </a>\r\n\r\n                            </div>\r\n                            <hr />\r\n                        </div>\r\n                        \r\n                        <div class=\"row text-center\">\r\n                            <div class=\"col-md-12\">\r\n\r\n                                <button [disabled]=\"isSubmitted\" *ngIf=\"isCompleted == false\" type=\"button\" (click)=\"onSubmit()\"\r\n                                        class=\"mt-3 btn btn-warning fonted\">\r\n                                    {{'Make a order'| translate}}\r\n                                    <span *ngIf=\"isSubmitted\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n\r\n                    <div *ngIf=\"isCompleted == true\" class=\"blink_me col-md-12 mt-3 text-center fonted\">\r\n                        <button class=\"btn btn-warning fonted\">{{'Looking for a driver'| translate}}</button>\r\n                    </div>\r\n                </div>\r\n            </ion-text>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"isCompleted == true\" class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n        <!-- <ion-title>Choosen location</ion-title> -->\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <div class=\"d-flex w-100 justify-content-between\">\r\n                    <button *ngIf=\"isCompleted == true\" class=\"ml-3 btn btn-info fonted\"\r\n                        (click)=\"cancelOrder()\">{{'Cost'|\r\n                        translate}} : {{orderTotalPrice}}$</button>\r\n\r\n                    <button *ngIf=\"isCompleted == true\" class=\"mr-3 btn btn-danger fonted\"\r\n                        (click)=\"cancelOrder()\">{{'Cancel'| translate}}</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n    </ion-toolbar>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=travelling-travelling-module-es2015.js.map