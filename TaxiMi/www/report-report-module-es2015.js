(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-report-module"],{

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

/***/ "LVab":
/*!*****************************************!*\
  !*** ./src/app/report/report.module.ts ***!
  \*****************************************/
/*! exports provided: HttpLoaderFactory, ReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPageModule", function() { return ReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _report_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report-routing.module */ "UkO7");
/* harmony import */ var _report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report.page */ "jDlz");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _language_popover_language_popover_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../language-popover/language-popover.module */ "QhVT");











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http);
}
let ReportPageModule = class ReportPageModule {
};
ReportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _report_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportPageRoutingModule"],
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
        declarations: [_report_page__WEBPACK_IMPORTED_MODULE_6__["ReportPage"]]
    })
], ReportPageModule);



/***/ }),

/***/ "UkO7":
/*!*************************************************!*\
  !*** ./src/app/report/report-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ReportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPageRoutingModule", function() { return ReportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _report_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report.page */ "jDlz");




const routes = [
    {
        path: '',
        component: _report_page__WEBPACK_IMPORTED_MODULE_3__["ReportPage"]
    }
];
let ReportPageRoutingModule = class ReportPageRoutingModule {
};
ReportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReportPageRoutingModule);



/***/ }),

/***/ "WnCc":
/*!*****************************************!*\
  !*** ./src/app/report/report.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#e9e9e9;\n}\n\n.centered {\n  text-align: center;\n}\n\n.text {\n  font-family: Open Sans Light;\n}\n\nhr {\n  background: #eeeeee;\n  width: 70% !important;\n}\n\n.backIcon {\n  color: #ffae00;\n  font-size: 150%;\n}\n\n.back {\n  color: #ffae00;\n}\n\nion-toolbar {\n  --ion-background-color:#eeeeee;\n}\n\nion-title {\n  text-align: center;\n}\n\n#toolbarIcon {\n  font-size: 1.7em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSw4QkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFHQTtFQUNJLDRCQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBSUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtBQURKOztBQUlBO0VBQ0ksOEJBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtBQURKIiwiZmlsZSI6InJlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC8vLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL3dwNDc5Mjc4MC1kYXJrLXBob25lLXdhbGxwYXBlcnMuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2U5ZTllOTtcclxuXHJcbn1cclxuLmNlbnRlcmVke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgTGlnaHQ7XHJcbn1cclxuXHJcbmhye1xyXG4gICAgYmFja2dyb3VuZDojZWVlZWVlO1xyXG4gICAgd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmJhY2tJY29uIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAxNzQsIDApO1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG59XHJcblxyXG4uYmFjayB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMTc0LCAwKTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNlZWVlZWU7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiN0b29sYmFySWNvbntcclxuICAgIGZvbnQtc2l6ZTogMS43ZW07XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "eYnM":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/report.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      \r\n  \r\n      <ion-title>\r\n          <ion-label>{{'Report' | translate}}</ion-label>\r\n      </ion-title>\r\n  \r\n      <ion-buttons slot=\"end\">\r\n        <ion-icon (click)='openLanguagePopover($event)' id=\"toolbarIcon\" name=\"language-outline\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n    \r\n  </ion-header>\r\n<ion-content padding class=\"background\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <div class=\"row mt-2\">\r\n        </div>\r\n  \r\n        <div class=\"row\">\r\n          <div class=\"col text-center\">\r\n            <ion-text class=\"centered\" color=\"dark\">\r\n              <h2 class=\"text\">{{'Report a problem' | translate}}</h2>\r\n              <hr>\r\n            </ion-text>\r\n  \r\n            <form [formGroup]=\"form\" novalidate class=\"col-md-6\">\r\n  \r\n              <div class=\"form-group col mt-5 text-center\">\r\n                <select (change)=\"reportType($event.target.value)\" formControlName=\"typeId\" class=\"form-control text\" id=\"exampleFormControlSelect1\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.typeId.errors }\">\r\n                  <option value=\"\" disabled selected hidden>{{'Choose report type' | translate}}</option>\r\n                  <option value=\"1\">{{'Complaint' | translate}}</option>\r\n                  <option value=\"2\">{{'Technical' | translate}}</option>\r\n                  <option value=\"3\">{{'Other' | translate}}</option>\r\n                </select>\r\n  \r\n                <div *ngIf=\"submitted && f.typeId.errors\" class=\"invalid-feedback text\">\r\n                  <div *ngIf=\"f.typeId.errors.required\">{{'The field is required' | translate}}!</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div *ngIf=\"selectedReportType == 1 \" class=\"form-group col mt-5 text-center text\">\r\n                <ion-text class=\"centered\" color=\"dark\">\r\n                  <h4 class=\"text\">{{'Last user' | translate}}</h4>\r\n                </ion-text>\r\n                <ion-input class=\"form-control\" value=\"{{userFirstName}} {{userLastName}}\"> \r\n                </ion-input>\r\n              </div>\r\n  \r\n  \r\n              <div class=\"form-group col mt-5\">\r\n                <ion-input formControlName=\"title\" type=\"text\" class=\"form-control text\"\r\n                 [placeholder]='\"Title\" | translate' [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\">\r\n                </ion-input>\r\n                <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.title.errors.required\">{{'The field is required' | translate}}!</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"form-group col mt-5\">\r\n                <textarea formControlName=\"description\" type=\"text\" class=\"form-control text\"\r\n                  [placeholder]='\"Description\" | translate' [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\">\r\n                </textarea>\r\n                <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.description.errors.required\">{{'The field is required' | translate}}!</div>\r\n                </div>\r\n              </div>\r\n  \r\n              <div class=\"col-md-12 mt-3\">\r\n                <button (click)=\"onSubmit()\" class=\"btn btn-info\" type=\"button\" color=\"dark\">{{'Submit' | translate}}</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n  \r\n  </ion-content>");

/***/ }),

