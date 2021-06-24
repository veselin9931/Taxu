(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-register-register-module"], {
    /***/
    "2w85":
    /*!*****************************************************!*\
      !*** ./src/app/account/register/register.module.ts ***!
      \*****************************************************/

    /*! exports provided: HttpLoaderFactory, RegisterPageModule */

    /***/
    function w85(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
        return RegisterPageModule;
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


      var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./register-routing.module */
      "OKlH");
      /* harmony import */


      var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./register.page */
      "nK45");
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
      /*! ../../language-popover/language-popover.module */
      "QhVT");

      function HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http);
      }

      var RegisterPageModule = function RegisterPageModule() {
        _classCallCheck(this, RegisterPageModule);
      };

      RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
          }
        }), _language_popover_language_popover_module__WEBPACK_IMPORTED_MODULE_10__["LanguagePopoverPageModule"]],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
      })], RegisterPageModule);
      /***/
    },

    /***/
    "NbaP":
    /*!*****************************************************!*\
      !*** ./src/app/account/register/register.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function NbaP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color:#e9e9e9;\n}\n\nion-toolbar {\n  --ion-background-color:#eeeeee;\n}\n\nion-title {\n  text-align: center;\n}\n\n#toolbarIcon {\n  font-size: 1.7em;\n}\n\n.fonted {\n  font-family: Open Sans Light;\n}\n\n.text {\n  font-size: 2.4em;\n  font-family: Open Sans Light;\n}\n\n.reg {\n  margin-top: 20px;\n}\n\nion-input {\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksNEJBQUE7QUFFSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKIiwiZmlsZSI6InJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZTllOWU5O1xyXG59XHJcblxyXG5pb24tdG9vbGJhcntcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2VlZWVlZTtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3Rvb2xiYXJJY29ue1xyXG4gICAgZm9udC1zaXplOiAxLjdlbTtcclxufVxyXG4uZm9udGVke1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBMaWdodDtcclxufVxyXG5cclxuXHJcbi50ZXh0eyAgXHJcbiAgICBmb250LXNpemU6IDIuNGVtO1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBMaWdodDtcclxufVxyXG5cclxuLnJlZ3tcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbiAgICAiXX0= */";
      /***/
    },

    /***/
    "O8bK":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/register/register.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function O8bK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>\r\n        <ion-label>{{'Register' | translate}}</ion-label>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon (click)='openLanguagePopover($event)' id=\"toolbarIcon\" name=\"language-outline\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding class=\"background\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"row\">\r\n\r\n      </div>\r\n      <ion-text class=\"text-center\" color=\"dark\">\r\n        <!-- <div class=\"col-md-5 mt-3\">\r\n          <h2 class=\"text\">\r\n            {{'Register' | translate}}\r\n          </h2>\r\n        </div> -->\r\n\r\n        <div class=\"row text-center\">\r\n            <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" novalidate class=\"col-md-6\">\r\n\r\n                <ion-text *ngIf=\"err\" color=\"danger\">\r\n                    <div class=\"text-center\">{{err}}</div>\r\n                </ion-text>\r\n\r\n                <div class=\"form-group col mt-5\">\r\n                    <ion-input formControlName=\"firstName\" type=\"text\" class=\"form-control\" [placeholder]='\"First Name\" | translate' [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\">\r\n                    </ion-input>\r\n                    <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.firstName.errors.required\">{{'The field is required' | translate}}!</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col mt-3\">\r\n                    <ion-input formControlName=\"lastName\" type=\"text\" class=\"form-control\" [placeholder]='\"Last Name\" | translate' [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\">\r\n                    </ion-input>\r\n\r\n                    <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.lastName.errors.required\">{{'The field is required' | translate}}!</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col mt-3\">\r\n                    <ion-input formControlName=\"username\" type=\"text\" class=\"form-control\" [placeholder]='\"Email\" | translate' [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\"></ion-input>\r\n\r\n                    <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.username.errors.required\">{{'The field is required' | translate}}!</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col mt-3\">\r\n                    <ion-input formControlName=\"phone\" type=\"text\" class=\"form-control\" [placeholder]='\"Phone Number\" | translate' [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\">\r\n                    </ion-input>\r\n                    <div *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.phone.errors.required\">{{'The field is required' | translate}}!</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col mt-3\">\r\n                    <ion-input formControlName=\"password\" type=\"password\" class=\"form-control\" [placeholder]='\"Password\" | translate' [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\r\n                    </ion-input>\r\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.password.errors.required\">{{'The field is required' | translate}}!</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col mt-3\">\r\n                    <ion-input formControlName=\"confirmPassword\" type=\"password\" class=\"form-control\" [placeholder]='\"Confirm Password\" | translate' [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\">\r\n                    </ion-input>\r\n                    <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.confirmPassword.errors.required\">{{'The field is required' | translate}}!</div>\r\n                        <div *ngIf=\"f.confirmPassword.errors.confirmedValidator\">{{'Password should match' | translate}}!</div>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- <div class=\"form-group col mt-3\">\r\n                    <ion-input formControlName=\"referral\" type=\"text\" class=\"form-control\" [placeholder]='\"Referral\" | translate'></ion-input>\r\n                </div> -->\r\n\r\n                <div class=\"col-md-12 mt-3\">\r\n                    <button type=\"submit\" class=\"btn btn-info\"> {{'Confirm' | translate}}</button>\r\n                </div>\r\n            </form>\r\n\r\n\r\n            <div class=\"col-md-6 mt-3\">\r\n                <p class=\"fonted\">{{'Already have an account' | translate}}?</p>\r\n                <button (click)=\"signIn()\" type=\"submit\" class=\"btn btn-warning\">{{'Sign in' | translate}}</button>\r\n\r\n            </div>\r\n        </div>\r\n\r\n      </ion-text>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "OKlH":
    /*!*************************************************************!*\
      !*** ./src/app/account/register/register-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: RegisterPageRoutingModule */

    /***/
    function OKlH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
        return RegisterPageRoutingModule;
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


      var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register.page */
      "nK45");

      var routes = [{
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
      }];

      var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
        _classCallCheck(this, RegisterPageRoutingModule);
      };

      RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegisterPageRoutingModule);
      /***/
    },

    /***/
    "nK45":
    /*!***************************************************!*\
      !*** ./src/app/account/register/register.page.ts ***!
      \***************************************************/

    /*! exports provided: RegisterPage */

    /***/
    function nK45(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
        return RegisterPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.page.html */
      "O8bK");
      /* harmony import */


      var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register.page.scss */
      "NbaP");
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


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/language-popover/language-popover.page */
      "oXKM");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var src_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/_services */
      "8Xdb");
      /* harmony import */


      var src_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/_services/driver/driver.service */
      "exMm");

      var RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(route, formBuilder, accountService, alertService, driverService, translate, popoverController, alertController) {
          _classCallCheck(this, RegisterPage);

          this.route = route;
          this.formBuilder = formBuilder;
          this.accountService = accountService;
          this.alertService = alertService;
          this.driverService = driverService;
          this.translate = translate;
          this.popoverController = popoverController;
          this.alertController = alertController;
          this.submitted = false;
          this.loading = false;
          this.err = '';
          this.translate.setDefaultLang('en');
        }

        _createClass(RegisterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.formBuilder.group({
              firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              referral: ['']
            }, {
              validators: this.ConfirmedValidator('password', 'confirmPassword')
            });
            var connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_6__["HubConnectionBuilder"]().configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_6__["LogLevel"].Information).withUrl("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].signalRUrl, "/orderHub")).build();
            connection.start().then(function () {
              console.log('signalR Connected in register');
            })["catch"](function (err) {
              return console.log(err.toString());
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.form.controls;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            this.submitted = true;

            if (!this.form.valid) {
              return;
            }

            this.loading = true;
            this.accountService.register(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])()).subscribe(function (data) {
              // this.driverService.getDriverByReferral(this.form.value.referral)
              // .subscribe(driver => {
              //   if(driver){
              //     this.driverService.lowerDriverCommission(driver.id)
              //     .subscribe(x => {
              //       console.log(x)
              //     })
              //   }else{
              //     console.log('The referral does not exists!')
              //   }
              // })
              _this.presentAlert();

              _this.route.navigate(['menu/home']);

              console.log(data);
            }, function (error) {
              console.log(error.error);
              _this.err = error.error;
              _this.loading = false;
            });
          }
        }, {
          key: "signIn",
          value: function signIn() {
            this.route.navigate(['menu/home']);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.route.navigate(['menu/home']);
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
                        component: src_app_language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_10__["LanguagePopoverPage"],
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
          key: "ConfirmedValidator",
          value: function ConfirmedValidator(controlName, matchingControlName) {
            return function (formGroup) {
              var control = formGroup.controls[controlName];
              var matchingControl = formGroup.controls[matchingControlName];

              if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
                return;
              }

              if (control.value !== matchingControl.value) {
                matchingControl.setErrors({
                  confirmedValidator: true
                });
              } else {
                matchingControl.setErrors(null);
              }
            };
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Successfull registration',
                        message: 'Log in and book a car.',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return RegisterPage;
      }();

      RegisterPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_services__WEBPACK_IMPORTED_MODULE_12__["AccountService"]
        }, {
          type: src_services__WEBPACK_IMPORTED_MODULE_12__["AlertService"]
        }, {
          type: src_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_13__["DriverService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }];
      };

      RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RegisterPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=account-register-register-module-es5.js.map