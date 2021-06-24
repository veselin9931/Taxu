(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "Dsd+":
/*!************************************************!*\
  !*** ./src/_services/shared/shared.service.ts ***!
  \************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../account.service */ "mpGk");




let SharedService = class SharedService {
    constructor(accountService) {
        this.accountService = accountService;
    }
    headerGerneration() {
        const user = this.accountService.userValue;
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}` });
    }
};
SharedService.ctorParameters = () => [
    { type: _account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }
];
SharedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], SharedService);



/***/ }),

/***/ "Hmjx":
/*!************************************************!*\
  !*** ./src/_services/wallet/wallet.service.ts ***!
  \************************************************/
/*! exports provided: WalletService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletService", function() { return WalletService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../account.service */ "mpGk");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.service */ "Dsd+");








let WalletService = class WalletService {
    constructor(http, sharedService, accountService) {
        this.http = http;
        this.sharedService = sharedService;
        this.accountService = accountService;
    }
    getMyWallet(userId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/wallet/${userId}`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    chargeWallet(userId, amount) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.accountService.userValue.token}` });
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/wallet/increase/${userId}/${amount}`, { headers, responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    dischargeWallet(userId, amount) {
        const headers = this.sharedService.headerGerneration();
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/wallet/decrease/${userId}/${amount}`, { headers, responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            console.log('Client side error.');
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // server-side error
            console.log('Server side error.');
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
WalletService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
    { type: _account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"] }
];
WalletService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], WalletService);



/***/ }),

/***/ "JbSX":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
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
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "Jhu6":
/*!**********************************************!*\
  !*** ./src/_services/image/image.service.ts ***!
  \**********************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.service */ "Dsd+");







let ImageService = class ImageService {
    constructor(httpClient, sharedService) {
        this.httpClient = httpClient;
        this.sharedService = sharedService;
    }
    upload(data, folderName, userId, type) {
        return this.httpClient.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/image/${folderName}/${userId}/${type}`, data, {
            reportProgress: true,
            observe: "events"
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getMyPicture(userId) {
        const headers = this.sharedService.headerGerneration();
        return this.httpClient.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/image/user/${userId}`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getUserDocuments(userId) {
        const headers = this.sharedService.headerGerneration();
        return this.httpClient.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/image/documents/${userId}`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getUserCarPictures(userId) {
        const headers = this.sharedService.headerGerneration();
        return this.httpClient.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/image/cars/${userId}`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    removeDocument(id) {
        const headers = this.sharedService.headerGerneration();
        return this.httpClient.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/image/${id}`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            console.log('Client side error.');
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // server-side error
            console.log('Server side error.');
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
ImageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }
];
ImageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ImageService);



/***/ }),

/***/ "NKua":
/*!*************************************************************!*\
  !*** ./src/app/language-popover/language-popover.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5ndWFnZS1wb3BvdmVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "QhVT":
/*!*************************************************************!*\
  !*** ./src/app/language-popover/language-popover.module.ts ***!
  \*************************************************************/
/*! exports provided: LanguagePopoverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagePopoverPageModule", function() { return LanguagePopoverPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _language_popover_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./language-popover-routing.module */ "Wucn");
/* harmony import */ var _language_popover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./language-popover.page */ "oXKM");







let LanguagePopoverPageModule = class LanguagePopoverPageModule {
};
LanguagePopoverPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _language_popover_routing_module__WEBPACK_IMPORTED_MODULE_5__["LanguagePopoverPageRoutingModule"]
        ],
        declarations: [_language_popover_page__WEBPACK_IMPORTED_MODULE_6__["LanguagePopoverPage"]],
    })
], LanguagePopoverPageModule);



/***/ }),

/***/ "RX8M":
/*!********************************************!*\
  !*** ./src/_services/chat/chat.service.ts ***!
  \********************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aspnet/signalr */ "Gpoy");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_models */ "VeQZ");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../account.service */ "mpGk");
/* harmony import */ var _order_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../order/order.service */ "8k+r");


 // import signalR






