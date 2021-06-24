(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-details-order-details-module"], {
    /***/
    "678P":
    /*!***************************************************************!*\
      !*** ./src/app/order-details/order-details-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: OrderDetailsPageRoutingModule */

    /***/
    function P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderDetailsPageRoutingModule", function () {
        return OrderDetailsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _order_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./order-details.page */
      "zoAX");

      var routes = [{
        path: '',
        component: _order_details_page__WEBPACK_IMPORTED_MODULE_3__["OrderDetailsPage"]
      }];

      var OrderDetailsPageRoutingModule = function OrderDetailsPageRoutingModule() {
        _classCallCheck(this, OrderDetailsPageRoutingModule);
      };

      OrderDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OrderDetailsPageRoutingModule);
      /***/
    },

    /***/
    "8Svz":
    /*!*******************************************************!*\
      !*** ./src/app/order-details/order-details.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function Svz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color:#e9e9e9;\n}\n\nion-toolbar {\n  --ion-background-color:#eeeeee;\n}\n\n#map {\n  height: 100%;\n  width: 100%;\n}\n\nion-title {\n  text-align: center;\n}\n\n#warningicn {\n  margin-left: 6px;\n}\n\nh5 {\n  font-size: 0.9em;\n}\n\n#toolbarIcon {\n  font-size: 1.7em;\n}\n\n.fonted {\n  font-family: Open Sans Light;\n}\n\n.centered {\n  text-align: center;\n}\n\n.text {\n  font-family: Open Sans Light;\n}\n\nhr {\n  background: #eeeeee;\n  width: 70% !important;\n}\n\n.blink_me {\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite;\n}\n\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n\n.msg-box {\n  width: 100%;\n  height: 140px;\n  padding: 10px 30px;\n  font-size: 14px;\n  font-family: Open Sans Light;\n  overflow: auto;\n}\n\n.msg-box ul {\n  margin: -5px;\n  list-style: none;\n}\n\n.msg-box ul .ex-msg {\n  text-align: right;\n}\n\n.msg-box ul .in-msg {\n  text-align: left;\n  margin-left: -60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9yZGVyLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQUE7QUFBSjs7QUFHQTtFQUNJLDhCQUFBO0FBQUo7O0FBR0k7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUlBO0VBQ0ksa0JBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtBQURKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLDRCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUdBO0VBRUksNEJBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFNQTtFQUNJLDZDQUFBO1VBQUEscUNBQUE7QUFISjs7QUFNRTtFQUNFO0lBQ0UsVUFBQTtFQUhKO0FBQ0Y7O0FBQUU7RUFDRTtJQUNFLFVBQUE7RUFISjtBQUNGOztBQU9BO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7QUFMSjs7QUFPSTtFQUNJLFlBQUE7RUFFQSxnQkFBQTtBQU5SOztBQU9RO0VBQ0ksaUJBQUE7QUFMWjs7QUFRUTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFOWiIsImZpbGUiOiJvcmRlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLy8tLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvd3A0NzkyNzgwLWRhcmstcGhvbmUtd2FsbHBhcGVycy5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZTllOWU5O1xyXG59XHJcblxyXG5pb24tdG9vbGJhcntcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2VlZWVlZTtcclxufVxyXG5cclxuICAgICNtYXAge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiN3YXJuaW5naWNue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcclxufVxyXG5cclxuaDV7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG59XHJcbiN0b29sYmFySWNvbntcclxuICAgIGZvbnQtc2l6ZTogMS43ZW07XHJcbn1cclxuXHJcbi5mb250ZWR7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIExpZ2h0O1xyXG59XHJcblxyXG4uY2VudGVyZWR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0eyAgXHJcbiAgICAvL2ZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgTGlnaHQ7XHJcbn1cclxuXHJcbmhye1xyXG4gICAgYmFja2dyb3VuZDojZWVlZWVlO1xyXG4gICAgd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vL2NoYXRcclxuXHJcbi5ibGlua19tZSB7XHJcbiAgICBhbmltYXRpb246IGJsaW5rZXIgMXMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGJsaW5rZXIge1xyXG4gICAgNTAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuLm1zZy1ib3gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBMaWdodDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAgIHVsIHtcclxuICAgICAgICBtYXJnaW46IC01cHg7XHJcblxyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgLmV4LW1zZyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmluLW1zZyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "8fxn":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-details/order-details.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function fxn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>\r\n      <ion-label>{{'Details' | translate}}</ion-label>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon (click)='openLanguagePopover($event)' id=\"toolbarIcon\" name=\"language-outline\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <button *ngIf=\"mapVisible == false\" class=\"fonted btn btn-info col-md-12\" (click)=\"showMap()\">{{'Show map' | translate}}</button>\r\n  <button *ngIf=\"mapVisible == true\" class=\"fonted btn btn-info col-md-12\" (click)=\"hideMap()\">{{'Show details' | translate}}</button>\r\n  <div id=\"order\"  class=\"col-md-10\">\r\n    <div  class=\"list-group mt-2\">\r\n      <a class=\"text list-group-item list-group-item-action flex-column align-items-start\">\r\n        <ion-icon *ngIf=\"order.pickUpTime\" name=\"alert-circle\"></ion-icon>\r\n        <small  *ngIf=\"order.pickUpTime\" id=\"warningicn\">{{'Pickup time' | translate}} {{order.pickUpTime}}</small>\r\n        <div class=\"d-flex w-100 justify-content-between\">\r\n          <h5 class=\"mb-1 fonted\"></h5>\r\n          <small>{{order.createdOn | date:'MM/dd/yyyy h:mm'}}</small>\r\n\r\n        </div>\r\n        <p><ion-icon class=\"mr-2\" name=\"analytics-outline\"></ion-icon>{{order.location}}</p>\r\n        <hr />\r\n        <p><ion-icon class=\"mr-2\" name=\"arrow-forward-outline\"></ion-icon>{{order.destination}}</p>\r\n        <div class=\"d-flex w-100 justify-content-between\">\r\n          <h5 class=\"mb-1 fonted\"></h5>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <small\r\n              *ngIf=\"order.withPets == true || order.withStroller == true || order.special == true\">{{'Additional\r\n              options' | translate}}:</small>\r\n            <ul>\r\n              <li *ngIf=\"order.withPets == true\">{{'Pets' | translate}}</li>\r\n              <li *ngIf=\"order.withStroller == true\">{{'Baggage' | translate}}</li>\r\n              <li *ngIf=\"order.special == true\">{{'Special needs' | translate}}</li>\r\n            </ul>\r\n\r\n            <small *ngIf=\"order.carType\">{{'Desired car type' | translate}}:</small>\r\n            <ul *ngIf=\"order.carType\">\r\n              <li>{{order.carType}}</li>\r\n            </ul>\r\n\r\n            <small *ngIf=\"order.description\">{{'Additional requirements' | translate}}:</small>\r\n            <ul *ngIf=\"order.description\">\r\n              <li>{{order.description}}</li>\r\n             \r\n            </ul>\r\n\r\n            <div class=\"w-100\">\r\n              <h5>{{'Trip distance' | translate}}: {{order.tripDistance}} km</h5>\r\n              <br>\r\n              <!-- <h5 class=\"fonted\">Distance to user: \r\n                <small class=\"fonted\">{{distance}} km</small>\r\n              </h5> -->\r\n            </div>\r\n\r\n            <div class=\"d-flex w-100 justify-content-between\">\r\n\r\n              <small class=\"fonted\">{{'Total cost' | translate}}: {{order.totalPrice}} лв.</small>\r\n              <button class=\"fonted btn btn-info\" (click)=\"acceptOrder(order)\" type=\"button\">{{'Accept' |translate}}</button>\r\n            </div>\r\n            <hr />\r\n            <p *ngIf=\"canIncrease == true\" class=\"text-center\">{{'Offer more price to order' | translate}}</p>\r\n            <div *ngIf=\"canIncrease == true\" class=\"d-flex w-100 justify-content-between\">\r\n              <button type=\"button\" (click)=\"offer(1)\" class=\"btn btn-info btn-sm\">+1лв</button>\r\n              <button type=\"button\" (click)=\"offer(2)\" class=\"btn btn-info btn-sm\">+2лв</button>\r\n              <button type=\"button\" (click)=\"offer(3)\" class=\"btn btn-info btn-sm\">+3лв</button>\r\n              <button type=\"button\" (click)=\"offer(4)\" class=\"btn btn-info btn-sm\">+4лв</button>\r\n              <button type=\"button\" (click)=\"offer(5)\" class=\"btn btn-info btn-sm\">+5лв</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        \r\n      </a>\r\n    </div>\r\n  </div>\r\n  <ion-content padding class=\"noScroll\"> \r\n    <div #map id=\"map\" >\r\n    </div>\r\n  </ion-content>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "tIIa":
    /*!*******************************************************!*\
      !*** ./src/app/order-details/order-details.module.ts ***!
      \*******************************************************/

    /*! exports provided: HttpLoaderFactory, OrderDetailsPageModule */

    /***/
    function tIIa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderDetailsPageModule", function () {
        return OrderDetailsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _order_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./order-details-routing.module */
      "678P");
      /* harmony import */


      var _order_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./order-details.page */
      "zoAX");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "mqiu");
      /* harmony import */


      var _language_popover_language_popover_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../language-popover/language-popover.module */
      "QhVT");

      function HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http);
      }

      var OrderDetailsPageModule = function OrderDetailsPageModule() {
        _classCallCheck(this, OrderDetailsPageModule);
      };

      OrderDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _order_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
          }
        }), _language_popover_language_popover_module__WEBPACK_IMPORTED_MODULE_10__["LanguagePopoverPageModule"]],
        declarations: [_order_details_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailsPage"]]
      })], OrderDetailsPageModule);
      /***/
    },

    /***/
    "zoAX":
    /*!*****************************************************!*\
      !*** ./src/app/order-details/order-details.page.ts ***!
      \*****************************************************/

    /*! exports provided: OrderDetailsPage */

    /***/
    function zoAX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderDetailsPage", function () {
        return OrderDetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_order_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./order-details.page.html */
      "8fxn");
      /* harmony import */


      var _order_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./order-details.page.scss */
      "8Svz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @aspnet/signalr */
      "Gpoy");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var src_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/_services */
      "8Xdb");
      /* harmony import */


      var src_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/_services/driver/driver.service */
      "exMm");
      /* harmony import */


      var src_services_order_order_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/_services/order/order.service */
      "8k+r");
      /* harmony import */


      var src_services_trip_trip_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/_services/trip/trip.service */
      "e7jj");
      /* harmony import */


      var src_services_wallet_wallet_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/_services/wallet/wallet.service */
      "Hmjx");
      /* harmony import */


      var _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../language-popover/language-popover.page */
      "oXKM");

      var Geolocation = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Geolocation;

      var OrderDetailsPage = /*#__PURE__*/function () {
        function OrderDetailsPage(translate, popoverController, accountService, router, route, orderService, driverService, walletService, tripService, alertController) {
          _classCallCheck(this, OrderDetailsPage);

          this.translate = translate;
          this.popoverController = popoverController;
          this.accountService = accountService;
          this.router = router;
          this.route = route;
          this.orderService = orderService;
          this.driverService = driverService;
          this.walletService = walletService;
          this.tripService = tripService;
          this.alertController = alertController;
          this.orderId = this.route.snapshot.params.id;
          this.applicationUserId = this.accountService.userValue.id;
          this.isDrivingNow = this.accountService.userValue.isDrivingNow;
          this.order = {
            id: '',
            location: '',
            locationLat: '',
            locationLong: '',
            destination: '',
            destinationLat: '',
            destinationLong: '',
            increasePrice: '',
            isAccepted: null,
            isCompleted: null,
            createdOn: null,
            status: null,
            applicationUser: null,
            applicationUserId: null,
            totalPrice: null,
            acceptedBy: null,
            tripDistance: null,
            userDistance: null,
            withPets: null,
            withStroller: null,
            carType: null,
            isRated: null,
            km: null,
            distanceText: null,
            eta: null,
            isDeleted: null,
            isDriverArrived: null,
            increasedByDriver: null,
            increaseAccepted: null,
            increasedBy: null,
            special: null,
            pickUpTime: null,
            description: null
          };
          this.mapVisible = false;
          this.subscriptions = [];
          this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
        }

        _createClass(OrderDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.mapId = document.getElementById("map");
            this.mapId.style.display = 'none';
            this.orderDiv = document.getElementById("order");
            this.orderDiv.style.display = 'block';
            var connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_5__["HubConnectionBuilder"]().configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_5__["LogLevel"].Information).withUrl("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].signalRUrl, "/orderHub")).build();
            connection.start().then(function () {
              console.log('signalR Connected in travel-mode');
            })["catch"](function (err) {
              console.log("Reconnecting in 1 sec.");
              setTimeout(function () {
                return connection.start();
              }, 1000);
            });
            connection.on('NotifyDriver', function (orderId) {
              _this.subscriptions.push(_this.orderService.getOrderById(orderId).subscribe(function (order) {
                if (_this.order.id == order.id) {
                  if (order.increaseAccepted == true) {
                    _this.IncreaseAccepted(order);
                  } else if (order.increaseAccepted == false) {
                    _this.IncreaseRefused();
                  }
                }
              }));
            });
            connection.on('OrderDeleted', function (orderId) {
              _this.subscriptions.push(_this.orderService.getOrderById(orderId).subscribe(function (order) {
                if (_this.order.id == order.id) {
                  _this.OrderTaken();
                }
              }));
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this2 = this;

            this.orderDiv.style.display = 'block';
            this.mapId.style.display = 'none';
            this.subscriptions.push(this.orderService.getOrderById(this.orderId).subscribe(function (order) {
              if (order == null) {
                return _this2.OrderTaken();
              }

              if (order.totalPrice <= 3.50) {
                _this2.canIncrease = true;
              } else {
                _this2.canIncrease = false;
              }

              _this2.order = order; //this.calculateDistance(this.order);

              _this2.calculateEta(_this2.order);

              _this2.loadMap(_this2.mapRef);
            }));
          }
        }, {
          key: "loadMap",
          value: function loadMap(mapRef) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var userLocationLatLng, options, icon, marker;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      userLocationLatLng = {
                        lat: +this.order.locationLat,
                        lng: +this.order.locationLong
                      };
                      options = {
                        center: new google.maps.LatLng(userLocationLatLng.lat, userLocationLatLng.lng),
                        zoom: 14,
                        disableDefaultUI: true,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        zoomControl: false
                      };

                      if (mapRef != null) {
                        this.map = new google.maps.Map(mapRef.nativeElement, options);
                      }

                      icon = {
                        url: 'https://www.freeiconspng.com/uploads/-human-male-man-people-person-profile-red-user-icon--icon--23.png',
                        scaledSize: new window.google.maps.Size(25, 25),
                        anchor: {
                          x: 10,
                          y: 10
                        }
                      };
                      marker = new google.maps.Marker({
                        position: new google.maps.LatLng(userLocationLatLng),
                        icon: icon,
                        map: this.map
                      });
                      this.navigateToUserAndCalculateDistance(marker);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "navigateToUserAndCalculateDistance",
          value: function navigateToUserAndCalculateDistance(marker) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var directionsService, directionsRenderer, coordinates, myLatLng, userLatLng, userLat, userLng;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      directionsService = new google.maps.DirectionsService();
                      directionsRenderer = new google.maps.DirectionsRenderer();
                      _context2.next = 4;
                      return Geolocation.getCurrentPosition();

                    case 4:
                      coordinates = _context2.sent;
                      myLatLng = {
                        lat: coordinates.coords.latitude,
                        lng: coordinates.coords.longitude
                      };
                      userLatLng = {
                        lat: this.order.locationLat,
                        lng: this.order.locationLong
                      };
                      userLat = +userLatLng.lat;
                      userLng = +userLatLng.lng;
                      directionsService.route({
                        origin: {
                          lat: myLatLng.lat,
                          lng: myLatLng.lng
                        },
                        destination: {
                          lat: userLat,
                          lng: userLng
                        },
                        travelMode: google.maps.TravelMode.DRIVING
                      }, function (response, status) {
                        if (status === "OK") {
                          directionsRenderer.setDirections(response);
                          var p1 = new google.maps.LatLng(myLatLng.lat, myLatLng.lng);
                          var p2 = new google.maps.LatLng(userLat, userLng);
                          _this3.distance = (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
                          var infowindow = new google.maps.InfoWindow({
                            content: "".concat(_this3.distance, " km from you.")
                          });
                          infowindow.open(_this3.map, marker);
                        } else {
                          window.alert("Directions request failed due to " + status);
                        }
                      });
                      directionsRenderer.setMap(this.map);

                    case 11:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "hideMap",
          value: function hideMap() {
            this.orderDiv.style.display = 'block';
            this.mapId.style.display = 'none';
            this.mapVisible = false;

            if (this.orderDiv.cancelable) {
              this.orderDiv.preventDefault();
            }

            if (this.mapId.cancelable) {
              this.mapId.preventDefault();
            }
          }
        }, {
          key: "showMap",
          value: function showMap() {
            this.orderDiv.style.display = 'none';
            this.mapId.style.display = 'block';
            this.mapVisible = true;
            this.loadMap(this.mapRef);

            if (this.orderDiv.cancelable) {
              this.orderDiv.preventDefault();
            }

            if (this.mapId.cancelable) {
              this.mapId.preventDefault();
            }
          }
        }, {
          key: "offer",
          value: function offer(value) {
            var _this4 = this;

            this.subscriptions.push(this.orderService.getOrderById(this.order.id).subscribe(function (x) {
              if (x.status == 'Canceled') {
                _this4.OrderTaken();

                _this4.router.navigate(['menu/driving']);

                return;
              } else {
                _this4.subscriptions.push(_this4.orderService.driverIncreaseOrderPrice(_this4.order.id, value, _this4.accountService.userValue.driverId).subscribe(function () {}));
              }
            }));
          } // async calculateDistance(order) {
          //   const coordinates = await Geolocation.getCurrentPosition();
          //   const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };
          //   const orderLatLng = { lat: order.locationLat, lng: order.locationLong };
          //   var p1 = new google.maps.LatLng(myLatLng.lat, myLatLng.lng);
          //   var p2 = new google.maps.LatLng(orderLatLng.lat, orderLatLng.lng);
          //   this.distance = (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
          //   if (this.distance == null || this.distance == undefined) {
          //     this.distance = (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
          //   }
          // }

        }, {
          key: "calculateEta",
          value: function calculateEta(order) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var coordinates, myLatLng, directionsService, orderLatLng, orderLat, orderLng;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return Geolocation.getCurrentPosition();

                    case 2:
                      coordinates = _context3.sent;
                      myLatLng = {
                        lat: coordinates.coords.latitude,
                        lng: coordinates.coords.longitude
                      };
                      this.myLat = myLatLng.lat;
                      this.myLng = myLatLng.lng;
                      directionsService = new google.maps.DirectionsService();
                      orderLatLng = {
                        lat: order.locationLat,
                        lng: order.locationLong
                      };
                      orderLat = +orderLatLng.lat;
                      orderLng = +orderLatLng.lng;
                      directionsService.route({
                        origin: {
                          lat: +this.myLat,
                          lng: +this.myLng
                        },
                        destination: {
                          lat: orderLat,
                          lng: orderLng
                        },
                        travelMode: google.maps.TravelMode.DRIVING
                      }, function (response, status) {
                        if (status === "OK") {
                          order.eta = response.routes[0].legs[0].duration.text;
                        }
                      });

                    case 11:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "acceptOrder",
          value: function acceptOrder(order) {
            var _this5 = this;

            this.subscriptions.push(this.orderService.getOrderById(order.id).subscribe(function (x) {
              if (x.status == 'Canceled') {
                _this5.OrderTaken();

                _this5.router.navigate(['menu/driving']);

                return;
              } else {
                _this5.subscriptions.push(_this5.driverService.getDriverActiveCar(_this5.accountService.userValue.driverId).subscribe(function (car) {
                  if (car.typeId == 1 && order.carType == 'Comfort') {
                    return _this5.WrongCarAlert();
                  } else {
                    //Get user's id to get drivers data
                    //Get driver's data
                    _this5.subscriptions.push(_this5.driverService.getDriver(_this5.accountService.userValue.driverId).subscribe(function (driver) {
                      _this5.tripPriceForDriver = order.totalPrice * (driver.comission / 100); //Get drivers wallet

                      _this5.subscriptions.push(_this5.walletService.getMyWallet(_this5.applicationUserId).subscribe(function (wallet) {
                        if (wallet.ammount < _this5.tripPriceForDriver) {
                          _this5.NotEnoughCashAlert();

                          return;
                        } else {
                          var applicationUserId = _this5.accountService.userValue.id;
                          _this5.accountService.userValue.isDrivingNow = true;

                          _this5.subscriptions.push(_this5.accountService.updateDriving(_this5.applicationUserId, true).subscribe(function () {}));

                          _this5.isDrivingNow = _this5.accountService.userValue.isDrivingNow;
                          order.acceptedBy = applicationUserId; //Accepting order

                          _this5.subscriptions.push(_this5.orderService.acceptOrder(order.id, applicationUserId).subscribe(function () {
                            _this5.subscriptions.push(_this5.orderService.updateOrderEta(orderId, order.eta).subscribe());
                          }));

                          var orderId = order.id;
                          var data = {
                            orderId: orderId,
                            applicationUserId: applicationUserId,
                            order: order
                          }; //Creating trip to manage data

                          _this5.subscriptions.push(_this5.tripService.createTrip(data).subscribe(function () {}));

                          _this5.router.navigate(['menu/driving-mode']);
                        }
                      }));
                    }));
                  }
                }));
              }
            }));
          }
        }, {
          key: "openLanguagePopover",
          value: function openLanguagePopover(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var popover;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.popoverController.create({
                        component: _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_15__["LanguagePopoverPage"],
                        event: ev
                      });

                    case 2:
                      popover = _context4.sent;
                      _context4.next = 5;
                      return popover.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "NotEnoughCashAlert",
          value: function NotEnoughCashAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.translate.get(['Balance', 'Your wallet balance is not enough for this order!']).subscribe(function (text) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                          var alert;
                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                            while (1) {
                              switch (_context5.prev = _context5.next) {
                                case 0:
                                  _context5.next = 2;
                                  return this.alertController.create({
                                    cssClass: 'my-custom-class',
                                    header: text['Balance'],
                                    message: text['Your wallet balance is not enough for this order!'],
                                    buttons: ['OK']
                                  });

                                case 2:
                                  alert = _context5.sent;
                                  _context5.next = 5;
                                  return alert.present();

                                case 5:
                                case "end":
                                  return _context5.stop();
                              }
                            }
                          }, _callee5, this);
                        }));
                      });

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "OrderTaken",
          value: function OrderTaken() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this7 = this;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      this.translate.get(['Sorry', 'This order is no longer active']).subscribe(function (text) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                          var _this8 = this;

                          var alert;
                          return regeneratorRuntime.wrap(function _callee7$(_context7) {
                            while (1) {
                              switch (_context7.prev = _context7.next) {
                                case 0:
                                  _context7.next = 2;
                                  return this.alertController.create({
                                    cssClass: 'my-custom-class',
                                    header: text['Sorry'],
                                    message: text['This order is no longer active'],
                                    buttons: [{
                                      text: 'OK',
                                      handler: function handler() {
                                        _this8.router.navigate(['menu/driving']);
                                      }
                                    }]
                                  });

                                case 2:
                                  alert = _context7.sent;
                                  _context7.next = 5;
                                  return alert.present();

                                case 5:
                                case "end":
                                  return _context7.stop();
                              }
                            }
                          }, _callee7, this);
                        }));
                      });

                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "IncreaseRefused",
          value: function IncreaseRefused() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this9 = this;

              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      this.translate.get(['Order increasing refused.']).subscribe(function (text) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                          var alert;
                          return regeneratorRuntime.wrap(function _callee9$(_context9) {
                            while (1) {
                              switch (_context9.prev = _context9.next) {
                                case 0:
                                  _context9.next = 2;
                                  return this.alertController.create({
                                    cssClass: 'my-custom-class',
                                    header: text['Order increasing refused.'],
                                    buttons: [{
                                      text: 'Ok',
                                      role: 'cancel'
                                    }]
                                  });

                                case 2:
                                  alert = _context9.sent;
                                  _context9.next = 5;
                                  return alert.present();

                                case 5:
                                case "end":
                                  return _context9.stop();
                              }
                            }
                          }, _callee9, this);
                        }));
                      });

                    case 1:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "IncreaseAccepted",
          value: function IncreaseAccepted(order) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var _this10 = this;

              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      this.translate.get(['Order increasing accepted.', 'You can accept the order now', 'Accept', 'Cancel']).subscribe(function (text) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                          var _this11 = this;

                          var alert;
                          return regeneratorRuntime.wrap(function _callee11$(_context11) {
                            while (1) {
                              switch (_context11.prev = _context11.next) {
                                case 0:
                                  _context11.next = 2;
                                  return this.alertController.create({
                                    cssClass: 'my-custom-class',
                                    header: text['Order increasing accepted.'],
                                    message: text['You can accept the order now'],
                                    buttons: [{
                                      text: text['Accept'],
                                      handler: function handler() {
                                        _this11.acceptOrder(order);
                                      }
                                    }, {
                                      text: text['Cancel'],
                                      role: 'cancel'
                                    }]
                                  });

                                case 2:
                                  alert = _context11.sent;
                                  _context11.next = 5;
                                  return alert.present();

                                case 5:
                                case "end":
                                  return _context11.stop();
                              }
                            }
                          }, _callee11, this);
                        }));
                      });

                    case 1:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "WrongCarAlert",
          value: function WrongCarAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var _this12 = this;

              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      this.translate.get(['Order information', "Your car is of type 'Normal' but the order desired car type is 'Comfort'!"]).subscribe(function (text) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                          var alert;
                          return regeneratorRuntime.wrap(function _callee13$(_context13) {
                            while (1) {
                              switch (_context13.prev = _context13.next) {
                                case 0:
                                  _context13.next = 2;
                                  return this.alertController.create({
                                    cssClass: 'my-custom-class',
                                    header: text['Order information'],
                                    message: text['Your car is of type "Normal" but the order desired car type is "Comfort"!'],
                                    buttons: ['OK']
                                  });

                                case 2:
                                  alert = _context13.sent;
                                  _context13.next = 5;
                                  return alert.present();

                                case 5:
                                case "end":
                                  return _context13.stop();
                              }
                            }
                          }, _callee13, this);
                        }));
                      });

                    case 1:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }]);

        return OrderDetailsPage;
      }();

      OrderDetailsPage.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"]
        }, {
          type: src_services__WEBPACK_IMPORTED_MODULE_10__["AccountService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_services_order_order_service__WEBPACK_IMPORTED_MODULE_12__["OrderService"]
        }, {
          type: src_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_11__["DriverService"]
        }, {
          type: src_services_wallet_wallet_service__WEBPACK_IMPORTED_MODULE_14__["WalletService"]
        }, {
          type: src_services_trip_trip_service__WEBPACK_IMPORTED_MODULE_13__["TripService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }];
      };

      OrderDetailsPage.propDecorators = {
        mapRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['map', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
            "static": false
          }]
        }]
      };
      OrderDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-details',
        template: _raw_loader_order_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], OrderDetailsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=order-details-order-details-module-es5.js.map