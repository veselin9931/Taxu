(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "19mU":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: HttpLoaderFactory, MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-routing.module */ "nedP");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "ylOD");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _language_popover_language_popover_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../language-popover/language-popover.module */ "QhVT");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ "92l+");
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ "1xeP");















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http);
}
let MenuPageModule = class MenuPageModule {
};
MenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                }
            }),
            _language_popover_language_popover_module__WEBPACK_IMPORTED_MODULE_10__["LanguagePopoverPageModule"]
        ],
        providers: [
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_12__["AndroidPermissions"],
            _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_14__["BackgroundMode"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"],
            _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_13__["LocationAccuracy"],
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
    })
], MenuPageModule);



/***/ }),

/***/ "1pz8":
/*!***************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/IHubProtocol.js ***!
  \***************************************************************/
/*! exports provided: MessageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageType", function() { return MessageType; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
/** Defines the type of a Hub Message. */
var MessageType;
(function (MessageType) {
    /** Indicates the message is an Invocation message and implements the {@link @aspnet/signalr.InvocationMessage} interface. */
    MessageType[MessageType["Invocation"] = 1] = "Invocation";
    /** Indicates the message is a StreamItem message and implements the {@link @aspnet/signalr.StreamItemMessage} interface. */
    MessageType[MessageType["StreamItem"] = 2] = "StreamItem";
    /** Indicates the message is a Completion message and implements the {@link @aspnet/signalr.CompletionMessage} interface. */
    MessageType[MessageType["Completion"] = 3] = "Completion";
    /** Indicates the message is a Stream Invocation message and implements the {@link @aspnet/signalr.StreamInvocationMessage} interface. */
    MessageType[MessageType["StreamInvocation"] = 4] = "StreamInvocation";
    /** Indicates the message is a Cancel Invocation message and implements the {@link @aspnet/signalr.CancelInvocationMessage} interface. */
    MessageType[MessageType["CancelInvocation"] = 5] = "CancelInvocation";
    /** Indicates the message is a Ping message and implements the {@link @aspnet/signalr.PingMessage} interface. */
    MessageType[MessageType["Ping"] = 6] = "Ping";
    /** Indicates the message is a Close message and implements the {@link @aspnet/signalr.CloseMessage} interface. */
    MessageType[MessageType["Close"] = 7] = "Close";
})(MessageType || (MessageType = {}));
//# sourceMappingURL=IHubProtocol.js.map

/***/ }),

/***/ "1xeP":
/*!******************************************************************************!*\
  !*** ./node_modules/@ionic-native/background-mode/__ivy_ngcc__/ngx/index.js ***!
  \******************************************************************************/
/*! exports provided: BackgroundMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundMode", function() { return BackgroundMode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "C6fG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");





var BackgroundMode = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BackgroundMode, _super);
    function BackgroundMode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackgroundMode.prototype.enable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "enable", { "sync": true }, arguments); };
    BackgroundMode.prototype.disable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "disable", { "sync": true }, arguments); };
    BackgroundMode.prototype.setEnabled = function (enable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setEnabled", { "sync": true }, arguments); };
    BackgroundMode.prototype.fireEvent = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "fireEvent", { "sync": true }, arguments);
    };
    BackgroundMode.prototype.isEnabled = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isEnabled", { "sync": true }, arguments); };
    BackgroundMode.prototype.isActive = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isActive", { "sync": true }, arguments); };
    BackgroundMode.prototype.setDefaults = function (overrides) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setDefaults", { "platforms": ["Android"] }, arguments); };
    BackgroundMode.prototype.configure = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "configure", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.on = function (event) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "on", { "observable": true, "clearFunction": "un", "clearWithArgs": true }, arguments); };
    BackgroundMode.prototype.un = function (event, callback) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "un", {}, arguments); };
    BackgroundMode.prototype.moveToBackground = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "moveToBackground", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.disableWebViewOptimizations = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "disableWebViewOptimizations", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.moveToForeground = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "moveToForeground", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.overrideBackButton = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "overrideBackButton", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.excludeFromTaskList = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "excludeFromTaskList", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.isScreenOff = function (fn) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isScreenOff", { "platforms": ["Android"] }, arguments); };
    BackgroundMode.prototype.wakeUp = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "wakeUp", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.unlock = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "unlock", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.prototype.disableBatteryOptimizations = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "disableBatteryOptimizations", { "platforms": ["Android"], "sync": true }, arguments); };
    BackgroundMode.pluginName = "BackgroundMode";
    BackgroundMode.plugin = "cordova-plugin-background-mode";
    BackgroundMode.pluginRef = "cordova.plugins.backgroundMode";
    BackgroundMode.repo = "https://github.com/katzer/cordova-plugin-background-mode";
    BackgroundMode.platforms = ["AmazonFire OS", "Android", "Browser", "iOS", "Windows"];
BackgroundMode.ɵfac = function BackgroundMode_Factory(t) { return ɵBackgroundMode_BaseFactory(t || BackgroundMode); };
BackgroundMode.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BackgroundMode, factory: function (t) { return BackgroundMode.ɵfac(t); } });
var ɵBackgroundMode_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](BackgroundMode);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BackgroundMode, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return BackgroundMode;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvYmFja2dyb3VuZC1tb2RlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBQ2xDO0FBSUUsSUF3RWtDLGtDQUFpQjtBQUFDO0FBRTlCO0FBQ3dDO0FBQU0sSUFLcEUsK0JBQU07QUFJb0IsSUFLMUIsZ0NBQU87QUFNTCxJQVFGLG1DQUFVLGFBQUMsTUFBZTtBQUtqQixJQVFULGtDQUFTLGFBQUMsS0FBYTtBQUFJLFFBQUYsY0FBYztBQUFDLGFBQWYsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztBQUFJLFlBQWxCLDZCQUFjO0FBQUM7QUFBVTtBQUtKO0FBQzNDLElBS0gsa0NBQVM7QUFLb0MsSUFNN0MsaUNBQVE7QUFNRCxJQU9QLG9DQUFXLGFBQUMsU0FBdUM7QUFJekIsSUFPMUIsa0NBQVMsYUFBQyxPQUFxQztBQUlWLElBU3JDLDJCQUFFLGFBQUMsS0FBYTtBQUtzRCxJQU10RSwyQkFBRSxhQUFDLEtBQWEsRUFBRSxRQUFrQztBQUtyQyxJQU1mLHlDQUFnQjtBQU9qQixJQUVDLG9EQUEyQjtBQU1mLElBR1oseUNBQWdCO0FBS2YsSUFJRCwyQ0FBa0I7QUFNVixJQUdSLDRDQUFtQjtBQUtuQixJQUtBLG9DQUFXLGFBQUMsRUFBMkI7QUFPekMsSUFFRSwrQkFBTTtBQU1nQixJQUd0QiwrQkFBTTtBQU1OLElBR0Esb0RBQTJCO0FBRXFGO0FBQWtEO0FBQThEO0FBQWlFO0FBQXNGO2tEQXpNeFgsVUFBVTs7Ozs7MEJBQ0w7QUFBQyx5QkEvRVA7QUFBRSxFQStFa0MsaUJBQWlCO0FBQ3BELFNBRFksY0FBYztBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQ29uZmlndXJhdGlvbnMgaXRlbXMgdGhhdCBjYW4gYmUgdXBkYXRlZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBCYWNrZ3JvdW5kTW9kZUNvbmZpZ3VyYXRpb24ge1xuICAvKipcbiAgICogVGl0bGUgb2YgdGhlIGJhY2tncm91bmQgdGFza1xuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERlc2NyaXB0aW9uIG9mIGJhY2tncm91bmQgdGFza1xuICAgKi9cbiAgdGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogVGhpcyB3aWxsIGxvb2sgZm9yIGA8aWNvbiBuYW1lPi5wbmdgIGluIHBsYXRmb3Jtcy9hbmRyb2lkL3Jlcy9kcmF3YWJsZXxtaXBtYXBcbiAgICovXG4gIGljb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgbm90aWZpY2F0aW9uIGNpcmNsZVxuICAgKi9cbiAgY29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEJ5IGRlZmF1bHQgdGhlIGFwcCB3aWxsIGNvbWUgdG8gZm9yZWdyb3VuZCB3aGVuIHRhcHBpbmcgb24gdGhlIG5vdGlmaWNhdGlvbi4gSWYgZmFsc2UsIHBsdWdpbiB3b24ndCBjb21lIHRvIGZvcmVncm91bmQgd2hlbiB0YXBwZWQuXG4gICAqL1xuICByZXN1bWU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGVuIHNldCB0byBmYWxzZSBtYWtlcyB0aGUgbm90aWZpY2F0aW9ucyB2aXNpYmxlIG9uIGxvY2sgc2NyZWVuIChBbmRyb2lkIDUuMCspXG4gICAqL1xuICBoaWRkZW4/OiBib29sZWFuO1xuXG4gIC8qKiBCaWcgdGV4dCAqL1xuICBiaWdUZXh0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIHRleHQgdGhhdCBzY3JvbGxzIGl0c2VsZiBvbiBzdGF0dXNiYXJcbiAgICovXG4gIHRpY2tlcj86IHN0cmluZztcblxuICAvKipcbiAgICogaWYgdHJ1ZSBwbHVnaW4gd2lsbCBub3QgZGlzcGxheSBhIG5vdGlmaWNhdGlvbi4gRGVmYXVsdCBpcyBmYWxzZS5cbiAgICovXG4gIHNpbGVudD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgQmFja2dyb3VuZCBNb2RlXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgcGx1Z2luIHRvIHByZXZlbnQgdGhlIGFwcCBmcm9tIGdvaW5nIHRvIHNsZWVwIHdoaWxlIGluIGJhY2tncm91bmQuXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogY29yZG92YS1wbHVnaW4tYmFja2dyb3VuZC1tb2RlLiBGb3IgbW9yZSBpbmZvIGFib3V0IHBsdWdpbiwgdmlzaXQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9rYXR6ZXIvY29yZG92YS1wbHVnaW4tYmFja2dyb3VuZC1tb2RlXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJhY2tncm91bmRNb2RlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9iYWNrZ3JvdW5kLW1vZGUvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhY2tncm91bmRNb2RlOiBCYWNrZ3JvdW5kTW9kZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5iYWNrZ3JvdW5kTW9kZS5lbmFibGUoKTtcbiAqIGBgYFxuICpcbiAqIEBpbnRlcmZhY2VzXG4gKiBCYWNrZ3JvdW5kTW9kZUNvbmZpZ3VyYXRpb25cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCYWNrZ3JvdW5kTW9kZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJhY2tncm91bmQtbW9kZScsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5iYWNrZ3JvdW5kTW9kZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20va2F0emVyL2NvcmRvdmEtcGx1Z2luLWJhY2tncm91bmQtbW9kZScsXG4gIHBsYXRmb3JtczogWydBbWF6b25GaXJlIE9TJywgJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kTW9kZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIEVuYWJsZSB0aGUgYmFja2dyb3VuZCBtb2RlLlxuICAgKiBPbmNlIGNhbGxlZCwgcHJldmVudHMgdGhlIGFwcCBmcm9tIGJlaW5nIHBhdXNlZCB3aGlsZSBpbiBiYWNrZ3JvdW5kLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGVuYWJsZSgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIGJhY2tncm91bmQgbW9kZS5cbiAgICogT25jZSB0aGUgYmFja2dyb3VuZCBtb2RlIGhhcyBiZWVuIGRpc2FibGVkLCB0aGUgYXBwIHdpbGwgYmUgcGF1c2VkIHdoZW4gaW4gYmFja2dyb3VuZC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBkaXNhYmxlKCk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSB0aGUgYmFja2dyb3VuZCBtb2RlLlxuICAgKlxuICAgKiBAcGFyYW0gZW5hYmxlIHtib29sZWFufSBUaGUgc3RhdHVzIHRvIHNldCBmb3IuXG4gICAqXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgc2V0RW5hYmxlZChlbmFibGU6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEZpcmUgZXZlbnQgd2l0aCBnaXZlbiBhcmd1bWVudHMuXG4gICAqXG4gICAqIEBwYXJhbSBldmVudCB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnQncyBuYW1lLlxuICAgKiBAcGFyYW0gYXJncyB7YXJyYXl9IFRoZSBjYWxsYmFjaydzIGFyZ3VtZW50cy5cbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGZpcmVFdmVudChldmVudDogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBiYWNrZ3JvdW5kIG1vZGUgaXMgZW5hYmxlZCBvciBub3QuXG4gICAqIEByZXR1cm5zIHtib29sZWFufSByZXR1cm5zIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiB0aGUgYmFja2dyb3VuZCBtb2RlIGlzIGVuYWJsZWQuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgaXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW4gYmUgdXNlZCB0byBnZXQgdGhlIGluZm9ybWF0aW9uIGlmIHRoZSBiYWNrZ3JvdW5kIG1vZGUgaXMgYWN0aXZlLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gcmV0dXJucyBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIGJhY2tncm91bmQgbW9kZSBpcyBhY3RpdmUuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgaXNBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJ3cml0ZSB0aGUgZGVmYXVsdCBzZXR0aW5ncy5cbiAgICogQXZhaWxhYmxlIG9ubHkgZm9yIEFuZHJvaWQgcGxhdGZvcm0uXG4gICAqIEBwYXJhbSBvdmVycmlkZXMge0JhY2tncm91bmRNb2RlQ29uZmlndXJhdGlvbn0gRGljdCBvZiBvcHRpb25zIHRvIGJlIG92ZXJyaWRkZW4uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgfSlcbiAgc2V0RGVmYXVsdHMob3ZlcnJpZGVzPzogQmFja2dyb3VuZE1vZGVDb25maWd1cmF0aW9uKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBNb2RpZnkgdGhlIGRpc3BsYXllZCBpbmZvcm1hdGlvbi5cbiAgICogQXZhaWxhYmxlIG9ubHkgZm9yIEFuZHJvaWQgcGxhdGZvcm0uXG4gICAqIEBwYXJhbSB7QmFja2dyb3VuZE1vZGVDb25maWd1cmF0aW9ufSBbb3B0aW9uc10gQW55IG9wdGlvbnMgeW91IHdhbnQgdG8gdXBkYXRlLiBTZWUgdGFibGUgYmVsb3cuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBjb25maWd1cmUob3B0aW9ucz86IEJhY2tncm91bmRNb2RlQ29uZmlndXJhdGlvbik6IHZvaWQge31cblxuICAvKipcbiAgICogUmVnaXN0ZXIgY2FsbGJhY2sgZm9yIGdpdmVuIGV2ZW50LlxuICAgKiA+IEF2YWlsYWJsZSBldmVudHMgYXJlIGBlbmFibGVgLCBgZGlzYWJsZWAsIGBhY3RpdmF0ZWAsIGBkZWFjdGl2YXRlYCBhbmQgYGZhaWx1cmVgLlxuICAgKiBAcGFyYW0gZXZlbnQge3N0cmluZ30gRXZlbnQgbmFtZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3VuJyxcbiAgICBjbGVhcldpdGhBcmdzOiB0cnVlLFxuICB9KVxuICBvbihldmVudDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVuIGZvciBldmVudHMgdGhhdCB0aGUgcGx1Z2luIGZpcmVzLiBBdmFpbGFibGUgZXZlbnRzIGFyZSBgZW5hYmxlYCwgYGRpc2FibGVgLCBgYWN0aXZhdGVgLCBgZGVhY3RpdmF0ZWAgYW5kIGBmYWlsdXJlYC5cbiAgICogQHBhcmFtIGV2ZW50IHtzdHJpbmd9IEV2ZW50IG5hbWVcbiAgICogQHBhcmFtIGNhbGxiYWNrIHtmdW5jdGlvbn0gVGhlIGZ1bmN0aW9uIHRvIGJlIGV4ZWMgYXMgY2FsbGJhY2suXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHVuKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQW5kcm9pZCBhbGxvd3MgdG8gcHJvZ3JhbW1hdGljYWxseSBtb3ZlIGZyb20gZm9yZWdyb3VuZCB0byBiYWNrZ3JvdW5kLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgbW92ZVRvQmFja2dyb3VuZCgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBHUFMtdHJhY2tpbmcgaW4gYmFja2dyb3VuZCAoQW5kcm9pZCkuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBkaXNhYmxlV2ViVmlld09wdGltaXphdGlvbnMoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBBbmRyb2lkIGFsbG93cyB0byBwcm9ncmFtbWF0aWNhbGx5IG1vdmUgZnJvbSBiYWNrZ3JvdW5kIHRvIGZvcmVncm91bmQuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBtb3ZlVG9Gb3JlZ3JvdW5kKCk6IHZvaWQge31cblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGJhY2sgYnV0dG9uIG9uIEFuZHJvaWQgdG8gZ28gdG8gYmFja2dyb3VuZCBpbnN0ZWFkIG9mIGNsb3NpbmcgdGhlIGFwcC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIG92ZXJyaWRlQmFja0J1dHRvbigpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEV4Y2x1ZGUgdGhlIGFwcCBmcm9tIHRoZSByZWNlbnQgdGFzayBsaXN0LiBXb3JrcyBvbiBBbmRyb2lkIDUuMCsuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBleGNsdWRlRnJvbVRhc2tMaXN0KCk6IHZvaWQge31cblxuICAvKipcbiAgICogSWYgdGhlIHNjcmVlbiBpcyBvZmYuXG4gICAqIEBwYXJhbSBmbiB7ZnVuY3Rpb259IENhbGxiYWNrIGZ1bmN0aW9uIHRvIGludm9rZSB3aXRoIGJvb2xlYW4gYXJnLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICB9KVxuICBpc1NjcmVlbk9mZihmbjogKGFyZzA6IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFR1cm4gc2NyZWVuIG9uXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICB3YWtlVXAoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBUdXJuIHNjcmVlbiBvbiBhbmQgc2hvdyBhcHAgZXZlbiBsb2NrZWRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIHVubG9jaygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIGJhdHRlcnkgb3B0aW1hemF0aW9uIG1vZGUgZm9yIHRoZSBhcHAgKGFuZHJvaWQgb25seSlcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGRpc2FibGVCYXR0ZXJ5T3B0aW1pemF0aW9ucygpOiB2b2lkIHt9XG59XG4iXX0=

/***/ }),

