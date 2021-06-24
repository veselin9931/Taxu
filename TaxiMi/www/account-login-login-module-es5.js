(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-login-login-module"], {
    /***/
    "34af":
    /*!*********************************************!*\
      !*** ./src/app/account/login/login.page.ts ***!
      \*********************************************/

    /*! exports provided: LoginPage */

    /***/
    function af(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "zVpI");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "7XiH");
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

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(route, formBuilder, alertService, accountService, translate, popoverController) {
          _classCallCheck(this, LoginPage);

          this.route = route;
          this.formBuilder = formBuilder;
          this.alertService = alertService;
          this.accountService = accountService;
          this.translate = translate;
          this.popoverController = popoverController;
          this.err = '';
          this.loading = false;
          this.logo = '../../../../resources/IMG_6400.JPG';
          this.isLoggedIn = localStorage.getItem("user");
          this.translate.setDefaultLang('en');
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.formBuilder.group({
              username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });

            if (this.isLoggedIn) {
              this.route.navigate(['menu/travelling']);
            }

            var connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_6__["HubConnectionBuilder"]().configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_6__["LogLevel"].Information).withUrl("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].signalRUrl, "/orderHub")).build();
            connection.start().then(function () {
              console.log('signalR Connected in login');
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

            this.submitted = true; // reset alerts on submit

            this.alertService.clear(); // stop here if form is invalid

            if (this.form.invalid) {
              return;
            }

            this.loading = true;
            this.accountService.login(this.f.username.value, this.f.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])()).subscribe(function (data) {
              _this.accountService.updateDriving(_this.accountService.userValue.id, false).subscribe(function (data) {
                console.log('success');
              });

              _this.route.navigate(['menu/travelling']);

              _this.loading = false;
            }, function (error) {
              console.log(error.error.message);
              _this.err = error.error.message;
              _this.loading = false;
            });
          }
        }, {
          key: "signUp",
          value: function signUp() {
            this.route.navigate(['menu/account/register']);
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
          key: "clearForm",
          value: function clearForm() {
            this.form.reset({
              'username': '',
              'password': ''
            });
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_services__WEBPACK_IMPORTED_MODULE_12__["AlertService"]
        }, {
          type: src_services__WEBPACK_IMPORTED_MODULE_12__["AccountService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginPage);
      /***/
    },

    /***/
    "7XiH":
    /*!***********************************************!*\
      !*** ./src/app/account/login/login.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function XiH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color:#e9e9e9;\n}\n\n.centered {\n  text-align: center;\n}\n\n.text {\n  font-size: 2.4em;\n  font-family: Open Sans Light;\n}\n\nion-toolbar {\n  --ion-background-color:#eeeeee;\n}\n\n.fonted {\n  font-family: Open Sans Light;\n}\n\nion-title {\n  text-align: center;\n}\n\n#toolbarIcon {\n  font-size: 1.7em;\n}\n\n.subtitle {\n  font-size: 1em;\n}\n\nion-item {\n  --background: none;\n  opacity: 1;\n  --border-width: 0;\n  --inner-border-width: 0;\n}\n\n.iconsText {\n  font-family: Open Sans Light;\n  font-size: 1em;\n}\n\n.ig {\n  display: inline-block;\n  width: 35px;\n  height: 35px;\n  text-align: center;\n  border-radius: 80px;\n  color: #fff;\n  font-size: 220px;\n  line-height: 250px;\n  vertical-align: middle;\n  background: #d6249f;\n  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);\n  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);\n}\n\n.fb {\n  color: #3b5998;\n  font-size: 200%;\n}\n\n.tw {\n  color: #12b8fa;\n  font-size: 200%;\n}\n\nion-input {\n  border-radius: 20px;\n  border: 3px solid #eeeeee;\n}\n\n.backIcon {\n  color: #ffae00;\n  font-size: 150%;\n}\n\n.back {\n  color: #ffae00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSw4QkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtBQUNKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBSUE7RUFDSSxjQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBSUU7RUFDRSw0QkFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEdBQUE7RUFDQSw0Q0FBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFESjs7QUFLQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBRko7O0FBTUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FBSEo7O0FBS0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUlBO0VBQ0ksY0FBQTtBQURKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLy8tLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvd3A0NzkyNzgwLWRhcmstcGhvbmUtd2FsbHBhcGVycy5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZTllOWU5O1xyXG5cclxufVxyXG4uY2VudGVyZWR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRleHR7IFxyXG4gICAgZm9udC1zaXplOiAyLjRlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgTGlnaHQ7XHJcbn1cclxuXHJcbmlvbi10b29sYmFye1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZWVlZWVlO1xyXG59XHJcblxyXG4uZm9udGVke1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBMaWdodDtcclxufVxyXG5cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiN0b29sYmFySWNvbntcclxuICAgIGZvbnQtc2l6ZTogMS43ZW07XHJcbn1cclxuXHJcblxyXG4uc3VidGl0bGV7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgb3BhY2l0eToxO1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcclxuICB9XHJcblxyXG4gIC5pY29uc1RleHR7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIExpZ2h0OztcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcblxyXG4uaWcge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4MHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDIyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJhY2tncm91bmQ6ICNkNjI0OWY7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDMwJSAxMDclLCAjZmRmNDk3IDAlLCAjZmRmNDk3IDUlLCAjZmQ1OTQ5IDQ1JSwjZDYyNDlmIDYwJSwjMjg1QUVCIDkwJSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDEwcHggcmdiYSgwLDAsMCwuMjUpO1xyXG59XHJcblxyXG4uZmIge1xyXG4gICAgY29sb3I6ICMzYjU5OTg7XHJcbiAgICBmb250LXNpemU6IDIwMCU7XHJcbn1cclxuXHJcblxyXG4udHcge1xyXG4gICAgY29sb3I6IHJnYigxOCwgMTg0LCAyNTApO1xyXG4gICAgZm9udC1zaXplOiAyMDAlO1xyXG59XHJcblxyXG5cclxuaW9uLWlucHV0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZWVlZWVlO1xyXG59XHJcbi5iYWNrSWNvbiB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMTc0LCAwKTtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxufVxyXG4uYmFjayB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMTc0LCAwKTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "VPPJ":
    /*!*******************************************************!*\
      !*** ./src/app/account/login/login-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function VPPJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "34af");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "xInB":
    /*!***********************************************!*\
      !*** ./src/app/account/login/login.module.ts ***!
      \***********************************************/

    /*! exports provided: HttpLoaderFactory, LoginPageModule */

    /***/
    function xInB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login-routing.module */
      "VPPJ");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./login.page */
      "34af");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
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

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoginPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
          }
        }), _language_popover_language_popover_module__WEBPACK_IMPORTED_MODULE_10__["LanguagePopoverPageModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "zVpI":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function zVpI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>\r\n        <ion-label>Cyber(v3.0)</ion-label>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon (click)='openLanguagePopover($event)' id=\"toolbarIcon\" name=\"language-outline\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding class=\"background\" *ngIf=\"!isLoggedIn\" >\r\n  <div class=\"row mt-2\">\r\n    <div class=\"col text-center\">\r\n      <ion-text class=\"centered\">\r\n        <div class=\"col mt-1\">\r\n          <img src=\"../../../assets/logo_trans_230x120.png\" alt=\"image\">\r\n          <!-- <h1 class=\"text\">Cyber</h1> -->\r\n          \r\n        </div>\r\n        <h4 class=\"subtitle fonted\">{{'Enter your credentials' | translate}}</h4>\r\n      </ion-text>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n\r\n      <div class=\"row\">\r\n          <form [formGroup]=\"form\" novalidate class=\"col-md-6\">\r\n              <ion-text *ngIf=\"err\" color=\"danger\">\r\n                  <div class=\"text-center\">{{err}}</div>\r\n              </ion-text>\r\n              <div class=\"form-group col mt-2 text-center\">\r\n                  <ion-input formControlName=\"username\" type=\"text\" class=\"form-control\"\r\n                             [placeholder]='\"Email\" | translate' [ngClass]=\"{ 'is-invalid':submitted == true && f.username.errors }\"></ion-input>\r\n                  <div *ngIf=\"submitted == true && f.username.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"submitted == true && f.username.errors.required\">{{'The field is required' | translate}}!</div>\r\n                  </div>\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"form-group col mt-3 text-center\">\r\n                  <ion-input formControlName=\"password\" type=\"password\" class=\"form-control\"\r\n                             [placeholder]='\"Password\" | translate' [ngClass]=\"{ 'is-invalid':submitted == true && f.password.errors }\"></ion-input>\r\n                  <div *ngIf=\"submitted == true && f.password.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"submitted == true && f.password.errors.required\">{{'The field is required' | translate}}!</div>\r\n                  </div>\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"d-flex w-100 justify-content-between\">\r\n                  <div class=\"form-group col mt-1 mr-2\">\r\n                      \r\n                  </div>\r\n                  <div class=\"col- mr-3\">\r\n                      <!-- <img (click)=\"onSubmit()\" src=\"../../../assets/start-stop.png\" width=\"90\" height=\"90\"> -->\r\n                      <button (click)=\"onSubmit()\" type=\"submit\" class=\"btn btn-dark\">{{'Login' | translate}}\r\n                        <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                      </button>\r\n                  </div>\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"form-group col mr-2\">\r\n                  <p class=\"subtitle fonted\">{{'Dont have an account' | translate}}?</p>\r\n                  <button class=\"small\" (click)=\"signUp()\" type=\"submit\"  class=\"btn btn-danger\">{{'Register' | translate}}</button>\r\n              </div>\r\n          </form>\r\n\r\n        <!-- <div class=\"col-md-6 mt-3\">\r\n          <p>Dont have an account?</p>\r\n          <ion-button (click)=\"signUp()\" type=\"submit\" color=\"danger\">Sign up</ion-button>\r\n\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"text-center\">\r\n\r\n        <div class=\"col text-center\">\r\n          <div class=\"row text-center\">\r\n            <div class=\"col-md-12\">\r\n              <ion-item>\r\n                <ion-icon class=\"ig\" name=\"logo-instagram\" item-start></ion-icon>\r\n                <h3 class=\"iconsText ml-2\" item-end>@Instagram</h3>\r\n              </ion-item>\r\n            </div>\r\n            <div class=\"col-md-12 mt-1\">\r\n              <ion-item>\r\n                <ion-icon class=\"fb\" name=\"logo-facebook\" item-start></ion-icon>\r\n                <h3 class=\"iconsText ml-2\" item-end>@Facebook</h3>\r\n              </ion-item>\r\n            </div>\r\n            <div class=\"col-md-12 mt-1\">\r\n              <ion-item>\r\n                <ion-icon class=\"tw\" name=\"logo-twitter\" item-start></ion-icon>\r\n                <h3 class=\"iconsText ml-2\" item-end>@Twitter</h3>\r\n              </ion-item>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n\r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=account-login-login-module-es5.js.map