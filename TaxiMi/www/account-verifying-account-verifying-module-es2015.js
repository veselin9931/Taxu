(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-verifying-account-verifying-module"],{

/***/ "LkXo":
/*!***********************************************************************!*\
  !*** ./src/app/account-verifying/account-verifying-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AccountVerifyingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountVerifyingPageRoutingModule", function() { return AccountVerifyingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_verifying_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-verifying.page */ "NIQc");




const routes = [
    {
        path: '',
        component: _account_verifying_page__WEBPACK_IMPORTED_MODULE_3__["AccountVerifyingPage"]
    }
];
let AccountVerifyingPageRoutingModule = class AccountVerifyingPageRoutingModule {
};
AccountVerifyingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccountVerifyingPageRoutingModule);



/***/ }),

/***/ "NIQc":
/*!*************************************************************!*\
  !*** ./src/app/account-verifying/account-verifying.page.ts ***!
  \*************************************************************/
/*! exports provided: AccountVerifyingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountVerifyingPage", function() { return AccountVerifyingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_account_verifying_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./account-verifying.page.html */ "olB0");
/* harmony import */ var _account_verifying_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-verifying.page.scss */ "QfrR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let AccountVerifyingPage = class AccountVerifyingPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    goBack() {
        this.route.navigate(['tabs/home-logged']);
    }
};
AccountVerifyingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AccountVerifyingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-account-verifying',
        template: _raw_loader_account_verifying_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_verifying_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AccountVerifyingPage);



/***/ }),

/***/ "QfrR":
/*!***************************************************************!*\
  !*** ./src/app/account-verifying/account-verifying.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#e9e9e9;\n}\n\n.centered {\n  text-align: center;\n}\n\nion-toolbar {\n  --ion-background-color:#eeeeee;\n}\n\n.text {\n  font-family: Open Sans Light;\n}\n\nion-title {\n  text-align: center;\n}\n\n#toolbarIcon {\n  font-size: 1.7em;\n}\n\nhr {\n  background: #eeeeee;\n  width: 70% !important;\n}\n\nion-input {\n  border-radius: 20px;\n  border: 3px solid #eeeeee;\n}\n\n.backIcon {\n  color: #ffae00;\n  font-size: 150%;\n}\n\n.back {\n  color: #ffae00;\n}\n\n.support {\n  margin-top: 50px;\n}\n\nion-icon {\n  font-size: 350%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFjY291bnQtdmVyaWZ5aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDhCQUFBO0FBQUo7O0FBSUE7RUFDSSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksOEJBQUE7QUFESjs7QUFJQTtFQUNJLDRCQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7QUFESjs7QUFLQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7QUFGSjs7QUFLQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7QUFGSjs7QUFLQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0E7RUFDSSxjQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtBQUZKOztBQUlBO0VBQ0ksZUFBQTtBQURKIiwiZmlsZSI6ImFjY291bnQtdmVyaWZ5aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLy8tLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvd3A0NzkyNzgwLWRhcmstcGhvbmUtd2FsbHBhcGVycy5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZTllOWU5O1xyXG5cclxufVxyXG5cclxuLmNlbnRlcmVke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tdG9vbGJhcntcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2VlZWVlZTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBMaWdodDtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3Rvb2xiYXJJY29ue1xyXG4gICAgZm9udC1zaXplOiAxLjdlbTtcclxufVxyXG5cclxuXHJcbmhye1xyXG4gICAgYmFja2dyb3VuZDojZWVlZWVlO1xyXG4gICAgd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNlZWVlZWU7XHJcbn1cclxuXHJcbi5iYWNrSWNvbiB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMTc0LCAwKTtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxufVxyXG5cclxuLmJhY2sge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDE3NCwgMCk7XHJcbn1cclxuXHJcbi5zdXBwb3J0e1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5pb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDM1MCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "nhYi":
/*!***************************************************************!*\
  !*** ./src/app/account-verifying/account-verifying.module.ts ***!
  \***************************************************************/
/*! exports provided: AccountVerifyingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountVerifyingPageModule", function() { return AccountVerifyingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _account_verifying_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-verifying-routing.module */ "LkXo");
/* harmony import */ var _account_verifying_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-verifying.page */ "NIQc");







let AccountVerifyingPageModule = class AccountVerifyingPageModule {
};
AccountVerifyingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _account_verifying_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountVerifyingPageRoutingModule"]
        ],
        declarations: [_account_verifying_page__WEBPACK_IMPORTED_MODULE_6__["AccountVerifyingPage"]]
    })
], AccountVerifyingPageModule);



/***/ }),

/***/ "olB0":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account-verifying/account-verifying.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>\r\n        <ion-label>Cyber</ion-label>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon id=\"toolbarIcon\" name=\"language-outline\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding class=\"background\">\r\n  <div class=\"row mt-2\">\r\n    <div class=\"col\">\r\n      <div class=\"row mt-2\">\r\n        <!-- <div class=\"col-1\">\r\n          <ion-icon class=\"backIcon ml-2\" name=\"chevron-back-outline\"></ion-icon>\r\n        </div>\r\n        <div class=\"col-9\">\r\n          <h5 (click)=goBack() class=\"back\">Back</h5>\r\n        </div> -->\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col text-center\">\r\n          <ion-text class=\"centered\" color=\"dark\">\r\n            <h2 class=\"text\">Verifying...</h2>\r\n            <hr>\r\n            <h5>Please wait till we verify your account.</h5>\r\n            <h5>It may take from 1 to 5 days.</h5>\r\n\r\n          </ion-text>\r\n        </div>\r\n        \r\n      </div>\r\n\r\n      <div class=\"row mt-5\">\r\n        <div class=\"col\">\r\n          <div class=\"support\">\r\n            <ion-text class=\"centered\" color=\"dark\">\r\n              <h1 class=\"text\">Support us by</h1>\r\n              <h2 class=\"text\">following on</h2>\r\n            </ion-text>\r\n    \r\n            <div class=\"col mt-5 text-center\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <ion-icon name=\"logo-instagram\"></ion-icon>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <ion-icon name=\"logo-twitter\"></ion-icon>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <ion-icon name=\"logo-facebook\"></ion-icon>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=account-verifying-account-verifying-module-es2015.js.map