let ChatService = class ChatService {
    constructor(http, accountService, orderService) {
        // this.connection.onclose(async () => {
        //   await this.start();
        // });
        this.http = http;
        this.accountService = accountService;
        this.orderService = orderService;
        this.messages = [];
        this.connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_2__["HubConnectionBuilder"]()
            .withUrl(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].signalRUrl}/orderHub`)
            .build();
        this.POST_URL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].signalRUrl}/api/chat/send`;
        this.receivedMessageObject = new _models__WEBPACK_IMPORTED_MODULE_4__["Message"]();
        this.sharedObj = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.connection.on("MessageReceived", (user, message) => {
            this.mapReceivedMessage(user, message);
        });
    }
    stop() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.connection.stop();
            console.log('Disconnected');
        });
    }
    // Start the connection
    start() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.connection.start();
                yield this.orderService.getOrderForChat(this.accountService.userValue.id)
                    .subscribe(x => {
                    if (this.orderService.currentOrderId) {
                        this.connection.invoke("AddToRoom", this.orderService.currentOrderId);
                    }
                    else {
                        if (x == null) {
                        }
                        else {
                            this.connection.invoke("AddToRoom", x.id);
                        }
                    }
                });
                console.log("connected in chat");
            }
            catch (err) {
                console.log(err);
                console.log("Reoonnecting in 1 sec.");
                setTimeout(() => this.start(), 1000);
            }
        });
    }
    mapReceivedMessage(user, message) {
        this.receivedMessageObject.user = user;
        this.receivedMessageObject.text = message;
        this.messages.push(this.receivedMessageObject);
        this.sharedObj.next(this.receivedMessageObject);
    }
    broadcastMessage(msgDto) {
        this.orderService.getOrderForChat(this.accountService.userValue.id)
            .subscribe(x => {
            if (x.id) {
                this.http.post(`${this.POST_URL}/${x.id}`, msgDto).subscribe(() => { });
            }
        });
    }
    retrieveMappedObject() {
        return this.sharedObj.asObservable();
    }
};
ChatService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"] },
    { type: _order_order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"] }
];
ChatService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ChatService);



/***/ }),

/***/ "VQrx":
/*!***************************************************!*\
  !*** ./src/_services/suborder/options.service.ts ***!
  \***************************************************/
/*! exports provided: OptionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsService", function() { return OptionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.service */ "Dsd+");







let OptionsService = class OptionsService {
    constructor(http, sharedService) {
        this.http = http;
        this.sharedService = sharedService;
        this.orders = [];
    }
    getOptions() {
        const headers = this.sharedService.headerGerneration();
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/suborder/options`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getOptionById(id) {
        const headers = this.sharedService.headerGerneration();
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/suborder/options/${id}`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            console.log('Client side error.');
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // server-side error
            console.log('Server side error.');
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
OptionsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }
];
OptionsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], OptionsService);



/***/ }),

/***/ "Wucn":
/*!*********************************************************************!*\
  !*** ./src/app/language-popover/language-popover-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: LanguagePopoverPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagePopoverPageRoutingModule", function() { return LanguagePopoverPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _language_popover_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language-popover.page */ "oXKM");




const routes = [
    {
        path: '',
        component: _language_popover_page__WEBPACK_IMPORTED_MODULE_3__["LanguagePopoverPage"]
    }
];
let LanguagePopoverPageRoutingModule = class LanguagePopoverPageRoutingModule {
};
LanguagePopoverPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LanguagePopoverPageRoutingModule);



/***/ }),

/***/ "Wwn5":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js ***!
  \**************************************************************************/
/*! exports provided: CallNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallNumber", function() { return CallNumber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "C6fG");




var CallNumber = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CallNumber, _super);
    function CallNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CallNumber.prototype.callNumber = function (numberToCall, bypassAppChooser) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "callNumber", { "callbackOrder": "reverse" }, arguments); };
    CallNumber.prototype.isCallSupported = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isCallSupported", {}, arguments); };
    CallNumber.pluginName = "CallNumber";
    CallNumber.plugin = "call-number";
    CallNumber.pluginRef = "plugins.CallNumber";
    CallNumber.repo = "https://github.com/Rohfosho/CordovaCallNumberPlugin";
    CallNumber.platforms = ["Android", "iOS"];
CallNumber.ɵfac = function CallNumber_Factory(t) { return ɵCallNumber_BaseFactory(t || CallNumber); };
CallNumber.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CallNumber, factory: function (t) { return CallNumber.ɵfac(t); } });
var ɵCallNumber_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CallNumber);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CallNumber, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return CallNumber;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvY2FsbC1udW1iZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0FBQ3hFO0FBSVUsSUEwQnNCLDhCQUFpQjtBQUFDO0FBRTlCO0FBQytDO0FBQ2pFLElBTUEsK0JBQVUsYUFBQyxZQUFvQixFQUFFLGdCQUF5QjtBQU12RCxJQUdILG9DQUFlO0FBSXNCO0FBQTBDO0FBQXVDO0FBQWlEO0FBQTZFOzhDQXhCclAsVUFBVTs7Ozs7MEJBQ0w7QUFBQyxxQkFoQ1A7QUFBRSxFQWdDOEIsaUJBQWlCO0FBQ2hELFNBRFksVUFBVTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgQ2FsbCBOdW1iZXJcbiAqIEBkZXNjcmlwdGlvblxuICogQ2FsbCBhIG51bWJlciBkaXJlY3RseSBmcm9tIHlvdXIgQ29yZG92YS9Jb25pYyBhcHBsaWNhdGlvbi5cbiAqICoqTk9URSoqOiBUaGUgaU9TIFNpbXVsYXRvciAoYW5kIG1heWJlIEFuZHJvaWQgU2ltdWxhdG9ycykgZG8gbm90IHByb3ZpZGUgYWNjZXNzIHRvIHRoZSBwaG9uZSBzdWJzeXN0ZW0uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDYWxsTnVtYmVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jYWxsLW51bWJlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FsbE51bWJlcjogQ2FsbE51bWJlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuY2FsbE51bWJlci5jYWxsTnVtYmVyKFwiMTgwMDEwMTAxMDFcIiwgdHJ1ZSlcbiAqICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKCdMYXVuY2hlZCBkaWFsZXIhJywgcmVzKSlcbiAqICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3IgbGF1bmNoaW5nIGRpYWxlcicsIGVycikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0NhbGxOdW1iZXInLFxuICBwbHVnaW46ICdjYWxsLW51bWJlcicsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuQ2FsbE51bWJlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vUm9oZm9zaG8vQ29yZG92YUNhbGxOdW1iZXJQbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FsbE51bWJlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENhbGxzIGEgcGhvbmUgbnVtYmVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBudW1iZXJUb0NhbGwgVGhlIHBob25lIG51bWJlciB0byBjYWxsIGFzIGEgc3RyaW5nXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gYnlwYXNzQXBwQ2hvb3NlciBTZXQgdG8gdHJ1ZSB0byBieXBhc3MgdGhlIGFwcCBjaG9vc2VyIGFuZCBnbyBkaXJlY3RseSB0byBkaWFsZXJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgY2FsbE51bWJlcihudW1iZXJUb0NhbGw6IHN0cmluZywgYnlwYXNzQXBwQ2hvb3NlcjogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGNhbGwgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0NhbGxTdXBwb3J0ZWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "acej":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
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
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "oXKM":
/*!***********************************************************!*\
  !*** ./src/app/language-popover/language-popover.page.ts ***!
  \***********************************************************/