/***/ "jDlz":
/*!***************************************!*\
  !*** ./src/app/report/report.page.ts ***!
  \***************************************/
/*! exports provided: ReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPage", function() { return ReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_report_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./report.page.html */ "eYnM");
/* harmony import */ var _report_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report.page.scss */ "WnCc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_services */ "8Xdb");
/* harmony import */ var src_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/_services/driver/driver.service */ "exMm");
/* harmony import */ var src_services_report_report_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/_services/report/report.service */ "z2VY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_services_order_order_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/_services/order/order.service */ "8k+r");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../language-popover/language-popover.page */ "oXKM");














let ReportPage = class ReportPage {
    constructor(reportService, route, formBuilder, driverService, accountService, location, orderService, alertController, translate, popoverController) {
        this.reportService = reportService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.driverService = driverService;
        this.accountService = accountService;
        this.location = location;
        this.orderService = orderService;
        this.alertController = alertController;
        this.translate = translate;
        this.popoverController = popoverController;
        this.subscriptions = [];
        this.submitted = false;
        this.loading = false;
        this.userId = this.accountService.userValue.id;
        this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            reporterId: [''],
            suspectedUserId: [''],
            typeId: ['']
        });
    }
    // ionViewDidLeave() {
    //   for (const subscription of this.subscriptions) {
    //     console.log(subscription)
    //     subscription.unsubscribe();
    //   }
    // }
    get f() { return this.form.controls; }
    reportType(event) {
        this.selectedReportType = event;
        if (this.selectedReportType == 1) {
            this.subscriptions.push(this.accountService.getById(this.userId)
                .subscribe(u => {
                this.isDriver = u.isDriver;
                if (u.isDriver) {
                    this.subscriptions.push(this.orderService.getLastCompletedOrder(this.userId)
                        .subscribe(x => {
                        this.lastOrder = x;
                        this.subscriptions.push(this.accountService.getById(x.applicationUserId)
                            .subscribe(user => {
                            this.userFirstName = user.firstName;
                            this.userLastName = user.lastName;
                            this.suspectedUserId = this.lastOrder.applicationUserId;
                            this.reporterId = this.userId;
                        }));
                    }));
                }
                else {
                    this.subscriptions.push(this.orderService.getLastCompletedOrder(this.userId)
                        .subscribe(x => {
                        this.lastOrder = x;
                        this.subscriptions.push(this.accountService.getById(x.acceptedBy)
                            .subscribe(user => {
                            this.userFirstName = user.firstName;
                            this.userLastName = user.lastName;
                            this.subscriptions.push(this.driverService.getDriverActiveCar(user.driverId)
                                .subscribe(car => {
                                this.carModel = car.model;
                                this.form.value.typeId = +this.form.value.typeId;
                                this.suspectedUserId = user.driverId;
                                this.reporterId = this.userId;
                            }));
                        }));
                    }));
                }
            }));
        }
    }
    onSubmit() {
        this.submitted = true;
        if (!this.form.valid) {
            console.log('Please provide all the required values!');
        }
        else {
            this.form.value.typeId = +this.form.value.typeId;
            if (this.form.value.typeId == 1) {
                this.form.value.suspectedUserId = this.suspectedUserId;
                this.form.value.reporterId = this.reporterId;
                this.subscriptions.push(this.reportService.createReport(this.form.value)
                    .subscribe(report => {
                    console.log("report created:");
                    console.log(report);
                    this.reportCompleted();
                    this.clearForm();
                }));
            }
            else {
                this.form.value.reporterId = this.userId;
                this.subscriptions.push(this.reportService.createReport(this.form.value)
                    .subscribe(report => {
                    console.log("report created:");
                    console.log(report);
                    this.reportCompleted();
                    this.clearForm();
                }));
            }
            console.log(this.form.value);
        }
    }
    openLanguagePopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_13__["LanguagePopoverPage"],
                event: ev
            });
            yield popover.present();
        });
    }
    reportCompleted() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.translate.get(['Report', 'Your report is sent successfully', 'Confirm'])
                .subscribe((text) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const popup = yield this.alertController.create({
                    message: text['Your report is sent successfully'],
                    buttons: [
                        {
                            text: text['Confirm'],
                            handler: () => {
                                if (this.isDriver == true) {
                                    this.route.navigate(['menu/driving']);
                                }
                                else {
                                    this.route.navigate(['menu/travelling']);
                                }
                            }
                        }
                    ]
                });
                yield popup.present();
            }));
        });
    }
    clearForm() {
        this.form.reset({
            'title': '',
            'description': '',
            'typeId': '',
            'suspectedDriverId': '',
            'reporterId': '',
        });
    }
    goBack() {
        this.location.back();
    }
};
ReportPage.ctorParameters = () => [
    { type: src_services_report_report_service__WEBPACK_IMPORTED_MODULE_8__["ReportService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_7__["DriverService"] },
    { type: src_services__WEBPACK_IMPORTED_MODULE_6__["AccountService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] },
    { type: src_services_order_order_service__WEBPACK_IMPORTED_MODULE_10__["OrderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["AlertController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["PopoverController"] }
];
ReportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-report',
        template: _raw_loader_report_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_report_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReportPage);



/***/ }),

/***/ "z2VY":
/*!************************************************!*\
  !*** ./src/_services/report/report.service.ts ***!
  \************************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.service */ "Dsd+");







let ReportService = class ReportService {
    constructor(http, sharedService) {
        this.http = http;
        this.sharedService = sharedService;
    }
    createReport(data) {
        const headers = this.sharedService.headerGerneration();
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/report`, data, { headers, responseType: 'text' })
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
ReportService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }
];
ReportService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ReportService);



/***/ })

}]);
//# sourceMappingURL=report-report-module-es2015.js.map