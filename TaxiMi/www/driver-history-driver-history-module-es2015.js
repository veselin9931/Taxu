(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["driver-history-driver-history-module"],{

/***/ "BcYB":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/driver-history/driver-history.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>\r\n        <ion-label>Cyber</ion-label>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon (click)='openLanguagePopover($event)' id=\"toolbarIcon\" name=\"language-outline\"></ion-icon>\r\n\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding class=\"background\">\r\n  <div class=\"row mt-2\">\r\n    <div class=\"col\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 text-center\">\r\n          <ion-text class=\"centered\">\r\n            <h2 class=\"text\">{{'My history' | translate}}</h2>\r\n            <hr>\r\n          </ion-text>\r\n        </div>\r\n        <div class=\"col-md-10\">\r\n        <div class=\"list-group mt-2\">\r\n\r\n          <a class=\"text list-group-item list-group-item-action flex-column align-items-start\">\r\n            <div class=\"d-flex w-100 justify-content-between\">\r\n              <h5 class=\"text mb-1\">{{'Daily earnings' | translate}}</h5>\r\n              <small>{{'Today' | translate}}: {{currentDate |  date:'MM/dd/yyyy h:mm'}}</small>\r\n\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 text-center\">\r\n                <h5 class=\"text\">{{'Total' | translate}}: {{dailyProfit}} лв.</h5>\r\n              </div>\r\n            </div>\r\n          </a>\r\n        </div>\r\n      </div>\r\n        <div class=\"col-md-10\">\r\n          <div *ngFor=\"let order of orders\" class=\"list-group mt-2\">\r\n\r\n            <a class=\"text list-group-item list-group-item-action flex-column align-items-start\">\r\n              <div class=\"d-flex w-100 justify-content-between\">\r\n                <h5 class=\"text mb-1\">{{'Order details' | translate}}</h5>\r\n                <small>{{order.createdOn |  date:'MM/dd/yyyy h:mm'}}</small>\r\n              </div>\r\n              <p class=\"mb-1 text\">{{'Passenger' | translate}}: {{order.applicationUser.firstName}} {{order.applicationUser.lastName}}</p>\r\n              <p class=\"mb-1 text\">{{'Phone number' | translate}}: {{order.applicationUser.phone}}</p>\r\n              <p class=\"mb-1 text\">{{'Location' | translate}}: {{order.location}}</p>\r\n              <p class=\"mb-1 text\">{{'Destination' | translate}}: {{order.destination}}</p>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <small class=\"text\">{{'Profit' | translate}}: {{order.totalPrice}} лв.</small>\r\n                </div>\r\n              </div>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "H0Wu":
/*!*******************************************************!*\
  !*** ./src/app/driver-history/driver-history.page.ts ***!
  \*******************************************************/
/*! exports provided: DriverHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverHistoryPage", function() { return DriverHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_driver_history_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./driver-history.page.html */ "BcYB");
/* harmony import */ var _driver_history_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./driver-history.page.scss */ "NeWc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_services */ "8Xdb");
/* harmony import */ var src_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/_services/driver/driver.service */ "exMm");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aspnet/signalr */ "Gpoy");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../language-popover/language-popover.page */ "oXKM");











