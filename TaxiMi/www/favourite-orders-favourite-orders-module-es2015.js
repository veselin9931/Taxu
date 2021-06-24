(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favourite-orders-favourite-orders-module"],{

/***/ "3RXm":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favourite-orders/favourite-orders.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>\r\n      <ion-label>{{'Favourites' | translate}}</ion-label>\r\n  </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon (click)='openLanguagePopover($event)' id=\"toolbarIcon\" name=\"language-outline\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content padding class=\"background\">\r\n  <ion-text *ngIf=\"favourites.length == 0\" class=\"centered\" color=\"dark\">\r\n      <h2 class=\"fonted mt-2\">{{'You dont have saved trips' | translate}}!</h2>\r\n    <hr />\r\n  </ion-text>\r\n\r\n  <div class=\"row mt-2\">\r\n    \r\n    <div class=\"col\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-10\">\r\n          <div *ngFor=\"let favourite of favourites\" class=\"list-group mt-2\">\r\n\r\n            <a class=\"text list-group-item list-group-item-action flex-column align-items-start\">\r\n              <p class=\"mb-1 fonted\">{{'Location' | translate}}: {{favourite.location}}</p>\r\n             \r\n              <p class=\"mb-1 fonted\">{{'Destination' | translate}}: {{favourite.destination}}</p>\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <div class=\"d-flex w-100 justify-content-between\">\r\n                    <small>{{'Trip distance' | translate}}: {{favourite.tripDistance}} km</small>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <small>{{'Total cost' | translate}}: {{favourite.totalPrice}} лв.</small>\r\n                </div>\r\n                <hr />\r\n              </div>\r\n              <ion-toolbar color=\"light\">\r\n                <ion-buttons slot=\"start\">\r\n                  <ion-button class=\"fonted\" (click)=\"useThis(favourite)\" type=\"submit\" color=\"dark\">{{'Use this trip' | translate}}</ion-button>\r\n                </ion-buttons>\r\n            \r\n                <ion-buttons slot=\"end\">\r\n                  <ion-button class=\"fonted\" (click)=\"remove(favourite.id)\" type=\"submit\" color=\"danger\">{{'Delete' | translate}}</ion-button>\r\n                </ion-buttons>\r\n              </ion-toolbar>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "8k+r":
/*!**********************************************!*\
  !*** ./src/_services/order/order.service.ts ***!
  \**********************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.service */ "Dsd+");







