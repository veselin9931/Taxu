(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payments-sucsses-payments-sucsses-module"],{

/***/ "091Z":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payments-sucsses/payments-sucsses.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>\r\n            <ion-label>TaxiMi</ion-label>\r\n        </ion-title>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <ion-icon id=\"toolbarIcon\" name=\"language-outline\"></ion-icon>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding class=\"background\">\r\n    <div class=\"row mt-2\">\r\n        <div class=\"col\">\r\n            <div class=\"row mt-2\">\r\n                <!-- <div class=\"col-1\">\r\n                  <ion-icon class=\"backIcon ml-2\" name=\"chevron-back-outline\"></ion-icon>\r\n                </div>\r\n                <div class=\"col-9\">\r\n                  <h5 (click)=goBack() class=\"back\">Back</h5>\r\n                </div> -->\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col text-center\">\r\n                    <ion-text class=\"centered\" color=\"light\">\r\n                        <h2 class=\"text text-success\">Successful payment!</h2>\r\n                        <ion-button routerLink=\"/menu/driving\"  color=\"primary\">\r\n                            <ion-label class=\"my-label\" color=\"light\"> Drive now</ion-label>\r\n                        </ion-button>\r\n                        <hr>\r\n                        <img src=\"../assets/payment-successful.png\" class=\"centered\" />\r\n\r\n\r\n                    </ion-text>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"row mt-5\">\r\n                <div class=\"col\">\r\n                    <div class=\"support\">\r\n                        <div class=\"col mt-5 text-center\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col\">\r\n                                    <ion-icon name=\"logo-instagram\"></ion-icon>\r\n                                </div>\r\n                                <div class=\"col\">\r\n                                    <ion-icon name=\"logo-twitter\"></ion-icon>\r\n                                </div>\r\n                                <div class=\"col\">\r\n                                    <ion-icon name=\"logo-facebook\"></ion-icon>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ "9MWA":
/*!*************************************************************!*\
  !*** ./src/app/payments-sucsses/payments-sucsses.module.ts ***!
  \*************************************************************/
/*! exports provided: PaymentsSucssesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsSucssesPageModule", function() { return PaymentsSucssesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _payments_sucsses_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payments-sucsses-routing.module */ "oxtA");
/* harmony import */ var _payments_sucsses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payments-sucsses.page */ "uHJP");







let PaymentsSucssesPageModule = class PaymentsSucssesPageModule {
};
PaymentsSucssesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payments_sucsses_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentsSucssesPageRoutingModule"]
        ],
        declarations: [_payments_sucsses_page__WEBPACK_IMPORTED_MODULE_6__["PaymentsSucssesPage"]]
    })
], PaymentsSucssesPageModule);



/***/ }),

/***/ "oxtA":
/*!*********************************************************************!*\
  !*** ./src/app/payments-sucsses/payments-sucsses-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: PaymentsSucssesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsSucssesPageRoutingModule", function() { return PaymentsSucssesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _payments_sucsses_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payments-sucsses.page */ "uHJP");




const routes = [
    {
        path: '',
        component: _payments_sucsses_page__WEBPACK_IMPORTED_MODULE_3__["PaymentsSucssesPage"]
    }
];
let PaymentsSucssesPageRoutingModule = class PaymentsSucssesPageRoutingModule {
};
PaymentsSucssesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentsSucssesPageRoutingModule);



/***/ }),

/***/ "phr5":
/*!*************************************************************!*\
  !*** ./src/app/payments-sucsses/payments-sucsses.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text {\n  font-family: Open Sans Light;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBheW1lbnRzLXN1Y3NzZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUFDSiIsImZpbGUiOiJwYXltZW50cy1zdWNzc2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgTGlnaHQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "uHJP":
/*!***********************************************************!*\
  !*** ./src/app/payments-sucsses/payments-sucsses.page.ts ***!
  \***********************************************************/
/*! exports provided: PaymentsSucssesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsSucssesPage", function() { return PaymentsSucssesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_payments_sucsses_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./payments-sucsses.page.html */ "091Z");
/* harmony import */ var _payments_sucsses_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payments-sucsses.page.scss */ "phr5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PaymentsSucssesPage = class PaymentsSucssesPage {
    constructor() { }
    ngOnInit() {
    }
};
PaymentsSucssesPage.ctorParameters = () => [];
PaymentsSucssesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-payments-sucsses',
        template: _raw_loader_payments_sucsses_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payments_sucsses_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PaymentsSucssesPage);



/***/ })

}]);
//# sourceMappingURL=payments-sucsses-payments-sucsses-module-es2015.js.map