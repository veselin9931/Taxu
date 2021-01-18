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

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(route, formBuilder) {
          _classCallCheck(this, LoginPage);

          this.route = route;
          this.formBuilder = formBuilder;
          this.isSubmitted = false;
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.formBuilder.group({
              email: [''],
              password: ['']
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.isSubmitted = true;

            if (!this.form.valid) {
              console.log('Please provide all the required values!');
              return false;
            } else {
              console.log(this.form.value);
              this.route.navigate(['tabs/home-logged']);
            }

            this.clearForm();
          }
        }, {
          key: "signUp",
          value: function signUp() {
            this.route.navigate(['tabs/account/register']);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.route.navigate(['tabs/home']);
          }
        }, {
          key: "clearForm",
          value: function clearForm() {
            this.form.reset({
              'email': '',
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


      __webpack_exports__["default"] = "ion-content.background {\n  --background: url('wp4792780-dark-phone-wallpapers.jpg') 0 0/100% 100% no-repeat;\n}\n\n.text {\n  font-family: cursive;\n  font-size: 2.4em;\n}\n\n.reg {\n  margin-top: 20px;\n}\n\nion-input {\n  border-radius: 20px;\n  border: 3px solid #ffae00;\n}\n\n.backIcon {\n  color: #ffae00;\n  font-size: 150%;\n}\n\n.back {\n  color: #ffae00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnRkFBQTtBQUNKOztBQUdBO0VBRUksb0JBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxjQUFBO0FBREoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy93cDQ3OTI3ODAtZGFyay1waG9uZS13YWxscGFwZXJzLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbn1cclxuXHJcblxyXG4udGV4dHsgIFxyXG4gICAgLy9mb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMi40ZW07XHJcbn1cclxuXHJcbi5yZWd7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyNTUsIDE3NCwgMCk7XHJcbn1cclxuXHJcbi5iYWNrSWNvbiB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMTc0LCAwKTtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxufVxyXG5cclxuLmJhY2sge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDE3NCwgMCk7XHJcbn1cclxuICAgICJdfQ== */";
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

    /*! exports provided: LoginPageModule */

    /***/
    function xInB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "VPPJ");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "34af");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
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


      __webpack_exports__["default"] = "<ion-content padding class=\"background\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"row mt-2\">\r\n        <div class=\"col-1\">\r\n          <ion-icon class=\"backIcon ml-2\" name=\"chevron-back-outline\"></ion-icon>\r\n\r\n        </div>\r\n        <div class=\"col-9\">\r\n          <h5 (click)=goBack() class=\"back\">Back</h5>\r\n        </div>\r\n\r\n      </div>\r\n      <ion-text class=\"text-center\" color=\"warning\">\r\n        <div class=\"col-md-5 mt-3\">\r\n          <h2 class=\"text\">\r\n            LOGIN\r\n          </h2>\r\n        </div>\r\n\r\n        <div class=\"row text-center\">\r\n          <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" novalidate class=\"col-md-6\">\r\n            <div class=\"form-group col mt-5\">\r\n                <ion-input formControlName=\"email\" type=\"text\" class=\"form-control\" placeholder=\"Email\"></ion-input>\r\n            </div>\r\n            \r\n            <div class=\"form-group col mt-3\">\r\n              <ion-input formControlName=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password\"></ion-input>\r\n            </div>\r\n\r\n            <div class=\"col-md-12 mt-3\">\r\n              <ion-button type=\"submit\" color=\"warning\">Login</ion-button>\r\n            </div>\r\n          </form>\r\n\r\n          <div class=\"col-md-6 mt-3\">\r\n            <p>Dont have an account?</p>\r\n            <ion-button (click)=\"signUp()\" type=\"submit\" color=\"danger\">Sign up</ion-button>\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </ion-text>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=account-login-login-module-es5.js.map