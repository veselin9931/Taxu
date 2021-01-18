(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["driving-driving-module"], {
    /***/
    "+nG7":
    /*!*******************************************!*\
      !*** ./src/app/driving/driving.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function nG7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content.background {\n  --background: url('wp4792780-dark-phone-wallpapers.jpg') 0 0/100% 100% no-repeat;\n}\n\n.centered {\n  text-align: center;\n}\n\n.text {\n  font-family: cursive;\n}\n\nhr {\n  background: #ffae00;\n  width: 70% !important;\n}\n\nion-input {\n  border-radius: 20px;\n  border: 3px solid #ffae00;\n}\n\n.backIcon {\n  color: #ffae00;\n  font-size: 150%;\n}\n\n.back {\n  color: #ffae00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRyaXZpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0ZBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFFSSxvQkFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7QUFBSiIsImZpbGUiOiJkcml2aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJhY2tncm91bmR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvd3A0NzkyNzgwLWRhcmstcGhvbmUtd2FsbHBhcGVycy5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uY2VudGVyZWR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0eyAgXHJcbiAgICAvL2ZvbnQtZmFtaWx5OiAnRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG59XHJcblxyXG5ocntcclxuICAgIGJhY2tncm91bmQ6cmdiKDI1NSwgMTc0LCAwKTtcclxuICAgIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjU1LCAxNzQsIDApO1xyXG59XHJcblxyXG4uYmFja0ljb24ge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDE3NCwgMCk7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbn1cclxuXHJcbi5iYWNrIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAxNzQsIDApO1xyXG59Il19 */";
      /***/
    },

    /***/
    "RXA5":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/driving/driving.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function RXA5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content padding class=\"background\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"row mt-2\">\r\n        <div class=\"col-1\">\r\n          <ion-icon class=\"backIcon ml-2\" name=\"chevron-back-outline\"></ion-icon>\r\n        </div>\r\n        <div class=\"col-9\">\r\n          <h5 (click)=goBack() class=\"back\">Back</h5>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"verifiedAccount == false\" class=\"row\">\r\n        <div class=\"col text-center\">\r\n          <ion-text class=\"centered\" color=\"warning\">\r\n            <h2 class=\"text\">Become a driver</h2>\r\n            <hr>\r\n            <h5>Please upload your documents, so we can verify your account</h5>\r\n          </ion-text>\r\n\r\n          <form [formGroup]=\"form\"  novalidate class=\"col-md-6\">\r\n            <div class=\"form-group col mt-5\">\r\n              <ion-button color=\"warning\" expand=\"block\" (click)=\"uploadLicense()\">\r\n                <span class=\"ion-text-left\">Upload driving license</span></ion-button>\r\n            </div>\r\n\r\n            <div class=\"form-group col mt-5\">\r\n              <ion-button color=\"warning\" expand=\"block\" (click)=\"uploadCarTicket()\">\r\n                <span class=\"ion-text-left\">Upload car ticket</span></ion-button>\r\n            </div>\r\n\r\n            <div class=\"form-group col mt-5\">\r\n              <ion-button color=\"warning\" expand=\"block\" (click)=\"uploadCarPic()\">\r\n                <span class=\"ion-text-left\">Upload car picture</span></ion-button>\r\n            </div>\r\n            \r\n\r\n            <div class=\"col-md-12 mt-3\">\r\n              <ion-button (click)=\"onSubmit()\" type=\"submit\" color=\"warning\">Submit</ion-button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"verifiedAccount == true\" class=\"row\">\r\n        <div class=\"col text-center\">\r\n          <ion-text class=\"centered\" color=\"warning\">\r\n            <h2 class=\"text\">Driving</h2>\r\n            <hr>\r\n            <h5>Coming soon...</h5>\r\n          </ion-text>\r\n\r\n          \r\n\r\n        </div>\r\n        \r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "T8xI":
    /*!*****************************************!*\
      !*** ./src/app/driving/driving.page.ts ***!
      \*****************************************/

    /*! exports provided: DrivingPage */

    /***/
    function T8xI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DrivingPage", function () {
        return DrivingPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_driving_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./driving.page.html */
      "RXA5");
      /* harmony import */


      var _driving_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./driving.page.scss */
      "+nG7");
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

      var DrivingPage = /*#__PURE__*/function () {
        function DrivingPage(route, formBuilder) {
          _classCallCheck(this, DrivingPage);

          this.route = route;
          this.formBuilder = formBuilder;
          this.verifiedAccount = true;
          this.isSubmitted = false;
          this.loading = false;
        }

        _createClass(DrivingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.formBuilder.group({
              firstName: ['']
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.route.navigate(['tabs/home-logged']);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.isSubmitted = true;

            if (!this.form.valid) {
              console.log('Please provide all the required values!');
              return false;
            } else {
              console.log('Successfully uploaded your data.');
              this.route.navigate(['tabs/verifying']);
            }

            this.clearForm();
          }
        }, {
          key: "uploadLicense",
          value: function uploadLicense() {
            console.log('Uploaded drivers license!');
          }
        }, {
          key: "uploadCarTicket",
          value: function uploadCarTicket() {
            console.log('Uploaded car ticket!');
          }
        }, {
          key: "uploadCarPic",
          value: function uploadCarPic() {
            console.log('Uploaded car picture!');
          }
        }, {
          key: "clearForm",
          value: function clearForm() {
            this.form.reset({
              'firstName': ''
            });
          }
        }]);

        return DrivingPage;
      }();

      DrivingPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }];
      };

      DrivingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-driving',
        template: _raw_loader_driving_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_driving_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DrivingPage);
      /***/
    },

    /***/
    "g7Ce":
    /*!*******************************************!*\
      !*** ./src/app/driving/driving.module.ts ***!
      \*******************************************/

    /*! exports provided: DrivingPageModule */

    /***/
    function g7Ce(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DrivingPageModule", function () {
        return DrivingPageModule;
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


      var _driving_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./driving-routing.module */
      "tbxs");
      /* harmony import */


      var _driving_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./driving.page */
      "T8xI");

      var DrivingPageModule = function DrivingPageModule() {
        _classCallCheck(this, DrivingPageModule);
      };

      DrivingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _driving_routing_module__WEBPACK_IMPORTED_MODULE_5__["DrivingPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_driving_page__WEBPACK_IMPORTED_MODULE_6__["DrivingPage"]]
      })], DrivingPageModule);
      /***/
    },

    /***/
    "tbxs":
    /*!***************************************************!*\
      !*** ./src/app/driving/driving-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: DrivingPageRoutingModule */

    /***/
    function tbxs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DrivingPageRoutingModule", function () {
        return DrivingPageRoutingModule;
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


      var _driving_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./driving.page */
      "T8xI");

      var routes = [{
        path: '',
        component: _driving_page__WEBPACK_IMPORTED_MODULE_3__["DrivingPage"]
      }];

      var DrivingPageRoutingModule = function DrivingPageRoutingModule() {
        _classCallCheck(this, DrivingPageRoutingModule);
      };

      DrivingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DrivingPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=driving-driving-module-es5.js.map