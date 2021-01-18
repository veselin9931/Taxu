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

      var TravellingPage = /*#__PURE__*/function () {
        function TravellingPage(formBuilder, route) {
          _classCallCheck(this, TravellingPage);

          this.formBuilder = formBuilder;
          this.route = route;
          this.isSubmitted = false;
        }

        _createClass(TravellingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.formBuilder.group({
              location: [''],
              destination: [''],
              increaseAmount: ['']
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
            }

            this.clearForm();
          }
        }, {
          key: "cancelOrder",
          value: function cancelOrder() {
            this.isSubmitted = false;
            console.log('Canceled order');
            this.clearForm();
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.route.navigate(['tabs/home-logged']);
          }
        }, {
          key: "clearForm",
          value: function clearForm() {
            this.form.reset({
              'location': '',
              'destination': '',
              'increaseAmount': ''
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

    /*! exports provided: TravellingPageModule */

    /***/
    function JQQN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
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

      var TravellingPageModule = function TravellingPageModule() {
        _classCallCheck(this, TravellingPageModule);
      };

      TravellingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _travelling_routing_module__WEBPACK_IMPORTED_MODULE_5__["TravellingPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
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


      __webpack_exports__["default"] = "ion-content.background {\n  --background: url('wp4792780-dark-phone-wallpapers.jpg') 0 0/100% 100% no-repeat;\n}\n\n.centered {\n  text-align: center;\n}\n\n.text {\n  font-family: cursive;\n  font-size: 2.4em;\n}\n\ni {\n  color: #ffae00;\n}\n\nion-input {\n  border-radius: 10px;\n  border: 3px solid #ffae00;\n}\n\nion-select {\n  color: #383838;\n  background-color: white;\n  border-radius: 10px;\n  border: 3px solid #ffae00;\n}\n\n.blink_me {\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite;\n}\n\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n\n.backIcon {\n  color: #ffae00;\n  font-size: 150%;\n}\n\n.back {\n  color: #ffae00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRyYXZlbGxpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0ZBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFFSSxvQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSw2Q0FBQTtVQUFBLHFDQUFBO0FBQUo7O0FBR0U7RUFDRTtJQUNFLFVBQUE7RUFBSjtBQUNGOztBQUhFO0VBQ0U7SUFDRSxVQUFBO0VBQUo7QUFDRjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxjQUFBO0FBREoiLCJmaWxlIjoidHJhdmVsbGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5iYWNrZ3JvdW5ke1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL3dwNDc5Mjc4MC1kYXJrLXBob25lLXdhbGxwYXBlcnMuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmNlbnRlcmVke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGV4dHsgIFxyXG4gICAgLy9mb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMi40ZW07XHJcbn1cclxuXHJcbml7XHJcbiAgICBjb2xvcjpyZ2IoMjU1LCAxNzQsIDApO1xyXG59XHJcblxyXG5pb24taW5wdXR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDI1NSwgMTc0LCAwKTtcclxufVxyXG5cclxuaW9uLXNlbGVjdHtcclxuICAgIGNvbG9yOiByZ2IoNTYsIDU2LCA1Nik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjU1LCAxNzQsIDApO1xyXG59XHJcblxyXG4uYmxpbmtfbWUge1xyXG4gICAgYW5pbWF0aW9uOiBibGlua2VyIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBibGlua2VyIHtcclxuICAgIDUwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLmJhY2tJY29uIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAxNzQsIDApO1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG59XHJcblxyXG4uYmFjayB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMTc0LCAwKTtcclxufSJdfQ== */";
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


      __webpack_exports__["default"] = "<ion-content padding class=\"background\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"row mt-2\">\r\n        <div class=\"col-1\">\r\n          <ion-icon class=\"backIcon ml-2\" name=\"chevron-back-outline\"></ion-icon>\r\n\r\n        </div>\r\n        <div class=\"col-9\">\r\n          <h5 (click)=goBack() class=\"back\">Back</h5>\r\n        </div>\r\n      </div>\r\n      <ion-text>\r\n\r\n        <div class=\"row\">\r\n          <form [formGroup]=\"form\" novalidate class=\"col\">\r\n            <div class=\"form-group col mt-5\">\r\n              <ion-label><i>Choose your starting point.</i></ion-label>\r\n              <ion-input formControlName=\"location\" type=\"text\" class=\"form-control\" placeholder=\" From\"></ion-input>\r\n            </div>\r\n\r\n            <div class=\"form-group col mt-3\">\r\n              <ion-label><i>Choose your endpoint.</i></ion-label>\r\n              <ion-input formControlName=\"destination\" type=\"text\" class=\"form-control\" placeholder=\" To\"></ion-input>\r\n            </div>\r\n\r\n            <div class=\"form-group col mt-3\">\r\n              <ion-label><i>Increase amount</i></ion-label>\r\n              <ion-select formControlName=\"increaseAmount\" placeholder=\"Select amount you want to increase\">\r\n                <ion-select-option value=\"1\">1</ion-select-option>\r\n                <ion-select-option value=\"2\">2</ion-select-option>\r\n                <ion-select-option value=\"3\">3</ion-select-option>\r\n                <ion-select-option value=\"4\">4</ion-select-option>\r\n                <ion-select-option value=\"5\">5</ion-select-option>\r\n                <ion-select-option value=\"6\">6</ion-select-option>\r\n                <ion-select-option value=\"7\">7</ion-select-option>\r\n                <ion-select-option value=\"8\">8</ion-select-option>\r\n                <ion-select-option value=\"9\">9</ion-select-option>\r\n                <ion-select-option value=\"10\">10</ion-select-option>\r\n\r\n              </ion-select>\r\n            </div>\r\n\r\n            <div class=\"col-md-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col mt-3\">\r\n                  <ion-button [disabled]=\"isSubmitted == true\" (click)=\"onSubmit()\" type=\"submit\" color=\"warning\">Find\r\n                  </ion-button>\r\n                </div>\r\n\r\n                <div class=\"col ml-2 mt-3\">\r\n                  <ion-button hidden (click)=\"onSubmit()\" type=\"submit\" color=\"warning\">Find</ion-button>\r\n                </div>\r\n\r\n                <div class=\"col mt-3 ml-2\">\r\n                  <ion-button [disabled]=\"isSubmitted == false\" (click)=\"cancelOrder()\" type=\"submit\" color=\"danger\">\r\n                    Cancel</ion-button>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </form>\r\n          <div *ngIf=\"isSubmitted == true\" class=\"blink_me col-md-12 mt-3 text-center\">\r\n            <ion-button type=\"submit\" color=\"warning\">Looking for a driver</ion-button>\r\n          </div>\r\n\r\n          <div class=\"col-md-12 mt-5\">\r\n            <div class=\"mapouter\">\r\n              <div class=\"gmap_canvas\">\r\n                <iframe width=\"600\" height=\"500\" id=\"gmap_canvas\"\r\n                  src=\"https://maps.google.com/maps?q=Sofia&t=&z=11&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\"\r\n                  scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\">\r\n                </iframe>\r\n                <br>\r\n                <style>\r\n                  .mapouter {\r\n                    margin-left: 9%;\r\n                    position: relative;\r\n                    text-align: right;\r\n                    height: 80%;\r\n                    width: 90%;\r\n                  }\r\n                </style>\r\n                <style>\r\n                  .gmap_canvas {\r\n                    overflow: hidden;\r\n                    background: none !important;\r\n                    height: 80%;\r\n                    width: 90%;\r\n                  }\r\n                </style>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n\r\n      </ion-text>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=travelling-travelling-module-es5.js.map