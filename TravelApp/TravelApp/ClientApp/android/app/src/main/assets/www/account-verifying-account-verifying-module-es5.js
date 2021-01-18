(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-verifying-account-verifying-module"], {
    /***/
    "LkXo":
    /*!***********************************************************************!*\
      !*** ./src/app/account-verifying/account-verifying-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: AccountVerifyingPageRoutingModule */

    /***/
    function LkXo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountVerifyingPageRoutingModule", function () {
        return AccountVerifyingPageRoutingModule;
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


      var _account_verifying_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./account-verifying.page */
      "NIQc");

      var routes = [{
        path: '',
        component: _account_verifying_page__WEBPACK_IMPORTED_MODULE_3__["AccountVerifyingPage"]
      }];

      var AccountVerifyingPageRoutingModule = function AccountVerifyingPageRoutingModule() {
        _classCallCheck(this, AccountVerifyingPageRoutingModule);
      };

      AccountVerifyingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AccountVerifyingPageRoutingModule);
      /***/
    },

    /***/
    "NIQc":
    /*!*************************************************************!*\
      !*** ./src/app/account-verifying/account-verifying.page.ts ***!
      \*************************************************************/

    /*! exports provided: AccountVerifyingPage */

    /***/
    function NIQc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountVerifyingPage", function () {
        return AccountVerifyingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_account_verifying_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./account-verifying.page.html */
      "olB0");
      /* harmony import */


      var _account_verifying_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./account-verifying.page.scss */
      "QfrR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AccountVerifyingPage = /*#__PURE__*/function () {
        function AccountVerifyingPage(route) {
          _classCallCheck(this, AccountVerifyingPage);

          this.route = route;
        }

        _createClass(AccountVerifyingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            this.route.navigate(['tabs/home-logged']);
          }
        }]);

        return AccountVerifyingPage;
      }();

      AccountVerifyingPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      AccountVerifyingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-account-verifying',
        template: _raw_loader_account_verifying_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_verifying_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AccountVerifyingPage);
      /***/
    },

    /***/
    "QfrR":
    /*!***************************************************************!*\
      !*** ./src/app/account-verifying/account-verifying.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function QfrR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content.background {\n  --background: url('wp4792780-dark-phone-wallpapers.jpg') 0 0/100% 100% no-repeat;\n}\n\n.centered {\n  text-align: center;\n}\n\n.text {\n  font-family: cursive;\n}\n\nhr {\n  background: #ffae00;\n  width: 70% !important;\n}\n\nion-input {\n  border-radius: 20px;\n  border: 3px solid #ffae00;\n}\n\n.backIcon {\n  color: #ffae00;\n  font-size: 150%;\n}\n\n.back {\n  color: #ffae00;\n}\n\n.support {\n  margin-top: 50px;\n}\n\nion-icon {\n  color: #ffae00;\n  font-size: 350%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFjY291bnQtdmVyaWZ5aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdGQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBRUksb0JBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJhY2NvdW50LXZlcmlmeWluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5ke1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL3dwNDc5Mjc4MC1kYXJrLXBob25lLXdhbGxwYXBlcnMuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmNlbnRlcmVke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGV4dHsgIFxyXG4gICAgLy9mb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxufVxyXG5cclxuaHJ7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYigyNTUsIDE3NCwgMCk7XHJcbiAgICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDI1NSwgMTc0LCAwKTtcclxufVxyXG5cclxuLmJhY2tJY29uIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAxNzQsIDApO1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG59XHJcblxyXG4uYmFjayB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMTc0LCAwKTtcclxufVxyXG5cclxuLnN1cHBvcnR7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbmlvbi1pY29uIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAxNzQsIDApO1xyXG4gICAgZm9udC1zaXplOiAzNTAlO1xyXG59Il19 */";
      /***/
    },

    /***/
    "nhYi":
    /*!***************************************************************!*\
      !*** ./src/app/account-verifying/account-verifying.module.ts ***!
      \***************************************************************/

    /*! exports provided: AccountVerifyingPageModule */

    /***/
    function nhYi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountVerifyingPageModule", function () {
        return AccountVerifyingPageModule;
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


      var _account_verifying_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./account-verifying-routing.module */
      "LkXo");
      /* harmony import */


      var _account_verifying_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./account-verifying.page */
      "NIQc");

      var AccountVerifyingPageModule = function AccountVerifyingPageModule() {
        _classCallCheck(this, AccountVerifyingPageModule);
      };

      AccountVerifyingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _account_verifying_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountVerifyingPageRoutingModule"]],
        declarations: [_account_verifying_page__WEBPACK_IMPORTED_MODULE_6__["AccountVerifyingPage"]]
      })], AccountVerifyingPageModule);
      /***/
    },

    /***/
    "olB0":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account-verifying/account-verifying.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function olB0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content padding class=\"background\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"row mt-2\">\r\n        <div class=\"col-1\">\r\n          <ion-icon class=\"backIcon ml-2\" name=\"chevron-back-outline\"></ion-icon>\r\n        </div>\r\n        <div class=\"col-9\">\r\n          <h5 (click)=goBack() class=\"back\">Back</h5>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col text-center\">\r\n          <ion-text class=\"centered\" color=\"warning\">\r\n            <h2 class=\"text\">Verifying...</h2>\r\n            <hr>\r\n            <h5>Please wait till we verify your account.</h5>\r\n            <h5>It may take from 1 to 5 days.</h5>\r\n\r\n          </ion-text>\r\n        </div>\r\n        \r\n      </div>\r\n\r\n      <div class=\"row mt-5\">\r\n        <div class=\"col\">\r\n          <div class=\"support\">\r\n            <ion-text class=\"centered\" color=\"warning\">\r\n              <h1 class=\"text\">Support us by</h1>\r\n              <h2 class=\"text\">following on</h2>\r\n            </ion-text>\r\n    \r\n            <div class=\"col mt-5 text-center\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <ion-icon name=\"logo-instagram\"></ion-icon>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <ion-icon name=\"logo-twitter\"></ion-icon>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <ion-icon name=\"logo-facebook\"></ion-icon>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=account-verifying-account-verifying-module-es5.js.map