/***/ "249r":
/*!******************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/JsonHubProtocol.js ***!
  \******************************************************************/
/*! exports provided: JsonHubProtocol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonHubProtocol", function() { return JsonHubProtocol; });
/* harmony import */ var _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IHubProtocol */ "1pz8");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ILogger */ "eDUa");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ITransport */ "WbzQ");
/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loggers */ "e3Su");
/* harmony import */ var _TextMessageFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextMessageFormat */ "IYNR");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.





var JSON_HUB_PROTOCOL_NAME = "json";
/** Implements the JSON Hub Protocol. */
var JsonHubProtocol = /** @class */ (function () {
    function JsonHubProtocol() {
        /** @inheritDoc */
        this.name = JSON_HUB_PROTOCOL_NAME;
        /** @inheritDoc */
        this.version = 1;
        /** @inheritDoc */
        this.transferFormat = _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"].Text;
    }
    /** Creates an array of {@link @aspnet/signalr.HubMessage} objects from the specified serialized representation.
     *
     * @param {string} input A string containing the serialized representation.
     * @param {ILogger} logger A logger that will be used to log messages that occur during parsing.
     */
    JsonHubProtocol.prototype.parseMessages = function (input, logger) {
        // The interface does allow "ArrayBuffer" to be passed in, but this implementation does not. So let's throw a useful error.
        if (typeof input !== "string") {
            throw new Error("Invalid input for JSON hub protocol. Expected a string.");
        }
        if (!input) {
            return [];
        }
        if (logger === null) {
            logger = _Loggers__WEBPACK_IMPORTED_MODULE_3__["NullLogger"].instance;
        }
        // Parse the messages
        var messages = _TextMessageFormat__WEBPACK_IMPORTED_MODULE_4__["TextMessageFormat"].parse(input);
        var hubMessages = [];
        for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
            var message = messages_1[_i];
            var parsedMessage = JSON.parse(message);
            if (typeof parsedMessage.type !== "number") {
                throw new Error("Invalid payload.");
            }
            switch (parsedMessage.type) {
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Invocation:
                    this.isInvocationMessage(parsedMessage);
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].StreamItem:
                    this.isStreamItemMessage(parsedMessage);
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Completion:
                    this.isCompletionMessage(parsedMessage);
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Ping:
                    // Single value, no need to validate
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Close:
                    // All optional values, no need to validate
                    break;
                default:
                    // Future protocol changes can add message types, old clients can ignore them
                    logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information, "Unknown message type '" + parsedMessage.type + "' ignored.");
                    continue;
            }
            hubMessages.push(parsedMessage);
        }
        return hubMessages;
    };
    /** Writes the specified {@link @aspnet/signalr.HubMessage} to a string and returns it.
     *
     * @param {HubMessage} message The message to write.
     * @returns {string} A string containing the serialized representation of the message.
     */
    JsonHubProtocol.prototype.writeMessage = function (message) {
        return _TextMessageFormat__WEBPACK_IMPORTED_MODULE_4__["TextMessageFormat"].write(JSON.stringify(message));
    };
    JsonHubProtocol.prototype.isInvocationMessage = function (message) {
        this.assertNotEmptyString(message.target, "Invalid payload for Invocation message.");
        if (message.invocationId !== undefined) {
            this.assertNotEmptyString(message.invocationId, "Invalid payload for Invocation message.");
        }
    };
    JsonHubProtocol.prototype.isStreamItemMessage = function (message) {
        this.assertNotEmptyString(message.invocationId, "Invalid payload for StreamItem message.");
        if (message.item === undefined) {
            throw new Error("Invalid payload for StreamItem message.");
        }
    };
    JsonHubProtocol.prototype.isCompletionMessage = function (message) {
        if (message.result && message.error) {
            throw new Error("Invalid payload for Completion message.");
        }
        if (!message.result && message.error) {
            this.assertNotEmptyString(message.error, "Invalid payload for Completion message.");
        }
        this.assertNotEmptyString(message.invocationId, "Invalid payload for Completion message.");
    };
    JsonHubProtocol.prototype.assertNotEmptyString = function (value, errorMessage) {
        if (typeof value !== "string" || value === "") {
            throw new Error(errorMessage);
        }
    };
    return JsonHubProtocol;
}());

//# sourceMappingURL=JsonHubProtocol.js.map

/***/ }),

/***/ "2PVt":
/*!****************************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/ServerSentEventsTransport.js ***!
  \****************************************************************************/
/*! exports provided: ServerSentEventsTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerSentEventsTransport", function() { return ServerSentEventsTransport; });
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ILogger */ "eDUa");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ITransport */ "WbzQ");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils */ "yfcC");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/** @private */
var ServerSentEventsTransport = /** @class */ (function () {
    function ServerSentEventsTransport(httpClient, accessTokenFactory, logger, logMessageContent, eventSourceConstructor) {
        this.httpClient = httpClient;
        this.accessTokenFactory = accessTokenFactory;
        this.logger = logger;
        this.logMessageContent = logMessageContent;
        this.eventSourceConstructor = eventSourceConstructor;
        this.onreceive = null;
        this.onclose = null;
    }
    ServerSentEventsTransport.prototype.connect = function (url, transferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isRequired(url, "url");
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isRequired(transferFormat, "transferFormat");
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"], "transferFormat");
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(SSE transport) Connecting.");
                        // set url before accessTokenFactory because this.url is only for send and we set the auth header instead of the query string for send
                        this.url = url;
                        if (!this.accessTokenFactory) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.accessTokenFactory()];
                    case 1:
                        token = _a.sent();
                        if (token) {
                            url += (url.indexOf("?") < 0 ? "?" : "&") + ("access_token=" + encodeURIComponent(token));
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, new Promise(function (resolve, reject) {
                            var opened = false;
                            if (transferFormat !== _ITransport__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"].Text) {
                                reject(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
                                return;
                            }
                            var eventSource;
                            if (typeof window !== "undefined") {
                                eventSource = new _this.eventSourceConstructor(url, { withCredentials: true });
                            }
                            else {
                                // Non-browser passes cookies via the dictionary
                                var cookies = _this.httpClient.getCookieString(url);
                                eventSource = new _this.eventSourceConstructor(url, { withCredentials: true, headers: { Cookie: cookies } });
                            }
                            try {
                                eventSource.onmessage = function (e) {
                                    if (_this.onreceive) {
                                        try {
                                            _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(SSE transport) data received. " + Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["getDataDetail"])(e.data, _this.logMessageContent) + ".");
                                            _this.onreceive(e.data);
                                        }
                                        catch (error) {
                                            _this.close(error);
                                            return;
                                        }
                                    }
                                };
                                eventSource.onerror = function (e) {
                                    var error = new Error(e.data || "Error occurred");
                                    if (opened) {
                                        _this.close(error);
                                    }
                                    else {
                                        reject(error);
                                    }
                                };
                                eventSource.onopen = function () {
                                    _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information, "SSE connected to " + _this.url);
                                    _this.eventSource = eventSource;
                                    opened = true;
                                    resolve();
                                };
                            }
                            catch (e) {
                                reject(e);
                                return;
                            }
                        })];
                }
            });
        });
    };
    ServerSentEventsTransport.prototype.send = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.eventSource) {
                    return [2 /*return*/, Promise.reject(new Error("Cannot send until the transport is connected"))];
                }
                return [2 /*return*/, Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["sendMessage"])(this.logger, "SSE", this.httpClient, this.url, this.accessTokenFactory, data, this.logMessageContent)];
            });
        });
    };
    ServerSentEventsTransport.prototype.stop = function () {
        this.close();
        return Promise.resolve();
    };
    ServerSentEventsTransport.prototype.close = function (e) {
        if (this.eventSource) {
            this.eventSource.close();
            this.eventSource = undefined;
            if (this.onclose) {
                this.onclose(e);
            }
        }
    };
    return ServerSentEventsTransport;
}());

//# sourceMappingURL=ServerSentEventsTransport.js.map

/***/ }),

/***/ "4zJv":
/*!************************************************!*\
  !*** ./src/_services/connectivity.provider.ts ***!
  \************************************************/
/*! exports provided: ConnectivityProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectivityProvider", function() { return ConnectivityProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ConnectivityProvider = class ConnectivityProvider {
    constructor() {
        this.initConnectivityMonitoring();
    }
    initConnectivityMonitoring() {
        if (!window || !navigator || !('onLine' in navigator))
            return;
        this.appIsOnline$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'online'), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'offline')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => navigator.onLine));
    }
};
ConnectivityProvider.ctorParameters = () => [];
ConnectivityProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], ConnectivityProvider);



/***/ }),

/***/ "Gpoy":
/*!********************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/index.js ***!
  \********************************************************/
/*! exports provided: VERSION, AbortError, HttpError, TimeoutError, HttpClient, HttpResponse, DefaultHttpClient, HubConnection, HubConnectionState, HubConnectionBuilder, MessageType, LogLevel, HttpTransportType, TransferFormat, NullLogger, JsonHubProtocol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors */ "xfvH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbortError", function() { return _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpError", function() { return _Errors__WEBPACK_IMPORTED_MODULE_0__["HttpError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return _Errors__WEBPACK_IMPORTED_MODULE_0__["TimeoutError"]; });

/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpClient */ "g/0X");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return _HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return _HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]; });

/* harmony import */ var _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultHttpClient */ "dhCI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultHttpClient", function() { return _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_2__["DefaultHttpClient"]; });

/* harmony import */ var _HubConnection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HubConnection */ "bPln");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HubConnection", function() { return _HubConnection__WEBPACK_IMPORTED_MODULE_3__["HubConnection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HubConnectionState", function() { return _HubConnection__WEBPACK_IMPORTED_MODULE_3__["HubConnectionState"]; });

/* harmony import */ var _HubConnectionBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HubConnectionBuilder */ "Rqsq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HubConnectionBuilder", function() { return _HubConnectionBuilder__WEBPACK_IMPORTED_MODULE_4__["HubConnectionBuilder"]; });

/* harmony import */ var _IHubProtocol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IHubProtocol */ "1pz8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageType", function() { return _IHubProtocol__WEBPACK_IMPORTED_MODULE_5__["MessageType"]; });

/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ILogger */ "eDUa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return _ILogger__WEBPACK_IMPORTED_MODULE_6__["LogLevel"]; });

/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ITransport */ "WbzQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpTransportType", function() { return _ITransport__WEBPACK_IMPORTED_MODULE_7__["HttpTransportType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransferFormat", function() { return _ITransport__WEBPACK_IMPORTED_MODULE_7__["TransferFormat"]; });

/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Loggers */ "e3Su");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NullLogger", function() { return _Loggers__WEBPACK_IMPORTED_MODULE_8__["NullLogger"]; });

/* harmony import */ var _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./JsonHubProtocol */ "249r");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonHubProtocol", function() { return _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_9__["JsonHubProtocol"]; });

// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// Version token that will be replaced by the prepack command
/** The version of the SignalR client. */
var VERSION = "1.1.4";










//# sourceMappingURL=index.js.map

/***/ }),

/***/ "IYNR":
/*!********************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/TextMessageFormat.js ***!
  \********************************************************************/
/*! exports provided: TextMessageFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextMessageFormat", function() { return TextMessageFormat; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// Not exported from index
/** @private */
var TextMessageFormat = /** @class */ (function () {
    function TextMessageFormat() {
    }
    TextMessageFormat.write = function (output) {
        return "" + output + TextMessageFormat.RecordSeparator;
    };
    TextMessageFormat.parse = function (input) {
        if (input[input.length - 1] !== TextMessageFormat.RecordSeparator) {
            throw new Error("Message is incomplete.");
        }
        var messages = input.split(TextMessageFormat.RecordSeparator);
        messages.pop();
        return messages;
    };
    TextMessageFormat.RecordSeparatorCode = 0x1e;
    TextMessageFormat.RecordSeparator = String.fromCharCode(TextMessageFormat.RecordSeparatorCode);
    return TextMessageFormat;
}());

