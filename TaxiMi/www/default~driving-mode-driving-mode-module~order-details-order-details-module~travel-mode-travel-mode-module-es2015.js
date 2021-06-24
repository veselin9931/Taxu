(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~driving-mode-driving-mode-module~order-details-order-details-module~travel-mode-travel-mode-module"],{

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

/***/ "e7jj":
/*!********************************************!*\
  !*** ./src/_services/trip/trip.service.ts ***!
  \********************************************/
/*! exports provided: TripService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripService", function() { return TripService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../account.service */ "mpGk");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.service */ "Dsd+");








let TripService = class TripService {
    constructor(http, accountService, sharedService) {
        this.http = http;
        this.accountService = accountService;
        this.sharedService = sharedService;
        this.trips = [];
        this.currentTripDriverId = this.accountService.userValue.id;
        this.currentOrder = "";
    }
    createTrip(data) {
        const headers = this.sharedService.headerGerneration();
        this.currentTripOrderId = data.orderId;
        this.currentOrder = data.order;
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/trip`, data, { headers, responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('created trip: ', JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getTrip(applicationUserId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/trip/${applicationUserId}`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => this.trip = data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    startTrip(tripId) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/trip/start/${tripId}`, { responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    navigateToUser(tripId, orderId) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/trip/navigate/${tripId}/${orderId}`, { responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    cancelTrip(tripId) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/trip/cancel/${tripId}`, { responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    completeTrip(tripId) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/trip/finish/${tripId}`, { responseType: 'json' })
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
TripService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"] },
    { type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] }
];
TripService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], TripService);



/***/ })

}]);
//# sourceMappingURL=default~driving-mode-driving-mode-module~order-details-order-details-module~travel-mode-travel-mode-module-es2015.js.map