(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["driver-history-driver-history-module"], {
    /***/
    "BcYB":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/driver-history/driver-history.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function BcYB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>\r\n        <ion-label>Cyber</ion-label>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon id=\"toolbarIcon\" name=\"language-outline\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding class=\"background\">\r\n  <div class=\"row mt-2\">\r\n    <div class=\"col\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 text-center\">\r\n          <ion-text class=\"centered\" color=\"light\">\r\n            <h2 class=\"text\">My history</h2>\r\n            <hr>\r\n          </ion-text>\r\n        </div>\r\n        <div class=\"col-md-10\">\r\n        <div class=\"list-group mt-2\">\r\n\r\n          <a class=\"text list-group-item list-group-item-action flex-column align-items-start\">\r\n            <div class=\"d-flex w-100 justify-content-between\">\r\n              <h5 class=\"text mb-1\">Daily earnings</h5>\r\n              <small>Today: {{currentDate |  date:'MM/dd/yyyy h:mm'}}</small>\r\n\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 text-center\">\r\n                <h5 class=\"text\">Profit: {{dailyProfit}}$</h5>\r\n              </div>\r\n            </div>\r\n          </a>\r\n        </div>\r\n      </div>\r\n        <div class=\"col-md-10\">\r\n          <div *ngFor=\"let order of orders\" class=\"list-group mt-2\">\r\n\r\n            <a class=\"text list-group-item list-group-item-action flex-column align-items-start\">\r\n              <div class=\"d-flex w-100 justify-content-between\">\r\n                <h5 class=\"text mb-1\">Order details</h5>\r\n                <small>{{order.createdOn |  date:'MM/dd/yyyy h:mm'}}</small>\r\n              </div>\r\n              <p class=\"mb-1 text\">Passenger: {{order.applicationUser.firstName}} {{order.applicationUser.lastName}}</p>\r\n              <p class=\"mb-1 text\">Phone number: {{order.applicationUser.phone}}</p>\r\n              <p class=\"mb-1 text\">Location: {{order.location}}</p>\r\n              <p class=\"mb-1 text\">Destination: {{order.destination}}</p>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <small class=\"text\">Profit: {{order.totalPrice}}$</small>\r\n                </div>\r\n              </div>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "H0Wu":
    /*!*******************************************************!*\
      !*** ./src/app/driver-history/driver-history.page.ts ***!
      \*******************************************************/

    /*! exports provided: DriverHistoryPage */

    /***/
    function H0Wu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DriverHistoryPage", function () {
        return DriverHistoryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_driver_history_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./driver-history.page.html */
      "BcYB");
      /* harmony import */


      var _driver_history_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./driver-history.page.scss */
      "NeWc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/_services */
      "8Xdb");
      /* harmony import */


      var src_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/_services/driver/driver.service */
      "exMm");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @aspnet/signalr */
      "Gpoy");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var DriverHistoryPage = /*#__PURE__*/function () {
        function DriverHistoryPage(driverService, accountService, locationPage) {
          _classCallCheck(this, DriverHistoryPage);

          this.driverService = driverService;
          this.accountService = accountService;
          this.locationPage = locationPage;
          this.subscriptions = [];
          this.orders = [];
          this.userId = this.accountService.userValue.id;
          this.currentDate = new Date();
        }

        _createClass(DriverHistoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.getHistory();
            var connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_7__["HubConnectionBuilder"]().configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_7__["LogLevel"].Information).withUrl("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].signalRUrl, "/orderHub")).build(); // const connection = new signalR.HubConnectionBuilder()
            //    .configureLogging(signalR.LogLevel.Information)
            //    .withUrl(`${environment.signalRUrl}/orderHub`, {
            //     skipNegotiation: true,
            //     transport: signalR.HttpTransportType.WebSockets})
            //    .build();

            connection.start().then(function () {
              console.log('signalR Connected in history');
            })["catch"](function (err) {
              return console.log(err.toString());
            });
            connection.on('BroadcastMessage', function () {
              _this.getHistory();
            });
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            var _iterator = _createForOfIteratorHelper(this.subscriptions),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var subscription = _step.value;
                console.log(subscription);
                subscription.unsubscribe();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "getHistory",
          value: function getHistory() {
            var _this2 = this;

            this.subscriptions.push(this.driverService.getDriverHistory(this.userId).subscribe(function (x) {
              if (_this2.orders == null) {
                console.log("No orders");
                return;
              }

              _this2.orders = x;
              var sum = 0;
              x.forEach(function (order) {
                sum += order.totalPrice;
              });
              _this2.dailyProfit = sum.toFixed(2);
            }));
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.locationPage.back();
          }
        }]);

        return DriverHistoryPage;
      }();

      DriverHistoryPage.ctorParameters = function () {
        return [{
          type: src_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_5__["DriverService"]
        }, {
          type: src_services__WEBPACK_IMPORTED_MODULE_4__["AccountService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
        }];
      };

      DriverHistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-driver-history',
        template: _raw_loader_driver_history_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_driver_history_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DriverHistoryPage);
      /***/
    },

    /***/
    "NeWc":
    /*!*********************************************************!*\
      !*** ./src/app/driver-history/driver-history.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function NeWc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color:#353535;\n}\n\nion-toolbar {\n  --ion-background-color:#eeeeee;\n}\n\nion-title {\n  text-align: center;\n}\n\n#toolbarIcon {\n  font-size: 1.7em;\n}\n\n.text {\n  font-family: Open Sans Light;\n}\n\n.centered {\n  text-align: center;\n}\n\nhr {\n  background: #eeeeee;\n  width: 70% !important;\n}\n\n.backIcon {\n  color: #ffae00;\n  font-size: 150%;\n}\n\n.back {\n  color: #ffae00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRyaXZlci1oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDhCQUFBO0FBQUo7O0FBR0E7RUFDSSw4QkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSw0QkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFLQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0E7RUFDSSxjQUFBO0FBRkoiLCJmaWxlIjoiZHJpdmVyLWhpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAvLy0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy93cDQ3OTI3ODAtZGFyay1waG9uZS13YWxscGFwZXJzLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzNTM1MzU7XHJcbn1cclxuXHJcbmlvbi10b29sYmFye1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZWVlZWVlO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jdG9vbGJhckljb257XHJcbiAgICBmb250LXNpemU6IDEuN2VtO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIExpZ2h0O1xyXG59XHJcblxyXG4uY2VudGVyZWR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5ocntcclxuICAgIGJhY2tncm91bmQ6I2VlZWVlZTtcclxuICAgIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5iYWNrSWNvbiB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMTc0LCAwKTtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxufVxyXG5cclxuLmJhY2sge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDE3NCwgMCk7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "odG3":
    /*!*********************************************************!*\
      !*** ./src/app/driver-history/driver-history.module.ts ***!
      \*********************************************************/

    /*! exports provided: DriverHistoryPageModule */

    /***/
    function odG3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DriverHistoryPageModule", function () {
        return DriverHistoryPageModule;
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


      var _driver_history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./driver-history-routing.module */
      "vg3a");
      /* harmony import */


      var _driver_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./driver-history.page */
      "H0Wu");

      var DriverHistoryPageModule = function DriverHistoryPageModule() {
        _classCallCheck(this, DriverHistoryPageModule);
      };

      DriverHistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _driver_history_routing_module__WEBPACK_IMPORTED_MODULE_5__["DriverHistoryPageRoutingModule"]],
        declarations: [_driver_history_page__WEBPACK_IMPORTED_MODULE_6__["DriverHistoryPage"]]
      })], DriverHistoryPageModule);
      /***/
    },

    /***/
    "vg3a":
    /*!*****************************************************************!*\
      !*** ./src/app/driver-history/driver-history-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: DriverHistoryPageRoutingModule */

    /***/
    function vg3a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DriverHistoryPageRoutingModule", function () {
        return DriverHistoryPageRoutingModule;
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


      var _driver_history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./driver-history.page */
      "H0Wu");

      var routes = [{
        path: '',
        component: _driver_history_page__WEBPACK_IMPORTED_MODULE_3__["DriverHistoryPage"]
      }];

      var DriverHistoryPageRoutingModule = function DriverHistoryPageRoutingModule() {
        _classCallCheck(this, DriverHistoryPageRoutingModule);
      };

      DriverHistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DriverHistoryPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=driver-history-driver-history-module-es5.js.map