let DriverHistoryPage = class DriverHistoryPage {
    constructor(driverService, accountService, popoverController, translate) {
        this.driverService = driverService;
        this.accountService = accountService;
        this.popoverController = popoverController;
        this.translate = translate;
        this.subscriptions = [];
        this.orders = [];
        this.userId = this.accountService.userValue.id;
        this.currentDate = new Date();
        this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
    }
    ngOnInit() {
        this.getHistory();
        const connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_6__["HubConnectionBuilder"]()
            .configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_6__["LogLevel"].Information)
            .withUrl(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].signalRUrl}/orderHub`)
            .build();
        connection.start().then(function () {
            console.log('signalR Connected in history');
        }).catch(function (err) {
            return console.log(err.toString());
        });
        connection.on('BroadcastMessage', () => {
            this.getHistory();
        });
    }
    ionViewDidLeave() {
        for (const subscription of this.subscriptions) {
            console.log(subscription);
            subscription.unsubscribe();
        }
    }
    getHistory() {
        this.subscriptions.push(this.driverService.getDriverHistory(this.userId)
            .subscribe((x) => {
            if (this.orders == null) {
                console.log("No orders");
                return;
            }
            this.orders = x;
            let sum = 0;
            x.forEach(order => {
                sum += order.totalPrice;
            });
            this.dailyProfit = sum.toFixed(2);
        }));
    }
    openLanguagePopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_10__["LanguagePopoverPage"],
                event: ev
            });
            yield popover.present();
        });
    }
};
DriverHistoryPage.ctorParameters = () => [
    { type: src_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_5__["DriverService"] },
    { type: src_services__WEBPACK_IMPORTED_MODULE_4__["AccountService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] }
];
DriverHistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-driver-history',
        template: _raw_loader_driver_history_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_driver_history_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DriverHistoryPage);



/***/ }),

/***/ "NeWc":
/*!*********************************************************!*\
  !*** ./src/app/driver-history/driver-history.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#e9e9e9;\n}\n\nion-toolbar {\n  --ion-background-color:#eeeeee;\n}\n\nion-title {\n  text-align: center;\n}\n\n#toolbarIcon {\n  font-size: 1.7em;\n}\n\n.text {\n  font-family: Open Sans Light;\n}\n\n.centered {\n  text-align: center;\n}\n\nhr {\n  background: #eeeeee;\n  width: 70% !important;\n}\n\n.backIcon {\n  color: #ffae00;\n  font-size: 150%;\n}\n\n.back {\n  color: #ffae00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRyaXZlci1oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDhCQUFBO0FBQUo7O0FBSUE7RUFDSSw4QkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0FBREo7O0FBSUE7RUFDSSw0QkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7QUFESjs7QUFLQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7QUFGSjs7QUFNQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBSEo7O0FBTUE7RUFDSSxjQUFBO0FBSEoiLCJmaWxlIjoiZHJpdmVyLWhpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAvLy0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy93cDQ3OTI3ODAtZGFyay1waG9uZS13YWxscGFwZXJzLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNlOWU5ZTk7XHJcblxyXG59XHJcblxyXG5pb24tdG9vbGJhcntcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2VlZWVlZTtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3Rvb2xiYXJJY29ue1xyXG4gICAgZm9udC1zaXplOiAxLjdlbTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBMaWdodDtcclxufVxyXG5cclxuLmNlbnRlcmVke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuaHJ7XHJcbiAgICBiYWNrZ3JvdW5kOiNlZWVlZWU7XHJcbiAgICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uYmFja0ljb24ge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDE3NCwgMCk7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbn1cclxuXHJcbi5iYWNrIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAxNzQsIDApO1xyXG59Il19 */");

/***/ }),

/***/ "odG3":
/*!*********************************************************!*\
  !*** ./src/app/driver-history/driver-history.module.ts ***!
  \*********************************************************/
/*! exports provided: HttpLoaderFactory, DriverHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverHistoryPageModule", function() { return DriverHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _driver_history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./driver-history-routing.module */ "vg3a");
/* harmony import */ var _driver_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./driver-history.page */ "H0Wu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _language_popover_language_popover_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../language-popover/language-popover.module */ "QhVT");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__["TranslateHttpLoader"](http);
}
let DriverHistoryPageModule = class DriverHistoryPageModule {
};
DriverHistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _driver_history_routing_module__WEBPACK_IMPORTED_MODULE_5__["DriverHistoryPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                }
            }),
            _language_popover_language_popover_module__WEBPACK_IMPORTED_MODULE_9__["LanguagePopoverPageModule"]
        ],
        declarations: [_driver_history_page__WEBPACK_IMPORTED_MODULE_6__["DriverHistoryPage"]]
    })
], DriverHistoryPageModule);



/***/ }),

/***/ "vg3a":
/*!*****************************************************************!*\
  !*** ./src/app/driver-history/driver-history-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: DriverHistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverHistoryPageRoutingModule", function() { return DriverHistoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _driver_history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./driver-history.page */ "H0Wu");




const routes = [
    {
        path: '',
        component: _driver_history_page__WEBPACK_IMPORTED_MODULE_3__["DriverHistoryPage"]
    }
];
let DriverHistoryPageRoutingModule = class DriverHistoryPageRoutingModule {
};
DriverHistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DriverHistoryPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=driver-history-driver-history-module-es2015.js.map