let OrderService = class OrderService {
    constructor(http, sharedService) {
        this.http = http;
        this.sharedService = sharedService;
        this.orders = [];
        this.completedOrder = false;
    }
    createOrder(data) {
        const headers = this.sharedService.headerGerneration();
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/order`, data, { headers, responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    addToFavourites(data) {
        const headers = this.sharedService.headerGerneration();
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/order/favourites`, data, { headers, responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getMyFavourites(userId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/order/favourites/${userId}`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deleteFavouriteOrder(orderId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/order/favourites/${orderId}`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('deleted favourite order: ', JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getDirections(locationLat, locationLng, destinationLat, destinationLng) {
        const headers = this.sharedService.headerGerneration();
        return this.http.post(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${locationLat},${locationLng}&destinations=${destinationLat}%2C${destinationLng}%7C&key=AIzaSyAEvlXdM4joG4bNVT5l-tJSk9lUSGhxMNw`, { headers, responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getOrderById(id) {
        const headers = this.sharedService.headerGerneration();
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/order/id/${id}`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => this.order = data));
    }
    getCanceledOrderById(id) {
        const headers = this.sharedService.headerGerneration();
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/order/canceled/${id}`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => this.order = data));
    }
    getLastCompletedOrder(userId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/order/completed/${userId}`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getMyOrder(userId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/order/${userId}`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getOrderForChat(userId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/order/chat/${userId}`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getAllOrders() {
        const headers = this.sharedService.headerGerneration();
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/order`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getNormalOrders() {
        const headers = this.sharedService.headerGerneration();
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/order/normal`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getComfortOrders() {
        const headers = this.sharedService.headerGerneration();
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/order/comfort`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    acceptOrder(orderId, driverId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/order/${orderId}/${driverId}`, { headers, responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => this.driverId = driverId), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    updateOrderEta(orderId, value) {
        const headers = this.sharedService.headerGerneration();
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/order/eta/${orderId}/${value}`, { headers, responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    updateDriverArrived(orderId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/order/arrived/${orderId}`, { headers, responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    rateOrder(orderId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/order/rate/${orderId}`, { headers, responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    increaseOrderPrice(id, amount) {
        const headers = this.sharedService.headerGerneration();
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/order/increase/${id}/${amount}`, { headers, responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    completeOrder(orderId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/order/${orderId}`, { headers, responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deleteOrder(orderId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/order/${orderId}`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('deleted order: ', JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    driverIncreaseOrderPrice(orderId, amount, driverId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/order/increased/${orderId}/${amount}/${driverId}`, { headers, responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    resetIncreasing(orderId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/order/reset/${orderId}`, { headers, responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    increasedOrderAccept(orderId, value) {
        const headers = this.sharedService.headerGerneration();
        ;
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/order/accepted/increase/${orderId}/${value}`, { headers, responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    incrementOrderPrice(orderId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/order/increment/${orderId}`, { headers, responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    decrementOrderPrice(orderId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/order/decrement/${orderId}`, { headers, responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
OrderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }
];
OrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], OrderService);



/***/ }),

/***/ "9Cmh":
/*!*************************************************************!*\
  !*** ./src/app/favourite-orders/favourite-orders.module.ts ***!
  \*************************************************************/
/*! exports provided: HttpLoaderFactory, FavouriteOrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteOrdersPageModule", function() { return FavouriteOrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _favourite_orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favourite-orders-routing.module */ "S4tQ");
/* harmony import */ var _favourite_orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favourite-orders.page */ "roEg");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _language_popover_language_popover_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../language-popover/language-popover.module */ "QhVT");











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http);
}
let FavouriteOrdersPageModule = class FavouriteOrdersPageModule {
};
FavouriteOrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _favourite_orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavouriteOrdersPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                }
            }),
            _language_popover_language_popover_module__WEBPACK_IMPORTED_MODULE_10__["LanguagePopoverPageModule"]
        ],
        declarations: [_favourite_orders_page__WEBPACK_IMPORTED_MODULE_6__["FavouriteOrdersPage"]]
    })
], FavouriteOrdersPageModule);



/***/ }),

/***/ "S4tQ":
/*!*********************************************************************!*\
  !*** ./src/app/favourite-orders/favourite-orders-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: FavouriteOrdersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteOrdersPageRoutingModule", function() { return FavouriteOrdersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _favourite_orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favourite-orders.page */ "roEg");




const routes = [
    {
        path: '',
        component: _favourite_orders_page__WEBPACK_IMPORTED_MODULE_3__["FavouriteOrdersPage"]
    }
];
let FavouriteOrdersPageRoutingModule = class FavouriteOrdersPageRoutingModule {
};
FavouriteOrdersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FavouriteOrdersPageRoutingModule);



/***/ }),

/***/ "gSMX":
/*!*************************************************************!*\
  !*** ./src/app/favourite-orders/favourite-orders.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#e9e9e9;\n}\n\nion-toolbar {\n  --ion-background-color:#eeeeee;\n}\n\n.noScroll {\n  overflow: hidden;\n}\n\n#map {\n  height: 100%;\n  width: 100%;\n}\n\nion-title {\n  text-align: center;\n}\n\n#toolbarIcon {\n  font-size: 1.7em;\n}\n\n.fonted {\n  font-family: Open Sans Light;\n}\n\n.centered {\n  text-align: center;\n}\n\nhr {\n  background: #eeeeee;\n  width: 70% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZhdm91cml0ZS1vcmRlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQUE7QUFBSjs7QUFJQTtFQUNJLDhCQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtBQURKOztBQUlJO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksNEJBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0FBREo7O0FBS0E7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0FBRkoiLCJmaWxlIjoiZmF2b3VyaXRlLW9yZGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC8vLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL3dwNDc5Mjc4MC1kYXJrLXBob25lLXdhbGxwYXBlcnMuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2U5ZTllOTtcclxuXHJcbn1cclxuXHJcbmlvbi10b29sYmFye1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZWVlZWVlO1xyXG59XHJcblxyXG4ubm9TY3JvbGwge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgI21hcCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiN0b29sYmFySWNvbntcclxuICAgIGZvbnQtc2l6ZTogMS43ZW07XHJcbn1cclxuXHJcbi5mb250ZWR7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIExpZ2h0O1xyXG59XHJcblxyXG4uY2VudGVyZWR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5ocntcclxuICAgIGJhY2tncm91bmQ6I2VlZWVlZTtcclxuICAgIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "roEg":
/*!***********************************************************!*\
  !*** ./src/app/favourite-orders/favourite-orders.page.ts ***!
  \***********************************************************/
/*! exports provided: FavouriteOrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteOrdersPage", function() { return FavouriteOrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_favourite_orders_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./favourite-orders.page.html */ "3RXm");
/* harmony import */ var _favourite_orders_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favourite-orders.page.scss */ "gSMX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aspnet/signalr */ "Gpoy");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/_services */ "8Xdb");
/* harmony import */ var src_services_order_order_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/_services/order/order.service */ "8k+r");
/* harmony import */ var _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../language-popover/language-popover.page */ "oXKM");












let FavouriteOrdersPage = class FavouriteOrdersPage {
    constructor(orderService, accountService, alertController, route, translate, popoverController) {
        this.orderService = orderService;
        this.accountService = accountService;
        this.alertController = alertController;
        this.route = route;
        this.translate = translate;
        this.popoverController = popoverController;
        this.favourites = [];
        this.subscriptions = [];
        this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
    }
    ngOnInit() {
        this.getMyOrders();
        const connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_5__["HubConnectionBuilder"]()
            .configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_5__["LogLevel"].Information)
            .withUrl(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].signalRUrl}/orderHub`)
            .build();
        connection.start().then(function () {
            console.log('signalR Connected in travelling');
        }).catch(function (err) {
            return console.log(err.toString());
        });
        connection.on('BroadcastMessage', () => {
            this.getMyOrders();
        });
    }
    getMyOrders() {
        this.subscriptions.push(this.orderService.getMyFavourites(this.accountService.userValue.id)
            .subscribe(x => {
            this.favourites = x;
        }));
    }
    useThis(favouriteOrder) {
        this.orderService.selectedFavourite = favouriteOrder;
        this.route.navigate(['menu/travelling']);
    }
    remove(id) {
        this.deleteConfirmation(id);
    }
    openLanguagePopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_11__["LanguagePopoverPage"],
                event: ev
            });
            yield popover.present();
        });
    }
    deleteConfirmation(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.translate.get(['Delete from favourites?', 'Yes', 'No'])
                .subscribe((text) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const popup = yield this.alertController.create({
                    header: text['Delete from favourites?'],
                    buttons: [
                        {
                            text: text['Yes'],
                            handler: () => {
                                this.subscriptions.push(this.orderService.deleteFavouriteOrder(id)
                                    .subscribe(x => {
                                    this.successDeletedFavourite();
                                }));
                            }
                        },
                        {
                            text: text['No']
                        }
                    ]
                });
                yield popup.present();
            }));
        });
    }
    successDeletedFavourite() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.translate.get(['Successfully removed the trip!'])
                .subscribe((text) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const popup = yield this.alertController.create({
                    header: text['Successfully removed the trip!'],
                    buttons: [
                        {
                            text: 'Ok',
                        }
                    ]
                });
                yield popup.present();
            }));
        });
    }
};
FavouriteOrdersPage.ctorParameters = () => [
    { type: src_services_order_order_service__WEBPACK_IMPORTED_MODULE_10__["OrderService"] },
    { type: src_services__WEBPACK_IMPORTED_MODULE_9__["AccountService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] }
];
FavouriteOrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-favourite-orders',
        template: _raw_loader_favourite_orders_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_favourite_orders_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FavouriteOrdersPage);



/***/ })

}]);
//# sourceMappingURL=favourite-orders-favourite-orders-module-es2015.js.map