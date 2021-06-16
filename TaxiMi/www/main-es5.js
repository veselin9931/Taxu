(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+ywU":
    /*!***************************************!*\
      !*** ./src/_models/favouriteOrder.ts ***!
      \***************************************/

    /*! exports provided: FavouriteOrder */

    /***/
    function ywU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavouriteOrder", function () {
        return FavouriteOrder;
      });

      var FavouriteOrder = function FavouriteOrder() {
        _classCallCheck(this, FavouriteOrder);
      };
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Taxu\TaxiMi\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "4hj4":
    /*!******************************************!*\
      !*** ./src/app/alert/alert.component.ts ***!
      \******************************************/

    /*! exports provided: AlertComponent */

    /***/
    function hj4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
        return AlertComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_alert_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./alert.component.html */
      "5t2v");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../_models */
      "VeQZ");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../_services */
      "8Xdb");

      var AlertComponent = /*#__PURE__*/function () {
        function AlertComponent(router, alertService) {
          _classCallCheck(this, AlertComponent);

          this.router = router;
          this.alertService = alertService;
          this.id = 'default-alert';
          this.fade = true;
          this.alerts = [];
        }

        _createClass(AlertComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // subscribe to new alert notifications
            this.alertSubscription = this.alertService.onAlert(this.id).subscribe(function (alert) {
              // clear alerts when an empty alert is received
              if (!alert.message) {
                // filter out alerts without 'keepAfterRouteChange' flag
                _this.alerts = _this.alerts.filter(function (x) {
                  return x.keepAfterRouteChange;
                }); // remove 'keepAfterRouteChange' flag on the rest

                _this.alerts.forEach(function (x) {
                  return delete x.keepAfterRouteChange;
                });

                return;
              } // add alert to array


              _this.alerts.push(alert); // auto close alert if required


              if (alert.autoClose) {
                setTimeout(function () {
                  return _this.removeAlert(alert);
                }, 3000);
              }
            }); // clear alerts on location change

            this.routeSubscription = this.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                _this.alertService.clear(_this.id);
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // unsubscribe to avoid memory leaks
            this.alertSubscription.unsubscribe();
            this.routeSubscription.unsubscribe();
          }
        }, {
          key: "removeAlert",
          value: function removeAlert(alert) {
            var _this2 = this;

            // check if already removed to prevent error on auto close
            if (!this.alerts.includes(alert)) return;

            if (this.fade) {
              // fade out alert
              this.alerts.find(function (x) {
                return x === alert;
              }).fade = true; // remove alert after faded out

              setTimeout(function () {
                _this2.alerts = _this2.alerts.filter(function (x) {
                  return x !== alert;
                });
              }, 320);
            } else {
              // remove alert
              this.alerts = this.alerts.filter(function (x) {
                return x !== alert;
              });
            }
          }
        }, {
          key: "cssClass",
          value: function cssClass(alert) {
            var _alertTypeClass;

            if (!alert) return;
            var classes = ['alert', 'alert-dismissable', 'mt-4', 'container'];
            var alertTypeClass = (_alertTypeClass = {}, _defineProperty(_alertTypeClass, _models__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Success, 'alert alert-success'), _defineProperty(_alertTypeClass, _models__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Error, 'alert alert-danger'), _defineProperty(_alertTypeClass, _models__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Info, 'alert alert-info'), _defineProperty(_alertTypeClass, _models__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Warning, 'alert alert-warning'), _alertTypeClass);
            classes.push(alertTypeClass[alert.type]);

            if (alert.fade) {
              classes.push('fade');
            }

            return classes.join(' ');
          }
        }]);

        return AlertComponent;
      }();

      AlertComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
        }];
      };

      AlertComponent.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        fade: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      AlertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'alert',
        template: _raw_loader_alert_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AlertComponent);
      /***/
    },

    /***/
    "5t2v":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alert/alert.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function t2v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngFor=\"let alert of alerts\" class=\"{{cssClass(alert)}}\">\r\n    <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n    <span [innerHTML]=\"alert.message\"></span>\r\n</div>";
      /***/
    },

    /***/
    "8Xdb":
    /*!********************************!*\
      !*** ./src/_services/index.ts ***!
      \********************************/

    /*! exports provided: AccountService, AlertService */

    /***/
    function Xdb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./account.service */
      "mpGk");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AccountService", function () {
        return _account_service__WEBPACK_IMPORTED_MODULE_0__["AccountService"];
      });
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./alert.service */
      "iCB7");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AlertService", function () {
        return _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"];
      });
      /***/

    },

    /***/
    "AM6B":
    /*!*******************************!*\
      !*** ./src/_models/driver.ts ***!
      \*******************************/

    /*! exports provided: Driver */

    /***/
    function AM6B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Driver", function () {
        return Driver;
      });

      var Driver = function Driver() {
        _classCallCheck(this, Driver);
      };
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });
      /* harmony import */


      var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! zone.js/dist/zone-error */
      "+Vou");
      /* harmony import */


      var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        //  apiUrl: 'https://taksito.azurewebsites.net',
        //  signalRUrl: 'https://taksito.azurewebsites.net',
        //   apiUrl: 'https://localhost:44377',
        //   signalRUrl: 'https://localhost:44377',
        apiUrl: 'http://www.taximiapi.com.aspbg.net',
        signalRUrl: 'http://www.taximiapi.com.aspbg.net'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // Included with Angular CLI.

      /***/
    },

    /***/
    "B7aU":
    /*!*****************************!*\
      !*** ./src/_models/trip.ts ***!
      \*****************************/

    /*! exports provided: Trip */

    /***/
    function B7aU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Trip", function () {
        return Trip;
      });

      var Trip = function Trip() {
        _classCallCheck(this, Trip);
      };
      /***/

    },

    /***/
    "CJHD":
    /*!*******************************!*\
      !*** ./src/_models/wallet.ts ***!
      \*******************************/

    /*! exports provided: Wallet */

    /***/
    function CJHD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Wallet", function () {
        return Wallet;
      });

      var Wallet = function Wallet() {
        _classCallCheck(this, Wallet);
      };
      /***/

    },

    /***/
    "MJUz":
    /*!*******************************!*\
      !*** ./src/_models/report.ts ***!
      \*******************************/

    /*! exports provided: Report */

    /***/
    function MJUz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Report", function () {
        return Report;
      });

      var Report = function Report() {
        _classCallCheck(this, Report);
      };
      /***/

    },

    /***/
    "MXqi":
    /*!******************************!*\
      !*** ./src/_models/order.ts ***!
      \******************************/

    /*! exports provided: Order */

    /***/
    function MXqi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Order", function () {
        return Order;
      });

      var Order = function Order() {
        _classCallCheck(this, Order);
      };
      /***/

    },

    /***/
    "P+7M":
    /*!******************************!*\
      !*** ./src/_models/alert.ts ***!
      \******************************/

    /*! exports provided: Alert, AlertType */

    /***/
    function P7M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Alert", function () {
        return Alert;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertType", function () {
        return AlertType;
      });

      var Alert = function Alert(init) {
        _classCallCheck(this, Alert);

        Object.assign(this, init);
      };

      var AlertType;

      (function (AlertType) {
        AlertType[AlertType["Success"] = 0] = "Success";
        AlertType[AlertType["Error"] = 1] = "Error";
        AlertType[AlertType["Info"] = 2] = "Info";
        AlertType[AlertType["Warning"] = 3] = "Warning";
      })(AlertType || (AlertType = {}));
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, translate) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.translate = translate;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this3 = this;

            this.platform.ready().then(function () {
              _this3.statusBar.styleDefault();

              _this3.splashScreen.hide();

              _this3.translate.setDefaultLang('en');
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VeQZ":
    /*!******************************!*\
      !*** ./src/_models/index.ts ***!
      \******************************/

    /*! exports provided: Alert, AlertType, User, Order, Trip, Driver, Wallet, Message, Report, Image, GeoJson, FeatureCollection, FavouriteOrder, Profit */

    /***/
    function VeQZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./alert */
      "P+7M");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Alert", function () {
        return _alert__WEBPACK_IMPORTED_MODULE_0__["Alert"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AlertType", function () {
        return _alert__WEBPACK_IMPORTED_MODULE_0__["AlertType"];
      });
      /* harmony import */


      var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user */
      "mq9P");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return _user__WEBPACK_IMPORTED_MODULE_1__["User"];
      });
      /* harmony import */


      var _order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./order */
      "MXqi");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Order", function () {
        return _order__WEBPACK_IMPORTED_MODULE_2__["Order"];
      });
      /* harmony import */


      var _trip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./trip */
      "B7aU");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Trip", function () {
        return _trip__WEBPACK_IMPORTED_MODULE_3__["Trip"];
      });
      /* harmony import */


      var _driver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./driver */
      "AM6B");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Driver", function () {
        return _driver__WEBPACK_IMPORTED_MODULE_4__["Driver"];
      });
      /* harmony import */


      var _wallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./wallet */
      "CJHD");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Wallet", function () {
        return _wallet__WEBPACK_IMPORTED_MODULE_5__["Wallet"];
      });
      /* harmony import */


      var _message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./message */
      "swRp");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Message", function () {
        return _message__WEBPACK_IMPORTED_MODULE_6__["Message"];
      });
      /* harmony import */


      var _report__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./report */
      "MJUz");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Report", function () {
        return _report__WEBPACK_IMPORTED_MODULE_7__["Report"];
      });
      /* harmony import */


      var _image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./image */
      "iky/");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Image", function () {
        return _image__WEBPACK_IMPORTED_MODULE_8__["Image"];
      });
      /* harmony import */


      var _map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./map */
      "q9h2");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GeoJson", function () {
        return _map__WEBPACK_IMPORTED_MODULE_9__["GeoJson"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FeatureCollection", function () {
        return _map__WEBPACK_IMPORTED_MODULE_9__["FeatureCollection"];
      });
      /* harmony import */


      var _favouriteOrder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./favouriteOrder */
      "+ywU");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FavouriteOrder", function () {
        return _favouriteOrder__WEBPACK_IMPORTED_MODULE_10__["FavouriteOrder"];
      });
      /* harmony import */


      var _profit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./profit */
      "mWG8");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Profit", function () {
        return _profit__WEBPACK_IMPORTED_MODULE_11__["Profit"];
      });
      /***/

    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <!-- <ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n  \r\n      <ion-title>\r\n          <ion-label>TaxiMi</ion-label>\r\n      </ion-title>\r\n  \r\n      <ion-buttons slot=\"end\">\r\n        <ion-icon id=\"toolbarIcon\" name=\"language-outline\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header> -->\r\n  <alert></alert>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: HttpLoaderFactory, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _alert_alert_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./alert/alert.component */
      "4hj4");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "WOgW");
      /* harmony import */


      var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/location-accuracy/ngx */
      "92l+");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "mqiu");

      function HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__["TranslateHttpLoader"](http);
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_11__["AlertComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
          }
        }), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_13__["AndroidPermissions"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__["Geolocation"], _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_14__["LocationAccuracy"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "iCB7":
    /*!****************************************!*\
      !*** ./src/_services/alert.service.ts ***!
      \****************************************/

    /*! exports provided: AlertService */

    /***/
    function iCB7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertService", function () {
        return AlertService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_models */
      "VeQZ");

      var AlertService = /*#__PURE__*/function () {
        function AlertService() {
          _classCallCheck(this, AlertService);

          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.defaultId = 'default-alert';
        } // enable subscribing to alerts observable


        _createClass(AlertService, [{
          key: "onAlert",
          value: function onAlert() {
            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.defaultId;
            return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (x) {
              return x && x.id === id;
            }));
          } // convenience methods

        }, {
          key: "success",
          value: function success(message, options) {
            this.alert(new _models__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign(Object.assign({}, options), {
              type: _models__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Success,
              message: message
            })));
          }
        }, {
          key: "error",
          value: function error(message, options) {
            this.alert(new _models__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign(Object.assign({}, options), {
              type: _models__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Error,
              message: message
            })));
          }
        }, {
          key: "info",
          value: function info(message, options) {
            this.alert(new _models__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign(Object.assign({}, options), {
              type: _models__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Info,
              message: message
            })));
          }
        }, {
          key: "warn",
          value: function warn(message, options) {
            this.alert(new _models__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign(Object.assign({}, options), {
              type: _models__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Warning,
              message: message
            })));
          } // main alert method    

        }, {
          key: "alert",
          value: function alert(_alert) {
            _alert.id = _alert.id || this.defaultId;
            this.subject.next(_alert);
          } // clear alerts

        }, {
          key: "clear",
          value: function clear() {
            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.defaultId;
            this.subject.next(new _models__WEBPACK_IMPORTED_MODULE_4__["Alert"]({
              id: id
            }));
          }
        }]);

        return AlertService;
      }();

      AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AlertService);
      /***/
    },

    /***/
    "iky/":
    /*!******************************!*\
      !*** ./src/_models/image.ts ***!
      \******************************/

    /*! exports provided: Image */

    /***/
    function iky(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Image", function () {
        return Image;
      });

      var Image = function Image() {
        _classCallCheck(this, Image);
      };
      /***/

    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "mWG8":
    /*!*******************************!*\
      !*** ./src/_models/profit.ts ***!
      \*******************************/

    /*! exports provided: Profit */

    /***/
    function mWG8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Profit", function () {
        return Profit;
      });

      var Profit = function Profit() {
        _classCallCheck(this, Profit);
      };
      /***/

    },

    /***/
    "mpGk":
    /*!******************************************!*\
      !*** ./src/_services/account.service.ts ***!
      \******************************************/

    /*! exports provided: AccountService */

    /***/
    function mpGk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountService", function () {
        return AccountService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");

      var AccountService = /*#__PURE__*/function () {
        function AccountService(router, http) {
          _classCallCheck(this, AccountService);

          this.router = router;
          this.http = http;
          this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('user')));
          this.user = this.userSubject.asObservable();
        }

        _createClass(AccountService, [{
          key: "userValue",
          get: function get() {
            return this.userSubject.value;
          }
        }, {
          key: "login",
          value: function login(username, password) {
            var _this4 = this;

            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/account/authenticate"), {
              username: username,
              password: password
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('user', JSON.stringify(user));

              _this4.userSubject.next(user);

              return user;
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            // remove user from local storage and set current user to null
            localStorage.removeItem('user');
            this.userSubject.next(null);
          }
        }, {
          key: "register",
          value: function register(user) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/account"), user, {
              headers: headers
            });
          }
        }, {
          key: "getAll",
          value: function getAll() {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/users"), {
              headers: headers
            });
          }
        }, {
          key: "getById",
          value: function getById(id) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/account/").concat(id), {
              headers: headers
            });
          }
        }, {
          key: "updateDriving",
          value: function updateDriving(id, value) {
            var _this5 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/account/").concat(id, "/").concat(value), {
              headers: headers,
              responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) {
              // update stored user if the logged in user updated their own record
              if (id == _this5.userValue.id) {
                // update local storage
                var user = Object.assign(Object.assign({}, _this5.userValue), {
                  value: value
                });
                localStorage.setItem('user', JSON.stringify(user)); // publish updated user to subscribers

                _this5.userSubject.next(user);
              }

              return x;
            }));
          }
        }, {
          key: "updateAlert",
          value: function updateAlert(id, value) {
            var _this6 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/account/").concat(id, "/alert/").concat(value), {
              headers: headers,
              responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) {
              // update stored user if the logged in user updated their own record
              if (id == _this6.userValue.id) {
                // update local storage
                var user = Object.assign(Object.assign({}, _this6.userValue), {
                  value: value
                });
                localStorage.setItem('user', JSON.stringify(user)); // publish updated user to subscribers

                _this6.userSubject.next(user);
              }

              return x;
            }));
          }
        }, {
          key: "updateLanguage",
          value: function updateLanguage(id, value) {
            var _this7 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/account/").concat(id, "/language/").concat(value), {
              headers: headers,
              responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) {
              // update stored user if the logged in user updated their own record
              if (id == _this7.userValue.id) {
                // update local storage
                var user = Object.assign(Object.assign({}, _this7.userValue), {
                  value: value
                });
                localStorage.setItem('user', JSON.stringify(user)); // publish updated user to subscribers

                _this7.userSubject.next(user);
              }

              return x;
            }));
          }
        }, {
          key: "update",
          value: function update(id, params) {
            var _this8 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/").concat(id), params, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) {
              // update stored user if the logged in user updated their own record
              if (id == _this8.userValue.id) {
                // update local storage
                var user = Object.assign(Object.assign({}, _this8.userValue), params);
                localStorage.setItem('user', JSON.stringify(user)); // publish updated user to subscribers

                _this8.userSubject.next(user);
              }

              return x;
            }));
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            var _this9 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'Content-Type': 'application/json'
            });
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl, "/api/").concat(id), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (x) {
              // auto logout if the logged in user deleted their own record
              if (id == _this9.userValue.id) {
                _this9.logout();
              }

              return x;
            }));
          }
        }]);

        return AccountService;
      }();

      AccountService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      AccountService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AccountService);
      /***/
    },

    /***/
    "mq9P":
    /*!*****************************!*\
      !*** ./src/_models/user.ts ***!
      \*****************************/

    /*! exports provided: User */

    /***/
    function mq9P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });

      var User = function User() {
        _classCallCheck(this, User);
      };
      /***/

    },

    /***/
    "q9h2":
    /*!****************************!*\
      !*** ./src/_models/map.ts ***!
      \****************************/

    /*! exports provided: GeoJson, FeatureCollection */

    /***/
    function q9h2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeoJson", function () {
        return GeoJson;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeatureCollection", function () {
        return FeatureCollection;
      });

      var GeoJson = function GeoJson(coordinates, properties) {
        _classCallCheck(this, GeoJson);

        this.properties = properties;
        this.type = 'Feature';
        this.geometry = {
          type: 'Point',
          coordinates: coordinates
        };
      };

      var FeatureCollection = function FeatureCollection(features) {
        _classCallCheck(this, FeatureCollection);

        this.features = features;
        this.type = 'FeatureCollection';
      };
      /***/

    },

    /***/
    "swRp":
    /*!********************************!*\
      !*** ./src/_models/message.ts ***!
      \********************************/

    /*! exports provided: Message */

    /***/
    function swRp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Message", function () {
        return Message;
      });

      var Message = function Message() {
        _classCallCheck(this, Message);
      };
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: 'menu',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | menu-menu-module */
          [__webpack_require__.e("common"), __webpack_require__.e("menu-menu-module")]).then(__webpack_require__.bind(null,
          /*! ./menu/menu.module */
          "19mU")).then(function (m) {
            return m.MenuPageModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'menu/home',
        pathMatch: 'full'
      }, {
        path: 'location',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | location-location-module */
          [__webpack_require__.e("default~destination-destination-module~driving-driving-module~driving-mode-driving-mode-module~locat~661b9216"), __webpack_require__.e("common"), __webpack_require__.e("location-location-module")]).then(__webpack_require__.bind(null,
          /*! ./location/location.module */
          "cf3W")).then(function (m) {
            return m.LocationPageModule;
          });
        }
      }, {
        path: 'destination',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | destination-destination-module */
          [__webpack_require__.e("default~destination-destination-module~driving-driving-module~driving-mode-driving-mode-module~locat~661b9216"), __webpack_require__.e("common"), __webpack_require__.e("destination-destination-module")]).then(__webpack_require__.bind(null,
          /*! ./destination/destination.module */
          "1207")).then(function (m) {
            return m.DestinationPageModule;
          });
        }
      }, {
        path: 'language-popover',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | language-popover-language-popover-module */
          "common").then(__webpack_require__.bind(null,
          /*! ./language-popover/language-popover.module */
          "QhVT")).then(function (m) {
            return m.LanguagePopoverPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          onSameUrlNavigation: 'reload',
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color:#353535;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBRUksOEJBQUE7QUFISiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG5pb24tY29udGVudHtcclxuICAgIC8vLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL3dwNDc5Mjc4MC1kYXJrLXBob25lLXdhbGxwYXBlcnMuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzM1MzUzNTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map