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


      var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/local-notifications/ngx */
      "Bg0J");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var TravellingPage = /*#__PURE__*/function () {
        function TravellingPage(formBuilder, route, orderService, accountService, translate, popoverController, alertController, localNotifications, plt) {
          var _this = this;

          _classCallCheck(this, TravellingPage);

          this.formBuilder = formBuilder;
          this.route = route;
          this.orderService = orderService;
          this.accountService = accountService;
          this.translate = translate;
          this.popoverController = popoverController;
          this.alertController = alertController;
          this.localNotifications = localNotifications;
          this.plt = plt;
          this.user = this.accountService.userValue;
          this.choosedLocDest = false; //Car html properties;

          this.carModel = "";
          this.carColor = ""; //User html properties

          this.firstName = "";
          this.lastName = "";
          this.carValue = 'normal';
          this.isSubmitted = false;
          this.isCompleted = false;
          this.subscriptions = [];
          this.pushes = [];
          this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
          this.dateAndTimePicker();
          this.route.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])(function (evt) {
            return evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["RoutesRecognized"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["pairwise"])()).subscribe(function (events) {
            console.log('previous url', events[0].urlAfterRedirects);

            if (events[0].urlAfterRedirects == '/menu/travel-mode' || events[0].urlAfterRedirects == '/menu/travelling') {
              _this.backFromTravel();

              console.log('gay');
            }
          });
        }

        _createClass(TravellingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

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
              carType: this.carValue,
              description: '',
              pickUpTime: ''
            });
            var connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_6__["HubConnectionBuilder"]().configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_6__["LogLevel"].Information).withUrl("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].signalRUrl, "/orderHub")).build();
            connection.start().then(function () {
              console.log('signalR Connected in travelling');
            })["catch"](function (err) {
              return console.log(err);
            });
            connection.on('CreatedOrder', function () {
              _this2.checkorder();
            });
            connection.on("IncrementDecrement", function (orderId) {
              _this2.subscriptions.push(_this2.orderService.getOrderById(orderId).subscribe(function (data) {
                Math.round(_this2.orderTotalPrice * 100) / 100;
                _this2.order.totalPrice = data.totalPrice;
              }));
            });
            connection.on('OfferMorePrice', function (orderId) {
              _this2.subscriptions.push(_this2.orderService.getOrderById(orderId).subscribe(function (x) {
                if (x.id == _this2.order.id) {
                  if (x.increasedByDriver >= 0.5) {
                    _this2.driverPrice = x.increasedByDriver;
                    _this2.driverIncreased = x.increasedByDriver + _this2.orderTotalPrice;

                    _this2.increasedOrder();
                  }
                }
              }));
            });
            connection.on('OrderAccepted', function () {
              _this2.subscriptions.push(_this2.orderService.getMyOrder(_this2.user.id).subscribe(function (x) {
                if (x.status == 'Accepted') {
                  _this2.presentOrderAcceptedNotification();

                  _this2.checkorder();
                }
              }));
            });
            connection.on('LocateDriver', function (driverId) {});
          }
        }, {
          key: "presentOrderAcceptedNotification",
          value: function presentOrderAcceptedNotification() {
            var _this3 = this;

            this.translate.get(['Order', 'Your order is accepted']).subscribe(function (text) {
              _this3.localNotifications.schedule({
                id: 1,
                title: text["Order"],
                text: text["Your order is accepted"],
                data: {
                  secret: 'secret'
                }
              });
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.form.value.carType = 'normal';
            this.carValue = 'normal';

            if (this.orderService.chosenDestination && this.orderService.chosenLocation) {
              this.choosedLocDest = true;
            }

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
            var _this4 = this;

            this.isSubmitted = true;
            this.form.value.carType = this.carValue; //Gets the loc and lng if we come from "Favourites" page

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
                _this4.estimatedDuration = response.routes[0].legs[0].duration.text;
                _this4.orderTotalDestination = response.routes[0].legs[0].distance.value / 1000;
                _this4.orderTotalPrice = _this4.orderTotalDestination * 0.90; //Additional option with additional price

                if (_this4.form.value.withPets == true) {
                  _this4.orderTotalPrice += 2.20;
                }

                if (_this4.form.value.carType == "comfort") {
                  _this4.orderTotalPrice += 1;
                }

                _this4.form.value.totalPrice = _this4.orderTotalPrice;
                _this4.form.value.tripDistance = _this4.orderTotalDestination;
                _this4.form.value.increasePrice = +_this4.form.value.increasePrice;
                _this4.form.value.eta = _this4.estimatedDuration;
                _this4.form.value.applicationUserId = _this4.user.id;
                _this4.isSubmitted = true;

                if (!_this4.form.valid) {
                  return false;
                } else {
                  _this4.subscriptions.push(_this4.orderService.createOrder(_this4.form.value).subscribe(function (x) {
                    _this4.form.value.locationLat = _this4.form.value.locationLat.toString();
                    _this4.form.value.locationLong = _this4.form.value.locationLong.toString();
                    _this4.orderStatus = _this4.form.value.status;

                    _this4.subscriptions.push(_this4.orderService.getMyOrder(_this4.user.id).subscribe());
                  }));
                }

                console.log(_this4.order);
              } else {
                _this4.isSubmitted = false;
              }
            });
          }
        }, {
          key: "dateAndTimePicker",
          value: function dateAndTimePicker() {
            var _this5 = this;

            this.translate.get(['Now', 'Cancel', 'Choose']).subscribe(function (text) {
              _this5.customPickerOptions = {
                buttons: [{
                  text: text['Now'],
                  handler: function handler() {
                    var date = new Date();
                    _this5.mydt.value = "".concat(date.getHours(), ":").concat(date.getMinutes());
                    console.log(_this5.mydt.value);
                  }
                }, {
                  text: text['Cancel']
                }, {
                  text: text['Choose'],
                  handler: function handler(res) {
                    _this5.mydt.value = "".concat(res.hour.text, ":").concat(res.minute.text); // this.form.value.pickUpTime = this.mydt.value;

                    console.log(res.hour.text);
                    console.log(res.minute.text); //set form value to chosen time
                  }
                }]
              };
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
          }
        }, {
          key: "priceUpdate",
          value: function priceUpdate() {
            if (this.form.value.withPets == false) {
              this.orderTotalPrice = this.orderTotalPrice + 2.20;
              console.log(this.form.value);
            }

            if (this.form.value.withPets == true) {
              this.orderTotalPrice = this.orderTotalPrice - 2.20;
            }
          }
        }, {
          key: "onSelectCar",
          value: function onSelectCar(value) {
            this.form.value.carType = this.carValue;
            this.carValue = value;

            if (value == 'normal') {
              if (this.form.value.carType == 'comfort') {
                this.orderTotalPrice = this.orderTotalPrice - 1;
              }
            }

            if (value == 'comfort') {
              if (this.form.value.carType == 'normal') {
                this.orderTotalPrice = this.orderTotalPrice + 1;
              }
            }

            this.form.value.carType = value;
          } //Order functionallity - waiting for driver

        }, {
          key: "checkorder",
          value: function checkorder() {
            var _this6 = this;

            if (this.orderService.userLocationLat) {
              var directionsService = new google.maps.DirectionsService();
              directionsService.route({
                origin: {
                  lat: this.orderService.userLocationLat,
                  lng: this.orderService.userLocationLong
                },
                destination: {
                  lat: this.orderService.userDestinationLat,
                  lng: this.orderService.userDestinationLong
                },
                travelMode: google.maps.TravelMode.DRIVING
              }, function (response, status) {
                if (status === "OK") {
                  _this6.orderTotalDestination = response.routes[0].legs[0].distance.value / 1000;
                  _this6.orderTotalPrice = _this6.orderTotalDestination * 0.90;
                }
              });
            }

            this.subscriptions.push(this.orderService.getMyOrder(this.user.id).subscribe(function (data) {
              if (data.status != 'Canceled') {
                _this6.orderService.currentOrderId = data.id;
                _this6.location = data.location;
                _this6.destination = data.destination;
                (Math.round(_this6.orderTotalPrice * 100) / 100).toFixed(2);
                _this6.orderTotalPrice = data.totalPrice;
                _this6.order = data;
                _this6.estimatedDuration = data.eta;

                if (data.status == "Waiting" && data != null) {
                  _this6.orderStatus = data.status;
                  _this6.isCompleted = true;
                }

                if (data.status == "Accepted" && data != null) {
                  _this6.isSubmitted = false;

                  _this6.route.navigate(['menu/travel-mode']);

                  _this6.isCompleted = false;
                }
              } else {
                _this6.orderTotalPrice = 0;
              }
            }, function (error) {
              console.log(error);
            }));
          }
        }, {
          key: "cancelOrder",
          value: function cancelOrder() {
            var _this7 = this;

            this.subscriptions.push(this.orderService.getMyOrder(this.user.id).subscribe(function (data) {
              _this7.subscriptions.push(_this7.orderService.deleteOrder(data.id).subscribe(function () {
                _this7.choosedLocDest = false;
                _this7.isCompleted = false;
                _this7.orderStatus = null;
                _this7.orderTotalPrice = 0;

                _this7.clearForm();

                _this7.isSubmitted = false;
              }));
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
                        component: _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_12__["LanguagePopoverPage"],
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
          key: "locationError",
          value: function locationError() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this8 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.translate.get(['Location field is required!']).subscribe(function (text) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                          var popup;
                          return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  _context2.next = 2;
                                  return this.alertController.create({
                                    header: text['Location field is required!'],
                                    buttons: [{
                                      text: 'Ok',
                                      role: 'Ok'
                                    }]
                                  });

                                case 2:
                                  popup = _context2.sent;
                                  _context2.next = 5;
                                  return popup.present();

                                case 5:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));
                      });

                    case 1:
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this9 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.translate.get(['Destination field is required!']).subscribe(function (text) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          var popup;
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  _context4.next = 2;
                                  return this.alertController.create({
                                    header: text['Destination field is required!'],
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
                      });

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "increasedOrder",
          value: function increasedOrder() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this10 = this;

              var textf;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      textf = {};
                      textf.first = this.translate.instant('Driver offers you');
                      textf.second = this.translate.instant('лв. for the order');
                      this.translate.get(['Accept', 'Cancel']).subscribe(function (text) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                          var _this11 = this;

                          var popup;
                          return regeneratorRuntime.wrap(function _callee6$(_context6) {
                            while (1) {
                              switch (_context6.prev = _context6.next) {
                                case 0:
                                  _context6.next = 2;
                                  return this.alertController.create({
                                    header: "".concat(textf.first, " ").concat(this.driverIncreased.toFixed(2), " ").concat(textf.second),
                                    buttons: [{
                                      text: text['Accept'],
                                      handler: function handler() {
                                        _this11.subscriptions.push(_this11.orderService.getMyOrder(_this11.user.id).subscribe(function (order) {
                                          _this11.subscriptions.push(_this11.orderService.increasedOrderAccept(order.id, true).subscribe(function () {
                                            _this11.subscriptions.push(_this11.orderService.increaseOrderPrice(order.id, _this11.driverPrice).subscribe(function () {}));
                                          }));
                                        }));
                                      }
                                    }, {
                                      text: text['Cancel'],
                                      handler: function handler() {
                                        _this11.subscriptions.push(_this11.orderService.getMyOrder(_this11.user.id).subscribe(function (order) {
                                          _this11.subscriptions.push(_this11.orderService.increasedOrderAccept(order.id, false).subscribe(function () {}));

                                          _this11.subscriptions.push(_this11.orderService.resetIncreasing(_this11.order.id).subscribe(function () {}));
                                        }));
                                      }
                                    }]
                                  });

                                case 2:
                                  popup = _context6.sent;
                                  _context6.next = 5;
                                  return popup.present();

                                case 5:
                                case "end":
                                  return _context6.stop();
                              }
                            }
                          }, _callee6, this);
                        }));
                      });

                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "backFromTravel",
          value: function backFromTravel() {
            this.choosedLocDest = false;
            this.isCompleted = false;
            this.orderStatus = null;
            this.orderTotalPrice = 0;
            this.clearForm();
            this.isSubmitted = false;
          }
        }, {
          key: "clearForm",
          value: function clearForm() {
            var _this12 = this;

            this.translate.get(['Take me from here', 'Choose destination']).subscribe(function (text) {
              _this12.orderService.chosenLocation = text['Take me from here'];
              _this12.orderService.chosenDestination = text['Choose destination'];
            });
            this.form.reset({
              'location': undefined,
              'destination': undefined,
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
              'special': false,
              'carType': 'normal'
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
        }, {
          type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_13__["LocalNotifications"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }];
      };

      TravellingPage.propDecorators = {
        mydt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['mydt']
        }]
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
            var _this13 = this;

            var headers = this.sharedService.headerGerneration();
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order/id/").concat(id), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
              return _this13.order = data;
            }));
          }
        }, {
          key: "getCanceledOrderById",
          value: function getCanceledOrderById(id) {
            var _this14 = this;

            var headers = this.sharedService.headerGerneration();
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order/canceled/").concat(id), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
              return _this14.order = data;
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
            var _this15 = this;

            var headers = this.sharedService.headerGerneration();
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/order/").concat(orderId, "/").concat(driverId), {
              headers: headers,
              responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
              return _this15.driverId = driverId;
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


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color:#e9e9e9;\n}\n\nion-toolbar {\n  --ion-background-color:#eeeeee;\n}\n\nion-title {\n  text-align: center;\n}\n\n#normal {\n  border-radius: 20px;\n}\n\n#comfort {\n  border: 3px solid #6d6d6d;\n  border-radius: 20px;\n}\n\n.noScroll {\n  overflow: hidden;\n}\n\n#marker {\n  position: absolute;\n  /*url of the marker*/\n  background: url(http://maps.gstatic.com/mapfiles/markers2/marker.png) no-repeat;\n  /*center the marker*/\n  top: 50%;\n  left: 50%;\n  z-index: 1;\n  /*fix offset when needed*/\n  margin-left: -10px;\n  margin-top: -34px;\n  /*size of the image*/\n  height: 34px;\n  width: 20px;\n  cursor: pointer;\n}\n\n#map {\n  height: 100%;\n  width: 100%;\n}\n\n#toolbarIcon {\n  font-size: 1.7em;\n}\n\n.centered {\n  text-align: center;\n}\n\n.textTravel {\n  font-size: 1.5em;\n  font-family: Open Sans Light;\n}\n\n.text {\n  font-size: 1.4em;\n  font-family: Open Sans Light;\n}\n\n.checkbox-icon {\n  color: white;\n}\n\nion-select {\n  color: #383838;\n  background-color: white;\n  border-radius: 10px;\n  border: 3px solid #eeeeee;\n}\n\n.blink_me {\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite;\n}\n\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n\n.backIcon {\n  color: #ffae00;\n  font-size: 150%;\n}\n\n.back {\n  color: #ffae00;\n}\n\n.fonted {\n  font-family: Open Sans Light;\n}\n\n.icn {\n  font-size: 20px;\n  margin-top: 4px;\n}\n\n.date {\n  line-height: 10px;\n}\n\n.timebtn {\n  margin-left: 3%;\n  margin-top: 8px;\n  width: 110px;\n  height: 38px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRyYXZlbGxpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksOEJBQUE7QUFBSjs7QUFHQTtFQUNJLDhCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUdBO0VBRUksbUJBQUE7QUFESjs7QUFJQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0FBREo7O0FBSUk7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsK0VBQUE7RUFDQSxvQkFBQTtFQUNBLFFBQUE7RUFBUSxTQUFBO0VBRVIsVUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxlQUFBO0FBRlI7O0FBS0k7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUZKOztBQUtBO0VBQ0ksZ0JBQUE7QUFGSjs7QUFNQTtFQUNJLGtCQUFBO0FBSEo7O0FBTUE7RUFDSSxnQkFBQTtFQUNBLDRCQUFBO0FBSEo7O0FBTUE7RUFDSSxnQkFBQTtFQUNBLDRCQUFBO0FBSEo7O0FBTUM7RUFDSSxZQUFBO0FBSEw7O0FBTUE7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBSEo7O0FBTUE7RUFDSSw2Q0FBQTtVQUFBLHFDQUFBO0FBSEo7O0FBTUU7RUFDRTtJQUNFLFVBQUE7RUFISjtBQUNGOztBQUFFO0VBQ0U7SUFDRSxVQUFBO0VBSEo7QUFDRjs7QUFNQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBSko7O0FBT0E7RUFDSSxjQUFBO0FBSko7O0FBT0E7RUFDSSw0QkFBQTtBQUpKOztBQVFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFMSjs7QUFRQTtFQUVRLGlCQUFBO0FBTlI7O0FBU0E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBTkoiLCJmaWxlIjoidHJhdmVsbGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC8vLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL3dwNDc5Mjc4MC1kYXJrLXBob25lLXdhbGxwYXBlcnMuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2U5ZTllOTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNlZWVlZWU7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNub3JtYWx7XHJcbiAgICAvL2JvcmRlcjogM3B4IHNvbGlkIHJnYigyNTUsIDIwOCwgMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4jY29tZm9ydHtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigxMDksIDEwOSwgMTA5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5ub1Njcm9sbCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgICNtYXJrZXJ7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgLyp1cmwgb2YgdGhlIG1hcmtlciovXHJcbiAgICAgICAgYmFja2dyb3VuZDp1cmwoaHR0cDovL21hcHMuZ3N0YXRpYy5jb20vbWFwZmlsZXMvbWFya2VyczIvbWFya2VyLnBuZykgbm8tcmVwZWF0O1xyXG4gICAgICAgIC8qY2VudGVyIHRoZSBtYXJrZXIqL1xyXG4gICAgICAgIHRvcDo1MCU7bGVmdDo1MCU7XHJcbiAgICAgIFxyXG4gICAgICAgIHotaW5kZXg6MTtcclxuICAgICAgICAvKmZpeCBvZmZzZXQgd2hlbiBuZWVkZWQqL1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0Oi0xMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6LTM0cHg7XHJcbiAgICAgICAgLypzaXplIG9mIHRoZSBpbWFnZSovXHJcbiAgICAgICAgaGVpZ2h0OjM0cHg7XHJcbiAgICAgICAgd2lkdGg6MjBweDtcclxuICAgICAgXHJcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgI21hcCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiN0b29sYmFySWNvbntcclxuICAgIGZvbnQtc2l6ZTogMS43ZW07XHJcbn1cclxuXHJcblxyXG4uY2VudGVyZWR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0VHJhdmVse1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgTGlnaHQ7XHJcbn1cclxuXHJcbi50ZXh0eyAgXHJcbiAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBMaWdodDtcclxufVxyXG5cclxuIC5jaGVja2JveC1pY29ue1xyXG4gICAgIGNvbG9yOndoaXRlO1xyXG4gfVxyXG5cclxuaW9uLXNlbGVjdHtcclxuICAgIGNvbG9yOiByZ2IoNTYsIDU2LCA1Nik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZWVlZWVlO1xyXG59XHJcblxyXG4uYmxpbmtfbWUge1xyXG4gICAgYW5pbWF0aW9uOiBibGlua2VyIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBibGlua2VyIHtcclxuICAgIDUwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLmJhY2tJY29uIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAxNzQsIDApO1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG59XHJcblxyXG4uYmFjayB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMTc0LCAwKTtcclxufVxyXG5cclxuLmZvbnRlZHtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgTGlnaHQ7XHJcbn1cclxuXHJcblxyXG4uaWNue1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG59XHJcblxyXG4uZGF0ZXtcclxuICAgICAgICAvL3RleHQtaW5kZW50OiAwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi50aW1lYnRue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgd2lkdGg6IDExMHB4O1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG59XHJcbiJdfQ== */";
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


      __webpack_exports__["default"] = "<ion-content padding>\r\n    <ion-header>\r\n        <ion-toolbar>\r\n            <ion-buttons slot=\"start\">\r\n                <ion-menu-button></ion-menu-button>\r\n            </ion-buttons>\r\n\r\n\r\n            <ion-title>\r\n                <ion-label>{{'Travel'| translate}}</ion-label>\r\n            </ion-title>\r\n\r\n            <ion-buttons slot=\"end\">\r\n\r\n                <ion-icon (click)='openLanguagePopover($event)' id=\"toolbarIcon\" name=\"language-outline\"></ion-icon>\r\n            </ion-buttons>\r\n        </ion-toolbar>\r\n    </ion-header>\r\n    <div class=\"row mt-2\">\r\n        <div class=\"col\">\r\n            <ion-text>\r\n                <div class=\"row\">\r\n                    <form [formGroup]=\"form\" novalidate class=\"col\">\r\n                        <div *ngIf=\"isCompleted == false\" class=\"form-group col mt-2\">\r\n                            <p (click)=\"locationMap()\" *ngIf=\"this.orderService.chosenLocation != null\">\r\n                                <ion-icon class=\"mr-2\" name=\"location-outline\"></ion-icon>\r\n                                {{this.orderService.chosenLocation}}\r\n                            </p>\r\n                            <p (click)=\"locationMap()\" *ngIf=\"this.orderService.chosenLocation == null\">\r\n                                <ion-icon class=\"mr-2\" name=\"location-outline\"></ion-icon>{{'Take me from here'|\r\n                                translate}}\r\n                            </p>\r\n                            <hr />\r\n                        </div>\r\n                        <div *ngIf=\"isCompleted == false\" class=\"form-group col mt-3\">\r\n                            <p (click)=\"destinationMap()\" *ngIf=\"this.orderService.chosenDestination != null\">\r\n                                <ion-icon class=\"mr-2\" name=\"arrow-forward-outline\"></ion-icon>\r\n                                {{this.orderService.chosenDestination}}\r\n                            </p>\r\n                            <p (click)=\"destinationMap()\" *ngIf=\"this.orderService.chosenDestination == null\">\r\n                                <ion-icon class=\"mr-2\" name=\"arrow-forward-outline\"></ion-icon>{{'Choose destination' |\r\n                                translate}}\r\n                            </p>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"isCompleted == true\" class=\"form-group col mt-2\">\r\n                            <p>\r\n                                <ion-icon class=\"mr-2\" name=\"analytics-outline\"></ion-icon>{{order.location}}\r\n                            </p>\r\n                            <hr />\r\n                            <p>\r\n                                <ion-icon class=\"mr-2\" name=\"arrow-forward-outline\"></ion-icon>{{order.destination}}\r\n                            </p>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"isCompleted == false && this.choosedLocDest == true\" class=\"text-center mb-2\">\r\n                            <hr>\r\n\r\n                            <ion-label>{{'Additional options' | translate}}</ion-label>\r\n                            <br>\r\n                        </div>\r\n                        <div *ngIf=\"isCompleted == false && this.choosedLocDest == true\" class=\"col-md-12 text-left\">\r\n\r\n                            <ion-checkbox color=\"dark\" (click)=\"priceUpdate()\" value=\"With pets\"\r\n                                formControlName=\"withPets\">\r\n                            </ion-checkbox>\r\n                            <ion-label class=\"ml-2\">\r\n                                <ion-icon name=\"paw\"></ion-icon> {{'Pets' | translate}} + 2.20 лв.\r\n                            </ion-label>\r\n                            <br>\r\n                            <ion-checkbox color=\"dark\" value=\"With stroller\" formControlName=\"withStroller\">\r\n                            </ion-checkbox>\r\n                            <ion-label class=\"ml-2\">\r\n                                <ion-icon name=\"bag-handle\"></ion-icon> {{'Baggage' | translate}}\r\n                            </ion-label>\r\n                            <br>\r\n                            <ion-checkbox color=\"dark\" value=\"Special needs\" formControlName=\"special\">\r\n                            </ion-checkbox>\r\n                            <ion-label class=\"ml-2\">\r\n                                <ion-icon name=\"information-circle\"></ion-icon> {{'Special needs' | translate}}\r\n                            </ion-label>\r\n                        </div>\r\n                        <!-- <div *ngIf=\"isCompleted == false\" class=\"col-md-12 text-center\">\r\n                            <ion-select (ionChange)=\"onSelectChange($event)\"\r\n                                [placeholder]='\"Additional options (optional)\" | translate' multiple=\"true\">\r\n                                <ion-select-option value=\"With pets\">{{'Pets' | translate}} + 2.20 лв.\r\n                                </ion-select-option>\r\n                                <ion-select-option value=\"With stroller\">{{'Baggage' | translate}}\r\n                                </ion-select-option>\r\n                                <ion-select-option value=\"Special needs\">{{'Special needs' | translate}}\r\n                                </ion-select-option>\r\n                            </ion-select>\r\n                        </div> -->\r\n                        <hr />\r\n\r\n                        <!-- <div *ngIf=\"isCompleted == false\" class=\"col-md-12 text-center\">\r\n                            <ion-select (ionChange)=\"onSelectCar($event)\"\r\n                                [placeholder]='\"Car type (optional)\" | translate'>\r\n                                <ion-select-option value=\"Normal\">{{'Normal' | translate}}</ion-select-option>\r\n                                <ion-select-option value=\"Comfort\">{{'Comfort' | translate}} + 1 лв.</ion-select-option>\r\n                            </ion-select>\r\n                        </div> -->\r\n\r\n                        <div *ngIf=\"isCompleted == false && this.choosedLocDest == true\" class=\"row text-center\">\r\n                            <div class=\"col-md-12 mb-2\">\r\n                                <ion-label>{{'Car type (optional)' | translate}}</ion-label>\r\n                            </div>\r\n                            <div (click)=\"onSelectCar('normal')\" class=\"col\">\r\n                                <img id=\"normal\" src=\"../../assets/normtext.png\" width=\"100\" height=\"100\" [ngStyle]=\"{\r\n                                    'border': carValue =='normal' ? '3px solid rgb(255, 208, 0)' : '3px solid rgb(109, 109, 109)'\r\n                                  }\">\r\n                            </div>\r\n\r\n                            <div (click)=\"onSelectCar('comfort')\" class=\"col\">\r\n                                <img id=\"comfort\" src=\"../../assets/comftext.png\" width=\"100\" height=\"100\" [ngStyle]=\"{\r\n                                    'border': carValue =='comfort' ? '3px solid rgb(255, 208, 0)' : '3px solid rgb(109, 109, 109)'\r\n                                  }\">\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <div *ngIf=\"isCompleted == false && this.choosedLocDest == true\" class=\"col mt-2\">\r\n                            <div class=\"row\">\r\n                                <button class=\"btn btn-light btn-sm timebtn\">\r\n                                    <div class=\"d-flex w-100 justify-content-between\">\r\n\r\n                                        <ion-datetime class=\"date\" placeholder=\"{{'Time' | translate}}\"\r\n                                            formControlName=\"pickUpTime\" #mydt [pickerOptions]=\"customPickerOptions\"\r\n                                            displayFormat=\"HH:mm\"></ion-datetime>\r\n                                        <ion-label>\r\n                                            <ion-icon class=\"icn\" name=\"time-outline\"></ion-icon>\r\n                                        </ion-label>\r\n                                    </div>\r\n                                </button>\r\n\r\n                                <div class=\"form-group col mt-2\">\r\n                                    <ion-input formControlName=\"description\" type=\"text\" class=\"form-control\"\r\n                                        [placeholder]='\"Additional requirements\" | translate'>\r\n                                    </ion-input>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n                        <div *ngIf=\"orderStatus == 'Waiting'\" class=\"form-group col mt-3\">\r\n                            <div class=\"d-flex w-100 justify-content-between\">\r\n                                <h5 class=\"fonted\">{{'Increase amount' | translate}}</h5>\r\n                                <a class=\"mr-1\">\r\n                                    <button class=\"btn btn-light btn-sm\">{{order.totalPrice | number : '1.2-2'}}\r\n                                        лв.</button>\r\n                                    <!-- <button class=\"btn btn-light btn-sm ml-1\" (click)=\"decrement()\">-</button> -->\r\n                                    <button class=\"btn btn-light btn-sm ml-1\" (click)=\"increment()\">+</button>\r\n                                </a>\r\n\r\n                            </div>\r\n                            <hr />\r\n                        </div>\r\n\r\n                        <div class=\"row text-center\">\r\n                            <div class=\"col-md-12\">\r\n\r\n                                <button [disabled]=\"isSubmitted\" *ngIf=\"isCompleted == false\" type=\"button\"\r\n                                    (click)=\"onSubmit()\" class=\"mt-1 btn btn-warning fonted\">\r\n                                    {{orderTotalPrice | number : '1.2-2'}} лв. | {{'Make a order'| translate}}\r\n                                    <span *ngIf=\"isSubmitted\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n\r\n                    <div *ngIf=\"isCompleted == true\" class=\"blink_me col-md-12 mt-3 text-center fonted\">\r\n                        <button class=\"btn btn-warning fonted\">{{'Looking for a driver'| translate}}</button>\r\n                    </div>\r\n                </div>\r\n            </ion-text>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"isCompleted == true\" class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n        <!-- <ion-title>Choosen location</ion-title> -->\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <div class=\"d-flex w-100 justify-content-between\">\r\n                    <button *ngIf=\"isCompleted == true\" class=\"ml-3 btn btn-info fonted\">{{'Cost'|\r\n                        translate}} : {{order.totalPrice | number : '1.2-2'}} лв.</button>\r\n\r\n                    <button *ngIf=\"isCompleted == true\" class=\"mr-3 btn btn-danger fonted\"\r\n                        (click)=\"cancelOrder()\">{{'Cancel'| translate}}</button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n    </ion-toolbar>\r\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=travelling-travelling-module-es5.js.map