//# sourceMappingURL=TextMessageFormat.js.map

/***/ }),

/***/ "LO1e":
/*!********************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/HandshakeProtocol.js ***!
  \********************************************************************/
/*! exports provided: HandshakeProtocol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandshakeProtocol", function() { return HandshakeProtocol; });
/* harmony import */ var _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextMessageFormat */ "IYNR");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "yfcC");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.


/** @private */
var HandshakeProtocol = /** @class */ (function () {
    function HandshakeProtocol() {
    }
    // Handshake request is always JSON
    HandshakeProtocol.prototype.writeHandshakeRequest = function (handshakeRequest) {
        return _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__["TextMessageFormat"].write(JSON.stringify(handshakeRequest));
    };
    HandshakeProtocol.prototype.parseHandshakeResponse = function (data) {
        var responseMessage;
        var messageData;
        var remainingData;
        if (Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["isArrayBuffer"])(data) || (typeof Buffer !== "undefined" && data instanceof Buffer)) {
            // Format is binary but still need to read JSON text from handshake response
            var binaryData = new Uint8Array(data);
            var separatorIndex = binaryData.indexOf(_TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__["TextMessageFormat"].RecordSeparatorCode);
            if (separatorIndex === -1) {
                throw new Error("Message is incomplete.");
            }
            // content before separator is handshake response
            // optional content after is additional messages
            var responseLength = separatorIndex + 1;
            messageData = String.fromCharCode.apply(null, binaryData.slice(0, responseLength));
            remainingData = (binaryData.byteLength > responseLength) ? binaryData.slice(responseLength).buffer : null;
        }
        else {
            var textData = data;
            var separatorIndex = textData.indexOf(_TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__["TextMessageFormat"].RecordSeparator);
            if (separatorIndex === -1) {
                throw new Error("Message is incomplete.");
            }
            // content before separator is handshake response
            // optional content after is additional messages
            var responseLength = separatorIndex + 1;
            messageData = textData.substring(0, responseLength);
            remainingData = (textData.length > responseLength) ? textData.substring(responseLength) : null;
        }
        // At this point we should have just the single handshake message
        var messages = _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__["TextMessageFormat"].parse(messageData);
        var response = JSON.parse(messages[0]);
        if (response.type) {
            throw new Error("Expected a handshake response from the server.");
        }
        responseMessage = response;
        // multiple messages could have arrived with handshake
        // return additional data to be parsed as usual, or null if all parsed
        return [remainingData, responseMessage];
    };
    return HandshakeProtocol;
}());

//# sourceMappingURL=HandshakeProtocol.js.map

/***/ }),

/***/ "MVw1":
/*!*********************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/WebSocketTransport.js ***!
  \*********************************************************************/
/*! exports provided: WebSocketTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketTransport", function() { return WebSocketTransport; });
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ILogger */ "eDUa");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ITransport */ "WbzQ");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils */ "yfcC");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/** @private */
var WebSocketTransport = /** @class */ (function () {
    function WebSocketTransport(httpClient, accessTokenFactory, logger, logMessageContent, webSocketConstructor) {
        this.logger = logger;
        this.accessTokenFactory = accessTokenFactory;
        this.logMessageContent = logMessageContent;
        this.webSocketConstructor = webSocketConstructor;
        this.httpClient = httpClient;
        this.onreceive = null;
        this.onclose = null;
    }
    WebSocketTransport.prototype.connect = function (url, transferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isRequired(url, "url");
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isRequired(transferFormat, "transferFormat");
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"], "transferFormat");
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(WebSockets transport) Connecting.");
                        if (!this.accessTokenFactory) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.accessTokenFactory()];
                    case 1:
                        token = _a.sent();
                        if (token) {
                            url += (url.indexOf("?") < 0 ? "?" : "&") + ("access_token=" + encodeURIComponent(token));
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, new Promise(function (resolve, reject) {
                            url = url.replace(/^http/, "ws");
                            var webSocket;
                            var cookies = _this.httpClient.getCookieString(url);
                            if (typeof window === "undefined" && cookies) {
                                // Only pass cookies when in non-browser environments
                                webSocket = new _this.webSocketConstructor(url, undefined, {
                                    headers: {
                                        Cookie: "" + cookies,
                                    },
                                });
                            }
                            if (!webSocket) {
                                // Chrome is not happy with passing 'undefined' as protocol
                                webSocket = new _this.webSocketConstructor(url);
                            }
                            if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"].Binary) {
                                webSocket.binaryType = "arraybuffer";
                            }
                            // tslint:disable-next-line:variable-name
                            webSocket.onopen = function (_event) {
                                _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information, "WebSocket connected to " + url + ".");
                                _this.webSocket = webSocket;
                                resolve();
                            };
                            webSocket.onerror = function (event) {
                                var error = null;
                                // ErrorEvent is a browser only type we need to check if the type exists before using it
                                if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
                                    error = event.error;
                                }
                                reject(error);
                            };
                            webSocket.onmessage = function (message) {
                                _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(WebSockets transport) data received. " + Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["getDataDetail"])(message.data, _this.logMessageContent) + ".");
                                if (_this.onreceive) {
                                    _this.onreceive(message.data);
                                }
                            };
                            webSocket.onclose = function (event) { return _this.close(event); };
                        })];
                }
            });
        });
    };
    WebSocketTransport.prototype.send = function (data) {
        if (this.webSocket && this.webSocket.readyState === this.webSocketConstructor.OPEN) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(WebSockets transport) sending data. " + Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["getDataDetail"])(data, this.logMessageContent) + ".");
            this.webSocket.send(data);
            return Promise.resolve();
        }
        return Promise.reject("WebSocket is not in the OPEN state");
    };
    WebSocketTransport.prototype.stop = function () {
        if (this.webSocket) {
            // Clear websocket handlers because we are considering the socket closed now
            this.webSocket.onclose = function () { };
            this.webSocket.onmessage = function () { };
            this.webSocket.onerror = function () { };
            this.webSocket.close();
            this.webSocket = undefined;
            // Manually invoke onclose callback inline so we know the HttpConnection was closed properly before returning
            // This also solves an issue where websocket.onclose could take 18+ seconds to trigger during network disconnects
            this.close(undefined);
        }
        return Promise.resolve();
    };
    WebSocketTransport.prototype.close = function (event) {
        // webSocket will be null if the transport did not start successfully
        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(WebSockets transport) socket closed.");
        if (this.onclose) {
            if (event && (event.wasClean === false || event.code !== 1000)) {
                this.onclose(new Error("WebSocket closed with status code: " + event.code + " (" + event.reason + ")."));
            }
            else {
                this.onclose();
            }
        }
    };
    return WebSocketTransport;
}());

//# sourceMappingURL=WebSocketTransport.js.map

/***/ }),

/***/ "Oq4w":
/*!*****************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/NodeHttpClient.js ***!
  \*****************************************************************/
/*! exports provided: NodeHttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeHttpClient", function() { return NodeHttpClient; });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors */ "xfvH");
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpClient */ "g/0X");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ILogger */ "eDUa");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils */ "yfcC");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};




var requestModule;
if (typeof XMLHttpRequest === "undefined") {
    // In order to ignore the dynamic require in webpack builds we need to do this magic
    // @ts-ignore: TS doesn't know about these names
    var requireFunc =  true ? require : undefined;
    requestModule = requireFunc("request");
}
var NodeHttpClient = /** @class */ (function (_super) {
    __extends(NodeHttpClient, _super);
    function NodeHttpClient(logger) {
        var _this = _super.call(this) || this;
        if (typeof requestModule === "undefined") {
            throw new Error("The 'request' module could not be loaded.");
        }
        _this.logger = logger;
        _this.cookieJar = requestModule.jar();
        _this.request = requestModule.defaults({ jar: _this.cookieJar });
        return _this;
    }
    NodeHttpClient.prototype.send = function (httpRequest) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestBody;
            if (Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["isArrayBuffer"])(httpRequest.content)) {
                requestBody = Buffer.from(httpRequest.content);
            }
            else {
                requestBody = httpRequest.content || "";
            }
            var currentRequest = _this.request(httpRequest.url, {
                body: requestBody,
                // If binary is expected 'null' should be used, otherwise for text 'utf8'
                encoding: httpRequest.responseType === "arraybuffer" ? null : "utf8",
                headers: __assign({ 
                    // Tell auth middleware to 401 instead of redirecting
                    "X-Requested-With": "XMLHttpRequest" }, httpRequest.headers),
                method: httpRequest.method,
                timeout: httpRequest.timeout,
            }, function (error, response, body) {
                if (httpRequest.abortSignal) {
                    httpRequest.abortSignal.onabort = null;
                }
                if (error) {
                    if (error.code === "ETIMEDOUT") {
                        _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "Timeout from HTTP request.");
                        reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["TimeoutError"]());
                    }
                    _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "Error from HTTP request. " + error);
                    reject(error);
                    return;
                }
                if (response.statusCode >= 200 && response.statusCode < 300) {
                    resolve(new _HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"](response.statusCode, response.statusMessage || "", body));
                }
                else {
                    reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["HttpError"](response.statusMessage || "", response.statusCode || 0));
                }
            });
            if (httpRequest.abortSignal) {
                httpRequest.abortSignal.onabort = function () {
                    currentRequest.abort();
                    reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"]());
                };
            }
        });
    };
    NodeHttpClient.prototype.getCookieString = function (url) {
        return this.cookieJar.getCookieString(url);
    };
    return NodeHttpClient;
}(_HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));

//# sourceMappingURL=NodeHttpClient.js.map

/***/ }),

/***/ "QjfK":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-split-pane contentId=\"content\">\r\n  <ion-menu>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n\r\n        <ion-title>\r\n          <ion-label>Cyber</ion-label>\r\n        </ion-title>\r\n\r\n        <ion-buttons slot=\"end\">\r\n          <!-- [placeholder]='\"tab1.languageChangePlaceholder\" | translate' -->\r\n\r\n          <ion-icon (click)='openLanguagePopover($event)' id=\"toolbarIcon\" name=\"language-outline\"></ion-icon>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-menu-toggle auto-hide=\"false\">\r\n          <!-- <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" [class.active.item]=\"selectedPage\">\r\n      <ion-label> {{p.title}} </ion-label>\r\n    </ion-item> -->\r\n          <ion-item *ngIf=\"!isLoggedIn\" routerLink=\"/menu/home\">\r\n            <ion-icon color=\"dark\" slot=\"start\" name=\"log-in-outline\"></ion-icon>\r\n            <ion-label class=\"my-label\" color=\"dark\"> {{'Home' | translate}} </ion-label>\r\n          </ion-item>\r\n\r\n          <ion-item *ngIf=\"isLoggedIn\" routerLink=\"/menu/favourite-orders\">\r\n            <ion-icon color=\"dark\" slot=\"start\" name=\"star-outline\"></ion-icon>\r\n            <ion-label class=\"my-label\" color=\"dark\"> {{'Favourites' | translate}} </ion-label>\r\n          </ion-item>\r\n\r\n\r\n          <ion-item *ngIf=\"isLoggedIn\" routerLink=\"/menu/travelling\">\r\n            <ion-icon color=\"dark\" slot=\"start\" name=\"walk-outline\"></ion-icon>\r\n            <ion-label class=\"my-label\" color=\"dark\"> {{'Travel' | translate}} </ion-label>\r\n          </ion-item>\r\n\r\n          <ion-item *ngIf=\"isLoggedIn\" routerLink=\"/menu/out-of-town\">\r\n            <ion-icon color=\"dark\" slot=\"start\" name=\"bicycle-outline\"></ion-icon>\r\n            <ion-label class=\"my-label\" color=\"dark\"> {{'Out of town' | translate}} </ion-label>\r\n          </ion-item>\r\n\r\n          \r\n          <ion-item *ngIf=\"isLoggedIn && isVerified && documentConfirmed == true && driverCars.length >= 1\"\r\n            routerLink=\"/menu/categories\">\r\n            <ion-icon color=\"dark\" name=\"car-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label class=\"my-label\" color=\"dark\"> {{'Drive' | translate}} </ion-label>\r\n          </ion-item>\r\n\r\n          <ion-item *ngIf=\"isLoggedIn && isVerified == false && documentConfirmed == false\"\r\n            routerLink=\"/menu/become-driver\">\r\n            <ion-icon color=\"dark\" name=\"car-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label class=\"my-label\" color=\"dark\"> {{'Drive' | translate}} </ion-label>\r\n          </ion-item>\r\n\r\n          <ion-item *ngIf=\"isLoggedIn && isVerified == true && driverCars.length == 0 && documentConfirmed == false\"\r\n            routerLink=\"/menu/car-register\">\r\n            <ion-icon color=\"dark\" name=\"car-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label class=\"my-label\" color=\"dark\"> {{'Drive' | translate}} </ion-label>\r\n          </ion-item>\r\n\r\n          <ion-item *ngIf=\"isLoggedIn && documentConfirmed == false && isVerified == true\" routerLink=\"/menu/verifying\">\r\n            <ion-icon color=\"dark\" name=\"person-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label class=\"my-label\" color=\"dark\"> {{'Profile' | translate}} </ion-label>\r\n          </ion-item>\r\n\r\n          <ion-item *ngIf=\"isLoggedIn && documentConfirmed == false && isVerified == false\" routerLink=\"/menu/become-driver\">\r\n            <ion-icon color=\"dark\" name=\"person-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label class=\"my-label\" color=\"dark\"> {{'Profile' | translate}} </ion-label>\r\n          </ion-item>\r\n\r\n          <ion-item *ngIf=\"isLoggedIn && isVerified && documentConfirmed == true\" routerLink=\"/menu/driver-profile\">\r\n            <ion-icon color=\"dark\" name=\"person-outline\" slot=\"start\"></ion-icon>\r\n            <ion-label class=\"my-label\" color=\"dark\"> {{'Profile' | translate}} </ion-label>\r\n          </ion-item>\r\n\r\n         \r\n          <ion-item *ngIf=\"isLoggedIn\" routerLink=\"/menu/report\">\r\n            <ion-icon color=\"dark\" slot=\"start\" name=\"alert-circle-outline\"></ion-icon>\r\n            <ion-label class=\"my-label\" color=\"dark\"> {{'Report' | translate}} </ion-label>\r\n          </ion-item>\r\n\r\n        </ion-menu-toggle>\r\n\r\n        <ion-item *ngIf=\"isLoggedIn\" toppable (click)=logout() routerDirection=\"root\">\r\n          <ion-icon color=\"dark\" name=\"log-out-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label class=\"my-label\" color=\"dark\"> {{'Logout' | translate}} </ion-label>\r\n        </ion-item>\r\n\r\n      </ion-list>\r\n    </ion-content>\r\n\r\n  </ion-menu>\r\n\r\n  <ion-router-outlet id=\"content\" main></ion-router-outlet>\r\n</ion-split-pane>");

/***/ }),

/***/ "Rqsq":
/*!***********************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/HubConnectionBuilder.js ***!
  \***********************************************************************/
