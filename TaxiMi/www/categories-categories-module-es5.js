(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"], {
    /***/
    "1n1Y":
    /*!***********************************************!*\
      !*** ./src/app/categories/categories.page.ts ***!
      \***********************************************/

    /*! exports provided: CategoriesPage */

    /***/
    function n1Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesPage", function () {
        return CategoriesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_categories_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./categories.page.html */
      "zDdw");
      /* harmony import */


      var _categories_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./categories.page.scss */
      "ArCr");
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var src_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/_services */
      "8Xdb");
      /* harmony import */


      var src_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/_services/driver/driver.service */
      "exMm");
      /* harmony import */


      var src_services_order_order_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/_services/order/order.service */
      "8k+r");
      /* harmony import */


      var _services_suborder_suborder_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../_services/suborder/suborder.service */
      "qkHp");
      /* harmony import */


      var _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../language-popover/language-popover.page */
      "oXKM");

      var CategoriesPage = /*#__PURE__*/function () {
        function CategoriesPage(popoverController, translate, accountService, route, driverService, orderService, subOrderService) {
          _classCallCheck(this, CategoriesPage);

          this.popoverController = popoverController;
          this.translate = translate;
          this.accountService = accountService;
          this.route = route;
          this.driverService = driverService;
          this.orderService = orderService;
          this.subOrderService = subOrderService;
          this.subscriptions = [];
          this.isDrivingNow = this.accountService.userValue.isDrivingNow;
          this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
        }

        _createClass(CategoriesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.getNormalCount();
            this.getComfortCount();
            this.getAllCount();
            this.getSubOrderCount();
            var connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_5__["HubConnectionBuilder"]().configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_5__["LogLevel"].Information).withUrl("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].signalRUrl, "/orderHub")).build();
            connection.start().then(function () {
              console.log('signalR Connected in travelling');
            })["catch"](function (err) {
              return console.log(err);
            });
            connection.on('BroadcastMessage', function () {
              _this.getNormalCount();

              _this.getComfortCount();

              _this.getAllCount();

              _this.getSubOrderCount();
            });

            if (this.isDrivingNow == true) {
              this.route.navigate(['menu/driving']);
            }
          }
        }, {
          key: "all",
          value: function all() {
            this.driverService.categoryType = 'All';
            this.route.navigate(['menu/driving']);
          }
        }, {
          key: "closest",
          value: function closest() {
            this.driverService.categoryType = 'Closest';
            this.route.navigate(['menu/driving']);
          }
        }, {
          key: "normal",
          value: function normal() {
            this.driverService.categoryType = 'Normal';
            this.route.navigate(['menu/driving']);
          }
        }, {
          key: "comfort",
          value: function comfort() {
            this.driverService.categoryType = 'Comfort';
            this.route.navigate(['menu/driving']);
          }
        }, {
          key: "outOfTown",
          value: function outOfTown() {
            this.driverService.categoryType = 'Out of town';
            this.route.navigate(['menu/driving']);
          }
        }, {
          key: "booked",
          value: function booked() {
            this.route.navigate(['menu/booked-travels']);
          }
        }, {
          key: "getNormalCount",
          value: function getNormalCount() {
            var _this2 = this;

            this.subscriptions.push(this.orderService.getNormalOrders().subscribe(function (x) {
              return _this2.normalCount = x.length;
            }));
          }
        }, {
          key: "getComfortCount",
          value: function getComfortCount() {
            var _this3 = this;

            this.subscriptions.push(this.orderService.getComfortOrders().subscribe(function (x) {
              return _this3.comfortCount = x.length;
            }));
          }
        }, {
          key: "getAllCount",
          value: function getAllCount() {
            var _this4 = this;

            this.subscriptions.push(this.orderService.getAllOrders().subscribe(function (x) {
              return _this4.allCount = x.length;
            }));
          }
        }, {
          key: "getSubOrderCount",
          value: function getSubOrderCount() {
            var _this5 = this;

            this.subscriptions.push(this.subOrderService.getAllSubOrders('Waiting').subscribe(function (x) {
              return _this5.subOrderCount = x.length;
            }));
          }
        }, {
          key: "openLanguagePopover",
          value: function openLanguagePopover(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var popover;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.popoverController.create({
                        component: _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_13__["LanguagePopoverPage"],
                        event: ev
                      });

                    case 2:
                      popover = _context.sent;
                      _context.next = 5;
                      return popover.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
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
        }]);

        return CategoriesPage;
      }();

      CategoriesPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }, {
          type: src_services__WEBPACK_IMPORTED_MODULE_9__["AccountService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_10__["DriverService"]
        }, {
          type: src_services_order_order_service__WEBPACK_IMPORTED_MODULE_11__["OrderService"]
        }, {
          type: _services_suborder_suborder_service__WEBPACK_IMPORTED_MODULE_12__["SuborderService"]
        }];
      };

      CategoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-categories',
        template: _raw_loader_categories_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_categories_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CategoriesPage);
      /***/
    },

    /***/
    "1qrh":
    /*!*********************************************************!*\
      !*** ./src/app/categories/categories-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: CategoriesPageRoutingModule */

    /***/
    function qrh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesPageRoutingModule", function () {
        return CategoriesPageRoutingModule;
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


      var _categories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./categories.page */
      "1n1Y");

      var routes = [{
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_3__["CategoriesPage"]
      }];

      var CategoriesPageRoutingModule = function CategoriesPageRoutingModule() {
        _classCallCheck(this, CategoriesPageRoutingModule);
      };

      CategoriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CategoriesPageRoutingModule);
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
            var _this6 = this;

            var headers = this.sharedService.headerGerneration();
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order/id/").concat(id), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
              return _this6.order = data;
            }));
          }
        }, {
          key: "getCanceledOrderById",
          value: function getCanceledOrderById(id) {
            var _this7 = this;

            var headers = this.sharedService.headerGerneration();
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order/canceled/").concat(id), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
              return _this7.order = data;
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
            var _this8 = this;

            var headers = this.sharedService.headerGerneration();
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order/").concat(orderId, "/").concat(driverId), {
              headers: headers,
              responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
              return _this8.driverId = driverId;
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
    "ArCr":
    /*!*************************************************!*\
      !*** ./src/app/categories/categories.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function ArCr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color:#eeeeee;\n}\n\nion-toolbar {\n  --ion-background-color:#eeeeee;\n}\n\nion-title {\n  text-align: center;\n}\n\n#toolbarIcon {\n  font-size: 1.7em;\n}\n\n.fonted {\n  font-family: Open Sans Light;\n}\n\n.centered {\n  text-align: center;\n}\n\n.text {\n  font-family: Open Sans Light;\n}\n\nhr {\n  background: #eeeeee;\n  width: 70% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhdGVnb3JpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksOEJBQUE7QUFESjs7QUFJQTtFQUNJLDhCQUFBO0FBREo7O0FBS0E7RUFDSSxrQkFBQTtBQUZKOztBQUtBO0VBQ0ksZ0JBQUE7QUFGSjs7QUFLQTtFQUNJLDRCQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtBQUZKOztBQUtBO0VBRUksNEJBQUE7QUFISjs7QUFNQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7QUFISiIsImZpbGUiOiJjYXRlZ29yaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLy8tLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvd3A0NzkyNzgwLWRhcmstcGhvbmUtd2FsbHBhcGVycy5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgLy8gLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMzUzNTM1O1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZWVlZWVlO1xyXG59XHJcblxyXG5pb24tdG9vbGJhcntcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2VlZWVlZTtcclxufVxyXG4gICAgXHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jdG9vbGJhckljb257XHJcbiAgICBmb250LXNpemU6IDEuN2VtO1xyXG59XHJcblxyXG4uZm9udGVke1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBMaWdodDtcclxufVxyXG5cclxuLmNlbnRlcmVke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGV4dHsgIFxyXG4gICAgLy9mb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIExpZ2h0O1xyXG59XHJcblxyXG5ocntcclxuICAgIGJhY2tncm91bmQ6I2VlZWVlZTtcclxuICAgIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "kMJQ":
    /*!*************************************************!*\
      !*** ./src/app/categories/categories.module.ts ***!
      \*************************************************/

    /*! exports provided: HttpLoaderFactory, CategoriesPageModule */

    /***/
    function kMJQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function () {
        return CategoriesPageModule;
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


      var _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./categories-routing.module */
      "1qrh");
      /* harmony import */


      var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./categories.page */
      "1n1Y");
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

      var CategoriesPageModule = function CategoriesPageModule() {
        _classCallCheck(this, CategoriesPageModule);
      };

      CategoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriesPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
          }
        }), _language_popover_language_popover_module__WEBPACK_IMPORTED_MODULE_10__["LanguagePopoverPageModule"]],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]]
      })], CategoriesPageModule);
      /***/
    },

    /***/
    "zDdw":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function zDdw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title *ngIf=\"isDrivingNow == false\">\r\n        <!-- <ion-label>{{'Orders' | translate}}</ion-label> -->\r\n        <ion-label>{{'Categories' | translate}}</ion-label>\r\n\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon (click)='openLanguagePopover($event)' id=\"toolbarIcon\" name=\"language-outline\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding class=\"background\">\r\n  <div class=\"row mt-2 text-center\">\r\n    <div class=\"col-md-12\">\r\n      <ion-list>\r\n        <ion-item (click)='all()'>\r\n          <ion-label>{{'All' | translate}}</ion-label>\r\n          <ion-chip>{{allCount}}</ion-chip>\r\n        </ion-item>\r\n        <ion-item (click)='closest()'>\r\n          <ion-label>{{'Closest' | translate}}</ion-label>\r\n          <ion-chip *ngIf=\"driverService.categoryCloseCount != null\">{{driverService.categoryCloseCount}}</ion-chip>\r\n          <ion-chip *ngIf=\"driverService.categoryCloseCount == undefined\">{{allCount}}</ion-chip>\r\n        </ion-item>\r\n        <ion-item (click)='normal()'>\r\n          <ion-label>{{'Normal' | translate}}</ion-label>\r\n          <ion-chip>{{normalCount}}</ion-chip>\r\n        </ion-item>\r\n        <ion-item (click)='comfort()'>\r\n          <ion-label>{{'Comfort' | translate}}</ion-label>\r\n          <ion-chip>{{comfortCount}}</ion-chip>\r\n        </ion-item>\r\n        <ion-item (click)='outOfTown()'>\r\n          <ion-label>{{'Out of town' | translate}}</ion-label>\r\n          <ion-chip>{{subOrderCount}}</ion-chip>\r\n        </ion-item>\r\n        <ion-item (click)='booked()'>\r\n          <ion-label>{{'Booked' | translate}}</ion-label>\r\n          <ion-chip>0</ion-chip>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n    \r\n    \r\n    </div>\r\n\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=categories-categories-module-es5.js.map