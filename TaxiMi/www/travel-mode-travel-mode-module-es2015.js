(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travel-mode-travel-mode-module"],{

/***/ "ME5s":
/*!***********************************************************!*\
  !*** ./src/app/travel-mode/travel-mode-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TravelModePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelModePageRoutingModule", function() { return TravelModePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _travel_mode_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./travel-mode.page */ "xo1A");




const routes = [
    {
        path: '',
        component: _travel_mode_page__WEBPACK_IMPORTED_MODULE_3__["TravelModePage"]
    }
];
let TravelModePageRoutingModule = class TravelModePageRoutingModule {
};
TravelModePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TravelModePageRoutingModule);



/***/ }),

/***/ "nOdv":
/*!***************************************************!*\
  !*** ./src/app/travel-mode/travel-mode.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#353535;\n}\n\nion-toolbar {\n  --ion-background-color:#eeeeee;\n}\n\nion-title {\n  text-align: center;\n}\n\n#marker {\n  position: absolute;\n  /*url of the marker*/\n  background: url(http://maps.gstatic.com/mapfiles/markers2/marker.png) no-repeat;\n  /*center the marker*/\n  top: 50%;\n  left: 50%;\n  z-index: 1;\n  /*fix offset when needed*/\n  margin-left: -10px;\n  margin-top: -34px;\n  /*size of the image*/\n  height: 34px;\n  width: 20px;\n  cursor: pointer;\n}\n\n#map {\n  height: 100%;\n  width: 100%;\n}\n\n#toolbarIcon {\n  font-size: 1.7em;\n}\n\n.centered {\n  text-align: center;\n}\n\n.textTravel {\n  font-size: 1.5em;\n  font-family: Open Sans Light;\n}\n\n.text {\n  font-size: 2.4em;\n  font-family: Open Sans Light;\n}\n\ni {\n  color: #eeeeee;\n}\n\n.my-custom-class {\n  --background: #e5e5e5;\n}\n\n.checkbox-icon {\n  color: white;\n}\n\nion-checkbox {\n  --border-color: #FFFFFF;\n}\n\nion-select {\n  color: #383838;\n  background-color: white;\n  border-radius: 10px;\n  border: 3px solid #eeeeee;\n}\n\n.blink_me {\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite;\n}\n\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n\n.backIcon {\n  color: #ffae00;\n  font-size: 150%;\n}\n\n.back {\n  color: #ffae00;\n}\n\n.fonted {\n  font-family: Open Sans Light;\n}\n\n.msg-box {\n  width: 100%;\n  height: 140px;\n  padding: 10px 30px;\n  font-size: 14px;\n  font-family: Open Sans Light;\n  overflow: auto;\n}\n\n.msg-box ul {\n  margin: -5px;\n  list-style: none;\n}\n\n.msg-box ul .ex-msg {\n  text-align: right;\n}\n\n.msg-box ul .in-msg {\n  text-align: left;\n  margin-left: -60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRyYXZlbC1tb2RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDhCQUFBO0FBQUo7O0FBR0E7RUFDSSw4QkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFHSTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSwrRUFBQTtFQUNBLG9CQUFBO0VBQ0EsUUFBQTtFQUFRLFNBQUE7RUFFUixVQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGVBQUE7QUFEUjs7QUFJSTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtBQURKOztBQUtBO0VBQ0ksa0JBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUFGSjs7QUFNQTtFQUNJLGNBQUE7QUFISjs7QUFPQTtFQUNJLHFCQUFBO0FBSko7O0FBT0M7RUFDSSxZQUFBO0FBSkw7O0FBT0M7RUFDSSx1QkFBQTtBQUpMOztBQU9BO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUpKOztBQU9BO0VBQ0ksNkNBQUE7VUFBQSxxQ0FBQTtBQUpKOztBQU9FO0VBQ0U7SUFDRSxVQUFBO0VBSko7QUFDRjs7QUFDRTtFQUNFO0lBQ0UsVUFBQTtFQUpKO0FBQ0Y7O0FBT0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUxKOztBQVFBO0VBQ0ksY0FBQTtBQUxKOztBQVFBO0VBQ0ksNEJBQUE7QUFMSjs7QUFTQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FBTko7O0FBUUk7RUFDSSxZQUFBO0VBRUEsZ0JBQUE7QUFQUjs7QUFRUTtFQUNJLGlCQUFBO0FBTlo7O0FBU1E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBUFoiLCJmaWxlIjoidHJhdmVsLW1vZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAvLy0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy93cDQ3OTI3ODAtZGFyay1waG9uZS13YWxscGFwZXJzLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzNTM1MzU7XHJcbn1cclxuXHJcbmlvbi10b29sYmFye1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZWVlZWVlO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4gICAgI21hcmtlcntcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAvKnVybCBvZiB0aGUgbWFya2VyKi9cclxuICAgICAgICBiYWNrZ3JvdW5kOnVybChodHRwOi8vbWFwcy5nc3RhdGljLmNvbS9tYXBmaWxlcy9tYXJrZXJzMi9tYXJrZXIucG5nKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgLypjZW50ZXIgdGhlIG1hcmtlciovXHJcbiAgICAgICAgdG9wOjUwJTtsZWZ0OjUwJTtcclxuICAgICAgXHJcbiAgICAgICAgei1pbmRleDoxO1xyXG4gICAgICAgIC8qZml4IG9mZnNldCB3aGVuIG5lZWRlZCovXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6LTEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDotMzRweDtcclxuICAgICAgICAvKnNpemUgb2YgdGhlIGltYWdlKi9cclxuICAgICAgICBoZWlnaHQ6MzRweDtcclxuICAgICAgICB3aWR0aDoyMHB4O1xyXG4gICAgICBcclxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAjbWFwIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuI3Rvb2xiYXJJY29ue1xyXG4gICAgZm9udC1zaXplOiAxLjdlbTtcclxufVxyXG5cclxuXHJcbi5jZW50ZXJlZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHRUcmF2ZWx7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBMaWdodDtcclxufVxyXG5cclxuLnRleHR7ICBcclxuICAgIGZvbnQtc2l6ZTogMi40ZW07XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIExpZ2h0O1xyXG59XHJcblxyXG5cclxuaXtcclxuICAgIGNvbG9yOiNlZWVlZWU7XHJcbn1cclxuXHJcblxyXG4ubXktY3VzdG9tLWNsYXNzIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2U1ZTVlNTtcclxuICB9XHJcblxyXG4gLmNoZWNrYm94LWljb257XHJcbiAgICAgY29sb3I6d2hpdGU7XHJcbiB9XHJcblxyXG4gaW9uLWNoZWNrYm94e1xyXG4gICAgIC0tYm9yZGVyLWNvbG9yOiAjRkZGRkZGO1xyXG4gICB9XHJcblxyXG5pb24tc2VsZWN0e1xyXG4gICAgY29sb3I6IHJnYig1NiwgNTYsIDU2KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNlZWVlZWU7XHJcbn1cclxuXHJcbi5ibGlua19tZSB7XHJcbiAgICBhbmltYXRpb246IGJsaW5rZXIgMXMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGJsaW5rZXIge1xyXG4gICAgNTAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4uYmFja0ljb24ge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDE3NCwgMCk7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbn1cclxuXHJcbi5iYWNrIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAxNzQsIDApO1xyXG59XHJcblxyXG4uZm9udGVke1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBMaWdodDtcclxufVxyXG5cclxuXHJcbi5tc2ctYm94IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgTGlnaHQ7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICB1bCB7XHJcbiAgICAgICAgbWFyZ2luOiAtNXB4O1xyXG5cclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIC5leC1tc2cge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbi1tc2cge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTYwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "s6KZ":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/travel-mode/travel-mode.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n\r\n\r\n      <ion-title>\r\n        <ion-label class=\"blink_me\">{{'Waiting for the car'| translate}}</ion-label>\r\n      </ion-title>\r\n\r\n      <ion-buttons slot=\"end\">\r\n        <ion-icon (click)='openLanguagePopover($event)' id=\"toolbarIcon\" name=\"language-outline\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <div #map id=\"map\"></div>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"list-group\">\r\n\r\n        <a class=\"list-group-item list-group-item-action flex-column align-items-start\">\r\n          <p>{{firstName}} {{lastName}} {{'will arrive with' | translate}} {{carColor}}\r\n            {{carModel}} {{'in about'| translate}} {{estimatedDuration}}.</p>\r\n          <hr />\r\n          <p>\r\n            <ion-icon class=\"mr-2\" name=\"analytics-outline\"></ion-icon>{{destination}}\r\n          </p>\r\n          <hr />\r\n          <div class=\"d-flex w-100 justify-content-between\">\r\n            <p *ngIf=\"this.accountService.userValue.alertTriggered == true\">\r\n              Price: {{totalPrice}}$ | {{secsDiff * 1000 | date:'mm:ss' }}\r\n            </p>\r\n            <p *ngIf=\"this.accountService.userValue.alertTriggered == false\">\r\n              Price: {{totalPrice}}$\r\n            </p>\r\n            <button (click)=\"callDriver()\" class=\"fonted btn btn-warning mb-1\" (click)=\"clearMessages()\" type=\"button\"><ion-icon name=\"call\" class=\"mr-2\"></ion-icon>Call driver\r\n            </button>\r\n            \r\n          </div>\r\n          \r\n          <div class=\"d-flex w-100 justify-content-between\">\r\n            <button (click)=\"chat()\" class=\"fonted btn btn-secondary mr-1\" (click)=\"clearMessages()\" type=\"button\">\r\n              {{'Chat' | translate}}\r\n            </button>\r\n\r\n            <button class=\"fonted btn btn-info\" (click)=\"addToFavourite()\" type=\"button\">\r\n              {{'Add to favourites' | translate}}\r\n            </button>\r\n\r\n            <button *ngIf=\"this.tripStatus == 'Processing'\" (click)=\"cancelTrip()\" class=\"fonted btn btn-warning ml-1\" type=\"button\">\r\n              {{'Cancel' | translate}}\r\n            </button>\r\n          </div>\r\n          <br />\r\n          <ion-label class=\"blink_me fonted\" *ngIf=\"messages.length != 0  && chatStyle == 'none'\">\r\n            {{\r\n            'You have new message' |\r\n            translate\r\n            }}.\r\n          </ion-label>\r\n          <div id=\"chat\" style=\"display: none;\" class=\"row chat\">\r\n\r\n            <div class=\"col\">\r\n              <ion-card>\r\n        \r\n                <div class=\"msg-box\">\r\n                  <ul *ngIf=\"this.msgInboxArray.length == 0\" class=\"text-center mr-5\">\r\n                    <li class=\"fonted\">{{'No messages for now' | translate}}</li>\r\n                  </ul>\r\n                  <ul *ngFor=\"let mObj of msgInboxArray\">\r\n                    <li class=\"fonted\" [ngClass]=\"mObj.user === msgDto.user ? 'in-msg' : 'ex-msg'\">\r\n                      {{mObj.user}}:\r\n                      {{mObj.text}}\r\n                    </li>\r\n        \r\n                  </ul>\r\n                </div>\r\n              </ion-card>\r\n        \r\n              <ion-card class=\"type\">\r\n                <ion-item>\r\n                  <ion-input [(ngModel)]=\"msgDto.text\" [placeholder]='\"Type your message...\" | translate'>\r\n        \r\n                  </ion-input>\r\n                  <ion-icon (click)=\"send()\" name=\"send-outline\"></ion-icon>\r\n        \r\n                </ion-item>\r\n              </ion-card>\r\n            </div>\r\n        \r\n          </div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- <ion-text class=\"textTravel\">\r\n      {{'Your driver' | translate}} {{firstName}} {{lastName}} {{'will arrive with' | translate}} {{carColor}}\r\n      {{carModel}} {{'in about'| translate}} {{estimatedDuration}}\r\n      <p>\r\n        <small>Price: {{totalPrice}}$</small>\r\n        <br>\r\n        <small *ngIf=\"this.accountService.userValue.alertTriggered == true\">Free waiting time is 5 mins.</small>\r\n        <br>\r\n        <small *ngIf=\"this.accountService.userValue.alertTriggered == true\">{{secsDiff * 1000 | date:'mm:ss' }}</small>\r\n\r\n      </p>\r\n\r\n    </ion-text> -->\r\n</ion-footer>\r\n\r\n<!-- <ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar class=\"text-center\">\r\n    <ion-title class=\"fonted\">{{'Your destination' | translate}}</ion-title>\r\n    <ion-label class=\"fonted\">{{destination}}</ion-label>\r\n    <ion-toolbar class=\"text-center\">\r\n        <button class=\"fonted btn btn-info\" (click)=\"addToFavourite()\" type=\"button\">\r\n            {{'Add to favourites' | translate}}\r\n        </button>\r\n        <button (click)=\"chat()\" class=\"fonted btn btn-secondary ml-1\" (click)=\"clearMessages()\" type=\"button\">\r\n            {{'Chat' | translate}}\r\n        </button>\r\n\r\n        <button (click)=\"cancelTrip()\" class=\"fonted btn btn-warning ml-1\" type=\"button\">\r\n            {{'Cancel' | translate}}\r\n        </button>\r\n        <br />\r\n        <ion-label class=\"blink_me fonted\" *ngIf=\"messages.length != 0  && chatStyle == 'none'\">\r\n            {{\r\n'You have new message' |\r\n        translate\r\n            }}.\r\n        </ion-label>\r\n    </ion-toolbar>\r\n\r\n  </ion-toolbar>\r\n\r\n  <div id=\"chat\" style=\"display: none;\" class=\"row chat\">\r\n\r\n    <div class=\"col\">\r\n      <ion-card>\r\n\r\n        <div class=\"msg-box\">\r\n          <ul *ngIf=\"this.msgInboxArray.length == 0\" class=\"text-center mr-5\">\r\n            <li class=\"fonted\">{{'No messages for now' | translate}}</li>\r\n          </ul>\r\n          <ul *ngFor=\"let mObj of msgInboxArray\">\r\n            <li class=\"fonted\" [ngClass]=\"mObj.user === msgDto.user ? 'in-msg' : 'ex-msg'\">\r\n              {{mObj.user}}:\r\n              {{mObj.text}}\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n      </ion-card>\r\n\r\n      <ion-card class=\"type\">\r\n        <ion-item>\r\n          <ion-input [(ngModel)]=\"msgDto.text\" [placeholder]='\"Type your message...\" | translate'>\r\n\r\n          </ion-input>\r\n          <ion-icon (click)=\"send()\" name=\"send-outline\"></ion-icon>\r\n\r\n        </ion-item>\r\n      </ion-card>\r\n    </div>\r\n\r\n  </div>\r\n</ion-footer> -->");

/***/ }),