/*! exports provided: HubConnectionBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubConnectionBuilder", function() { return HubConnectionBuilder; });
/* harmony import */ var _HttpConnection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HttpConnection */ "jm+w");
/* harmony import */ var _HubConnection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HubConnection */ "bPln");
/* harmony import */ var _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JsonHubProtocol */ "249r");
/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loggers */ "e3Su");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Utils */ "yfcC");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.





/** A builder for configuring {@link @aspnet/signalr.HubConnection} instances. */
var HubConnectionBuilder = /** @class */ (function () {
    function HubConnectionBuilder() {
    }
    HubConnectionBuilder.prototype.configureLogging = function (logging) {
        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(logging, "logging");
        if (isLogger(logging)) {
            this.logger = logging;
        }
        else {
            this.logger = new _Utils__WEBPACK_IMPORTED_MODULE_4__["ConsoleLogger"](logging);
        }
        return this;
    };
    HubConnectionBuilder.prototype.withUrl = function (url, transportTypeOrOptions) {
        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(url, "url");
        this.url = url;
        // Flow-typing knows where it's at. Since HttpTransportType is a number and IHttpConnectionOptions is guaranteed
        // to be an object, we know (as does TypeScript) this comparison is all we need to figure out which overload was called.
        if (typeof transportTypeOrOptions === "object") {
            this.httpConnectionOptions = transportTypeOrOptions;
        }
        else {
            this.httpConnectionOptions = {
                transport: transportTypeOrOptions,
            };
        }
        return this;
    };
    /** Configures the {@link @aspnet/signalr.HubConnection} to use the specified Hub Protocol.
     *
     * @param {IHubProtocol} protocol The {@link @aspnet/signalr.IHubProtocol} implementation to use.
     */
    HubConnectionBuilder.prototype.withHubProtocol = function (protocol) {
        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(protocol, "protocol");
        this.protocol = protocol;
        return this;
    };
    /** Creates a {@link @aspnet/signalr.HubConnection} from the configuration options specified in this builder.
     *
     * @returns {HubConnection} The configured {@link @aspnet/signalr.HubConnection}.
     */
    HubConnectionBuilder.prototype.build = function () {
        // If httpConnectionOptions has a logger, use it. Otherwise, override it with the one
        // provided to configureLogger
        var httpConnectionOptions = this.httpConnectionOptions || {};
        // If it's 'null', the user **explicitly** asked for null, don't mess with it.
        if (httpConnectionOptions.logger === undefined) {
            // If our logger is undefined or null, that's OK, the HttpConnection constructor will handle it.
            httpConnectionOptions.logger = this.logger;
        }
        // Now create the connection
        if (!this.url) {
            throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
        }
        var connection = new _HttpConnection__WEBPACK_IMPORTED_MODULE_0__["HttpConnection"](this.url, httpConnectionOptions);
        return _HubConnection__WEBPACK_IMPORTED_MODULE_1__["HubConnection"].create(connection, this.logger || _Loggers__WEBPACK_IMPORTED_MODULE_3__["NullLogger"].instance, this.protocol || new _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_2__["JsonHubProtocol"]());
    };
    return HubConnectionBuilder;
}());

function isLogger(logger) {
    return logger.log !== undefined;
}
//# sourceMappingURL=HubConnectionBuilder.js.map

/***/ }),

/***/ "WTzE":
/*!***********************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/LongPollingTransport.js ***!
  \***********************************************************************/
/*! exports provided: LongPollingTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongPollingTransport", function() { return LongPollingTransport; });
/* harmony import */ var _AbortController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbortController */ "flog");
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Errors */ "xfvH");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ILogger */ "eDUa");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ITransport */ "WbzQ");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Utils */ "yfcC");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





// Not exported from 'index', this type is internal.
/** @private */
var LongPollingTransport = /** @class */ (function () {
    function LongPollingTransport(httpClient, accessTokenFactory, logger, logMessageContent) {
        this.httpClient = httpClient;
        this.accessTokenFactory = accessTokenFactory;
        this.logger = logger;
        this.pollAbort = new _AbortController__WEBPACK_IMPORTED_MODULE_0__["AbortController"]();
        this.logMessageContent = logMessageContent;
        this.running = false;
        this.onreceive = null;
        this.onclose = null;
    }
    Object.defineProperty(LongPollingTransport.prototype, "pollAborted", {
        // This is an internal type, not exported from 'index' so this is really just internal.
        get: function () {
            return this.pollAbort.aborted;
        },
        enumerable: true,
        configurable: true
    });
    LongPollingTransport.prototype.connect = function (url, transferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var pollOptions, token, pollUrl, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(url, "url");
                        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(transferFormat, "transferFormat");
                        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_3__["TransferFormat"], "transferFormat");
                        this.url = url;
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Connecting.");
                        // Allow binary format on Node and Browsers that support binary content (indicated by the presence of responseType property)
                        if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_3__["TransferFormat"].Binary &&
                            (typeof XMLHttpRequest !== "undefined" && typeof new XMLHttpRequest().responseType !== "string")) {
                            throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
                        }
                        pollOptions = {
                            abortSignal: this.pollAbort.signal,
                            headers: {},
                            timeout: 100000,
                        };
                        if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_3__["TransferFormat"].Binary) {
                            pollOptions.responseType = "arraybuffer";
                        }
                        return [4 /*yield*/, this.getAccessToken()];
                    case 1:
                        token = _a.sent();
                        this.updateHeaderToken(pollOptions, token);
                        pollUrl = url + "&_=" + Date.now();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) polling: " + pollUrl + ".");
                        return [4 /*yield*/, this.httpClient.get(pollUrl, pollOptions)];
                    case 2:
                        response = _a.sent();
                        if (response.statusCode !== 200) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, "(LongPolling transport) Unexpected response code: " + response.statusCode + ".");
                            // Mark running as false so that the poll immediately ends and runs the close logic
                            this.closeError = new _Errors__WEBPACK_IMPORTED_MODULE_1__["HttpError"](response.statusText || "", response.statusCode);
                            this.running = false;
                        }
                        else {
                            this.running = true;
                        }
                        this.receiving = this.poll(this.url, pollOptions);
                        return [2 /*return*/];
                }
            });
        });
    };
    LongPollingTransport.prototype.getAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.accessTokenFactory) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.accessTokenFactory()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/, null];
                }
            });
        });
    };
    LongPollingTransport.prototype.updateHeaderToken = function (request, token) {
        if (!request.headers) {
            request.headers = {};
        }
        if (token) {
            // tslint:disable-next-line:no-string-literal
            request.headers["Authorization"] = "Bearer " + token;
            return;
        }
        // tslint:disable-next-line:no-string-literal
        if (request.headers["Authorization"]) {
            // tslint:disable-next-line:no-string-literal
            delete request.headers["Authorization"];
        }
    };
    LongPollingTransport.prototype.poll = function (url, pollOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var token, pollUrl, response, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, , 8, 9]);
                        _a.label = 1;
                    case 1:
                        if (!this.running) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.getAccessToken()];
                    case 2:
                        token = _a.sent();
                        this.updateHeaderToken(pollOptions, token);
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        pollUrl = url + "&_=" + Date.now();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) polling: " + pollUrl + ".");
                        return [4 /*yield*/, this.httpClient.get(pollUrl, pollOptions)];
                    case 4:
                        response = _a.sent();
                        if (response.statusCode === 204) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "(LongPolling transport) Poll terminated by server.");
                            this.running = false;
                        }
                        else if (response.statusCode !== 200) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, "(LongPolling transport) Unexpected response code: " + response.statusCode + ".");
                            // Unexpected status code
                            this.closeError = new _Errors__WEBPACK_IMPORTED_MODULE_1__["HttpError"](response.statusText || "", response.statusCode);
                            this.running = false;
                        }
                        else {
                            // Process the response
                            if (response.content) {
                                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) data received. " + Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["getDataDetail"])(response.content, this.logMessageContent) + ".");
                                if (this.onreceive) {
                                    this.onreceive(response.content);
                                }
                            }
                            else {
                                // This is another way timeout manifest.
                                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Poll timed out, reissuing.");
                            }
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        if (!this.running) {
                            // Log but disregard errors that occur after stopping
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Poll errored after shutdown: " + e_1.message);
                        }
                        else {
                            if (e_1 instanceof _Errors__WEBPACK_IMPORTED_MODULE_1__["TimeoutError"]) {
                                // Ignore timeouts and reissue the poll.
                                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Poll timed out, reissuing.");
                            }
                            else {
                                // Close the connection with the error as the result.
                                this.closeError = e_1;
                                this.running = false;
                            }
                        }
                        return [3 /*break*/, 6];
                    case 6: return [3 /*break*/, 1];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Polling complete.");
                        // We will reach here with pollAborted==false when the server returned a response causing the transport to stop.
                        // If pollAborted==true then client initiated the stop and the stop method will raise the close event after DELETE is sent.
                        if (!this.pollAborted) {
                            this.raiseOnClose();
                        }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    LongPollingTransport.prototype.send = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.running) {
                    return [2 /*return*/, Promise.reject(new Error("Cannot send until the transport is connected"))];
                }
                return [2 /*return*/, Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["sendMessage"])(this.logger, "LongPolling", this.httpClient, this.url, this.accessTokenFactory, data, this.logMessageContent)];
            });
        });
    };
    LongPollingTransport.prototype.stop = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deleteOptions, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Stopping polling.");
                        // Tell receiving loop to stop, abort any current request, and then wait for it to finish
                        this.running = false;
                        this.pollAbort.abort();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 5, 6]);
                        return [4 /*yield*/, this.receiving];
                    case 2:
                        _a.sent();
                        // Send DELETE to clean up long polling on the server
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) sending DELETE request to " + this.url + ".");
                        deleteOptions = {
                            headers: {},
                        };
                        return [4 /*yield*/, this.getAccessToken()];
                    case 3:
                        token = _a.sent();
                        this.updateHeaderToken(deleteOptions, token);
                        return [4 /*yield*/, this.httpClient.delete(this.url, deleteOptions)];
                    case 4:
                        _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) DELETE request sent.");
                        return [3 /*break*/, 6];
                    case 5:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Stop finished.");
                        // Raise close event here instead of in polling
                        // It needs to happen after the DELETE request is sent
                        this.raiseOnClose();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LongPollingTransport.prototype.raiseOnClose = function () {
        if (this.onclose) {
            var logMessage = "(LongPolling transport) Firing onclose event.";
            if (this.closeError) {
                logMessage += " Error: " + this.closeError;
            }
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, logMessage);
            this.onclose(this.closeError);
        }
    };
    return LongPollingTransport;
}());

//# sourceMappingURL=LongPollingTransport.js.map

/***/ }),

/***/ "WbzQ":
/*!*************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/ITransport.js ***!
  \*************************************************************/
/*! exports provided: HttpTransportType, TransferFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpTransportType", function() { return HttpTransportType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferFormat", function() { return TransferFormat; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// This will be treated as a bit flag in the future, so we keep it using power-of-two values.
/** Specifies a specific HTTP transport type. */
var HttpTransportType;
(function (HttpTransportType) {
    /** Specifies no transport preference. */
    HttpTransportType[HttpTransportType["None"] = 0] = "None";
    /** Specifies the WebSockets transport. */
    HttpTransportType[HttpTransportType["WebSockets"] = 1] = "WebSockets";
    /** Specifies the Server-Sent Events transport. */
    HttpTransportType[HttpTransportType["ServerSentEvents"] = 2] = "ServerSentEvents";
    /** Specifies the Long Polling transport. */
    HttpTransportType[HttpTransportType["LongPolling"] = 4] = "LongPolling";
})(HttpTransportType || (HttpTransportType = {}));
/** Specifies the transfer format for a connection. */
var TransferFormat;
(function (TransferFormat) {
    /** Specifies that only text data will be transmitted over the connection. */
    TransferFormat[TransferFormat["Text"] = 1] = "Text";
    /** Specifies that binary data will be transmitted over the connection. */
    TransferFormat[TransferFormat["Binary"] = 2] = "Binary";
})(TransferFormat || (TransferFormat = {}));
//# sourceMappingURL=ITransport.js.map

/***/ }),

/***/ "YoFb":
/*!****************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/XhrHttpClient.js ***!
  \****************************************************************/
/*! exports provided: XhrHttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrHttpClient", function() { return XhrHttpClient; });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors */ "xfvH");
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpClient */ "g/0X");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ILogger */ "eDUa");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var XhrHttpClient = /** @class */ (function (_super) {
    __extends(XhrHttpClient, _super);
    function XhrHttpClient(logger) {
        var _this = _super.call(this) || this;
        _this.logger = logger;
        return _this;
    }
    /** @inheritDoc */
    XhrHttpClient.prototype.send = function (request) {
        var _this = this;
        // Check that abort was not signaled before calling send
        if (request.abortSignal && request.abortSignal.aborted) {
            return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"]());
        }
        if (!request.method) {
            return Promise.reject(new Error("No method defined."));
        }
        if (!request.url) {
            return Promise.reject(new Error("No url defined."));
        }
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(request.method, request.url, true);
            xhr.withCredentials = true;
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            // Explicitly setting the Content-Type header for React Native on Android platform.
            xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            var headers = request.headers;
            if (headers) {
                Object.keys(headers)
                    .forEach(function (header) {
                    xhr.setRequestHeader(header, headers[header]);
                });
            }
            if (request.responseType) {
                xhr.responseType = request.responseType;
            }
            if (request.abortSignal) {
                request.abortSignal.onabort = function () {
                    xhr.abort();
                    reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"]());
                };
            }
            if (request.timeout) {
                xhr.timeout = request.timeout;
            }
            xhr.onload = function () {
                if (request.abortSignal) {
                    request.abortSignal.onabort = null;
                }
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(new _HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"](xhr.status, xhr.statusText, xhr.response || xhr.responseText));
                }
                else {
                    reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["HttpError"](xhr.statusText, xhr.status));
                }
            };
            xhr.onerror = function () {
                _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "Error from HTTP request. " + xhr.status + ": " + xhr.statusText + ".");
                reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["HttpError"](xhr.statusText, xhr.status));
            };
            xhr.ontimeout = function () {
                _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "Timeout from HTTP request.");
                reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["TimeoutError"]());
            };
            xhr.send(request.content || "");
        });
    };
    return XhrHttpClient;
}(_HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));

//# sourceMappingURL=XhrHttpClient.js.map

/***/ }),

/***/ "bPln":
/*!****************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/HubConnection.js ***!
  \****************************************************************/
