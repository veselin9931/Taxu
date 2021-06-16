(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travelling-travelling-module"], {
    /***/
    "1L49":
    /*!***********************************************!*\
      !*** ./src/app/travelling/travelling.page.ts ***!
      \***********************************************/

    /*! exports provided: TravellingPage */

    /***/
    function L49(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TravellingPage", function () {
        return TravellingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_travelling_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./travelling.page.html */
      "dq7I");
      /* harmony import */


      var _travelling_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./travelling.page.scss */
      "XKq/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @aspnet/signalr */
      "Gpoy");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var src_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/_services */
      "8Xdb");
      /* harmony import */


      var src_services_order_order_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/_services/order/order.service */
      "8k+r");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../language-popover/language-popover.page */
      "oXKM");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");

      var TravellingPage = /*#__PURE__*/function () {
        function TravellingPage(formBuilder, route, orderService, accountService, translate, popoverController, alertController) {
          _classCallCheck(this, TravellingPage);

          this.formBuilder = formBuilder;
          this.route = route;
          this.orderService = orderService;
          this.accountService = accountService;
          this.translate = translate;
          this.popoverController = popoverController;
          this.alertController = alertController;
          this.user = this.accountService.userValue; //Car html properties;

          this.carModel = "";
          this.carColor = ""; //User html properties

          this.firstName = "";
          this.lastName = "";
          this.isSubmitted = false;
          this.isCompleted = false;
          this.subscriptions = [];
          this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
        }

        _createClass(TravellingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.loading = true;
            this.form = this.formBuilder.group({
              applicationUserId: [''],
              location: this.orderService.chosenLocation,
              locationLat: this.orderService.userLocationLat,
              locationLong: this.orderService.userLocationLong,
              destination: this.orderService.chosenDestination,
              destinationLat: this.orderService.userDestinationLat,
              destinationLong: this.orderService.userDestinationLong,
              totalPrice: this.orderTotalPrice,
              tripDistance: 0,
              userDistance: 0,
              increasePrice: [0],
              status: 'Waiting',
              eta: '',
              withPets: false,
              withStroller: false,
              special: false,
              carType: ''
            });
            var connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_6__["HubConnectionBuilder"]().configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_6__["LogLevel"].Information).withUrl("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].signalRUrl, "/orderHub")).build();
            connection.start().then(function () {
              console.log('signalR Connected in travelling');
            })["catch"](function (err) {
              return console.log(err);
            });
            connection.on('CreatedOrder', function () {
              _this.checkorder();
            });
            connection.on("IncrementDecrement", function (orderId) {
              _this.subscriptions.push(_this.orderService.getOrderById(orderId).subscribe(function (data) {
                (Math.round(_this.orderTotalPrice * 100) / 100).toFixed(2);
                _this.orderTotalPrice = data.totalPrice;
              }));
            });
            connection.on('OfferMorePrice', function (orderId) {
              _this.subscriptions.push(_this.orderService.getOrderById(orderId).subscribe(function (x) {
                if (x.id == _this.order.id) {
                  if (x.increasedByDriver >= 0.5) {
                    _this.driverPrice = x.increasedByDriver;
                    _this.driverIncreased = x.increasedByDriver + _this.orderTotalPrice;

                    _this.increasedOrder();
                  }
                }
              }));
            });
            connection.on('OrderAccepted', function () {
              _this.subscriptions.push(_this.orderService.getMyOrder(_this.user.id).subscribe(function (x) {
                if (x.status == 'Accepted') {
                  _this.presentOrderAcceptedNotification();

                  _this.checkorder();
                }
              }));
            });
            connection.on('LocateDriver', function (driverId) {});
          }
        }, {
          key: "presentOrderAcceptedNotification",
          value: function presentOrderAcceptedNotification() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return _capacitor_core__WEBPACK_IMPORTED_MODULE_13__["LocalNotifications"].schedule({
                        notifications: [{
                          title: "Order alert",
                          body: "Your order is accepted",
                          id: 1
                        }]
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.checkorder();

            if (this.orderService.selectedFavourite) {
              this.orderService.chosenLocation = this.orderService.selectedFavourite.location;
              this.form.get('location').setValue(this.orderService.selectedFavourite.location);
              this.form.get('locationLat').setValue(+this.orderService.selectedFavourite.locationLat);
              this.form.get('locationLong').setValue(+this.orderService.selectedFavourite.locationLong);
              this.orderService.chosenDestination = this.orderService.selectedFavourite.destination;
              this.form.get('destination').setValue(this.orderService.selectedFavourite.destination);
              this.form.get('destinationLat').setValue(+this.orderService.selectedFavourite.destinationLat);
              this.form.get('destinationLong').setValue(+this.orderService.selectedFavourite.destinationLong);
            } else {
              this.form.get('location').setValue(this.orderService.chosenLocation);
              this.form.get('locationLat').setValue(this.orderService.userLocationLat);
              this.form.get('locationLong').setValue(this.orderService.userLocationLong);
              this.form.get('destination').setValue(this.orderService.chosenDestination);
              this.form.get('destinationLat').setValue(this.orderService.userDestinationLat);
              this.form.get('destinationLong').setValue(this.orderService.userDestinationLong);
            }

            if (this.isCompleted) {
              this.form.get('location').setValue(this.order.location);
              this.form.get('destination').setValue(this.order.destination);
            }
          } //GET LOCATION AND DESTINATION AND SEARCH DRIVER

        }, {
          key: "f",
          get: function get() {
            return this.form.controls;
          }
        }, {
          key: "locationMap",
          value: function locationMap() {
            this.route.navigate(['menu/location']);
          }
        }, {
          key: "destinationMap",
          value: function destinationMap() {
            this.route.navigate(['menu/destination']);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this2 = this;

            this.isSubmitted = true; //Gets the loc and lng if we come from "Favourites" page

            if (this.form.value.location == undefined) {
              this.locationError();
              this.isSubmitted = false;
            }

            if (this.form.value.destination == undefined) {
              this.destinationError();
              this.isSubmitted = false;
            }

            if (!this.form.valid) {
              return;
            } //Gets information for directions - price, km and etc


            var directionsService = new google.maps.DirectionsService();
            directionsService.route({
              origin: {
                lat: this.form.value.locationLat,
                lng: this.form.value.locationLong
              },
              destination: {
                lat: this.form.value.destinationLat,
                lng: this.form.value.destinationLong
              },
              travelMode: google.maps.TravelMode.DRIVING
            }, function (response, status) {
              if (status === "OK") {
                // this.estimatedDuration = response.routes[0].legs[0].duration.text;
                _this2.orderTotalDestination = response.routes[0].legs[0].distance.value / 1000;
                _this2.orderTotalPrice = _this2.orderTotalDestination * 0.90; //Additional option with additional price

                if (_this2.form.value.withPets == true) {
                  _this2.orderTotalPrice += 2.20;
                }

                if (_this2.form.value.carType == "Comfort") {
                  _this2.orderTotalPrice += 1;
                }

                _this2.form.value.totalPrice = _this2.orderTotalPrice;
                _this2.form.value.tripDistance = _this2.orderTotalDestination;
                _this2.form.value.increasePrice = +_this2.form.value.increasePrice;
                _this2.form.value.eta = _this2.estimatedDuration;
                _this2.form.value.applicationUserId = _this2.user.id;
                _this2.isSubmitted = true;

                if (!_this2.form.valid) {
                  return false;
                } else {
                  _this2.subscriptions.push(_this2.orderService.createOrder(_this2.form.value).subscribe(function (x) {
                    _this2.form.value.locationLat = _this2.form.value.locationLat.toString();
                    _this2.form.value.locationLong = _this2.form.value.locationLong.toString();
                    _this2.orderStatus = _this2.form.value.status;

                    _this2.subscriptions.push(_this2.orderService.getMyOrder(_this2.user.id).subscribe());
                  }));
                }
              } else {
                _this2.isSubmitted = false;
                window.alert("Directions request failed due to " + status);
              }
            });
          }
        }, {
          key: "offer",
          value: function offer(value) {
            this.form.value.increasePrice = value;
          } //Increase the price for the order.

        }, {
          key: "selector",
          value: function selector($event) {
            var amount = +$event;

            if (amount != 0 || $event != "") {
              this.subscriptions.push(this.orderService.increaseOrderPrice(this.order.id, amount).subscribe());
            }
          }
        }, {
          key: "increment",
          value: function increment() {
            this.subscriptions.push(this.orderService.incrementOrderPrice(this.order.id).subscribe(function () {}));
          }
        }, {
          key: "decrement",
          value: function decrement() {
            if (this.orderTotalPrice >= 1) {
              this.subscriptions.push(this.orderService.decrementOrderPrice(this.order.id).subscribe(function () {}));
            }
          } //Order functionallity - waiting for driver

        }, {
          key: "checkorder",
          value: function checkorder() {
            var _this3 = this;

            this.subscriptions.push(this.orderService.getMyOrder(this.user.id).subscribe(function (data) {
              if (data) {
                _this3.orderService.currentOrderId = data.id;
                _this3.location = data.location;
                _this3.destination = data.destination;
                (Math.round(_this3.orderTotalPrice * 100) / 100).toFixed(2);
                _this3.orderTotalPrice = data.totalPrice;
                _this3.order = data;
                _this3.estimatedDuration = data.eta;

                if (data.status == "Waiting" && data != null) {
                  _this3.orderStatus = data.status;
                  _this3.isCompleted = true; // User can increase order price.
                  //this.selector(0);
                }

                if (data.status == "Accepted" && data != null) {
                  _this3.isSubmitted = false;

                  _this3.route.navigate(['menu/travel-mode']);

                  _this3.isCompleted = false;
                }
              } else {
                _this3.orderTotalPrice = 0;
              }
            }, function (error) {
              console.log(error);
            }));
          }
        }, {
          key: "cancelOrder",
          value: function cancelOrder() {
            var _this4 = this;

            this.subscriptions.push(this.orderService.getMyOrder(this.user.id).subscribe(function (data) {
              _this4.subscriptions.push(_this4.orderService.deleteOrder(data.id).subscribe(function () {
                _this4.isCompleted = false;
                _this4.orderStatus = null;
                _this4.orderTotalPrice = 0;

                _this4.clearForm();

                _this4.isSubmitted = false;
              }));
            }));
          }
        }, {
          key: "onSelectCar",
          value: function onSelectCar($event) {
            var type = $event.detail.value;

            if (type == "Normal") {
              this.form.value.carType = type;
            }

            if (type == "Comfort") {
              this.form.value.carType = type;
            }
          }
        }, {
          key: "onSelectChange",
          value: function onSelectChange($event) {
            var _this5 = this;

            $event.detail.value.forEach(function (element) {
              if (element == "With pets") {
                _this5.form.value.withPets = true;
              }

              if (element == "With stroller") {
                _this5.form.value.withStroller = true;
              }

              if (element == "Special needs") {
                _this5.form.value.special = true;
              }
            });
          }
        }, {
          key: "openLanguagePopover",
          value: function openLanguagePopover(ev) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var popover;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.popoverController.create({
                        component: _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_12__["LanguagePopoverPage"],
                        event: ev
                      });

                    case 2:
                      popover = _context2.sent;
                      _context2.next = 5;
                      return popover.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "locationError",
          value: function locationError() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var popup;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        header: 'Location field is required !',
                        buttons: [{
                          text: 'Ok',
                          role: 'Ok'
                        }]
                      });

                    case 2:
                      popup = _context3.sent;
                      _context3.next = 5;
                      return popup.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "destinationError",
          value: function destinationError() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var popup;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        header: 'Destination field is required !',
                        buttons: [{
                          text: 'Ok',
                          role: 'Ok'
                        }]
                      });

                    case 2:
                      popup = _context4.sent;
                      _context4.next = 5;
                      return popup.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "increasedOrder",
          value: function increasedOrder() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this6 = this;

              var popup;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertController.create({
                        header: "Driver offers you ".concat(this.driverIncreased.toFixed(2), "$ for the order"),
                        buttons: [{
                          text: 'Accept',
                          handler: function handler() {
                            _this6.subscriptions.push(_this6.orderService.getMyOrder(_this6.user.id).subscribe(function (order) {
                              _this6.subscriptions.push(_this6.orderService.increasedOrderAccept(order.id, true).subscribe(function () {
                                _this6.subscriptions.push(_this6.orderService.increaseOrderPrice(order.id, _this6.driverPrice).subscribe(function () {}));
                              }));
                            }));
                          }
                        }, {
                          text: 'Cancel',
                          handler: function handler() {
                            _this6.subscriptions.push(_this6.orderService.getMyOrder(_this6.user.id).subscribe(function (order) {
                              _this6.subscriptions.push(_this6.orderService.increasedOrderAccept(order.id, false).subscribe(function () {}));

                              _this6.subscriptions.push(_this6.orderService.resetIncreasing(_this6.order.id).subscribe(function () {}));
                            }));
                          }
                        }]
                      });

                    case 2:
                      popup = _context5.sent;
                      _context5.next = 5;
                      return popup.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "clearForm",
          value: function clearForm() {
            this.form.reset({
              'location': '',
              'destination': '',
              'increaseAmount': '',
              'applicationUserId': '',
              'locationLat': 0,
              'locationLong': 0,
              'destinationLat': 0,
              'destinationLong': 0,
              'totalPrice': 0,
              'tripDistance': 0,
              'userDistance': 0,
              'increasePrice': 0,
              'status': 'Waiting',
              'eta': '',
              'withPets': false,
              'withStroller': false,
              'special': false
            });
          }
        }]);

        return TravellingPage;
      }();

      TravellingPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_services_order_order_service__WEBPACK_IMPORTED_MODULE_10__["OrderService"]
        }, {
          type: src_services__WEBPACK_IMPORTED_MODULE_9__["AccountService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }];
      };

      TravellingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-travelling',
        template: _raw_loader_travelling_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_travelling_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TravellingPage);
      /***/
    },

    /***/
    "53QH":
    /*!*********************************************************!*\
      !*** ./src/app/travelling/travelling-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: TravellingPageRoutingModule */

    /***/
    function QH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TravellingPageRoutingModule", function () {
        return TravellingPageRoutingModule;
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


      var _travelling_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./travelling.page */
      "1L49");

      var routes = [{
        path: '',
        component: _travelling_page__WEBPACK_IMPORTED_MODULE_3__["TravellingPage"]
      }];

      var TravellingPageRoutingModule = function TravellingPageRoutingModule() {
        _classCallCheck(this, TravellingPageRoutingModule);
      };

      TravellingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TravellingPageRoutingModule);
      /***/
    },

    /***/
    "JQQN":
    /*!*************************************************!*\
      !*** ./src/app/travelling/travelling.module.ts ***!
      \*************************************************/

    /*! exports provided: HttpLoaderFactory, TravellingPageModule */

    /***/
    function JQQN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TravellingPageModule", function () {
        return TravellingPageModule;
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


      var _travelling_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./travelling-routing.module */
      "53QH");
      /* harmony import */


      var _travelling_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./travelling.page */
      "1L49");
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

      var TravellingPageModule = function TravellingPageModule() {
        _classCallCheck(this, TravellingPageModule);
      };

      TravellingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _travelling_routing_module__WEBPACK_IMPORTED_MODULE_5__["TravellingPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
          }
        }), _language_popover_language_popover_module__WEBPACK_IMPORTED_MODULE_10__["LanguagePopoverPageModule"]],
        providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]],
        declarations: [_travelling_page__WEBPACK_IMPORTED_MODULE_6__["TravellingPage"]]
      })], TravellingPageModule);
      /***/
    },

    /***/
    "XKq/":
    /*!*************************************************!*\
      !*** ./src/app/travelling/travelling.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function XKq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color:#e9e9e9;\n}\n\nion-toolbar {\n  --ion-background-color:#eeeeee;\n}\n\nion-title {\n  text-align: center;\n}\n\n.noScroll {\n  overflow: hidden;\n}\n\n#marker {\n  position: absolute;\n  /*url of the marker*/\n  background: url(http://maps.gstatic.com/mapfiles/markers2/marker.png) no-repeat;\n  /*center the marker*/\n  top: 50%;\n  left: 50%;\n  z-index: 1;\n  /*fix offset when needed*/\n  margin-left: -10px;\n  margin-top: -34px;\n  /*size of the image*/\n  height: 34px;\n  width: 20px;\n  cursor: pointer;\n}\n\n#map {\n  height: 100%;\n  width: 100%;\n}\n\n#toolbarIcon {\n  font-size: 1.7em;\n}\n\n.centered {\n  text-align: center;\n}\n\n.textTravel {\n  font-size: 1.5em;\n  font-family: Open Sans Light;\n}\n\n.text {\n  font-size: 1.4em;\n  font-family: Open Sans Light;\n}\n\n.checkbox-icon {\n  color: white;\n}\n\nion-select {\n  color: #383838;\n  background-color: white;\n  border-radius: 10px;\n  border: 3px solid #eeeeee;\n}\n\n.blink_me {\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite;\n}\n\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n\n.backIcon {\n  color: #ffae00;\n  font-size: 150%;\n}\n\n.back {\n  color: #ffae00;\n}\n\n.fonted {\n  font-family: Open Sans Light;\n}\n\n.msg-box {\n  width: 100%;\n  height: 140px;\n  padding: 10px 30px;\n  font-size: 14px;\n  font-family: Open Sans Light;\n  overflow: auto;\n}\n\n.msg-box ul {\n  margin: -5px;\n  list-style: none;\n}\n\n.msg-box ul .ex-msg {\n  text-align: right;\n}\n\n.msg-box ul .in-msg {\n  text-align: left;\n  margin-left: -60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRyYXZlbGxpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQUE7QUFBSjs7QUFHQTtFQUNJLDhCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHSTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSwrRUFBQTtFQUNBLG9CQUFBO0VBQ0EsUUFBQTtFQUFRLFNBQUE7RUFFUixVQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGVBQUE7QUFEUjs7QUFJSTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtBQURKOztBQUtBO0VBQ0ksa0JBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUFGSjs7QUFLQztFQUNJLFlBQUE7QUFGTDs7QUFLQTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFGSjs7QUFLQTtFQUNJLDZDQUFBO1VBQUEscUNBQUE7QUFGSjs7QUFLRTtFQUNFO0lBQ0UsVUFBQTtFQUZKO0FBQ0Y7O0FBREU7RUFDRTtJQUNFLFVBQUE7RUFGSjtBQUNGOztBQUtBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFISjs7QUFNQTtFQUNJLGNBQUE7QUFISjs7QUFNQTtFQUNJLDRCQUFBO0FBSEo7O0FBT0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQUpKOztBQU1JO0VBQ0ksWUFBQTtFQUVBLGdCQUFBO0FBTFI7O0FBTVE7RUFDSSxpQkFBQTtBQUpaOztBQU9RO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUxaIiwiZmlsZSI6InRyYXZlbGxpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAvLy0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy93cDQ3OTI3ODAtZGFyay1waG9uZS13YWxscGFwZXJzLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNlOWU5ZTk7XHJcbn1cclxuXHJcbmlvbi10b29sYmFye1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZWVlZWVlO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubm9TY3JvbGwge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcbiAgICAjbWFya2Vye1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIC8qdXJsIG9mIHRoZSBtYXJrZXIqL1xyXG4gICAgICAgIGJhY2tncm91bmQ6dXJsKGh0dHA6Ly9tYXBzLmdzdGF0aWMuY29tL21hcGZpbGVzL21hcmtlcnMyL21hcmtlci5wbmcpIG5vLXJlcGVhdDtcclxuICAgICAgICAvKmNlbnRlciB0aGUgbWFya2VyKi9cclxuICAgICAgICB0b3A6NTAlO2xlZnQ6NTAlO1xyXG4gICAgICBcclxuICAgICAgICB6LWluZGV4OjE7XHJcbiAgICAgICAgLypmaXggb2Zmc2V0IHdoZW4gbmVlZGVkKi9cclxuICAgICAgICBtYXJnaW4tbGVmdDotMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOi0zNHB4O1xyXG4gICAgICAgIC8qc2l6ZSBvZiB0aGUgaW1hZ2UqL1xyXG4gICAgICAgIGhlaWdodDozNHB4O1xyXG4gICAgICAgIHdpZHRoOjIwcHg7XHJcbiAgICAgIFxyXG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICNtYXAge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4jdG9vbGJhckljb257XHJcbiAgICBmb250LXNpemU6IDEuN2VtO1xyXG59XHJcblxyXG5cclxuLmNlbnRlcmVke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGV4dFRyYXZlbHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIExpZ2h0O1xyXG59XHJcblxyXG4udGV4dHsgIFxyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgTGlnaHQ7XHJcbn1cclxuXHJcbiAuY2hlY2tib3gtaWNvbntcclxuICAgICBjb2xvcjp3aGl0ZTtcclxuIH1cclxuXHJcbmlvbi1zZWxlY3R7XHJcbiAgICBjb2xvcjogcmdiKDU2LCA1NiwgNTYpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2VlZWVlZTtcclxufVxyXG5cclxuLmJsaW5rX21lIHtcclxuICAgIGFuaW1hdGlvbjogYmxpbmtlciAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgYmxpbmtlciB7XHJcbiAgICA1MCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbi5iYWNrSWNvbiB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMTc0LCAwKTtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxufVxyXG5cclxuLmJhY2sge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDE3NCwgMCk7XHJcbn1cclxuXHJcbi5mb250ZWR7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIExpZ2h0O1xyXG59XHJcblxyXG5cclxuLm1zZy1ib3gge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBMaWdodDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAgIHVsIHtcclxuICAgICAgICBtYXJnaW46IC01cHg7XHJcblxyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgLmV4LW1zZyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmluLW1zZyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */";
      /***/
    },

    /***/
    "dq7I":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/travelling/travelling.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function dq7I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content padding>\r\n    <ion-header>\r\n        <ion-toolbar>\r\n            <ion-buttons slot=\"start\">\r\n                <ion-menu-button></ion-menu-button>\r\n            </ion-buttons>\r\n\r\n\r\n            <ion-title>\r\n                <ion-label>{{'Travel'| translate}}</ion-label>\r\n            </ion-title>\r\n\r\n            <ion-buttons slot=\"end\">\r\n\r\n                <ion-icon (click)='openLanguagePopover($event)' id=\"toolbarIcon\" name=\"language-outline\"></ion-icon>\r\n            </ion-buttons>\r\n        </ion-toolbar>\r\n    </ion-header>\r\n    <div class=\"row mt-2\">\r\n        <div class=\"col\">\r\n            <ion-text>\r\n                <div class=\"row\">\r\n                    <form [formGroup]=\"form\" novalidate class=\"col\">\r\n                        <div *ngIf=\"isCompleted == false\" class=\"form-group col mt-2\">\r\n                            <p (click)=\"locationMap()\" *ngIf=\"this.orderService.chosenLocation != null\">\r\n                                <ion-icon class=\"mr-2\" name=\"location-outline\"></ion-icon>\r\n                                {{this.orderService.chosenLocation}}\r\n                            </p>\r\n                            <p (click)=\"locationMap()\" *ngIf=\"this.orderService.chosenLocation == null\">\r\n                                <ion-icon class=\"mr-2\" name=\"location-outline\"></ion-icon>{{'Take me from here'| translate}}.\r\n                            </p>\r\n                            <hr />\r\n                        </div>\r\n                        <div *ngIf=\"isCompleted == false\" class=\"form-group col mt-3\">\r\n                            <p (click)=\"destinationMap()\" *ngIf=\"this.orderService.chosenDestination != null\">\r\n                                <ion-icon class=\"mr-2\" name=\"arrow-forward-outline\"></ion-icon>\r\n                                {{this.orderService.chosenDestination}}\r\n                            </p>\r\n                            <p (click)=\"destinationMap()\" *ngIf=\"this.orderService.chosenDestination == null\">\r\n                                <ion-icon class=\"mr-2\" name=\"arrow-forward-outline\"></ion-icon>{{'Choose destination' | translate}}.\r\n                            </p>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"isCompleted == true\" class=\"form-group col mt-2\">\r\n                            <p>\r\n                                <ion-icon class=\"mr-2\" name=\"analytics-outline\"></ion-icon>{{order.location}}\r\n                            </p>\r\n                            <hr />\r\n                            <p>\r\n                                <ion-icon class=\"mr-2\" name=\"arrow-forward-outline\"></ion-icon>{{order.destination}}\r\n                            </p>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"isCompleted == false\" class=\"col-md-12 text-center\">\r\n                            <ion-select (ionChange)=\"onSelectChange($event)\"\r\n                                [placeholder]='\"Additional options (optional)\" | translate' multiple=\"true\">\r\n                                <!-- <ion-select-option value=\"With pets\">{{'Pets' | translate}} + 2.20$\r\n                                </ion-select-option> -->\r\n                                <ion-select-option value=\"With pets\">{{'Pets' | translate}} + 2.20$\r\n                                </ion-select-option>\r\n                                <ion-select-option value=\"With stroller\">{{'Baggage' | translate}}\r\n                                </ion-select-option>\r\n                                <ion-select-option value=\"Special needs\">{{'Special needs' | translate}}\r\n                                </ion-select-option>\r\n                            </ion-select>\r\n                        </div>\r\n                        <hr />\r\n\r\n                        <div *ngIf=\"isCompleted == false\" class=\"col-md-12 text-center\">\r\n                            <ion-select (ionChange)=\"onSelectCar($event)\"\r\n                                [placeholder]='\"Car type (optional)\" | translate'>\r\n                                <ion-select-option value=\"Normal\">{{'Normal' | translate}}</ion-select-option>\r\n                                <ion-select-option value=\"Comfort\">{{'Comfort' | translate}} + 1$</ion-select-option>\r\n                            </ion-select>\r\n                        </div>\r\n\r\n\r\n                        <div *ngIf=\"orderStatus == 'Waiting'\" class=\"form-group col mt-3\">\r\n                            <div class=\"d-flex w-100 justify-content-between\">\r\n                                <h5 class=\"fonted\">{{'Increase amount' | translate}}</h5>\r\n                                <a class=\"mr-1\">\r\n                                    <button class=\"btn btn-light btn-sm mr-1\" (click)=\"increment()\">+</button>\r\n                                    <button class=\"btn btn-light btn-sm\">{{orderTotalPrice}}$</button>\r\n                                    <button class=\"btn btn-light btn-sm ml-1\" (click)=\"decrement()\">-</button>\r\n                                </a>\r\n\r\n                            </div>\r\n                            <hr />\r\n                        </div>\r\n                        \r\n                        <div class=\"row text-center\">\r\n                            <div class=\"col-md-12\">\r\n\r\n                                <button [disabled]=\"isSubmitted\" *ngIf=\"isCompleted == false\" type=\"button\" (click)=\"onSubmit()\"\r\n                                        class=\"mt-3 btn btn-warning fonted\">\r\n                                    {{'Make a order'| translate}}\r\n                                    <span *ngIf=\"isSubmitted\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n\r\n                    <div *ngIf=\"isCompleted == true\" class=\"blink_me col-md-12 mt-3 text-center fonted\">\r\n                        <button class=\"btn btn-warning fonted\">{{'Looking for a driver'| translate}}</button>\r\n                    </div>\r\n                </div>\r\n            </ion-text>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"isCompleted == true\" class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n        <!-- <ion-title>Choosen location</ion-title> -->\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <div class=\"d-flex w-100 justify-content-between\">\r\n                    <button *ngIf=\"isCompleted == true\" class=\"ml-3 btn btn-info fonted\"\r\n                        (click)=\"cancelOrder()\">{{'Cost'|\r\n                        translate}} : {{orderTotalPrice}}$</button>\r\n\r\n                    <button *ngIf=\"isCompleted == true\" class=\"mr-3 btn btn-danger fonted\"\r\n                        (click)=\"cancelOrder()\">{{'Cancel'| translate}}</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n    </ion-toolbar>\r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=travelling-travelling-module-es5.js.map