/***/ "xo1A":
/*!*************************************************!*\
  !*** ./src/app/travel-mode/travel-mode.page.ts ***!
  \*************************************************/
/*! exports provided: TravelModePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelModePage", function() { return TravelModePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_travel_mode_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./travel-mode.page.html */ "s6KZ");
/* harmony import */ var _travel_mode_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./travel-mode.page.scss */ "nOdv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aspnet/signalr */ "Gpoy");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/_models */ "VeQZ");
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/_services */ "8Xdb");
/* harmony import */ var src_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/_services/chat/chat.service */ "RX8M");
/* harmony import */ var src_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/_services/driver/driver.service */ "exMm");
/* harmony import */ var src_services_order_order_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/_services/order/order.service */ "8k+r");
/* harmony import */ var src_services_trip_trip_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/_services/trip/trip.service */ "e7jj");
/* harmony import */ var _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../language-popover/language-popover.page */ "oXKM");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "Wwn5");


















const { Geolocation, LocalNotifications } = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"];
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
        this.subscriptions = [];
        this.maxTime = 30000;
        this.msgDto = new src_models__WEBPACK_IMPORTED_MODULE_10__["Message"]();
        this.msgInboxArray = [];
        this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
    }
    ngOnInit() {
        this.checkorder();
        this.chatService.retrieveMappedObject()
            .subscribe((receivedObj) => { this.addToInbox(receivedObj); });
        const connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_5__["HubConnectionBuilder"]()
            .configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_5__["LogLevel"].Information)
            .withUrl(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].signalRUrl}/orderHub`)
            .build();
        connection.start().then(function () {
            console.log('signalR Connected in travel-mode');
        }).catch(function (err) {
            console.log("Reconnecting in 1 sec.");
            setTimeout(() => connection.start(), 1000);
        });
        connection.on('BroadcastMessage', () => {
            console.log('broadcasted from travel-mode');
        });
        connection.on('StartTrip', () => {
            this.checkorder();
        });
        connection.on('Navigate', () => {
            this.checkorder();
        });
        connection.on('OrderAccepted', (orderId) => {
            this.subscriptions.push(this.orderService.getOrderById(orderId)
                .subscribe(order => {
                if (order.id == this.order.id && order.status == 'Accepted') {
                    this.presentOrderAcceptedNotification();
                }
            }));
        });
        connection.on('OrderWaiting', (orderId) => {
            this.subscriptions.push(this.orderService.getMyOrder(this.user.id)
                .subscribe(order => {
                if (order.id == orderId) {
                    this.canceledOrder();
                }
            }));
        });
        connection.on('LocateDriver', (driverId) => {
            this.subscriptions.push(this.orderService.getMyOrder(this.user.id)
                .subscribe(x => {
                this.subscriptions.push(this.driverService.getDriver(driverId)
                    .subscribe(driver => {
                    if (driver.id == driverId) {
                        this.loadMap(this.mapRef, driver.applicationUserId);
                    }
                }));
            }));
        });
        connection.on('NotifyArrived', (orderId) => {
            this.subscriptions.push(this.orderService.getOrderById(orderId)
                .subscribe(order => {
                if (order.isDriverArrived == true && this.order.id == orderId) {
                    this.presentDriverArrivedNotification();
                    this.accountService.userValue.alertTriggered = true;
                    this.subscriptions.push(this.accountService.updateAlert(this.user.id, true)
                        .subscribe(() => { }));
                    this.accountService.userValue.timer = new Date();
                    if (this.seconds == 60) {
                        this.seconds = 0;
                    }
                    this.startTimer();
                }
            }));
        });
        connection.on('CompleteOrder', (orderId) => {
            if (this.order.id == orderId) {
                this.completedOrderAlert();
            }
        });
    }
    // ionViewDidLeave() {
    //   for (const subscription of this.subscriptions) {
    //     console.log(subscription)
    //     subscription.unsubscribe();
    //   }
    // }
    ionViewDidEnter() {
        this.checkorder();
        if (this.accountService.userValue.alertTriggered == true) {
            this.startTimer();
        }
    }
    checkorder() {
        this.subscriptions.push(this.orderService.getMyOrder(this.user.id)
            .subscribe(data => {
            if (data) {
                this.chatService.stop();
                this.chatService.start();
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
                this.subscriptions.push(this.accountService.updateAlert(this.user.id, false)
                    .subscribe(() => { }));
                this.orderTotalPrice = 0;
            }
        }, error => {
            console.log(error);
        }));
    }
    startTimer() {
        this.startTime = new Date(this.accountService.userValue.timer);
        setInterval(() => {
            if (this.secsDiff == 300) {
                this.subscriptions.push(this.orderService.increaseOrderPrice(this.order.id, 1)
                    .subscribe(() => { }));
                return;
            }
            this.secsDiff = new Date().getTime() - this.startTime.getTime();
            this.secsDiff = Math.floor(this.secsDiff / 1000);
        }, 1000);
    }
    presentOrderAcceptedNotification() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        let newObj = new src_models__WEBPACK_IMPORTED_MODULE_10__["Message"]();
        newObj.user = obj.user;
        newObj.text = obj.text;
        this.msgInboxArray.push(newObj);
        this.msgDto.text = '';
    }
    getUserById(driverId) {
        this.subscriptions.push(this.accountService.getById(driverId)
            .subscribe(userData => {
            this.firstName = userData.firstName;
            this.lastName = userData.lastName;
            this.driverId = userData.driverId;
            this.phoneNumber = userData.phone;
            this.subscriptions.push(this.driverService.getDriverActiveCar(userData.driverId)
                .subscribe(car => {
                this.carModel = car.model;
                this.carColor = car.color;
            }));
        }));
    }
    callDriver() {
        let phone = this.phoneNumber.toString();
        this.callNumber.callNumber(phone, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    //Get current trip to manage data.
    getAcceptedTrip(userId) {
        this.subscriptions.push(this.tripService.getTrip(userId)
            .subscribe(x => {
            if (x == null) {
                console.log("No trip!");
                return;
            }
            this.tripStatus = x.status;
            if (x.status == 'Started') {
                this.accountService.userValue.alertTriggered = false;
                this.subscriptions.push(this.accountService.updateAlert(this.user.id, false)
                    .subscribe(() => { }));
            }
            this.currentTrip = x;
            this.loadMap(this.mapRef, userId);
        }));
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
            this.subscriptions.push(this.orderService.addToFavourites(data)
                .subscribe(() => {
                this.successAddedFavourite();
            }));
        }
        else {
            console.log('Problem with data occured');
        }
    }
    //MAPS FUNCTIONALLITY
    loadMap(mapRef, driverId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.subscriptions.push(this.accountService.getById(driverId)
                .subscribe(driver => {
                this.subscriptions.push(this.driverService.getDriver(driver.driverId)
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
                }));
            }));
        });
    }
    cancelTrip() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.alertForCancel();
        });
    }
    alertForCancel() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popup = yield this.alertController.create({
                header: 'Are you sure you want to cancel the order?',
                message: 'Your rating will decrease!',
                buttons: [
                    {
                        text: 'Confirm',
                        handler: () => {
                            this.subscriptions.push(this.tripService.getTrip(this.orderAcceptedBy)
                                .subscribe(trip => {
                                this.subscriptions.push(this.tripService.cancelTrip(trip.id)
                                    .subscribe(x => {
                                    this.subscriptions.push(this.accountService.updateDriving(this.orderAcceptedBy, false)
                                        .subscribe(() => {
                                    }));
                                    this.accountService.userValue.isDrivingNow = false;
                                    this.subscriptions.push(this.orderService.deleteOrder(trip.orderId)
                                        .subscribe(() => this.route.navigate(['menu/travelling'])));
                                }));
                            }));
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_16__["LanguagePopoverPage"],
                event: ev
            });
            yield popover.present();
        });
    }
    //ALERTS
    completedOrderAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popup = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'You have reached the final destination! Did you enjoyed the trip?',
                //message: '<img src = "../assets/default.png" width="1px" height="1px">',
                buttons: [
                    {
                        text: 'Yes',
                        role: 'cancel',
                        handler: () => {
                            this.subscriptions.push(this.driverService.voteUp(this.driverId)
                                .subscribe(x => { }));
                            this.route.navigate(['menu/travelling']);
                            window.location.reload();
                        }
                    },
                    {
                        text: 'No',
                        role: 'no',
                        handler: () => {
                            this.subscriptions.push(this.driverService.voteDown(this.driverId)
                                .subscribe(x => { }));
                            this.route.navigate(['menu/travelling']);
                            window.location.reload();
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            this.route.navigate(['menu/travelling']);
                            window.location.reload();
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
TravelModePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_services_order_order_service__WEBPACK_IMPORTED_MODULE_14__["OrderService"] },
    { type: src_services__WEBPACK_IMPORTED_MODULE_11__["AccountService"] },
    { type: src_services_trip_trip_service__WEBPACK_IMPORTED_MODULE_15__["TripService"] },
    { type: src_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_13__["DriverService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: src_services_chat_chat_service__WEBPACK_IMPORTED_MODULE_12__["ChatService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_17__["CallNumber"] }
];
TravelModePage.propDecorators = {
    mapRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['map', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], static: false },] }]
};
TravelModePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-travel-mode',
        template: _raw_loader_travel_mode_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_travel_mode_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TravelModePage);



/***/ }),

/***/ "y67D":
/*!***************************************************!*\
  !*** ./src/app/travel-mode/travel-mode.module.ts ***!
  \***************************************************/
/*! exports provided: HttpLoaderFactory, TravelModePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelModePageModule", function() { return TravelModePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _travel_mode_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./travel-mode-routing.module */ "ME5s");
/* harmony import */ var _travel_mode_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./travel-mode.page */ "xo1A");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _language_popover_language_popover_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../language-popover/language-popover.module */ "QhVT");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "Wwn5");












function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http);
}
let TravelModePageModule = class TravelModePageModule {
};
TravelModePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _travel_mode_routing_module__WEBPACK_IMPORTED_MODULE_5__["TravelModePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                }
            }),
            _language_popover_language_popover_module__WEBPACK_IMPORTED_MODULE_10__["LanguagePopoverPageModule"]
        ],
        providers: [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_11__["CallNumber"]],
        declarations: [_travel_mode_page__WEBPACK_IMPORTED_MODULE_6__["TravelModePage"]]
    })
], TravelModePageModule);



/***/ })

}]);
//# sourceMappingURL=travel-mode-travel-mode-module-es2015.js.map