/*! exports provided: HubConnectionState, HubConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubConnectionState", function() { return HubConnectionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubConnection", function() { return HubConnection; });
/* harmony import */ var _HandshakeProtocol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HandshakeProtocol */ "LO1e");
/* harmony import */ var _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IHubProtocol */ "1pz8");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ILogger */ "eDUa");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils */ "yfcC");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var DEFAULT_TIMEOUT_IN_MS = 30 * 1000;
var DEFAULT_PING_INTERVAL_IN_MS = 15 * 1000;
/** Describes the current state of the {@link HubConnection} to the server. */
var HubConnectionState;
(function (HubConnectionState) {
    /** The hub connection is disconnected. */
    HubConnectionState[HubConnectionState["Disconnected"] = 0] = "Disconnected";
    /** The hub connection is connected. */
    HubConnectionState[HubConnectionState["Connected"] = 1] = "Connected";
})(HubConnectionState || (HubConnectionState = {}));
/** Represents a connection to a SignalR Hub. */
var HubConnection = /** @class */ (function () {
    function HubConnection(connection, logger, protocol) {
        var _this = this;
        _Utils__WEBPACK_IMPORTED_MODULE_3__["Arg"].isRequired(connection, "connection");
        _Utils__WEBPACK_IMPORTED_MODULE_3__["Arg"].isRequired(logger, "logger");
        _Utils__WEBPACK_IMPORTED_MODULE_3__["Arg"].isRequired(protocol, "protocol");
        this.serverTimeoutInMilliseconds = DEFAULT_TIMEOUT_IN_MS;
        this.keepAliveIntervalInMilliseconds = DEFAULT_PING_INTERVAL_IN_MS;
        this.logger = logger;
        this.protocol = protocol;
        this.connection = connection;
        this.handshakeProtocol = new _HandshakeProtocol__WEBPACK_IMPORTED_MODULE_0__["HandshakeProtocol"]();
        this.connection.onreceive = function (data) { return _this.processIncomingData(data); };
        this.connection.onclose = function (error) { return _this.connectionClosed(error); };
        this.callbacks = {};
        this.methods = {};
        this.closedCallbacks = [];
        this.id = 0;
        this.receivedHandshakeResponse = false;
        this.connectionState = HubConnectionState.Disconnected;
        this.cachedPingMessage = this.protocol.writeMessage({ type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Ping });
    }
    /** @internal */
    // Using a public static factory method means we can have a private constructor and an _internal_
    // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
    // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
    // public parameter-less constructor.
    HubConnection.create = function (connection, logger, protocol) {
        return new HubConnection(connection, logger, protocol);
    };
    Object.defineProperty(HubConnection.prototype, "state", {
        /** Indicates the state of the {@link HubConnection} to the server. */
        get: function () {
            return this.connectionState;
        },
        enumerable: true,
        configurable: true
    });
    /** Starts the connection.
     *
     * @returns {Promise<void>} A Promise that resolves when the connection has been successfully established, or rejects with an error.
     */
    HubConnection.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var handshakeRequest, handshakePromise;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handshakeRequest = {
                            protocol: this.protocol.name,
                            version: this.protocol.version,
                        };
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Starting HubConnection.");
                        this.receivedHandshakeResponse = false;
                        handshakePromise = new Promise(function (resolve, reject) {
                            _this.handshakeResolver = resolve;
                            _this.handshakeRejecter = reject;
                        });
                        return [4 /*yield*/, this.connection.start(this.protocol.transferFormat)];
                    case 1:
                        _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Sending handshake request.");
                        return [4 /*yield*/, this.sendMessage(this.handshakeProtocol.writeHandshakeRequest(handshakeRequest))];
                    case 2:
                        _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "Using HubProtocol '" + this.protocol.name + "'.");
                        // defensively cleanup timeout in case we receive a message from the server before we finish start
                        this.cleanupTimeout();
                        this.resetTimeoutPeriod();
                        this.resetKeepAliveInterval();
                        // Wait for the handshake to complete before marking connection as connected
                        return [4 /*yield*/, handshakePromise];
                    case 3:
                        // Wait for the handshake to complete before marking connection as connected
                        _a.sent();
                        this.connectionState = HubConnectionState.Connected;
                        return [2 /*return*/];
                }
            });
        });
    };
    /** Stops the connection.
     *
     * @returns {Promise<void>} A Promise that resolves when the connection has been successfully terminated, or rejects with an error.
     */
    HubConnection.prototype.stop = function () {
        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Stopping HubConnection.");
        this.cleanupTimeout();
        this.cleanupPingTimer();
        return this.connection.stop();
    };
    /** Invokes a streaming hub method on the server using the specified name and arguments.
     *
     * @typeparam T The type of the items returned by the server.
     * @param {string} methodName The name of the server method to invoke.
     * @param {any[]} args The arguments used to invoke the server method.
     * @returns {IStreamResult<T>} An object that yields results from the server as they are received.
     */
    HubConnection.prototype.stream = function (methodName) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var invocationDescriptor = this.createStreamInvocation(methodName, args);
        var promiseQueue;
        var subject = new _Utils__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        subject.cancelCallback = function () {
            var cancelInvocation = _this.createCancelInvocation(invocationDescriptor.invocationId);
            var cancelMessage = _this.protocol.writeMessage(cancelInvocation);
            delete _this.callbacks[invocationDescriptor.invocationId];
            return promiseQueue.then(function () {
                return _this.sendMessage(cancelMessage);
            });
        };
        this.callbacks[invocationDescriptor.invocationId] = function (invocationEvent, error) {
            if (error) {
                subject.error(error);
                return;
            }
            else if (invocationEvent) {
                // invocationEvent will not be null when an error is not passed to the callback
                if (invocationEvent.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion) {
                    if (invocationEvent.error) {
                        subject.error(new Error(invocationEvent.error));
                    }
                    else {
                        subject.complete();
                    }
                }
                else {
                    subject.next((invocationEvent.item));
                }
            }
        };
        var message = this.protocol.writeMessage(invocationDescriptor);
        promiseQueue = this.sendMessage(message)
            .catch(function (e) {
            subject.error(e);
            delete _this.callbacks[invocationDescriptor.invocationId];
        });
        return subject;
    };
    HubConnection.prototype.sendMessage = function (message) {
        this.resetKeepAliveInterval();
        return this.connection.send(message);
    };
    /** Invokes a hub method on the server using the specified name and arguments. Does not wait for a response from the receiver.
     *
     * The Promise returned by this method resolves when the client has sent the invocation to the server. The server may still
     * be processing the invocation.
     *
     * @param {string} methodName The name of the server method to invoke.
     * @param {any[]} args The arguments used to invoke the server method.
     * @returns {Promise<void>} A Promise that resolves when the invocation has been successfully sent, or rejects with an error.
     */
    HubConnection.prototype.send = function (methodName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var invocationDescriptor = this.createInvocation(methodName, args, true);
        var message = this.protocol.writeMessage(invocationDescriptor);
        return this.sendMessage(message);
    };
    /** Invokes a hub method on the server using the specified name and arguments.
     *
     * The Promise returned by this method resolves when the server indicates it has finished invoking the method. When the promise
     * resolves, the server has finished invoking the method. If the server method returns a result, it is produced as the result of
     * resolving the Promise.
     *
     * @typeparam T The expected return type.
     * @param {string} methodName The name of the server method to invoke.
     * @param {any[]} args The arguments used to invoke the server method.
     * @returns {Promise<T>} A Promise that resolves with the result of the server method (if any), or rejects with an error.
     */
    HubConnection.prototype.invoke = function (methodName) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var invocationDescriptor = this.createInvocation(methodName, args, false);
        var p = new Promise(function (resolve, reject) {
            // invocationId will always have a value for a non-blocking invocation
            _this.callbacks[invocationDescriptor.invocationId] = function (invocationEvent, error) {
                if (error) {
                    reject(error);
                    return;
                }
                else if (invocationEvent) {
                    // invocationEvent will not be null when an error is not passed to the callback
                    if (invocationEvent.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion) {
                        if (invocationEvent.error) {
                            reject(new Error(invocationEvent.error));
                        }
                        else {
                            resolve(invocationEvent.result);
                        }
                    }
                    else {
                        reject(new Error("Unexpected message type: " + invocationEvent.type));
                    }
                }
            };
            var message = _this.protocol.writeMessage(invocationDescriptor);
            _this.sendMessage(message)
                .catch(function (e) {
                reject(e);
                // invocationId will always have a value for a non-blocking invocation
                delete _this.callbacks[invocationDescriptor.invocationId];
            });
        });
        return p;
    };
    /** Registers a handler that will be invoked when the hub method with the specified method name is invoked.
     *
     * @param {string} methodName The name of the hub method to define.
     * @param {Function} newMethod The handler that will be raised when the hub method is invoked.
     */
    HubConnection.prototype.on = function (methodName, newMethod) {
        if (!methodName || !newMethod) {
            return;
        }
        methodName = methodName.toLowerCase();
        if (!this.methods[methodName]) {
            this.methods[methodName] = [];
        }
        // Preventing adding the same handler multiple times.
        if (this.methods[methodName].indexOf(newMethod) !== -1) {
            return;
        }
        this.methods[methodName].push(newMethod);
    };
    HubConnection.prototype.off = function (methodName, method) {
        if (!methodName) {
            return;
        }
        methodName = methodName.toLowerCase();
        var handlers = this.methods[methodName];
        if (!handlers) {
            return;
        }
        if (method) {
            var removeIdx = handlers.indexOf(method);
            if (removeIdx !== -1) {
                handlers.splice(removeIdx, 1);
                if (handlers.length === 0) {
                    delete this.methods[methodName];
                }
            }
        }
        else {
            delete this.methods[methodName];
        }
    };
    /** Registers a handler that will be invoked when the connection is closed.
     *
     * @param {Function} callback The handler that will be invoked when the connection is closed. Optionally receives a single argument containing the error that caused the connection to close (if any).
     */
    HubConnection.prototype.onclose = function (callback) {
        if (callback) {
            this.closedCallbacks.push(callback);
        }
    };
    HubConnection.prototype.processIncomingData = function (data) {
        this.cleanupTimeout();
        if (!this.receivedHandshakeResponse) {
            data = this.processHandshakeResponse(data);
            this.receivedHandshakeResponse = true;
        }
        // Data may have all been read when processing handshake response
        if (data) {
            // Parse the messages
            var messages = this.protocol.parseMessages(data, this.logger);
            for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
                var message = messages_1[_i];
                switch (message.type) {
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Invocation:
                        this.invokeClientMethod(message);
                        break;
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].StreamItem:
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion:
                        var callback = this.callbacks[message.invocationId];
                        if (callback != null) {
                            if (message.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion) {
                                delete this.callbacks[message.invocationId];
                            }
                            callback(message);
                        }
                        break;
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Ping:
                        // Don't care about pings
                        break;
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Close:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "Close message received from server.");
                        // We don't want to wait on the stop itself.
                        // tslint:disable-next-line:no-floating-promises
                        this.connection.stop(message.error ? new Error("Server returned an error on close: " + message.error) : undefined);
                        break;
                    default:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "Invalid message type: " + message.type + ".");
                        break;
                }
            }
        }
        this.resetTimeoutPeriod();
    };
    HubConnection.prototype.processHandshakeResponse = function (data) {
        var _a;
        var responseMessage;
        var remainingData;
        try {
            _a = this.handshakeProtocol.parseHandshakeResponse(data), remainingData = _a[0], responseMessage = _a[1];
        }
        catch (e) {
            var message = "Error parsing handshake response: " + e;
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, message);
            var error = new Error(message);
            // We don't want to wait on the stop itself.
            // tslint:disable-next-line:no-floating-promises
            this.connection.stop(error);
            this.handshakeRejecter(error);
            throw error;
        }
        if (responseMessage.error) {
            var message = "Server returned handshake error: " + responseMessage.error;
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, message);
            this.handshakeRejecter(message);
            // We don't want to wait on the stop itself.
            // tslint:disable-next-line:no-floating-promises
            this.connection.stop(new Error(message));
            throw new Error(message);
        }
        else {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Server handshake complete.");
        }
        this.handshakeResolver();
        return remainingData;
    };
    HubConnection.prototype.resetKeepAliveInterval = function () {
        var _this = this;
        this.cleanupPingTimer();
        this.pingServerHandle = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.connectionState === HubConnectionState.Connected)) return [3 /*break*/, 4];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.sendMessage(this.cachedPingMessage)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = _b.sent();
                        // We don't care about the error. It should be seen elsewhere in the client.
                        // The connection is probably in a bad or closed state now, cleanup the timer so it stops triggering
                        this.cleanupPingTimer();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); }, this.keepAliveIntervalInMilliseconds);
    };
    HubConnection.prototype.resetTimeoutPeriod = function () {
        var _this = this;
        if (!this.connection.features || !this.connection.features.inherentKeepAlive) {
            // Set the timeout timer
            this.timeoutHandle = setTimeout(function () { return _this.serverTimeout(); }, this.serverTimeoutInMilliseconds);
        }
    };
    HubConnection.prototype.serverTimeout = function () {
        // The server hasn't talked to us in a while. It doesn't like us anymore ... :(
        // Terminate the connection, but we don't need to wait on the promise.
        // tslint:disable-next-line:no-floating-promises
        this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
    };
    HubConnection.prototype.invokeClientMethod = function (invocationMessage) {
        var _this = this;
        var methods = this.methods[invocationMessage.target.toLowerCase()];
        if (methods) {
            methods.forEach(function (m) { return m.apply(_this, invocationMessage.arguments); });
            if (invocationMessage.invocationId) {
                // This is not supported in v1. So we return an error to avoid blocking the server waiting for the response.
                var message = "Server requested a response, which is not supported in this version of the client.";
                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, message);
                // We don't need to wait on this Promise.
                // tslint:disable-next-line:no-floating-promises
                this.connection.stop(new Error(message));
            }
        }
        else {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "No client method with the name '" + invocationMessage.target + "' found.");
        }
    };
    HubConnection.prototype.connectionClosed = function (error) {
        var _this = this;
        var callbacks = this.callbacks;
        this.callbacks = {};
        this.connectionState = HubConnectionState.Disconnected;
        // if handshake is in progress start will be waiting for the handshake promise, so we complete it
        // if it has already completed this should just noop
        if (this.handshakeRejecter) {
            this.handshakeRejecter(error);
        }
        Object.keys(callbacks)
            .forEach(function (key) {
            var callback = callbacks[key];
            callback(null, error ? error : new Error("Invocation canceled due to connection being closed."));
        });
        this.cleanupTimeout();
        this.cleanupPingTimer();
        this.closedCallbacks.forEach(function (c) { return c.apply(_this, [error]); });
    };
    HubConnection.prototype.cleanupPingTimer = function () {
        if (this.pingServerHandle) {
            clearTimeout(this.pingServerHandle);
        }
    };
    HubConnection.prototype.cleanupTimeout = function () {
        if (this.timeoutHandle) {
            clearTimeout(this.timeoutHandle);
        }
    };
    HubConnection.prototype.createInvocation = function (methodName, args, nonblocking) {
        if (nonblocking) {
            return {
                arguments: args,
                target: methodName,
                type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Invocation,
            };
        }
        else {
            var id = this.id;
            this.id++;
            return {
                arguments: args,
                invocationId: id.toString(),
                target: methodName,
                type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Invocation,
            };
        }
    };
    HubConnection.prototype.createStreamInvocation = function (methodName, args) {
        var id = this.id;
        this.id++;
        return {
            arguments: args,
            invocationId: id.toString(),
            target: methodName,
            type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].StreamInvocation,
        };
    };
    HubConnection.prototype.createCancelInvocation = function (id) {
        return {
            invocationId: id,
            type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].CancelInvocation,
        };
    };
    return HubConnection;
}());

//# sourceMappingURL=HubConnection.js.map

/***/ }),

