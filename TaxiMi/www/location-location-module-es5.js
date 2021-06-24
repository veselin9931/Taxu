(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["location-location-module"], {
    /***/
    "8k+r":
    /*!**********************************************!*\
      !*** ./src/_services/order/order.service.ts ***!
      \**********************************************/

    /*! exports provided: OrderService */

    /***/
    function kR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderService", function () {
        return OrderService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../shared/shared.service */
      "Dsd+");

      var OrderService = /*#__PURE__*/function () {
        function OrderService(http, sharedService) {
          _classCallCheck(this, OrderService);

          this.http = http;
          this.sharedService = sharedService;
          this.orders = [];
          this.completedOrder = false;
        }

        _createClass(OrderService, [{
          key: "createOrder",
          value: function createOrder(data) {
            var headers = this.sharedService.headerGerneration();
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order"), data, {
              headers: headers,
              responseType: 'text'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "addToFavourites",
          value: function addToFavourites(data) {
            var headers = this.sharedService.headerGerneration();
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order/favourites"), data, {
              headers: headers,
              responseType: 'text'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "getMyFavourites",
          value: function getMyFavourites(userId) {
            var headers = this.sharedService.headerGerneration();
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order/favourites/").concat(userId), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "deleteFavouriteOrder",
          value: function deleteFavouriteOrder(orderId) {
            var headers = this.sharedService.headerGerneration();
            return this.http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order/favourites/").concat(orderId), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
              return console.log('deleted favourite order: ', JSON.stringify(data));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "getDirections",
          value: function getDirections(locationLat, locationLng, destinationLat, destinationLng) {
            var headers = this.sharedService.headerGerneration();
            return this.http.post("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=".concat(locationLat, ",").concat(locationLng, "&destinations=").concat(destinationLat, "%2C").concat(destinationLng, "%7C&key=AIzaSyAEvlXdM4joG4bNVT5l-tJSk9lUSGhxMNw"), {
              headers: headers,
              responseType: 'text'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "getOrderById",
          value: function getOrderById(id) {
            var _this = this;

            var headers = this.sharedService.headerGerneration();
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order/id/").concat(id), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
              return _this.order = data;
            }));
          }
        }, {
          key: "getCanceledOrderById",
          value: function getCanceledOrderById(id) {
            var _this2 = this;

            var headers = this.sharedService.headerGerneration();
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order/canceled/").concat(id), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
              return _this2.order = data;
            }));
          }
        }, {
          key: "getLastCompletedOrder",
          value: function getLastCompletedOrder(userId) {
            var headers = this.sharedService.headerGerneration();
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order/completed/").concat(userId), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "getMyOrder",
          value: function getMyOrder(userId) {
            var headers = this.sharedService.headerGerneration();
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order/").concat(userId), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "getOrderForChat",
          value: function getOrderForChat(userId) {
            var headers = this.sharedService.headerGerneration();
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order/chat/").concat(userId), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "getAllOrders",
          value: function getAllOrders() {
            var headers = this.sharedService.headerGerneration();
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order"), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "getNormalOrders",
          value: function getNormalOrders() {
            var headers = this.sharedService.headerGerneration();
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order/normal"), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "getComfortOrders",
          value: function getComfortOrders() {
            var headers = this.sharedService.headerGerneration();
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order/comfort"), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "acceptOrder",
          value: function acceptOrder(orderId, driverId) {
            var _this3 = this;

            var headers = this.sharedService.headerGerneration();
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order/").concat(orderId, "/").concat(driverId), {
              headers: headers,
              responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
              return _this3.driverId = driverId;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "updateOrderEta",
          value: function updateOrderEta(orderId, value) {
            var headers = this.sharedService.headerGerneration();
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order/eta/").concat(orderId, "/").concat(value), {
              headers: headers,
              responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "updateDriverArrived",
          value: function updateDriverArrived(orderId) {
            var headers = this.sharedService.headerGerneration();
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order/arrived/").concat(orderId), {
              headers: headers,
              responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "rateOrder",
          value: function rateOrder(orderId) {
            var headers = this.sharedService.headerGerneration();
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order/rate/").concat(orderId), {
              headers: headers,
              responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "increaseOrderPrice",
          value: function increaseOrderPrice(id, amount) {
            var headers = this.sharedService.headerGerneration();
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order/increase/").concat(id, "/").concat(amount), {
              headers: headers,
              responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "completeOrder",
          value: function completeOrder(orderId) {
            var headers = this.sharedService.headerGerneration();
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order/").concat(orderId), {
              headers: headers,
              responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "deleteOrder",
          value: function deleteOrder(orderId) {
            var headers = this.sharedService.headerGerneration();
            return this.http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order/").concat(orderId), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
              return console.log('deleted order: ', JSON.stringify(data));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "driverIncreaseOrderPrice",
          value: function driverIncreaseOrderPrice(orderId, amount, driverId) {
            var headers = this.sharedService.headerGerneration();
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order/increased/").concat(orderId, "/").concat(amount, "/").concat(driverId), {
              headers: headers,
              responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "resetIncreasing",
          value: function resetIncreasing(orderId) {
            var headers = this.sharedService.headerGerneration();
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order/reset/").concat(orderId), {
              headers: headers,
              responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "increasedOrderAccept",
          value: function increasedOrderAccept(orderId, value) {
            var headers = this.sharedService.headerGerneration();
            ;
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order/accepted/increase/").concat(orderId, "/").concat(value), {
              headers: headers,
              responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "incrementOrderPrice",
          value: function incrementOrderPrice(orderId) {
            var headers = this.sharedService.headerGerneration();
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order/increment/").concat(orderId), {
              headers: headers,
              responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "decrementOrderPrice",
          value: function decrementOrderPrice(orderId) {
            var headers = this.sharedService.headerGerneration();
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order/decrement/").concat(orderId), {
              headers: headers,
              responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            var errorMessage = '';

            if (error.error instanceof ErrorEvent) {
              // client-side error
              console.log('Client side error.');
              errorMessage = "Error: ".concat(error.error.message);
            } else {
              // server-side error
              console.log('Server side error.');
              errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
            }

            console.log(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
          }
        }]);

        return OrderService;
      }();

      OrderService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
        }];
      };

      OrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], OrderService);
      /***/
    },

    /***/
    "cf3W":
    /*!*********************************************!*\
      !*** ./src/app/location/location.module.ts ***!
      \*********************************************/

    /*! exports provided: HttpLoaderFactory, LocationPageModule */

    /***/
    function cf3W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationPageModule", function () {
        return LocationPageModule;
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


      var _location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./location-routing.module */
      "pMSE");
      /* harmony import */


      var _location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./location.page */
      "xNjN");
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

      var LocationPageModule = function LocationPageModule() {
        _classCallCheck(this, LocationPageModule);
      };

      LocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _location_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocationPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
          }
        }), _language_popover_language_popover_module__WEBPACK_IMPORTED_MODULE_10__["LanguagePopoverPageModule"]],
        declarations: [_location_page__WEBPACK_IMPORTED_MODULE_6__["LocationPage"]]
      })], LocationPageModule);
      /***/
    },

    /***/
    "eeDV":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/location/location.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function eeDV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    \r\n\r\n    <ion-title>\r\n        <ion-label>{{'Choose starting point' | translate}}</ion-label>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon (click)='openLanguagePopover($event)' id=\"toolbarIcon\" name=\"language-outline\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  \r\n</ion-header>\r\n<ion-item>\r\n  <ion-input id=\"searchTextField\" type=\"text\" [placeholder]='\"Search location\" | translate' clearInput></ion-input>\r\n</ion-item>\r\n<ion-content class=\"noScroll\">\r\n  <div #map id=\"map\"></div>\r\n  <div #marker id=\"marker\"></div>\r\n  \r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar class=\"text-center\">\r\n    <!-- <ion-title>Choosen location</ion-title> -->\r\n    <button (click)=\"onSubmit()\" class=\"btn btn-info text-center\">{{'Take me from here' | translate}}</button>\r\n    \r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n<ion-footer>\r\n  <ion-toolbar class=\"text-center\">\r\n    <p>{{address}}</p>\r\n  </ion-toolbar>\r\n\r\n  \r\n</ion-footer>\r\n";
      /***/
    },

    /***/
    "jluf":
    /*!*********************************************!*\
      !*** ./src/app/location/location.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function jluf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".noScroll {\n  overflow: hidden;\n}\n\n#marker {\n  position: absolute;\n  /*url of the marker*/\n  background: url('location.png') no-repeat;\n  /*center the marker*/\n  top: 50%;\n  left: 50%;\n  z-index: 1;\n  /*fix offset when needed*/\n  margin-left: -10px;\n  margin-top: -34px;\n  /*size of the image*/\n  height: 34px;\n  width: 20px;\n  cursor: pointer;\n}\n\n#map {\n  height: 100%;\n  width: 100%;\n}\n\nion-card {\n  max-height: 200px;\n  overflow: scroll;\n  position: absolute;\n  z-index: 1;\n}\n\nion-toolbar {\n  --ion-background-color:#eeeeee;\n}\n\nion-title {\n  text-align: center;\n}\n\n#toolbarIcon {\n  font-size: 1.7em;\n}\n\n#toolbarIcon1 {\n  font-size: 3em;\n}\n\n.centered {\n  text-align: center;\n}\n\n.text {\n  font-size: 2.4em;\n  font-family: Open Sans Light;\n}\n\ni {\n  color: #eeeeee;\n}\n\n.my-custom-class {\n  --background: #e5e5e5;\n}\n\nion-select {\n  color: #383838;\n  background-color: white;\n  border-radius: 10px;\n  border: 3px solid #eeeeee;\n}\n\n.blink_me {\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite;\n}\n\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n\n.backIcon {\n  color: #ffae00;\n  font-size: 150%;\n}\n\n.back {\n  color: #ffae00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUk7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUNBQUE7RUFDQSxvQkFBQTtFQUNBLFFBQUE7RUFBUSxTQUFBO0VBRVIsVUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxlQUFBO0FBQVI7O0FBR0k7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUFSOztBQUlJO0VBQ0ksOEJBQUE7QUFEUjs7QUFJSTtFQUNJLGtCQUFBO0FBRFI7O0FBSUk7RUFDSSxnQkFBQTtBQURSOztBQUlJO0VBQ0ksY0FBQTtBQURSOztBQUtJO0VBQ0ksa0JBQUE7QUFGUjs7QUFLSTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUFGUjs7QUFLSTtFQUNJLGNBQUE7QUFGUjs7QUFLSTtFQUNJLHFCQUFBO0FBRlI7O0FBS0k7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBRlI7O0FBS0k7RUFDSSw2Q0FBQTtVQUFBLHFDQUFBO0FBRlI7O0FBS007RUFDRTtJQUNFLFVBQUE7RUFGUjtBQUNGOztBQURNO0VBQ0U7SUFDRSxVQUFBO0VBRlI7QUFDRjs7QUFLSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBSFI7O0FBTUk7RUFDSSxjQUFBO0FBSFIiLCJmaWxlIjoibG9jYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vU2Nyb2xsIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgI21hcmtlcntcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAvKnVybCBvZiB0aGUgbWFya2VyKi9cclxuICAgICAgICBiYWNrZ3JvdW5kOnVybCguLi8uLi9hc3NldHMvbG9jYXRpb24ucG5nKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgLypjZW50ZXIgdGhlIG1hcmtlciovXHJcbiAgICAgICAgdG9wOjUwJTtsZWZ0OjUwJTtcclxuICAgICAgXHJcbiAgICAgICAgei1pbmRleDoxO1xyXG4gICAgICAgIC8qZml4IG9mZnNldCB3aGVuIG5lZWRlZCovXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6LTEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDotMzRweDtcclxuICAgICAgICAvKnNpemUgb2YgdGhlIGltYWdlKi9cclxuICAgICAgICBoZWlnaHQ6MzRweDtcclxuICAgICAgICB3aWR0aDoyMHB4O1xyXG4gICAgICBcclxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAjbWFwIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGlvbi10b29sYmFye1xyXG4gICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2VlZWVlZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLXRpdGxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICN0b29sYmFySWNvbntcclxuICAgICAgICBmb250LXNpemU6IDEuN2VtO1xyXG4gICAgfVxyXG5cclxuICAgICN0b29sYmFySWNvbjF7XHJcbiAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgLy8tLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvRGFjb180Njc0NzM4LnBuZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jZW50ZXJlZHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50ZXh0eyAgXHJcbiAgICAgICAgZm9udC1zaXplOiAyLjRlbTtcclxuICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIExpZ2h0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpe1xyXG4gICAgICAgIGNvbG9yOiNlZWVlZWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5teS1jdXN0b20tY2xhc3Mge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2U1ZTVlNTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBpb24tc2VsZWN0e1xyXG4gICAgICAgIGNvbG9yOiByZ2IoNTYsIDU2LCA1Nik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjZWVlZWVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYmxpbmtfbWUge1xyXG4gICAgICAgIGFuaW1hdGlvbjogYmxpbmtlciAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIEBrZXlmcmFtZXMgYmxpbmtlciB7XHJcbiAgICAgICAgNTAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgIC5iYWNrSWNvbiB7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDE3NCwgMCk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNTAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYmFjayB7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDE3NCwgMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAiXX0= */";
      /***/
    },

    /***/
    "pMSE":
    /*!*****************************************************!*\
      !*** ./src/app/location/location-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LocationPageRoutingModule */

    /***/
    function pMSE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationPageRoutingModule", function () {
        return LocationPageRoutingModule;
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


      var _location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./location.page */
      "xNjN");

      var routes = [{
        path: '',
        component: _location_page__WEBPACK_IMPORTED_MODULE_3__["LocationPage"]
      }];

      var LocationPageRoutingModule = function LocationPageRoutingModule() {
        _classCallCheck(this, LocationPageRoutingModule);
      };

      LocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LocationPageRoutingModule);
      /***/
    },

    /***/
    "xNjN":
    /*!*******************************************!*\
      !*** ./src/app/location/location.page.ts ***!
      \*******************************************/

    /*! exports provided: LocationPage */

    /***/
    function xNjN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationPage", function () {
        return LocationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_location_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./location.page.html */
      "eeDV");
      /* harmony import */


      var _location_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./location.page.scss */
      "jluf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var src_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/_services */
      "8Xdb");
      /* harmony import */


      var src_services_order_order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/_services/order/order.service */
      "8k+r");
      /* harmony import */


      var _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../language-popover/language-popover.page */
      "oXKM");

      var Geolocation = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Geolocation;

      var LocationPage = /*#__PURE__*/function () {
        function LocationPage(route, orderService, navCtrl, translate, popoverController, accountService) {
          _classCallCheck(this, LocationPage);

          this.route = route;
          this.orderService = orderService;
          this.navCtrl = navCtrl;
          this.translate = translate;
          this.popoverController = popoverController;
          this.accountService = accountService; //markerUrl = 'http://maps.gstatic.com/mapfiles/markers2/marker.png'
          //markerUrl = 'https://image.flaticon.com/icons/png/24/727/727598.png'

          this.markerUrl = '../../assets/location.png';
          this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
        }

        _createClass(LocationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.getLocation();
            this.loadMap(this.mapRef);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.orderService.chosenLocation = this.address;
            this.route.navigate(['menu/destination']);
          }
        }, {
          key: "loadMap",
          value: function loadMap(mapRef) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var coordinates, myLatLng, options, marker, input, searchbox, geocoder;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return Geolocation.getCurrentPosition();

                    case 2:
                      coordinates = _context2.sent;
                      myLatLng = {
                        lat: coordinates.coords.latitude,
                        lng: coordinates.coords.longitude
                      };
                      this.orderService.userLocationLat = myLatLng.lat;
                      this.orderService.userLocationLong = myLatLng.lng;
                      options = {
                        center: new google.maps.LatLng(myLatLng.lat, myLatLng.lng),
                        zoom: 15,
                        disableDefaultUI: true,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                      };
                      this.map = new google.maps.Map(mapRef.nativeElement, options);
                      marker = new google.maps.Marker({
                        position: new google.maps.LatLng(myLatLng),
                        icon: this.markerUrl,
                        map: this.map
                      });
                      input = document.getElementById('searchTextField').getElementsByTagName('input')[0];
                      searchbox = new google.maps.places.SearchBox(input);
                      this.orderService.selectedFavourite = null;
                      this.map.addListener("bounds_changed", function () {
                        searchbox.setBounds(_this4.map.getBounds());
                      });
                      searchbox.addListener("places_changed", function () {
                        var places = searchbox.getPlaces();

                        if (places.length == 0) {
                          return;
                        }

                        var bounds = new google.maps.LatLngBounds();
                        places.forEach(function (place) {
                          if (!place.geometry) {
                            console.log('No Geometry');
                            return;
                          }

                          marker.setMap(null);
                          marker = new google.maps.Marker({
                            position: place.geometry.location,
                            map: _this4.map
                          });

                          if (place.geometry.viewport) {
                            bounds.union(place.geometry.viewport);
                          } else {
                            bounds.extend(place.geometry.location);
                          }
                        });

                        _this4.map.fitBounds(bounds);
                      });
                      geocoder = new google.maps.Geocoder();
                      google.maps.event.addListener(this.map, 'idle', function () {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var _this5 = this;

                          var center, lat, lng, myLatLng;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  center = this.map.getCenter();
                                  lat = center.lat();
                                  lng = center.lng();
                                  myLatLng = {
                                    lat: lat,
                                    lng: lng
                                  };

                                  if (marker && marker.setMap) {
                                    marker.setMap(null);
                                  }

                                  this.orderService.userLocationLat = myLatLng.lat;
                                  this.orderService.userLocationLong = myLatLng.lng; //Get Location

                                  geocoder.geocode({
                                    location: myLatLng
                                  }, function (results, status) {
                                    if (status == "OK") {
                                      if (results[0]) {
                                        _this5.address = results[0].formatted_address; // var infowindow = new google.maps.InfoWindow({
                                        //   content: `${this.address}`
                                        // });
                                        // infowindow.open(this.map, marker);
                                      }
                                    }
                                  });

                                case 8:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      });

                    case 16:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "destination",
          value: function destination() {
            this.route.navigate(['menu/destination']);
          }
        }, {
          key: "getLocation",
          value: function getLocation() {
            var _this6 = this;

            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function (position) {
                _this6.longitude = position.coords.longitude;
                _this6.latitude = position.coords.latitude;

                _this6.callApi(_this6.longitude, _this6.latitude);
              });
            } else {
              console.log("No support for geolocation");
            }
          }
        }, {
          key: "callApi",
          value: function callApi(Longitude, Latitude) {
            var url = "https://api-adresse.data.gouv.fr/reverse/?lon=".concat(Longitude, "&lat=").concat(Latitude); //Call API
          }
        }, {
          key: "openLanguagePopover",
          value: function openLanguagePopover(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var popover;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.popoverController.create({
                        component: _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_10__["LanguagePopoverPage"],
                        event: ev
                      });

                    case 2:
                      popover = _context3.sent;
                      _context3.next = 5;
                      return popover.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return LocationPage;
      }();

      LocationPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_services_order_order_service__WEBPACK_IMPORTED_MODULE_9__["OrderService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]
        }, {
          type: src_services__WEBPACK_IMPORTED_MODULE_8__["AccountService"]
        }];
      };

      LocationPage.propDecorators = {
        mapRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['map', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
            "static": true
          }]
        }],
        myButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['myButton']
        }]
      };
      LocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-location',
        template: _raw_loader_location_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_location_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LocationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=location-location-module-es5.js.map