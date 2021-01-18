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

    /*! exports provided: RegisterPageModule */

    /***/
    function w85(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
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

      var RegisterPageModule = function RegisterPageModule() {
        _classCallCheck(this, RegisterPageModule);
      };

      RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
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


      __webpack_exports__["default"] = "ion-content.background {\n  --background: url('wp4792780-dark-phone-wallpapers.jpg') 0 0/100% 100% no-repeat;\n}\n\n.text {\n  font-family: cursive;\n  font-size: 2.4em;\n}\n\n.reg {\n  margin-top: 20px;\n}\n\nion-input {\n  border-radius: 20px;\n  border: 3px solid #ffae00;\n}\n\n.backIcon {\n  color: #ffae00;\n  font-size: 150%;\n}\n\n.back {\n  color: #ffae00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnRkFBQTtBQUNKOztBQUdBO0VBRUksb0JBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxjQUFBO0FBREoiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy93cDQ3OTI3ODAtZGFyay1waG9uZS13YWxscGFwZXJzLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbn1cclxuXHJcblxyXG4udGV4dHsgIFxyXG4gICAgLy9mb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMi40ZW07XHJcbn1cclxuXHJcbi5yZWd7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyNTUsIDE3NCwgMCk7XHJcbn1cclxuXHJcbi5iYWNrSWNvbiB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMTc0LCAwKTtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxufVxyXG5cclxuLmJhY2sge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDE3NCwgMCk7XHJcbn1cclxuICAgICJdfQ== */";
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


      __webpack_exports__["default"] = "<ion-content padding class=\"background\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"row mt-2\">\r\n        <div class=\"col-1\">\r\n          <ion-icon class=\"backIcon ml-2\" name=\"chevron-back-outline\"></ion-icon>\r\n\r\n        </div>\r\n        <div class=\"col-9\">\r\n          <h5 (click)=goBack() class=\"back\">Back</h5>\r\n        </div>\r\n\r\n      </div>\r\n      <ion-text class=\"text-center\" color=\"warning\">\r\n        <div class=\"col-md-5 mt-3\">\r\n          <h2 class=\"text\">\r\n            REGISTER\r\n          </h2>\r\n        </div>\r\n\r\n        <div class=\"row text-center\">\r\n          <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" novalidate class=\"col-md-6\">\r\n            <div class=\"form-group col mt-5\">\r\n              <ion-input formControlName=\"firstName\" type=\"text\" class=\"form-control\" placeholder=\"First Name\">\r\n              </ion-input>\r\n            </div>\r\n            <div class=\"form-group col mt-3\">\r\n              <ion-input formControlName=\"lastName\" type=\"text\" class=\"form-control\" placeholder=\"Last Name\">\r\n              </ion-input>\r\n            </div>\r\n            <div class=\"form-group col mt-3\">\r\n              <ion-input formControlName=\"email\" type=\"text\" class=\"form-control\" placeholder=\"Email\"></ion-input>\r\n            </div>\r\n\r\n            <div class=\"form-group col mt-3\">\r\n              <ion-input formControlName=\"phone\" type=\"text\" class=\"form-control\" placeholder=\"Phone Number\">\r\n              </ion-input>\r\n            </div>\r\n\r\n            <div class=\"form-group col mt-3\">\r\n              <ion-input formControlName=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n              </ion-input>\r\n            </div>\r\n\r\n            <div class=\"form-group col mt-3\">\r\n              <ion-input formControlName=\"confirmPassword\" type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\">\r\n              </ion-input>\r\n            </div>\r\n\r\n            <div class=\"col-md-12 mt-3\">\r\n              <ion-button type=\"submit\" color=\"warning\">Register</ion-button>\r\n            </div>\r\n          </form>\r\n\r\n\r\n          <div class=\"col-md-6 mt-3\">\r\n            <p>Already have an account?</p>\r\n            <ion-button (click)=\"signIn()\" type=\"submit\" color=\"danger\">Sign in</ion-button>\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </ion-text>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</ion-content>";
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

      var RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(route, formBuilder) {
          _classCallCheck(this, RegisterPage);

          this.route = route;
          this.formBuilder = formBuilder;
          this.isSubmitted = false;
          this.loading = false;
        }

        _createClass(RegisterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.formBuilder.group({
              firstName: [''],
              lastName: [''],
              email: [''],
              password: [''],
              confirmPassword: [''],
              phone: ['']
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
              this.route.navigate(['tabs/account/login']);
            }

            this.clearForm();
          }
        }, {
          key: "signIn",
          value: function signIn() {
            this.route.navigate(['tabs/account/login']);
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

        return RegisterPage;
      }();

      RegisterPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
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