/***/ "dhCI":
/*!********************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/DefaultHttpClient.js ***!
  \********************************************************************/
/*! exports provided: DefaultHttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultHttpClient", function() { return DefaultHttpClient; });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors */ "xfvH");
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpClient */ "g/0X");
/* harmony import */ var _NodeHttpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NodeHttpClient */ "Oq4w");
/* harmony import */ var _XhrHttpClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./XhrHttpClient */ "YoFb");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/** Default implementation of {@link @aspnet/signalr.HttpClient}. */
var DefaultHttpClient = /** @class */ (function (_super) {
    __extends(DefaultHttpClient, _super);
    /** Creates a new instance of the {@link @aspnet/signalr.DefaultHttpClient}, using the provided {@link @aspnet/signalr.ILogger} to log messages. */
    function DefaultHttpClient(logger) {
        var _this = _super.call(this) || this;
        if (typeof XMLHttpRequest !== "undefined") {
            _this.httpClient = new _XhrHttpClient__WEBPACK_IMPORTED_MODULE_3__["XhrHttpClient"](logger);
        }
        else {
            _this.httpClient = new _NodeHttpClient__WEBPACK_IMPORTED_MODULE_2__["NodeHttpClient"](logger);
        }
        return _this;
    }
    /** @inheritDoc */
    DefaultHttpClient.prototype.send = function (request) {
        // Check that abort was not signaled before calling send
        if (request.abortSignal && request.abortSignal.aborted) {
            return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"]());
        }
        if (!request.method) {
            return Promise.reject(new Error("No method defined."));
        }
        if (!request.url) {
            return Promise.reject(new Error("No url defined."));
        }
        return this.httpClient.send(request);
    };
    DefaultHttpClient.prototype.getCookieString = function (url) {
        return this.httpClient.getCookieString(url);
    };
    return DefaultHttpClient;
}(_HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));

//# sourceMappingURL=DefaultHttpClient.js.map

/***/ }),

/***/ "e3Su":
/*!**********************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/Loggers.js ***!
  \**********************************************************/
/*! exports provided: NullLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NullLogger", function() { return NullLogger; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
/** A logger that does nothing when log messages are sent to it. */
var NullLogger = /** @class */ (function () {
    function NullLogger() {
    }
    /** @inheritDoc */
    // tslint:disable-next-line
    NullLogger.prototype.log = function (_logLevel, _message) {
    };
    /** The singleton instance of the {@link @aspnet/signalr.NullLogger}. */
    NullLogger.instance = new NullLogger();
    return NullLogger;
}());

//# sourceMappingURL=Loggers.js.map

/***/ }),

/***/ "eDUa":
/*!**********************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/ILogger.js ***!
  \**********************************************************/
/*! exports provided: LogLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// These values are designed to match the ASP.NET Log Levels since that's the pattern we're emulating here.
/** Indicates the severity of a log message.
 *
 * Log Levels are ordered in increasing severity. So `Debug` is more severe than `Trace`, etc.
 */
var LogLevel;
(function (LogLevel) {
    /** Log level for very low severity diagnostic messages. */
    LogLevel[LogLevel["Trace"] = 0] = "Trace";
    /** Log level for low severity diagnostic messages. */
    LogLevel[LogLevel["Debug"] = 1] = "Debug";
    /** Log level for informational diagnostic messages. */
    LogLevel[LogLevel["Information"] = 2] = "Information";
    /** Log level for diagnostic messages that indicate a non-fatal problem. */
    LogLevel[LogLevel["Warning"] = 3] = "Warning";
    /** Log level for diagnostic messages that indicate a failure in the current operation. */
    LogLevel[LogLevel["Error"] = 4] = "Error";
    /** Log level for diagnostic messages that indicate a failure that will terminate the entire application. */
    LogLevel[LogLevel["Critical"] = 5] = "Critical";
    /** The highest possible log level. Used when configuring logging to indicate that no log messages should be emitted. */
    LogLevel[LogLevel["None"] = 6] = "None";
})(LogLevel || (LogLevel = {}));
//# sourceMappingURL=ILogger.js.map

/***/ }),

/***/ "exMm":
/*!************************************************!*\
  !*** ./src/_services/driver/driver.service.ts ***!
  \************************************************/
/*! exports provided: DriverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverService", function() { return DriverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.service */ "Dsd+");







