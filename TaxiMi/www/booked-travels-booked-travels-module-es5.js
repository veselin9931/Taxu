(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["booked-travels-booked-travels-module"], {
    /***/
    "7SDU":
    /*!*****************************************************************!*\
      !*** ./src/app/booked-travels/booked-travels-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: BookedTravelsPageRoutingModule */

    /***/
    function SDU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookedTravelsPageRoutingModule", function () {
        return BookedTravelsPageRoutingModule;
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


      var _booked_travels_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./booked-travels.page */
      "mCiU");

      var routes = [{
        path: '',
        component: _booked_travels_page__WEBPACK_IMPORTED_MODULE_3__["BookedTravelsPage"]
      }];

      var BookedTravelsPageRoutingModule = function BookedTravelsPageRoutingModule() {
        _classCallCheck(this, BookedTravelsPageRoutingModule);
      };

      BookedTravelsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BookedTravelsPageRoutingModule);
      /***/
    },

    /***/
    "9/DM":
    /*!*********************************************************!*\
      !*** ./src/app/booked-travels/booked-travels.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function DM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color:#e9e9e9;\n}\n\nion-toolbar {\n  --ion-background-color:#eeeeee;\n}\n\n#map {\n  height: 100%;\n  width: 100%;\n}\n\nion-title {\n  text-align: center;\n}\n\nh5 {\n  font-size: 0.9em;\n}\n\n#toolbarIcon {\n  font-size: 1.7em;\n}\n\n.fonted {\n  font-family: Open Sans Light;\n}\n\n.centered {\n  text-align: center;\n}\n\n.text {\n  font-family: Open Sans Light;\n}\n\nhr {\n  background: #eeeeee;\n  width: 70% !important;\n}\n\n.blink_me {\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite;\n}\n\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJvb2tlZC10cmF2ZWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDhCQUFBO0FBQUo7O0FBR0E7RUFDSSw4QkFBQTtBQUFKOztBQUdJO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFJQTtFQUNJLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtBQURKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLDRCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUdBO0VBRUksNEJBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFNQTtFQUNJLDZDQUFBO1VBQUEscUNBQUE7QUFISjs7QUFNRTtFQUNFO0lBQ0UsVUFBQTtFQUhKO0FBQ0Y7O0FBQUU7RUFDRTtJQUNFLFVBQUE7RUFISjtBQUNGIiwiZmlsZSI6ImJvb2tlZC10cmF2ZWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLy8tLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvd3A0NzkyNzgwLWRhcmstcGhvbmUtd2FsbHBhcGVycy5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZTllOWU5O1xyXG59XHJcblxyXG5pb24tdG9vbGJhcntcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2VlZWVlZTtcclxufVxyXG5cclxuICAgICNtYXAge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmg1e1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxufVxyXG4jdG9vbGJhckljb257XHJcbiAgICBmb250LXNpemU6IDEuN2VtO1xyXG59XHJcblxyXG4uZm9udGVke1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBMaWdodDtcclxufVxyXG5cclxuLmNlbnRlcmVke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGV4dHsgIFxyXG4gICAgLy9mb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIExpZ2h0O1xyXG59XHJcblxyXG5ocntcclxuICAgIGJhY2tncm91bmQ6I2VlZWVlZTtcclxuICAgIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy9jaGF0XHJcblxyXG4uYmxpbmtfbWUge1xyXG4gICAgYW5pbWF0aW9uOiBibGlua2VyIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBibGlua2VyIHtcclxuICAgIDUwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIl19 */";
      /***/
    },

    /***/
    "A5Aa":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booked-travels/booked-travels.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function A5Aa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>\r\n      <ion-label>{{'Booked' | translate}}</ion-label>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon (click)='openLanguagePopover($event)' id=\"toolbarIcon\" name=\"language-outline\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "mCiU":
    /*!*******************************************************!*\
      !*** ./src/app/booked-travels/booked-travels.page.ts ***!
      \*******************************************************/

    /*! exports provided: BookedTravelsPage */

    /***/
    function mCiU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookedTravelsPage", function () {
        return BookedTravelsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_booked_travels_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./booked-travels.page.html */
      "A5Aa");
      /* harmony import */


      var _booked_travels_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./booked-travels.page.scss */
      "9/DM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @aspnet/signalr */
      "Gpoy");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../language-popover/language-popover.page */
      "oXKM");

      var BookedTravelsPage = /*#__PURE__*/function () {
        function BookedTravelsPage(popoverController) {
          _classCallCheck(this, BookedTravelsPage);

          this.popoverController = popoverController;
        }

        _createClass(BookedTravelsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_4__["HubConnectionBuilder"]().configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_4__["LogLevel"].Information).withUrl("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].signalRUrl, "/orderHub")).build();
            connection.start().then(function () {
              console.log('signalR Connected in travelling');
            })["catch"](function (err) {
              return console.log(err);
            }); //Make backend logic for this signalr methods
            // connection.on('CreatedOrder', () => {
            // });
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
                        component: _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_7__["LanguagePopoverPage"],
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
        }]);

        return BookedTravelsPage;
      }();

      BookedTravelsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]
        }];
      };

      BookedTravelsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-booked-travels',
        template: _raw_loader_booked_travels_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_booked_travels_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BookedTravelsPage);
      /***/
    },

    /***/
    "mbC9":
    /*!*********************************************************!*\
      !*** ./src/app/booked-travels/booked-travels.module.ts ***!
      \*********************************************************/

    /*! exports provided: HttpLoaderFactory, BookedTravelsPageModule */

    /***/
    function mbC9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookedTravelsPageModule", function () {
        return BookedTravelsPageModule;
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


      var _booked_travels_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./booked-travels-routing.module */
      "7SDU");
      /* harmony import */


      var _booked_travels_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./booked-travels.page */
      "mCiU");
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

      var BookedTravelsPageModule = function BookedTravelsPageModule() {
        _classCallCheck(this, BookedTravelsPageModule);
      };

      BookedTravelsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _booked_travels_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookedTravelsPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
          }
        }), _language_popover_language_popover_module__WEBPACK_IMPORTED_MODULE_10__["LanguagePopoverPageModule"]],
        declarations: [_booked_travels_page__WEBPACK_IMPORTED_MODULE_6__["BookedTravelsPage"]]
      })], BookedTravelsPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=booked-travels-booked-travels-module-es5.js.map