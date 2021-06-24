(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["driving-driving-module"], {
    /***/
    "+nG7":
    /*!*******************************************!*\
      !*** ./src/app/driving/driving.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function nG7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color:#e9e9e9;\n}\n\nion-toolbar {\n  --ion-background-color:#eeeeee;\n}\n\n#map {\n  height: 100%;\n  width: 100%;\n}\n\nion-title {\n  text-align: center;\n}\n\nh5 {\n  font-size: 0.9em;\n}\n\n#toolbarIcon {\n  font-size: 1.7em;\n}\n\n.fonted {\n  font-family: Open Sans Light;\n}\n\n.centered {\n  text-align: center;\n}\n\n.text {\n  font-family: Open Sans Light;\n}\n\nhr {\n  background: #eeeeee;\n  width: 70% !important;\n}\n\n.blink_me {\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite;\n}\n\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n\n.msg-box {\n  width: 100%;\n  height: 140px;\n  padding: 10px 30px;\n  font-size: 14px;\n  font-family: Open Sans Light;\n  overflow: auto;\n}\n\n.msg-box ul {\n  margin: -5px;\n  list-style: none;\n}\n\n.msg-box ul .ex-msg {\n  text-align: right;\n}\n\n.msg-box ul .in-msg {\n  text-align: left;\n  margin-left: -60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRyaXZpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQUE7QUFBSjs7QUFHQTtFQUNJLDhCQUFBO0FBQUo7O0FBR0k7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUlBO0VBQ0ksa0JBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0FBREo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksNEJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7RUFFSSw0QkFBQTtBQURKOztBQUlBO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtBQURKOztBQU1BO0VBQ0ksNkNBQUE7VUFBQSxxQ0FBQTtBQUhKOztBQU1FO0VBQ0U7SUFDRSxVQUFBO0VBSEo7QUFDRjs7QUFBRTtFQUNFO0lBQ0UsVUFBQTtFQUhKO0FBQ0Y7O0FBT0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQUxKOztBQU9JO0VBQ0ksWUFBQTtFQUVBLGdCQUFBO0FBTlI7O0FBT1E7RUFDSSxpQkFBQTtBQUxaOztBQVFRO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQU5aIiwiZmlsZSI6ImRyaXZpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAvLy0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy93cDQ3OTI3ODAtZGFyay1waG9uZS13YWxscGFwZXJzLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNlOWU5ZTk7XHJcbn1cclxuXHJcbmlvbi10b29sYmFye1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZWVlZWVlO1xyXG59XHJcblxyXG4gICAgI21hcCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDV7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG59XHJcbiN0b29sYmFySWNvbntcclxuICAgIGZvbnQtc2l6ZTogMS43ZW07XHJcbn1cclxuXHJcbi5mb250ZWR7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIExpZ2h0O1xyXG59XHJcblxyXG4uY2VudGVyZWR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0eyAgXHJcbiAgICAvL2ZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgTGlnaHQ7XHJcbn1cclxuXHJcbmhye1xyXG4gICAgYmFja2dyb3VuZDojZWVlZWVlO1xyXG4gICAgd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vL2NoYXRcclxuXHJcbi5ibGlua19tZSB7XHJcbiAgICBhbmltYXRpb246IGJsaW5rZXIgMXMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGJsaW5rZXIge1xyXG4gICAgNTAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuLm1zZy1ib3gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBMaWdodDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAgIHVsIHtcclxuICAgICAgICBtYXJnaW46IC01cHg7XHJcblxyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgLmV4LW1zZyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmluLW1zZyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuIl19 */";
      /***/
    },

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
    "RXA5":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/driving/driving.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function RXA5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>\r\n      <ion-label>{{'Orders' | translate}}</ion-label>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon (click)='openLanguagePopover($event)' id=\"toolbarIcon\" name=\"language-outline\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding class=\"background\">\r\n    <div class=\"row mt-2\">\r\n        <div class=\"col\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12 text-center\">\r\n                    <ion-text class=\"centered\" color=\"dark\">\r\n                        <h2 class=\"fonted blink_me\">{{'Waiting for orders' | translate}}</h2>\r\n                        <hr>\r\n                    </ion-text>\r\n                </div>\r\n\r\n                <!-- style=\"display: none;\" -- for distributing orders -->\r\n\r\n                <div class=\"col-md-10\" *ngIf=\"!isSubOreder\">\r\n                    <div *ngFor=\"let oldOrder of orders\" id=\"orderDiv\" class=\"list-group mt-2\">\r\n\r\n                        <a class=\"text list-group-item list-group-item-action flex-column align-items-start\">\r\n                            <div class=\"d-flex w-100 justify-content-between\">\r\n                                <h5 class=\"mb-1 fonted\"></h5>\r\n                                <small>{{oldOrder.createdOn | date:'MM/dd/yyyy h:mm'}}</small>\r\n                            </div>\r\n                            <p><ion-icon class=\"mr-2\" name=\"analytics-outline\"></ion-icon>{{oldOrder.location}}</p>\r\n                            <hr />\r\n                            <p><ion-icon class=\"mr-2\" name=\"arrow-forward-outline\"></ion-icon>{{oldOrder.destination}}</p>\r\n                            <div class=\"d-flex w-100 justify-content-between\">\r\n                                <h5 class=\"mb-1 fonted\"></h5>\r\n                                <button class=\"btn btn-info\" [routerLink]='[\"/menu/order-details\",oldOrder.id]'>{{'Order details' | translate}}</button>\r\n                            </div>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-10\" *ngIf=\"isSubOreder\">\r\n                    <div *ngFor=\"let subOrder of subOrders\" id=\"orderDiv\" class=\"list-group mt-2\">\r\n\r\n                        <a class=\"text list-group-item list-group-item-action flex-column align-items-start\">\r\n                            <div class=\"d-flex w-100 justify-content-between\">\r\n                                <small>{{subOrder.createdOn | date:'MM/dd/yyyy h:mm'}}</small>\r\n                                <small><i class=\"fa fa-calendar\"></i> {{subOrder.date}}</small>\r\n                            </div>\r\n\r\n                            <h4 class=\"mt-1 text-center \">{{subOrder.location}} <ion-icon class=\"mr-2\" name=\"arrow-forward-outline\"></ion-icon> {{subOrder.destination}}</h4>\r\n                            <hr />\r\n                            <div class=\"row pl-3\">\r\n                                <p>{{subOrder.info}}</p><br />\r\n                            </div>\r\n                            <div class=\"row pl-3\">\r\n                               <p><ion-icon name=\"person\"></ion-icon>  {{subOrder.applicationUser.firstName}}  {{subOrder.applicationUser.lastName}} </p>\r\n                            </div>\r\n                            <div class=\"d-flex w-100 justify-content-between\">\r\n                                <button class=\"fonted btn btn-info\" (click)=\"acceptSubOrder(subOrder)\" type=\"button\">{{'Accept' | translate}}</button>\r\n                            </div>\r\n                        </a>\r\n\r\n                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row mt-2\" *ngIf=\"subOrders\">\r\n       \r\n                <!-- style=\"display: none;\" -- for distributing orders -->\r\n\r\n    </div>\r\n\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "T8xI":
    /*!*****************************************!*\
      !*** ./src/app/driving/driving.page.ts ***!
      \*****************************************/

    /*! exports provided: DrivingPage */

    /***/
    function T8xI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DrivingPage", function () {
        return DrivingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_driving_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./driving.page.html */
      "RXA5");
      /* harmony import */


      var _driving_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./driving.page.scss */
      "+nG7");
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


      var src_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/_services */
      "8Xdb");
      /* harmony import */


      var src_services_order_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/_services/order/order.service */
      "8k+r");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/_services/driver/driver.service */
      "exMm");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../language-popover/language-popover.page */
      "oXKM");
      /* harmony import */


      var _services_suborder_suborder_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../_services/suborder/suborder.service */
      "qkHp");
      /* harmony import */


      var _services_suborder_options_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../_services/suborder/options.service */
      "VQrx");

      var Geolocation = _capacitor_core__WEBPACK_IMPORTED_MODULE_11__["Plugins"].Geolocation;

      var DrivingPage = /*#__PURE__*/function () {
        function DrivingPage(route, orderService, accountService, driverService, translate, popoverController, subOrderService, optionService) {
          _classCallCheck(this, DrivingPage);

          this.route = route;
          this.orderService = orderService;
          this.accountService = accountService;
          this.driverService = driverService;
          this.translate = translate;
          this.popoverController = popoverController;
          this.subOrderService = subOrderService;
          this.optionService = optionService;
          this.orders = [];
          this.subOrders = [];
          this.closeOrders = [];
          this.subscriptions = [];
          this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
          this.getMyLocation();
        }

        _createClass(DrivingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.isSubOreder = false;
            var connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_5__["HubConnectionBuilder"]().configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_5__["LogLevel"].Information).withUrl("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].signalRUrl, "/orderHub"), _aspnet_signalr__WEBPACK_IMPORTED_MODULE_5__["HttpTransportType"].WebSockets | _aspnet_signalr__WEBPACK_IMPORTED_MODULE_5__["HttpTransportType"].LongPolling).build();
            connection.start().then(function () {
              console.log('signalR Connected in driving');
            })["catch"](function (err) {
              console.log("Reconnecting in 1 sec.");
              setTimeout(function () {
                return connection.start();
              }, 1000);
            });
            connection.on('BroadcastMessage', function () {
              console.log('broadcasted from driving');
            });
            connection.on('CreatedOrder', function () {
              _this4.getData();
            });
            connection.on('OrderDeleted', function () {
              _this4.getData();
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.getMyLocation();
            this.categoryType = this.driverService.categoryType;
            this.getData();
          }
        }, {
          key: "getMyLocation",
          value: function getMyLocation() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var coordinates, myLatLng;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Geolocation.getCurrentPosition();

                    case 2:
                      coordinates = _context.sent;
                      myLatLng = {
                        lat: coordinates.coords.latitude,
                        lng: coordinates.coords.longitude
                      };
                      this.myLat = myLatLng.lat.toString();
                      this.myLng = myLatLng.lng.toString();

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getData",
          value: function getData() {
            var _this5 = this;

            if (this.accountService.userValue.isDrivingNow === true) {
              this.route.navigate(['menu/driving-mode']);
            }

            this.driverService.getDriver(this.accountService.userValue.driverId).subscribe(function (x) {
              if (_this5.driverService.categoryType == 'Normal') {
                _this5.isSubOreder = false;

                _this5.getNormalOrders(x.rating);
              } else if (_this5.driverService.categoryType == 'Comfort') {
                _this5.isSubOreder = false;

                _this5.getComfortOrders(x.rating);
              } else if (_this5.driverService.categoryType == 'Out of town') {
                _this5.getOutOfTown();
              } else if (_this5.driverService.categoryType == 'Closest') {
                _this5.isSubOreder = false;

                _this5.getClosestOrders(x.rating);
              } else if (_this5.driverService.categoryType == 'All') {
                _this5.isSubOreder = false;

                _this5.getAllOrders(x.rating);
              } else if (_this5.driverService.categoryType == undefined) {
                _this5.isSubOreder = false;
                _this5.driverService.categoryType == 'All';

                _this5.getAllOrders(x.rating);
              }
            });
          }
        }, {
          key: "getOutOfTown",
          value: function getOutOfTown() {
            var _this6 = this;

            this.subscriptions.push(this.subOrderService.getAllSubOrders('Waiting').subscribe(function (data) {
              if (data == null) {
                return;
              }

              _this6.isSubOreder = true;
              _this6.subOrders = data;

              _this6.subOrders.forEach(function (o) {
                var id = o.optionsId;

                _this6.optionService.getOptionById(id).subscribe(function (data) {
                  var opt = data;
                  o.location = opt.location;
                  o.destination = opt.destination;
                });
              });

              console.log(_this6.subOrders);
            }));
          }
        }, {
          key: "acceptSubOrder",
          value: function acceptSubOrder(subOrder) {
            var _this7 = this;

            this.subscriptions.push(this.subOrderService.editStatus(subOrder.id, {
              acceptedBy: this.accountService.userValue.id,
              status: 'Accepted'
            }).subscribe(function (data) {
              if (data) {
                _this7.route.navigate(['menu/reservations']);
              }
            }));
          }
        }, {
          key: "getAllOrders",
          value: function getAllOrders(rating) {
            var _this8 = this;

            this.subscriptions.push(this.orderService.getAllOrders().subscribe(function (data) {
              if (data == null) {
                return;
              }

              if (data.length < _this8.orders.length) {
                _this8.orders = data;
                return;
              }

              data.sort(function (a, b) {
                return new Date(b.createdOn) - new Date(a.createdOn);
              });

              if (rating >= 0 && rating <= 2) {
                setTimeout(function () {
                  _this8.orders = data;
                }, 10000);
              }

              if (rating >= 2 && rating <= 4) {
                setTimeout(function () {
                  _this8.orders = data;
                }, 8000);
              }

              if (rating >= 4 && rating <= 6) {
                setTimeout(function () {
                  _this8.orders = data;
                }, 5000);
              }

              if (rating >= 6 && rating <= 8) {
                setTimeout(function () {
                  _this8.orders = data;
                }, 3000);
              }

              if (rating >= 8 && rating <= 10) {
                setTimeout(function () {
                  _this8.orders = data;
                }, 1000);
              }

              _this8.calculateClosest();
            }));
          } //Get normal orders based by rating

        }, {
          key: "getNormalOrders",
          value: function getNormalOrders(rating) {
            var _this9 = this;

            this.subscriptions.push(this.orderService.getNormalOrders().subscribe(function (data) {
              if (data == null) {
                return;
              }

              if (data.length < _this9.orders.length) {
                _this9.orders = data;
                return;
              }

              if (rating >= 0 && rating <= 2) {
                setTimeout(function () {
                  _this9.orders = data;
                }, 10000);
              }

              if (rating >= 2 && rating <= 4) {
                setTimeout(function () {
                  _this9.orders = data;
                }, 8000);
              }

              if (rating >= 4 && rating <= 6) {
                setTimeout(function () {
                  _this9.orders = data;
                }, 5000);
              }

              if (rating >= 6 && rating <= 8) {
                setTimeout(function () {
                  _this9.orders = data;
                }, 3000);
              }

              if (rating >= 8 && rating <= 10) {
                setTimeout(function () {
                  _this9.orders = data;
                }, 1000);
              }
            }));
          } //Get comfort orders based by rating

        }, {
          key: "getComfortOrders",
          value: function getComfortOrders(rating) {
            var _this10 = this;

            this.subscriptions.push(this.orderService.getComfortOrders().subscribe(function (data) {
              if (data == null) {
                return;
              }

              if (data.length < _this10.orders.length) {
                _this10.orders = data;
                return;
              }

              if (rating >= 0 && rating <= 2) {
                setTimeout(function () {
                  _this10.orders = data;
                }, 10000);
              }

              if (rating >= 2 && rating <= 4) {
                setTimeout(function () {
                  _this10.orders = data;
                }, 8000);
              }

              if (rating >= 4 && rating <= 6) {
                setTimeout(function () {
                  _this10.orders = data;
                }, 5000);
              }

              if (rating >= 6 && rating <= 8) {
                setTimeout(function () {
                  _this10.orders = data;
                }, 3000);
              }

              if (rating >= 8 && rating <= 10) {
                setTimeout(function () {
                  _this10.orders = data;
                }, 1000);
              }
            }));
          }
        }, {
          key: "getClosestOrders",
          value: function getClosestOrders(rating) {
            var _this11 = this;

            this.subscriptions.push(this.orderService.getAllOrders().subscribe(function (data) {
              if (data == null) {
                return;
              }

              _this11.calculateEta(data);

              _this11.driverService.categoryCloseCount = _this11.orders.length;
            }));
          }
        }, {
          key: "calculateClosest",
          value: function calculateClosest() {
            var _this12 = this;

            this.closeOrders = [];
            this.orders.forEach(function (order) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var coordinates, myLatLng, orderLatLng, p1, p2;
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
                        orderLatLng = {
                          lat: order.locationLat,
                          lng: order.locationLong
                        };
                        p1 = new google.maps.LatLng(myLatLng.lat, myLatLng.lng);
                        p2 = new google.maps.LatLng(orderLatLng.lat, orderLatLng.lng); //calculates distance between two points in km's

                        this.distance = (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);

                        if (this.distance > 5) {
                          this.closeOrders.push(order);
                        }

                        this.driverService.categoryCloseCount = this.closeOrders.length;

                      case 10:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });
          }
        }, {
          key: "calculateEta",
          value: function calculateEta(orders) {
            var _this13 = this;

            this.orders = [];
            orders.forEach(function (order) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var coordinates, myLatLng, orderLatLng, p1, p2, calcDistance, index;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        calcDistance = function _calcDistance(p1, p2) {
                          return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
                        };

                        _context3.next = 3;
                        return Geolocation.getCurrentPosition();

                      case 3:
                        coordinates = _context3.sent;
                        myLatLng = {
                          lat: coordinates.coords.latitude,
                          lng: coordinates.coords.longitude
                        };
                        orderLatLng = {
                          lat: order.locationLat,
                          lng: order.locationLong
                        };
                        p1 = new google.maps.LatLng(myLatLng.lat, myLatLng.lng);
                        p2 = new google.maps.LatLng(orderLatLng.lat, orderLatLng.lng);
                        this.distance = calcDistance(p1, p2);
                        order.km = +this.distance; //calculates distance between two points in km's

                        if (order.km > 5) {
                          index = orders.indexOf(order);
                          orders.splice(index, 1);
                        }

                        this.driverService.categoryCloseCount = orders.length;

                      case 12:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            });
            this.closeOrders = orders;
            this.orders = orders;
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
                        component: _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_13__["LanguagePopoverPage"],
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
        }]);

        return DrivingPage;
      }();

      DrivingPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_services_order_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"]
        }, {
          type: src_services__WEBPACK_IMPORTED_MODULE_6__["AccountService"]
        }, {
          type: src_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_9__["DriverService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["PopoverController"]
        }, {
          type: _services_suborder_suborder_service__WEBPACK_IMPORTED_MODULE_14__["SuborderService"]
        }, {
          type: _services_suborder_options_service__WEBPACK_IMPORTED_MODULE_15__["OptionsService"]
        }];
      };

      DrivingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-driving',
        template: _raw_loader_driving_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_driving_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DrivingPage);
      /***/
    },

    /***/
    "g7Ce":
    /*!*******************************************!*\
      !*** ./src/app/driving/driving.module.ts ***!
      \*******************************************/

    /*! exports provided: HttpLoaderFactory, DrivingPageModule */

    /***/
    function g7Ce(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DrivingPageModule", function () {
        return DrivingPageModule;
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


      var _driving_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./driving-routing.module */
      "tbxs");
      /* harmony import */


      var _driving_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./driving.page */
      "T8xI");
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

      var DrivingPageModule = function DrivingPageModule() {
        _classCallCheck(this, DrivingPageModule);
      };

      DrivingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _driving_routing_module__WEBPACK_IMPORTED_MODULE_5__["DrivingPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
          }
        }), _language_popover_language_popover_module__WEBPACK_IMPORTED_MODULE_10__["LanguagePopoverPageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_driving_page__WEBPACK_IMPORTED_MODULE_6__["DrivingPage"]]
      })], DrivingPageModule);
      /***/
    },

    /***/
    "tbxs":
    /*!***************************************************!*\
      !*** ./src/app/driving/driving-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: DrivingPageRoutingModule */

    /***/
    function tbxs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DrivingPageRoutingModule", function () {
        return DrivingPageRoutingModule;
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


      var _driving_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./driving.page */
      "T8xI");

      var routes = [{
        path: '',
        component: _driving_page__WEBPACK_IMPORTED_MODULE_3__["DrivingPage"]
      }];

      var DrivingPageRoutingModule = function DrivingPageRoutingModule() {
        _classCallCheck(this, DrivingPageRoutingModule);
      };

      DrivingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DrivingPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=driving-driving-module-es5.js.map