let DriverService = class DriverService {
    constructor(http, sharedService) {
        this.http = http;
        this.sharedService = sharedService;
        this.drivers = [];
    }
    getDriverHistory(userId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/order/history/${userId}`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getLastCompletedOrder(userId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/order/completed/${userId}`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getDriver(driverId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/driver/${driverId}`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    createDriver(data) {
        const headers = this.sharedService.headerGerneration();
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/driver`, data, { headers, responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getDriverCars(driverId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/car/driver/${driverId}`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getDriverActiveCar(driverId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/car/driver/active/${driverId}`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getDriverByReferral(referral) {
        const headers = this.sharedService.headerGerneration();
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/driver/referral/${referral}`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    locateDriver(driverId, lat, lng) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/driver/location/${driverId}/${lat}/${lng}`, { responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    voteUp(driverId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/driver/voteUp/${driverId}`, { headers, responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    voteDown(driverId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/driver/voteDown/${driverId}`, { headers, responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    lowerDriverCommission(driverId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/driver/${driverId}`, { headers, responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    activeCar(id, driverId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/car/${id}/${driverId}`, { headers, responseType: 'json' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    createCar(data) {
        const headers = this.sharedService.headerGerneration();
        return this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/car`, data, { headers, responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deleteCar(id) {
        const headers = this.sharedService.headerGerneration();
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/car/${id}`, { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    cancelOrderFromDriver(orderId) {
        const headers = this.sharedService.headerGerneration();
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/order/waiting/${orderId}`, { headers, responseType: 'json' })
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
DriverService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }
];
DriverService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], DriverService);



/***/ }),

/***/ "flog":
/*!******************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/AbortController.js ***!
  \******************************************************************/
/*! exports provided: AbortController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbortController", function() { return AbortController; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// Rough polyfill of https://developer.mozilla.org/en-US/docs/Web/API/AbortController
// We don't actually ever use the API being polyfilled, we always use the polyfill because
// it's a very new API right now.
// Not exported from index.
/** @private */
var AbortController = /** @class */ (function () {
    function AbortController() {
        this.isAborted = false;
        this.onabort = null;
    }
    AbortController.prototype.abort = function () {
        if (!this.isAborted) {
            this.isAborted = true;
            if (this.onabort) {
                this.onabort();
            }
        }
    };
    Object.defineProperty(AbortController.prototype, "signal", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbortController.prototype, "aborted", {
        get: function () {
            return this.isAborted;
        },
        enumerable: true,
        configurable: true
    });
    return AbortController;
}());

//# sourceMappingURL=AbortController.js.map

/***/ }),

/***/ "g/0X":
/*!*************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/HttpClient.js ***!
  \*************************************************************/
/*! exports provided: HttpResponse, HttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return HttpResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return HttpClient; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/** Represents an HTTP response. */
var HttpResponse = /** @class */ (function () {
    function HttpResponse(statusCode, statusText, content) {
        this.statusCode = statusCode;
        this.statusText = statusText;
        this.content = content;
    }
    return HttpResponse;
}());

/** Abstraction over an HTTP client.
 *
 * This class provides an abstraction over an HTTP client so that a different implementation can be provided on different platforms.
 */
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.get = function (url, options) {
        return this.send(__assign({}, options, { method: "GET", url: url }));
    };
    HttpClient.prototype.post = function (url, options) {
        return this.send(__assign({}, options, { method: "POST", url: url }));
    };
    HttpClient.prototype.delete = function (url, options) {
        return this.send(__assign({}, options, { method: "DELETE", url: url }));
    };
    /** Gets all cookies that apply to the specified URL.
     *
     * @param url The URL that the cookies are valid for.
     * @returns {string} A string containing all the key-value cookie pairs for the specified URL.
     */
    // @ts-ignore
    HttpClient.prototype.getCookieString = function (url) {
        return "";
    };
    return HttpClient;
}());

//# sourceMappingURL=HttpClient.js.map

/***/ }),

/***/ "gZmG":
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".active-item {\n  border-left: 8px solid var(--ion-color-primary);\n}\n\nion-toolbar {\n  --ion-background-color:#eeeeee;\n}\n\nion-menu {\n  --ion-background-color:#e9e9e9;\n}\n\nion-content ion-toolbar {\n  margin: 10px 0;\n}\n\n#toolbarIcon {\n  font-size: 1.7em;\n}\n\nion-title {\n  text-align: center;\n}\n\n.my-label {\n  font-family: Open Sans Light;\n  font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0NBQUE7QUFDSjs7QUFFQTtFQUNJLDhCQUFBO0FBQ0o7O0FBRUE7RUFFSSw4QkFBQTtBQUFKOztBQUlBO0VBQ0ksY0FBQTtBQURKOztBQUdFO0VBQ0UsZ0JBQUE7QUFBSjs7QUFFRTtFQUNJLGtCQUFBO0FBQ047O0FBRUE7RUFDSSw0QkFBQTtFQUNBLGdCQUFBO0FBQ0oiLCJmaWxlIjoibWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlLWl0ZW17XHJcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNlZWVlZWU7XHJcbn1cclxuXHJcbmlvbi1tZW51e1xyXG4gICAgLy8tLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvd3A0NzkyNzgwLWRhcmstcGhvbmUtd2FsbHBhcGVycy5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZTllOWU5O1xyXG5cclxufVxyXG5cclxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG4gICN0b29sYmFySWNvbntcclxuICAgIGZvbnQtc2l6ZTogMS43ZW07XHJcbn1cclxuICBpb24tdGl0bGV7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4ubXktbGFiZWx7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIExpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufSJdfQ== */");

/***/ }),

/***/ "jm+w":
/*!*****************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/HttpConnection.js ***!
  \*****************************************************************/
/*! exports provided: HttpConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpConnection", function() { return HttpConnection; });
/* harmony import */ var _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultHttpClient */ "dhCI");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ILogger */ "eDUa");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ITransport */ "WbzQ");
/* harmony import */ var _LongPollingTransport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LongPollingTransport */ "WTzE");
/* harmony import */ var _ServerSentEventsTransport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ServerSentEventsTransport */ "2PVt");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Utils */ "yfcC");
/* harmony import */ var _WebSocketTransport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WebSocketTransport */ "MVw1");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var MAX_REDIRECTS = 100;
var WebSocketModule = null;
var EventSourceModule = null;
if (typeof window === "undefined" && "function" !== "undefined") {
    // In order to ignore the dynamic require in webpack builds we need to do this magic
    // @ts-ignore: TS doesn't know about these names
    var requireFunc =  true ? require : undefined;
    WebSocketModule = requireFunc("ws");
    EventSourceModule = requireFunc("eventsource");
}
/** @private */
var HttpConnection = /** @class */ (function () {
    function HttpConnection(url, options) {
        if (options === void 0) { options = {}; }
        this.features = {};
        _Utils__WEBPACK_IMPORTED_MODULE_5__["Arg"].isRequired(url, "url");
        this.logger = Object(_Utils__WEBPACK_IMPORTED_MODULE_5__["createLogger"])(options.logger);
        this.baseUrl = this.resolveUrl(url);
        options = options || {};
        options.logMessageContent = options.logMessageContent || false;
        var isNode = typeof window === "undefined";
        if (!isNode && typeof WebSocket !== "undefined" && !options.WebSocket) {
            options.WebSocket = WebSocket;
        }
        else if (isNode && !options.WebSocket) {
            if (WebSocketModule) {
                options.WebSocket = WebSocketModule;
            }
        }
        if (!isNode && typeof EventSource !== "undefined" && !options.EventSource) {
            options.EventSource = EventSource;
        }
        else if (isNode && !options.EventSource) {
            if (typeof EventSourceModule !== "undefined") {
                options.EventSource = EventSourceModule;
            }
        }
        this.httpClient = options.httpClient || new _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_0__["DefaultHttpClient"](this.logger);
        this.connectionState = 2 /* Disconnected */;
        this.options = options;
        this.onreceive = null;
        this.onclose = null;
    }
    HttpConnection.prototype.start = function (transferFormat) {
        transferFormat = transferFormat || _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"].Binary;
        _Utils__WEBPACK_IMPORTED_MODULE_5__["Arg"].isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"], "transferFormat");
        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Starting connection with transfer format '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"][transferFormat] + "'.");
        if (this.connectionState !== 2 /* Disconnected */) {
            return Promise.reject(new Error("Cannot start a connection that is not in the 'Disconnected' state."));
        }
        this.connectionState = 0 /* Connecting */;
        this.startPromise = this.startInternal(transferFormat);
        return this.startPromise;
    };
    HttpConnection.prototype.send = function (data) {
        if (this.connectionState !== 1 /* Connected */) {
            throw new Error("Cannot send data if the connection is not in the 'Connected' State.");
        }
        // Transport will not be null if state is connected
        return this.transport.send(data);
    };
    HttpConnection.prototype.stop = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.connectionState = 2 /* Disconnected */;
                        // Set error as soon as possible otherwise there is a race between
                        // the transport closing and providing an error and the error from a close message
                        // We would prefer the close message error.
                        this.stopError = error;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.startPromise];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4:
                        if (!this.transport) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.transport.stop()];
                    case 5:
                        _a.sent();
                        this.transport = undefined;
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HttpConnection.prototype.startInternal = function (transferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var url, negotiateResponse, redirects, _loop_1, this_1, state_1, e_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.baseUrl;
                        this.accessTokenFactory = this.options.accessTokenFactory;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 12, , 13]);
                        if (!this.options.skipNegotiation) return [3 /*break*/, 5];
                        if (!(this.options.transport === _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets)) return [3 /*break*/, 3];
                        // No need to add a connection ID in this case
                        this.transport = this.constructTransport(_ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets);
                        // We should just call connect directly in this case.
                        // No fallback or negotiate in this case.
                        return [4 /*yield*/, this.transport.connect(url, transferFormat)];
                    case 2:
                        // We should just call connect directly in this case.
                        // No fallback or negotiate in this case.
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3: throw Error("Negotiation can only be skipped when using the WebSocket transport directly.");
                    case 4: return [3 /*break*/, 11];
                    case 5:
                        negotiateResponse = null;
                        redirects = 0;
                        _loop_1 = function () {
                            var accessToken_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this_1.getNegotiationResponse(url)];
                                    case 1:
                                        negotiateResponse = _a.sent();
                                        // the user tries to stop the connection when it is being started
                                        if (this_1.connectionState === 2 /* Disconnected */) {
                                            return [2 /*return*/, { value: void 0 }];
                                        }
                                        if (negotiateResponse.error) {
                                            throw Error(negotiateResponse.error);
                                        }
                                        if (negotiateResponse.ProtocolVersion) {
                                            throw Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
                                        }
                                        if (negotiateResponse.url) {
                                            url = negotiateResponse.url;
                                        }
                                        if (negotiateResponse.accessToken) {
                                            accessToken_1 = negotiateResponse.accessToken;
                                            this_1.accessTokenFactory = function () { return accessToken_1; };
                                        }
                                        redirects++;
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _a.label = 6;
                    case 6: return [5 /*yield**/, _loop_1()];
                    case 7:
                        state_1 = _a.sent();
                        if (typeof state_1 === "object")
                            return [2 /*return*/, state_1.value];
                        _a.label = 8;
                    case 8:
                        if (negotiateResponse.url && redirects < MAX_REDIRECTS) return [3 /*break*/, 6];
                        _a.label = 9;
                    case 9:
                        if (redirects === MAX_REDIRECTS && negotiateResponse.url) {
                            throw Error("Negotiate redirection limit exceeded.");
                        }
                        return [4 /*yield*/, this.createTransport(url, this.options.transport, negotiateResponse, transferFormat)];
                    case 10:
                        _a.sent();
                        _a.label = 11;
                    case 11:
                        if (this.transport instanceof _LongPollingTransport__WEBPACK_IMPORTED_MODULE_3__["LongPollingTransport"]) {
                            this.features.inherentKeepAlive = true;
                        }
                        this.transport.onreceive = this.onreceive;
                        this.transport.onclose = function (e) { return _this.stopConnection(e); };
                        // only change the state if we were connecting to not overwrite
                        // the state if the connection is already marked as Disconnected
                        this.changeState(0 /* Connecting */, 1 /* Connected */);
                        return [3 /*break*/, 13];
                    case 12:
                        e_2 = _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "Failed to start the connection: " + e_2);
                        this.connectionState = 2 /* Disconnected */;
                        this.transport = undefined;
                        throw e_2;
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    HttpConnection.prototype.getNegotiationResponse = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, headers, token, negotiateUrl, response, e_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.accessTokenFactory) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.accessTokenFactory()];
                    case 1:
                        token = _b.sent();
                        if (token) {
                            headers = (_a = {},
                                _a["Authorization"] = "Bearer " + token,
                                _a);
                        }
                        _b.label = 2;
                    case 2:
                        negotiateUrl = this.resolveNegotiateUrl(url);
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Sending negotiation request: " + negotiateUrl + ".");
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.httpClient.post(negotiateUrl, {
                                content: "",
                                headers: headers,
                            })];
                    case 4:
                        response = _b.sent();
                        if (response.statusCode !== 200) {
                            throw Error("Unexpected status code returned from negotiate " + response.statusCode);
                        }
                        return [2 /*return*/, JSON.parse(response.content)];
                    case 5:
                        e_3 = _b.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "Failed to complete negotiation with the server: " + e_3);
                        throw e_3;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HttpConnection.prototype.createConnectUrl = function (url, connectionId) {
        if (!connectionId) {
            return url;
        }
        return url + (url.indexOf("?") === -1 ? "?" : "&") + ("id=" + connectionId);
    };
    HttpConnection.prototype.createTransport = function (url, requestedTransport, negotiateResponse, requestedTransferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var connectUrl, transports, _i, transports_1, endpoint, transport, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        connectUrl = this.createConnectUrl(url, negotiateResponse.connectionId);
                        if (!this.isITransport(requestedTransport)) return [3 /*break*/, 2];
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Connection was provided an instance of ITransport, using that directly.");
                        this.transport = requestedTransport;
                        return [4 /*yield*/, this.transport.connect(connectUrl, requestedTransferFormat)];
                    case 1:
                        _a.sent();
                        // only change the state if we were connecting to not overwrite
                        // the state if the connection is already marked as Disconnected
                        this.changeState(0 /* Connecting */, 1 /* Connected */);
                        return [2 /*return*/];
                    case 2:
                        transports = negotiateResponse.availableTransports || [];
                        _i = 0, transports_1 = transports;
                        _a.label = 3;
                    case 3:
                        if (!(_i < transports_1.length)) return [3 /*break*/, 9];
                        endpoint = transports_1[_i];
                        this.connectionState = 0 /* Connecting */;
                        transport = this.resolveTransport(endpoint, requestedTransport, requestedTransferFormat);
                        if (!(typeof transport === "number")) return [3 /*break*/, 8];
                        this.transport = this.constructTransport(transport);
                        if (!!negotiateResponse.connectionId) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.getNegotiationResponse(url)];
                    case 4:
                        negotiateResponse = _a.sent();
                        connectUrl = this.createConnectUrl(url, negotiateResponse.connectionId);
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, this.transport.connect(connectUrl, requestedTransferFormat)];
                    case 6:
                        _a.sent();
                        this.changeState(0 /* Connecting */, 1 /* Connected */);
                        return [2 /*return*/];
                    case 7:
                        ex_1 = _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "Failed to start the transport '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "': " + ex_1);
                        this.connectionState = 2 /* Disconnected */;
                        negotiateResponse.connectionId = undefined;
                        return [3 /*break*/, 8];
                    case 8:
                        _i++;
                        return [3 /*break*/, 3];
                    case 9: throw new Error("Unable to initialize any of the available transports.");
                }
            });
        });
    };
    HttpConnection.prototype.constructTransport = function (transport) {
        switch (transport) {
            case _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets:
                if (!this.options.WebSocket) {
                    throw new Error("'WebSocket' is not supported in your environment.");
                }
                return new _WebSocketTransport__WEBPACK_IMPORTED_MODULE_6__["WebSocketTransport"](this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || false, this.options.WebSocket);
            case _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].ServerSentEvents:
                if (!this.options.EventSource) {
                    throw new Error("'EventSource' is not supported in your environment.");
                }
                return new _ServerSentEventsTransport__WEBPACK_IMPORTED_MODULE_4__["ServerSentEventsTransport"](this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || false, this.options.EventSource);
            case _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].LongPolling:
                return new _LongPollingTransport__WEBPACK_IMPORTED_MODULE_3__["LongPollingTransport"](this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || false);
            default:
                throw new Error("Unknown transport: " + transport + ".");
        }
    };
    HttpConnection.prototype.resolveTransport = function (endpoint, requestedTransport, requestedTransferFormat) {
        var transport = _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][endpoint.transport];
        if (transport === null || transport === undefined) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Skipping transport '" + endpoint.transport + "' because it is not supported by this client.");
        }
        else {
            var transferFormats = endpoint.transferFormats.map(function (s) { return _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"][s]; });
            if (transportMatches(requestedTransport, transport)) {
                if (transferFormats.indexOf(requestedTransferFormat) >= 0) {
                    if ((transport === _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets && !this.options.WebSocket) ||
                        (transport === _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].ServerSentEvents && !this.options.EventSource)) {
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Skipping transport '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "' because it is not supported in your environment.'");
                    }
                    else {
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Selecting transport '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "'.");
                        return transport;
                    }
                }
                else {
                    this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Skipping transport '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "' because it does not support the requested transfer format '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"][requestedTransferFormat] + "'.");
                }
            }
            else {
                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Skipping transport '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "' because it was disabled by the client.");
            }
        }
        return null;
    };
    HttpConnection.prototype.isITransport = function (transport) {
        return transport && typeof (transport) === "object" && "connect" in transport;
    };
    HttpConnection.prototype.changeState = function (from, to) {
        if (this.connectionState === from) {
            this.connectionState = to;
            return true;
        }
        return false;
    };
    HttpConnection.prototype.stopConnection = function (error) {
        this.transport = undefined;
        // If we have a stopError, it takes precedence over the error from the transport
        error = this.stopError || error;
        if (error) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "Connection disconnected with error '" + error + "'.");
        }
        else {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information, "Connection disconnected.");
        }
        this.connectionState = 2 /* Disconnected */;
        if (this.onclose) {
            this.onclose(error);
        }
    };
    HttpConnection.prototype.resolveUrl = function (url) {
        // startsWith is not supported in IE
        if (url.lastIndexOf("https://", 0) === 0 || url.lastIndexOf("http://", 0) === 0) {
            return url;
        }
        if (typeof window === "undefined" || !window || !window.document) {
            throw new Error("Cannot resolve '" + url + "'.");
        }
        // Setting the url to the href propery of an anchor tag handles normalization
        // for us. There are 3 main cases.
        // 1. Relative  path normalization e.g "b" -> "http://localhost:5000/a/b"
        // 2. Absolute path normalization e.g "/a/b" -> "http://localhost:5000/a/b"
        // 3. Networkpath reference normalization e.g "//localhost:5000/a/b" -> "http://localhost:5000/a/b"
        var aTag = window.document.createElement("a");
        aTag.href = url;
        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information, "Normalizing '" + url + "' to '" + aTag.href + "'.");
        return aTag.href;
    };
    HttpConnection.prototype.resolveNegotiateUrl = function (url) {
        var index = url.indexOf("?");
        var negotiateUrl = url.substring(0, index === -1 ? url.length : index);
        if (negotiateUrl[negotiateUrl.length - 1] !== "/") {
            negotiateUrl += "/";
        }
        negotiateUrl += "negotiate";
        negotiateUrl += index === -1 ? "" : url.substring(index);
        return negotiateUrl;
    };
    return HttpConnection;
}());

function transportMatches(requestedTransport, actualTransport) {
    return !requestedTransport || ((actualTransport & requestedTransport) !== 0);
}
//# sourceMappingURL=HttpConnection.js.map

/***/ }),

/***/ "nedP":
/*!*********************************************!*\
  !*** ./src/app/menu/menu-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function() { return MenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.page */ "ylOD");




const routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"],
        children: [
            {
                path: 'tabs'
            },
            {
                path: 'location',
                loadChildren: () => Promise.all(/*! import() | location-location-module */[__webpack_require__.e("common"), __webpack_require__.e("location-location-module")]).then(__webpack_require__.bind(null, /*! ../location/location.module */ "cf3W")).then(m => m.LocationPageModule)
            },
            {
                path: 'destination',
                loadChildren: () => Promise.all(/*! import() | destination-destination-module */[__webpack_require__.e("common"), __webpack_require__.e("destination-destination-module")]).then(__webpack_require__.bind(null, /*! ../destination/destination.module */ "1207")).then(m => m.DestinationPageModule)
            },
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() | account-login-login-module */ "account-login-login-module").then(__webpack_require__.bind(null, /*! ../account/login/login.module */ "xInB")).then(m => m.LoginPageModule)
            },
            {
                path: 'account/register',
                loadChildren: () => __webpack_require__.e(/*! import() | account-register-register-module */ "account-register-register-module").then(__webpack_require__.bind(null, /*! ../account/register/register.module */ "2w85")).then(m => m.RegisterPageModule)
            },
            {
                path: 'travelling',
                loadChildren: () => __webpack_require__.e(/*! import() | travelling-travelling-module */ "travelling-travelling-module").then(__webpack_require__.bind(null, /*! ../travelling/travelling.module */ "JQQN")).then(m => m.TravellingPageModule)
            },
            {
                path: 'driving',
                loadChildren: () => Promise.all(/*! import() | driving-driving-module */[__webpack_require__.e("common"), __webpack_require__.e("driving-driving-module")]).then(__webpack_require__.bind(null, /*! ../driving/driving.module */ "g7Ce")).then(m => m.DrivingPageModule)
            },
            {
                path: 'verifying',
                loadChildren: () => __webpack_require__.e(/*! import() | account-verifying-account-verifying-module */ "account-verifying-account-verifying-module").then(__webpack_require__.bind(null, /*! ../account-verifying/account-verifying.module */ "nhYi")).then(m => m.AccountVerifyingPageModule)
            },
            {
                path: 'become-driver',
                loadChildren: () => Promise.all(/*! import() | become-driver-become-driver-module */[__webpack_require__.e("common"), __webpack_require__.e("become-driver-become-driver-module")]).then(__webpack_require__.bind(null, /*! ../become-driver/become-driver.module */ "IEv6")).then(m => m.BecomeDriverPageModule)
            },
            {
                path: 'driver-profile',
                loadChildren: () => Promise.all(/*! import() | driver-profile-driver-profile-module */[__webpack_require__.e("common"), __webpack_require__.e("driver-profile-driver-profile-module")]).then(__webpack_require__.bind(null, /*! ../driver-profile/driver-profile.module */ "5O4O")).then(m => m.DriverProfilePageModule)
            },
            {
                path: 'driver-history',
                loadChildren: () => __webpack_require__.e(/*! import() | driver-history-driver-history-module */ "driver-history-driver-history-module").then(__webpack_require__.bind(null, /*! ../driver-history/driver-history.module */ "odG3")).then(m => m.DriverHistoryPageModule)
            },
            {
                path: 'car-register',
                loadChildren: () => Promise.all(/*! import() | car-register-car-register-module */[__webpack_require__.e("common"), __webpack_require__.e("car-register-car-register-module")]).then(__webpack_require__.bind(null, /*! ../car-register/car-register.module */ "vqOf")).then(m => m.CarRegisterPageModule)
            },
            {
                path: 'report',
                loadChildren: () => __webpack_require__.e(/*! import() | report-report-module */ "report-report-module").then(__webpack_require__.bind(null, /*! ../report/report.module */ "LVab")).then(m => m.ReportPageModule)
            },
            {
                path: 'verifying',
                loadChildren: () => __webpack_require__.e(/*! import() | account-verifying-account-verifying-module */ "account-verifying-account-verifying-module").then(__webpack_require__.bind(null, /*! ../account-verifying/account-verifying.module */ "nhYi")).then(m => m.AccountVerifyingPageModule)
            },
            {
                path: 'favourite-orders',
                loadChildren: () => __webpack_require__.e(/*! import() | favourite-orders-favourite-orders-module */ "favourite-orders-favourite-orders-module").then(__webpack_require__.bind(null, /*! ../favourite-orders/favourite-orders.module */ "9Cmh")).then(m => m.FavouriteOrdersPageModule)
            },
            {
                path: 'payments-sucsses',
                loadChildren: () => __webpack_require__.e(/*! import() | payments-sucsses-payments-sucsses-module */ "payments-sucsses-payments-sucsses-module").then(__webpack_require__.bind(null, /*! ../payments-sucsses/payments-sucsses.module */ "9MWA")).then(m => m.PaymentsSucssesPageModule)
            },
            {
                path: 'language-popover',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../language-popover/language-popover.module */ "QhVT")).then(m => m.LanguagePopoverPageModule)
            },
            {
                path: 'categories',
                loadChildren: () => Promise.all(/*! import() | categories-categories-module */[__webpack_require__.e("common"), __webpack_require__.e("categories-categories-module")]).then(__webpack_require__.bind(null, /*! ../categories/categories.module */ "kMJQ")).then(m => m.CategoriesPageModule)
            },
            {
                path: 'travel-mode',
                loadChildren: () => Promise.all(/*! import() | travel-mode-travel-mode-module */[__webpack_require__.e("default~driving-mode-driving-mode-module~order-details-order-details-module~travel-mode-travel-mode-module"), __webpack_require__.e("common"), __webpack_require__.e("travel-mode-travel-mode-module")]).then(__webpack_require__.bind(null, /*! ../travel-mode/travel-mode.module */ "y67D")).then(m => m.TravelModePageModule)
            },
            {
                path: 'driving-mode',
                loadChildren: () => Promise.all(/*! import() | driving-mode-driving-mode-module */[__webpack_require__.e("default~driving-mode-driving-mode-module~order-details-order-details-module~travel-mode-travel-mode-module"), __webpack_require__.e("common"), __webpack_require__.e("driving-mode-driving-mode-module")]).then(__webpack_require__.bind(null, /*! ../driving-mode/driving-mode.module */ "xDpq")).then(m => m.DrivingModePageModule)
            },
            {
                path: 'order-details/:id',
                loadChildren: () => Promise.all(/*! import() | order-details-order-details-module */[__webpack_require__.e("default~driving-mode-driving-mode-module~order-details-order-details-module~travel-mode-travel-mode-module"), __webpack_require__.e("common"), __webpack_require__.e("order-details-order-details-module")]).then(__webpack_require__.bind(null, /*! ../order-details/order-details.module */ "tIIa")).then(m => m.OrderDetailsPageModule)
            },
            {
                path: 'out-of-town',
                loadChildren: () => Promise.all(/*! import() | out-of-town-out-of-town-module */[__webpack_require__.e("common"), __webpack_require__.e("out-of-town-out-of-town-module")]).then(__webpack_require__.bind(null, /*! ../out-of-town/out-of-town.module */ "wZQh")).then(m => m.OutOfTownPageModule)
            },
            {
                path: 'booked-travels',
                loadChildren: () => __webpack_require__.e(/*! import() | booked-travels-booked-travels-module */ "booked-travels-booked-travels-module").then(__webpack_require__.bind(null, /*! ../booked-travels/booked-travels.module */ "mbC9")).then(m => m.BookedTravelsPageModule)
            },
            {
                path: 'reservations',
                loadChildren: () => Promise.all(/*! import() | reservations-reservations-module */[__webpack_require__.e("common"), __webpack_require__.e("reservations-reservations-module")]).then(__webpack_require__.bind(null, /*! ../reservations/reservations.module */ "fgfA")).then(m => m.ReservationsPageModule)
            }
        ]
    }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuPageRoutingModule);



/***/ }),

/***/ "xfvH":
/*!*********************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/Errors.js ***!
  \*********************************************************/
/*! exports provided: HttpError, TimeoutError, AbortError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpError", function() { return HttpError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return TimeoutError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbortError", function() { return AbortError; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** Error thrown when an HTTP request fails. */
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    /** Constructs a new instance of {@link @aspnet/signalr.HttpError}.
     *
     * @param {string} errorMessage A descriptive error message.
     * @param {number} statusCode The HTTP status code represented by this error.
     */
    function HttpError(errorMessage, statusCode) {
        var _newTarget = this.constructor;
        var _this = this;
        var trueProto = _newTarget.prototype;
        _this = _super.call(this, errorMessage) || this;
        _this.statusCode = statusCode;
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        _this.__proto__ = trueProto;
        return _this;
    }
    return HttpError;
}(Error));

/** Error thrown when a timeout elapses. */
var TimeoutError = /** @class */ (function (_super) {
    __extends(TimeoutError, _super);
    /** Constructs a new instance of {@link @aspnet/signalr.TimeoutError}.
     *
     * @param {string} errorMessage A descriptive error message.
     */
    function TimeoutError(errorMessage) {
        var _newTarget = this.constructor;
        if (errorMessage === void 0) { errorMessage = "A timeout occurred."; }
        var _this = this;
        var trueProto = _newTarget.prototype;
        _this = _super.call(this, errorMessage) || this;
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        _this.__proto__ = trueProto;
        return _this;
    }
    return TimeoutError;
}(Error));

/** Error thrown when an action is aborted. */
var AbortError = /** @class */ (function (_super) {
    __extends(AbortError, _super);
    /** Constructs a new instance of {@link AbortError}.
     *
     * @param {string} errorMessage A descriptive error message.
     */
    function AbortError(errorMessage) {
        var _newTarget = this.constructor;
        if (errorMessage === void 0) { errorMessage = "An abort occurred."; }
        var _this = this;
        var trueProto = _newTarget.prototype;
        _this = _super.call(this, errorMessage) || this;
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        _this.__proto__ = trueProto;
        return _this;
    }
    return AbortError;
}(Error));

//# sourceMappingURL=Errors.js.map

/***/ }),

/***/ "yfcC":
/*!********************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/Utils.js ***!
  \********************************************************/
/*! exports provided: Arg, getDataDetail, formatArrayBuffer, isArrayBuffer, sendMessage, createLogger, Subject, SubjectSubscription, ConsoleLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arg", function() { return Arg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataDetail", function() { return getDataDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatArrayBuffer", function() { return formatArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayBuffer", function() { return isArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessage", function() { return sendMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLogger", function() { return createLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return Subject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSubscription", function() { return SubjectSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleLogger", function() { return ConsoleLogger; });
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ILogger */ "eDUa");
/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loggers */ "e3Su");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/** @private */
var Arg = /** @class */ (function () {
    function Arg() {
    }
    Arg.isRequired = function (val, name) {
        if (val === null || val === undefined) {
            throw new Error("The '" + name + "' argument is required.");
        }
    };
    Arg.isIn = function (val, values, name) {
        // TypeScript enums have keys for **both** the name and the value of each enum member on the type itself.
        if (!(val in values)) {
            throw new Error("Unknown " + name + " value: " + val + ".");
        }
    };
    return Arg;
}());

/** @private */
function getDataDetail(data, includeContent) {
    var detail = "";
    if (isArrayBuffer(data)) {
        detail = "Binary data of length " + data.byteLength;
        if (includeContent) {
            detail += ". Content: '" + formatArrayBuffer(data) + "'";
        }
    }
    else if (typeof data === "string") {
        detail = "String data of length " + data.length;
        if (includeContent) {
            detail += ". Content: '" + data + "'";
        }
    }
    return detail;
}
/** @private */
function formatArrayBuffer(data) {
    var view = new Uint8Array(data);
    // Uint8Array.map only supports returning another Uint8Array?
    var str = "";
    view.forEach(function (num) {
        var pad = num < 16 ? "0" : "";
        str += "0x" + pad + num.toString(16) + " ";
    });
    // Trim of trailing space.
    return str.substr(0, str.length - 1);
}
// Also in signalr-protocol-msgpack/Utils.ts
/** @private */
function isArrayBuffer(val) {
    return val && typeof ArrayBuffer !== "undefined" &&
        (val instanceof ArrayBuffer ||
            // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
            (val.constructor && val.constructor.name === "ArrayBuffer"));
}
/** @private */
function sendMessage(logger, transportName, httpClient, url, accessTokenFactory, content, logMessageContent) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, headers, token, responseType, response;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!accessTokenFactory) return [3 /*break*/, 2];
                    return [4 /*yield*/, accessTokenFactory()];
                case 1:
                    token = _b.sent();
                    if (token) {
                        headers = (_a = {},
                            _a["Authorization"] = "Bearer " + token,
                            _a);
                    }
                    _b.label = 2;
                case 2:
                    logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(" + transportName + " transport) sending data. " + getDataDetail(content, logMessageContent) + ".");
                    responseType = isArrayBuffer(content) ? "arraybuffer" : "text";
                    return [4 /*yield*/, httpClient.post(url, {
                            content: content,
                            headers: headers,
                            responseType: responseType,
                        })];
                case 3:
                    response = _b.sent();
                    logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(" + transportName + " transport) request complete. Response status: " + response.statusCode + ".");
                    return [2 /*return*/];
            }
        });
    });
}
/** @private */
function createLogger(logger) {
    if (logger === undefined) {
        return new ConsoleLogger(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information);
    }
    if (logger === null) {
        return _Loggers__WEBPACK_IMPORTED_MODULE_1__["NullLogger"].instance;
    }
    if (logger.log) {
        return logger;
    }
    return new ConsoleLogger(logger);
}
/** @private */
var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = [];
    }
    Subject.prototype.next = function (item) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.next(item);
        }
    };
    Subject.prototype.error = function (err) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            if (observer.error) {
                observer.error(err);
            }
        }
    };
    Subject.prototype.complete = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            if (observer.complete) {
                observer.complete();
            }
        }
    };
    Subject.prototype.subscribe = function (observer) {
        this.observers.push(observer);
        return new SubjectSubscription(this, observer);
    };
    return Subject;
}());

/** @private */
var SubjectSubscription = /** @class */ (function () {
    function SubjectSubscription(subject, observer) {
        this.subject = subject;
        this.observer = observer;
    }
    SubjectSubscription.prototype.dispose = function () {
        var index = this.subject.observers.indexOf(this.observer);
        if (index > -1) {
            this.subject.observers.splice(index, 1);
        }
        if (this.subject.observers.length === 0 && this.subject.cancelCallback) {
            this.subject.cancelCallback().catch(function (_) { });
        }
    };
    return SubjectSubscription;
}());

/** @private */
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger(minimumLogLevel) {
        this.minimumLogLevel = minimumLogLevel;
    }
    ConsoleLogger.prototype.log = function (logLevel, message) {
        if (logLevel >= this.minimumLogLevel) {
            switch (logLevel) {
                case _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Critical:
                case _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Error:
                    console.error("[" + new Date().toISOString() + "] " + _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][logLevel] + ": " + message);
                    break;
                case _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Warning:
                    console.warn("[" + new Date().toISOString() + "] " + _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][logLevel] + ": " + message);
                    break;
                case _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information:
                    console.info("[" + new Date().toISOString() + "] " + _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][logLevel] + ": " + message);
                    break;
                default:
                    // console.debug only goes to attached debuggers in Node, so we use console.log for Trace and Debug
                    console.log("[" + new Date().toISOString() + "] " + _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][logLevel] + ": " + message);
                    break;
            }
        }
    };
    return ConsoleLogger;
}());

//# sourceMappingURL=Utils.js.map

/***/ }),

/***/ "ylOD":
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menu.page.html */ "QjfK");
/* harmony import */ var _menu_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.page.scss */ "gZmG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aspnet/signalr */ "Gpoy");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/_services */ "8Xdb");
/* harmony import */ var src_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/_services/driver/driver.service */ "exMm");
/* harmony import */ var _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../language-popover/language-popover.page */ "oXKM");
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ "1xeP");
/* harmony import */ var src_services_connectivity_provider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/_services/connectivity.provider */ "4zJv");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "Bg0J");















let MenuPage = class MenuPage {
    constructor(router, accountService, driverService, translate, popoverController, backgroundMode, alertController, connectivityProvider, localNotifications, platform) {
        this.router = router;
        this.accountService = accountService;
        this.driverService = driverService;
        this.translate = translate;
        this.popoverController = popoverController;
        this.backgroundMode = backgroundMode;
        this.alertController = alertController;
        this.connectivityProvider = connectivityProvider;
        this.localNotifications = localNotifications;
        this.platform = platform;
        this.subscriptions = [];
        this.documentConfirmed = false;
        this.driverCars = [];
        this.accessedPath = "";
        this.pages = [
            {
                title: "Travel",
                url: '/menu/travelling'
            },
            {
                title: "Profile",
                url: '/menu/driver-profile'
            },
            {
                title: "Drive",
                url: '/menu/categories'
            },
            {
                title: "Report",
                url: '/menu/report'
            },
            {
                title: "Favourites",
                url: '/menu/favourite-orders'
            }
        ];
        this.selectedPath = '';
        this.isLoggedIn = localStorage.getItem("user");
        if (this.isLoggedIn) {
            this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
        }
        else {
            this.translate.setDefaultLang('bg');
        }
        this.subscriptions.push(this.router.events.subscribe((event) => {
            if (event && event.url) {
                if (event.url == "/menu/driving") {
                    if (this.isLoggedIn && this.isVerified && this.documentConfirmed && this.driverCars.length >= 1) {
                        event.url = '/menu/driving';
                    }
                }
                //this.selectedPath = event.url;
            }
        }));
        platform.ready().then(() => {
            this.localNotifications.requestPermission();
            this.backgroundMode.enable();
        });
    }
    ngOnInit() {
        this.backgroundMode.enable();
        this.checkInternetConnection();
        this.checkValues();
        const connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_5__["HubConnectionBuilder"]()
            .configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_5__["LogLevel"].Information)
            .withUrl(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].signalRUrl}/orderHub`, {
            skipNegotiation: false,
            transport: _aspnet_signalr__WEBPACK_IMPORTED_MODULE_5__["HttpTransportType"].WebSockets |
                _aspnet_signalr__WEBPACK_IMPORTED_MODULE_5__["HttpTransportType"].LongPolling
        })
            .build();
        connection.start().then(function () {
            console.log('signalR Connected in menu');
        }).catch(function (err) {
            console.log("Reconnecting in 1 sec.");
            setTimeout(() => connection.start(), 1000);
        });
        connection.on('BroadcastMessage', () => {
            this.checkValues();
        });
        connection.on('LoggedIn', () => {
            this.checkValues();
        });
        connection.on('CreatedOrder', () => {
        });
        connection.on('OrderDeleted', () => {
        });
        connection.on('WalletAction', () => {
        });
        connection.on('CompleteOrder', () => {
        });
    }
    checkInternetConnection() {
        this.connectivityProvider.appIsOnline$.subscribe(online => {
            if (online) {
                console.log('im online');
                // call functions or methods that need to execute when app goes online (such as sync() etc)
            }
            else {
                this.noInternetAccess();
            }
        });
    }
    checkValues() {
        this.isLoggedIn = localStorage.getItem("user");
        if (this.isLoggedIn) {
            this.subscriptions.push(this.accountService.getById(this.accountService.userValue.id)
                .subscribe(x => {
                this.isVerified = x.isDriver;
                if (x.driverId != null) {
                    this.subscriptions.push(this.driverService.getDriver(x.driverId)
                        .subscribe(d => {
                        this.subscriptions.push(this.driverService.getDriverCars(x.driverId)
                            .subscribe(cars => {
                            this.driverCars = cars;
                        }));
                        this.documentConfirmed = d.documentConfirmation;
                    }));
                }
            }));
        }
        else if (this.isLoggedIn == null) {
            this.router.navigate(['menu/home']);
        }
    }
    noInternetAccess() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.translate.get(['No internet access!', 'Please connect to internet and try again!'])
                .subscribe((text) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const popup = yield this.alertController.create({
                    header: text['No internet access!'],
                    message: text['Please connect to internet and try again!'],
                    buttons: [
                        {
                            text: 'Ok',
                            role: 'Ok',
                        }
                    ],
                });
                yield popup.present();
            }));
        });
    }
    logout() {
        this.accountService.logout();
        this.isLoggedIn = "";
        this.router.navigate(['menu/home'])
            .then(() => {
            window.location.reload();
        });
    }
    openLanguagePopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_11__["LanguagePopoverPage"],
                event: ev
            });
            yield popover.present();
        });
    }
};
MenuPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_services__WEBPACK_IMPORTED_MODULE_9__["AccountService"] },
    { type: src_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_10__["DriverService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_12__["BackgroundMode"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: src_services_connectivity_provider__WEBPACK_IMPORTED_MODULE_13__["ConnectivityProvider"] },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_14__["LocalNotifications"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
];
MenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu',
        template: _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MenuPage);



/***/ })

}]);
//# sourceMappingURL=menu-menu-module-es2015.js.map