/*! exports provided: LanguagePopoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagePopoverPage", function() { return LanguagePopoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_language_popover_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./language-popover.page.html */ "po2e");
/* harmony import */ var _language_popover_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language-popover.page.scss */ "NKua");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_services */ "8Xdb");







let LanguagePopoverPage = class LanguagePopoverPage {
    constructor(popoverController, translate, accountService) {
        this.popoverController = popoverController;
        this.translate = translate;
        this.accountService = accountService;
        this.selected = "";
        this.languages = [
            { text: 'Български', value: 'bg', img: '../../assets/bulgaria.png' },
            { text: 'English', value: 'en', img: '../../assets/english.png' }
            //{ text: 'Spanish', value: 'es', img: '../../assets/spain.png' }
        ];
    }
    ngOnInit() {
    }
    select(lng) {
        this.translate.use(lng);
        this.selected = lng;
        if (this.accountService.userValue) {
            this.accountService.userValue.choosenLanguage = lng;
            this.accountService.updateLanguage(this.accountService.userValue.id, lng)
                .subscribe(() => {
            });
        }
        this.popoverController.dismiss();
    }
};
LanguagePopoverPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: src_services__WEBPACK_IMPORTED_MODULE_6__["AccountService"] }
];
LanguagePopoverPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-language-popover',
        template: _raw_loader_language_popover_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_language_popover_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LanguagePopoverPage);



/***/ }),

/***/ "po2e":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/language-popover/language-popover.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list>\r\n  <ion-item button *ngFor=\"let lng of languages\" (click)=\"select(lng.value)\" detail=\"false\">\r\n    <img [src]=\"lng.img\" height=\"25\" width=\"25\" slot=\"start\">\r\n    <ion-label text-wrap>\r\n      {{lng.text}}\r\n    </ion-label>\r\n    <ion-icon slot=\"end\" name=\"checkmark\" *ngIf=\"lng.value == selected\"></ion-icon>\r\n  </ion-item>\r\n</ion-list>");

/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "qkHp":
/*!****************************************************!*\
  !*** ./src/_services/suborder/suborder.service.ts ***!
  \****************************************************/
/*! exports provided: SuborderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuborderService", function() { return SuborderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.service */ "Dsd+");







let SuborderService = class SuborderService {
    constructor(http, sharedService) {
        this.http = http;
        this.sharedService = sharedService;
    }
    getAllSubOrders(status) {
        const headers = this.sharedService.headerGerneration();
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/suborder/status/${status}`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    refuseSubOrder(orderId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/suborder/refuse/${orderId}`, { status: "Waiting" }, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    closedSubOrder(orderId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/suborder/closed/${orderId}`, { status: "Canceled" }, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    acceptedSubOrders(orderId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/suborder/accepted/${orderId}`, { status: "Accepted" }, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    inProgressSubOrders(orderId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/suborder/inProgress/${orderId}`, { status: "InProgress" }, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getSubOrderByUserId(userId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/suborder/user/${userId}`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getMyOrder(id) {
        const headers = this.sharedService.headerGerneration();
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/suborder/${id}`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    createSubOrder(data) {
        const headers = this.sharedService.headerGerneration();
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/SubOrder`, data, { headers, responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    editStatus(orderId, data) {
        const headers = this.sharedService.headerGerneration();
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/SubOrder/${orderId}`, data, { headers, responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deleteOrder(id) {
        const headers = this.sharedService.headerGerneration();
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/suborder/${id}`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            console.log('Client side error.');
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // server-side error
            console.log('Server side error.');
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
SuborderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }
];
SuborderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], SuborderService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map