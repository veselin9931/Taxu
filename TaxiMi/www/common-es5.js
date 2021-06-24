(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "74mu":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function mu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context.abrupt("return", false);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function openURL(_x, _x2, _x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "Dsd+":
    /*!************************************************!*\
      !*** ./src/_services/shared/shared.service.ts ***!
      \************************************************/

    /*! exports provided: SharedService */

    /***/
    function Dsd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedService", function () {
        return SharedService;
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


      var _account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../account.service */
      "mpGk");

      var SharedService = /*#__PURE__*/function () {
        function SharedService(accountService) {
          _classCallCheck(this, SharedService);

          this.accountService = accountService;
        }

        _createClass(SharedService, [{
          key: "headerGerneration",
          value: function headerGerneration() {
            var user = this.accountService.userValue;
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(user.token)
            });
          }
        }]);

        return SharedService;
      }();

      SharedService.ctorParameters = function () {
        return [{
          type: _account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
        }];
      };

      SharedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], SharedService);
      /***/
    },

    /***/
    "Hmjx":
    /*!************************************************!*\
      !*** ./src/_services/wallet/wallet.service.ts ***!
      \************************************************/

    /*! exports provided: WalletService */

    /***/
    function Hmjx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WalletService", function () {
        return WalletService;
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


      var _account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../account.service */
      "mpGk");
      /* harmony import */


      var _shared_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/shared.service */
      "Dsd+");

      var WalletService = /*#__PURE__*/function () {
        function WalletService(http, sharedService, accountService) {
          _classCallCheck(this, WalletService);

          this.http = http;
          this.sharedService = sharedService;
          this.accountService = accountService;
        }

        _createClass(WalletService, [{
          key: "getMyWallet",
          value: function getMyWallet(userId) {
            var headers = this.sharedService.headerGerneration();
            return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/wallet/").concat(userId), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "chargeWallet",
          value: function chargeWallet(userId, amount) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(this.accountService.userValue.token)
            });
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/wallet/increase/").concat(userId, "/").concat(amount), {
              headers: headers,
              responseType: 'json'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "dischargeWallet",
          value: function dischargeWallet(userId, amount) {
            var headers = this.sharedService.headerGerneration();
            return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/wallet/decrease/").concat(userId, "/").concat(amount), {
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

        return WalletService;
      }();

      WalletService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]
        }, {
          type: _account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]
        }];
      };

      WalletService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], WalletService);
      /***/
    },

    /***/
    "JbSX":
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
      \*********************************************************************/

    /*! exports provided: c */

    /***/
    function JbSX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createButtonActiveGesture;
      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      "wEJo");
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      "qULd");
      /* harmony import */


      var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-f49d994d.js */
      "iWo5");

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    "Jhu6":
    /*!**********************************************!*\
      !*** ./src/_services/image/image.service.ts ***!
      \**********************************************/

    /*! exports provided: ImageService */

    /***/
    function Jhu6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageService", function () {
        return ImageService;
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

      var ImageService = /*#__PURE__*/function () {
        function ImageService(httpClient, sharedService) {
          _classCallCheck(this, ImageService);

          this.httpClient = httpClient;
          this.sharedService = sharedService;
        }

        _createClass(ImageService, [{
          key: "upload",
          value: function upload(data, folderName, userId, type) {
            return this.httpClient.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/image/").concat(folderName, "/").concat(userId, "/").concat(type), data, {
              reportProgress: true,
              observe: "events"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "getMyPicture",
          value: function getMyPicture(userId) {
            var headers = this.sharedService.headerGerneration();
            return this.httpClient.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/image/user/").concat(userId), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "getUserDocuments",
          value: function getUserDocuments(userId) {
            var headers = this.sharedService.headerGerneration();
            return this.httpClient.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/image/documents/").concat(userId), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "getUserCarPictures",
          value: function getUserCarPictures(userId) {
            var headers = this.sharedService.headerGerneration();
            return this.httpClient.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/image/cars/").concat(userId), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "removeDocument",
          value: function removeDocument(id) {
            var headers = this.sharedService.headerGerneration();
            return this.httpClient["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/image/").concat(id), {
              headers: headers
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

        return ImageService;
      }();

      ImageService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
        }];
      };

      ImageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], ImageService);
      /***/
    },

    /***/
    "NKua":
    /*!*************************************************************!*\
      !*** ./src/app/language-popover/language-popover.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function NKua(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5ndWFnZS1wb3BvdmVyLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "QhVT":
    /*!*************************************************************!*\
      !*** ./src/app/language-popover/language-popover.module.ts ***!
      \*************************************************************/

    /*! exports provided: LanguagePopoverPageModule */

    /***/
    function QhVT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguagePopoverPageModule", function () {
        return LanguagePopoverPageModule;
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


      var _language_popover_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./language-popover-routing.module */
      "Wucn");
      /* harmony import */


      var _language_popover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./language-popover.page */
      "oXKM");

      var LanguagePopoverPageModule = function LanguagePopoverPageModule() {
        _classCallCheck(this, LanguagePopoverPageModule);
      };

      LanguagePopoverPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _language_popover_routing_module__WEBPACK_IMPORTED_MODULE_5__["LanguagePopoverPageRoutingModule"]],
        declarations: [_language_popover_page__WEBPACK_IMPORTED_MODULE_6__["LanguagePopoverPage"]]
      })], LanguagePopoverPageModule);
      /***/
    },

    /***/
    "RX8M":
    /*!********************************************!*\
      !*** ./src/_services/chat/chat.service.ts ***!
      \********************************************/

    /*! exports provided: ChatService */

    /***/
    function RX8M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatService", function () {
        return ChatService;
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


      var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @aspnet/signalr */
      "Gpoy");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../_models */
      "VeQZ");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../account.service */
      "mpGk");
      /* harmony import */


      var _order_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../order/order.service */
      "8k+r"); // import signalR


      var ChatService = /*#__PURE__*/function () {
        function ChatService(http, accountService, orderService) {
          var _this = this;

          _classCallCheck(this, ChatService);

          // this.connection.onclose(async () => {
          //   await this.start();
          // });
          this.http = http;
          this.accountService = accountService;
          this.orderService = orderService;
          this.messages = [];
          this.connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_2__["HubConnectionBuilder"]().withUrl("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].signalRUrl, "/orderHub")).build();
          this.POST_URL = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].signalRUrl, "/api/chat/send");
          this.receivedMessageObject = new _models__WEBPACK_IMPORTED_MODULE_4__["Message"]();
          this.sharedObj = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          this.connection.on("MessageReceived", function (user, message) {
            _this.mapReceivedMessage(user, message);
          });
        }

        _createClass(ChatService, [{
          key: "stop",
          value: function stop() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.connection.stop();

                    case 2:
                      console.log('Disconnected');

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } // Start the connection

        }, {
          key: "start",
          value: function start() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.prev = 0;
                      _context3.next = 3;
                      return this.connection.start();

                    case 3:
                      _context3.next = 5;
                      return this.orderService.getOrderForChat(this.accountService.userValue.id).subscribe(function (x) {
                        if (_this2.orderService.currentOrderId) {
                          _this2.connection.invoke("AddToRoom", _this2.orderService.currentOrderId);
                        } else {
                          if (x == null) {} else {
                            _this2.connection.invoke("AddToRoom", x.id);
                          }
                        }
                      });

                    case 5:
                      console.log("connected in chat");
                      _context3.next = 13;
                      break;

                    case 8:
                      _context3.prev = 8;
                      _context3.t0 = _context3["catch"](0);
                      console.log(_context3.t0);
                      console.log("Reoonnecting in 1 sec.");
                      setTimeout(function () {
                        return _this2.start();
                      }, 1000);

                    case 13:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[0, 8]]);
            }));
          }
        }, {
          key: "mapReceivedMessage",
          value: function mapReceivedMessage(user, message) {
            this.receivedMessageObject.user = user;
            this.receivedMessageObject.text = message;
            this.messages.push(this.receivedMessageObject);
            this.sharedObj.next(this.receivedMessageObject);
          }
        }, {
          key: "broadcastMessage",
          value: function broadcastMessage(msgDto) {
            var _this3 = this;

            this.orderService.getOrderForChat(this.accountService.userValue.id).subscribe(function (x) {
              if (x.id) {
                _this3.http.post("".concat(_this3.POST_URL, "/").concat(x.id), msgDto).subscribe(function () {});
              }
            });
          }
        }, {
          key: "retrieveMappedObject",
          value: function retrieveMappedObject() {
            return this.sharedObj.asObservable();
          }
        }]);

        return ChatService;
      }();

      ChatService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"]
        }, {
          type: _order_order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"]
        }];
      };

      ChatService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ChatService);
      /***/
    },

    /***/
    "VQrx":
    /*!***************************************************!*\
      !*** ./src/_services/suborder/options.service.ts ***!
      \***************************************************/

    /*! exports provided: OptionsService */

    /***/
    function VQrx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OptionsService", function () {
        return OptionsService;
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


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../shared/shared.service */
      "Dsd+");

      var OptionsService = /*#__PURE__*/function () {
        function OptionsService(http, sharedService) {
          _classCallCheck(this, OptionsService);

          this.http = http;
          this.sharedService = sharedService;
          this.orders = [];
        }

        _createClass(OptionsService, [{
          key: "getOptions",
          value: function getOptions() {
            var headers = this.sharedService.headerGerneration();
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/suborder/options"), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "getOptionById",
          value: function getOptionById(id) {
            var headers = this.sharedService.headerGerneration();
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/suborder/options/").concat(id), {
              headers: headers
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

        return OptionsService;
      }();

      OptionsService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
        }];
      };

      OptionsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], OptionsService);
      /***/
    },

    /***/
    "Wucn":
    /*!*********************************************************************!*\
      !*** ./src/app/language-popover/language-popover-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: LanguagePopoverPageRoutingModule */

    /***/
    function Wucn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguagePopoverPageRoutingModule", function () {
        return LanguagePopoverPageRoutingModule;
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


      var _language_popover_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./language-popover.page */
      "oXKM");

      var routes = [{
        path: '',
        component: _language_popover_page__WEBPACK_IMPORTED_MODULE_3__["LanguagePopoverPage"]
      }];

      var LanguagePopoverPageRoutingModule = function LanguagePopoverPageRoutingModule() {
        _classCallCheck(this, LanguagePopoverPageRoutingModule);
      };

      LanguagePopoverPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LanguagePopoverPageRoutingModule);
      /***/
    },

    /***/
    "Wwn5":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js ***!
      \**************************************************************************/

    /*! exports provided: CallNumber */

    /***/
    function Wwn5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CallNumber", function () {
        return CallNumber;
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


      var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/core */
      "C6fG");

      var CallNumber =
      /** @class */
      function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CallNumber, _super);

        function CallNumber() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        CallNumber.prototype.callNumber = function (numberToCall, bypassAppChooser) {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "callNumber", {
            "callbackOrder": "reverse"
          }, arguments);
        };

        CallNumber.prototype.isCallSupported = function () {
          return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isCallSupported", {}, arguments);
        };

        CallNumber.pluginName = "CallNumber";
        CallNumber.plugin = "call-number";
        CallNumber.pluginRef = "plugins.CallNumber";
        CallNumber.repo = "https://github.com/Rohfosho/CordovaCallNumberPlugin";
        CallNumber.platforms = ["Android", "iOS"];

        CallNumber.ɵfac = function CallNumber_Factory(t) {
          return ɵCallNumber_BaseFactory(t || CallNumber);
        };

        CallNumber.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
          token: CallNumber,
          factory: function factory(t) {
            return CallNumber.ɵfac(t);
          }
        });

        var ɵCallNumber_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CallNumber);

        (function () {
          (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CallNumber, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
          }], null, null);
        })();

        return CallNumber;
      }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvY2FsbC1udW1iZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0FBQ3hFO0FBSVUsSUEwQnNCLDhCQUFpQjtBQUFDO0FBRTlCO0FBQytDO0FBQ2pFLElBTUEsK0JBQVUsYUFBQyxZQUFvQixFQUFFLGdCQUF5QjtBQU12RCxJQUdILG9DQUFlO0FBSXNCO0FBQTBDO0FBQXVDO0FBQWlEO0FBQTZFOzhDQXhCclAsVUFBVTs7Ozs7MEJBQ0w7QUFBQyxxQkFoQ1A7QUFBRSxFQWdDOEIsaUJBQWlCO0FBQ2hELFNBRFksVUFBVTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQ2FsbCBOdW1iZXJcbiAqIEBkZXNjcmlwdGlvblxuICogQ2FsbCBhIG51bWJlciBkaXJlY3RseSBmcm9tIHlvdXIgQ29yZG92YS9Jb25pYyBhcHBsaWNhdGlvbi5cbiAqICoqTk9URSoqOiBUaGUgaU9TIFNpbXVsYXRvciAoYW5kIG1heWJlIEFuZHJvaWQgU2ltdWxhdG9ycykgZG8gbm90IHByb3ZpZGUgYWNjZXNzIHRvIHRoZSBwaG9uZSBzdWJzeXN0ZW0uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDYWxsTnVtYmVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jYWxsLW51bWJlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FsbE51bWJlcjogQ2FsbE51bWJlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuY2FsbE51bWJlci5jYWxsTnVtYmVyKFwiMTgwMDEwMTAxMDFcIiwgdHJ1ZSlcbiAqICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKCdMYXVuY2hlZCBkaWFsZXIhJywgcmVzKSlcbiAqICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3IgbGF1bmNoaW5nIGRpYWxlcicsIGVycikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0NhbGxOdW1iZXInLFxuICBwbHVnaW46ICdjYWxsLW51bWJlcicsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuQ2FsbE51bWJlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vUm9oZm9zaG8vQ29yZG92YUNhbGxOdW1iZXJQbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FsbE51bWJlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENhbGxzIGEgcGhvbmUgbnVtYmVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBudW1iZXJUb0NhbGwgVGhlIHBob25lIG51bWJlciB0byBjYWxsIGFzIGEgc3RyaW5nXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gYnlwYXNzQXBwQ2hvb3NlciBTZXQgdG8gdHJ1ZSB0byBieXBhc3MgdGhlIGFwcCBjaG9vc2VyIGFuZCBnbyBkaXJlY3RseSB0byBkaWFsZXJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgY2FsbE51bWJlcihudW1iZXJUb0NhbGw6IHN0cmluZywgYnlwYXNzQXBwQ2hvb3NlcjogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGNhbGwgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0NhbGxTdXBwb3J0ZWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

      /***/

    },

    /***/
    "acej":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function acej(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      "1vRN");

      var attachComponent = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  if (!delegate) {
                    _context4.next = 2;
                    break;
                  }

                  return _context4.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context4.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);
                  _context4.next = 10;
                  return new Promise(function (resolve) {
                    return Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve);
                  });

                case 10:
                  return _context4.abrupt("return", el);

                case 11:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function attachComponent(_x5, _x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "h3R7":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function h3R7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "oXKM":
    /*!***********************************************************!*\
      !*** ./src/app/language-popover/language-popover.page.ts ***!
      \***********************************************************/

    /*! exports provided: LanguagePopoverPage */

    /***/
    function oXKM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguagePopoverPage", function () {
        return LanguagePopoverPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_language_popover_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./language-popover.page.html */
      "po2e");
      /* harmony import */


      var _language_popover_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./language-popover.page.scss */
      "NKua");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var src_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/_services */
      "8Xdb");

      var LanguagePopoverPage = /*#__PURE__*/function () {
        function LanguagePopoverPage(popoverController, translate, accountService) {
          _classCallCheck(this, LanguagePopoverPage);

          this.popoverController = popoverController;
          this.translate = translate;
          this.accountService = accountService;
          this.selected = "";
          this.languages = [{
            text: 'Български',
            value: 'bg',
            img: '../../assets/bulgaria.png'
          }, {
            text: 'English',
            value: 'en',
            img: '../../assets/english.png'
          } //{ text: 'Spanish', value: 'es', img: '../../assets/spain.png' }
          ];
        }

        _createClass(LanguagePopoverPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "select",
          value: function select(lng) {
            this.translate.use(lng);
            this.selected = lng;

            if (this.accountService.userValue) {
              this.accountService.userValue.choosenLanguage = lng;
              this.accountService.updateLanguage(this.accountService.userValue.id, lng).subscribe(function () {});
            }

            this.popoverController.dismiss();
          }
        }]);

        return LanguagePopoverPage;
      }();

      LanguagePopoverPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }, {
          type: src_services__WEBPACK_IMPORTED_MODULE_6__["AccountService"]
        }];
      };

      LanguagePopoverPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-language-popover',
        template: _raw_loader_language_popover_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_language_popover_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LanguagePopoverPage);
      /***/
    },

    /***/
    "po2e":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/language-popover/language-popover.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function po2e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-list>\r\n  <ion-item button *ngFor=\"let lng of languages\" (click)=\"select(lng.value)\" detail=\"false\">\r\n    <img [src]=\"lng.img\" height=\"25\" width=\"25\" slot=\"start\">\r\n    <ion-label text-wrap>\r\n      {{lng.text}}\r\n    </ion-label>\r\n    <ion-icon slot=\"end\" name=\"checkmark\" *ngIf=\"lng.value == selected\"></ion-icon>\r\n  </ion-item>\r\n</ion-list>";
      /***/
    },

    /***/
    "qULd":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, d, h */

    /***/
    function qULd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return hapticImpact;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelectionEnd;
      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    "qkHp":
    /*!****************************************************!*\
      !*** ./src/_services/suborder/suborder.service.ts ***!
      \****************************************************/

    /*! exports provided: SuborderService */

    /***/
    function qkHp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SuborderService", function () {
        return SuborderService;
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


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../shared/shared.service */
      "Dsd+");

      var SuborderService = /*#__PURE__*/function () {
        function SuborderService(http, sharedService) {
          _classCallCheck(this, SuborderService);

          this.http = http;
          this.sharedService = sharedService;
        }

        _createClass(SuborderService, [{
          key: "getAllSubOrders",
          value: function getAllSubOrders(status) {
            var headers = this.sharedService.headerGerneration();
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/suborder/status/").concat(status), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "refuseSubOrder",
          value: function refuseSubOrder(orderId) {
            var headers = this.sharedService.headerGerneration();
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/suborder/refuse/").concat(orderId), {
              status: "Waiting"
            }, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "closedSubOrder",
          value: function closedSubOrder(orderId) {
            var headers = this.sharedService.headerGerneration();
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/suborder/closed/").concat(orderId), {
              status: "Canceled"
            }, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "acceptedSubOrders",
          value: function acceptedSubOrders(orderId) {
            var headers = this.sharedService.headerGerneration();
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/suborder/accepted/").concat(orderId), {
              status: "Accepted"
            }, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "inProgressSubOrders",
          value: function inProgressSubOrders(orderId) {
            var headers = this.sharedService.headerGerneration();
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/suborder/inProgress/").concat(orderId), {
              status: "InProgress"
            }, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "getSubOrderByUserId",
          value: function getSubOrderByUserId(userId) {
            var headers = this.sharedService.headerGerneration();
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/suborder/user/").concat(userId), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "getMyOrder",
          value: function getMyOrder(id) {
            var headers = this.sharedService.headerGerneration();
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/suborder/").concat(id), {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "createSubOrder",
          value: function createSubOrder(data) {
            var headers = this.sharedService.headerGerneration();
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/SubOrder"), data, {
              headers: headers,
              responseType: 'text'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "editStatus",
          value: function editStatus(orderId, data) {
            var headers = this.sharedService.headerGerneration();
            return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/SubOrder/").concat(orderId), data, {
              headers: headers,
              responseType: 'text'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
          }
        }, {
          key: "deleteOrder",
          value: function deleteOrder(id) {
            var headers = this.sharedService.headerGerneration();
            return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "/api/suborder/").concat(id), {
              headers: headers
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

        return SuborderService;
      }();

      SuborderService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
        }];
      };

      SuborderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], SuborderService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map