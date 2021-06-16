(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["destination-destination-module"],{

/***/ "0gEc":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/destination/destination.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    \r\n\r\n    <ion-title>\r\n        <ion-label>{{'Choose destination' | translate}}</ion-label>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon (click)='openLanguagePopover($event)' id=\"toolbarIcon\" name=\"language-outline\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-item>\r\n  <ion-input id=\"searchTextField2\" type=\"text\" [placeholder]='\"Search destination\" | translate' clearInput></ion-input>\r\n</ion-item>\r\n<ion-content class=\"noScroll\">\r\n  <div #map id=\"map\"></div>\r\n  <div #marker id=\"marker\"></div>\r\n \r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar class=\"text-center\">\r\n      <button (click)=\"onSubmit()\" class=\"btn btn-info\">{{'Drop me here' | translate}}</button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n\r\n<ion-footer>\r\n  <ion-toolbar class=\"text-center\">\r\n    <p>{{address}}</p>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "1207":
/*!***************************************************!*\
  !*** ./src/app/destination/destination.module.ts ***!
  \***************************************************/
/*! exports provided: HttpLoaderFactory, DestinationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationPageModule", function() { return DestinationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _destination_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./destination-routing.module */ "7k38");
/* harmony import */ var _destination_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./destination.page */ "3aiH");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _language_popover_language_popover_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../language-popover/language-popover.module */ "QhVT");











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http);
}
let DestinationPageModule = class DestinationPageModule {
};
DestinationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _destination_routing_module__WEBPACK_IMPORTED_MODULE_5__["DestinationPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                }
            }),
            _language_popover_language_popover_module__WEBPACK_IMPORTED_MODULE_10__["LanguagePopoverPageModule"]
        ],
        declarations: [_destination_page__WEBPACK_IMPORTED_MODULE_6__["DestinationPage"]]
    })
], DestinationPageModule);



/***/ }),

/***/ "3aiH":
/*!*************************************************!*\
  !*** ./src/app/destination/destination.page.ts ***!
  \*************************************************/
/*! exports provided: DestinationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationPage", function() { return DestinationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_destination_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./destination.page.html */ "0gEc");
/* harmony import */ var _destination_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./destination.page.scss */ "Cowd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/_services */ "8Xdb");
/* harmony import */ var src_services_order_order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/_services/order/order.service */ "8k+r");
/* harmony import */ var _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../language-popover/language-popover.page */ "oXKM");











const { Geolocation } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
let DestinationPage = class DestinationPage {
    constructor(route, orderService, translate, popoverController, accountService) {
        this.route = route;
        this.orderService = orderService;
        this.translate = translate;
        this.popoverController = popoverController;
        this.accountService = accountService;
        //markerUrl = 'http://maps.gstatic.com/mapfiles/markers2/marker.png'
        // markerUrl = 'https://image.flaticon.com/icons/png/24/727/727598.png'
        this.markerUrl = '../../assets/location.png';
        this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.getLocation();
        this.loadMap(this.mapRef);
    }
    onSubmit() {
        this.orderService.chosenDestination = this.address;
        this.loading = true;
        this.route.navigate(['menu/travelling']);
    }
    loadMap(mapRef) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const coordinates = yield Geolocation.getCurrentPosition();
            const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };
            this.orderService.userDestinationLat = myLatLng.lat;
            this.orderService.userDestinationLong = myLatLng.lng;
            const options = {
                center: new google.maps.LatLng(myLatLng.lat, myLatLng.lng),
                zoom: 15,
                disableDefaultUI: true,
            };
            this.map = new google.maps.Map(mapRef.nativeElement, options);
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(myLatLng),
                map: this.map
            });
            var input = document.getElementById('searchTextField2').getElementsByTagName('input')[0];
            this.orderService.selectedFavourite = null;
            var searchbox = new google.maps.places.SearchBox(input);
            this.map.addListener("bounds_changed", () => {
                searchbox.setBounds(this.map.getBounds());
            });
            searchbox.addListener("places_changed", () => {
                const places = searchbox.getPlaces();
                if (places.length == 0) {
                    return;
                }
                var bounds = new google.maps.LatLngBounds();
                places.forEach((place) => {
                    if (!place.geometry) {
                        console.log('No Geometry');
                        return;
                    }
                    marker.setMap(null);
                    marker = new google.maps.Marker({
                        position: place.geometry.location,
                        map: this.map
                    });
                    if (place.geometry.viewport) {
                        bounds.union(place.geometry.viewport);
                    }
                    else {
                        bounds.extend(place.geometry.location);
                    }
                });
                this.map.fitBounds(bounds);
            });
            let geocoder = new google.maps.Geocoder;
            google.maps.event.addListener(this.map, 'idle', () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                var center = this.map.getCenter();
                var lat = center.lat();
                var lng = center.lng();
                const myLatLng = { lat: lat, lng: lng };
                if (marker && marker.setMap) {
                    marker.setMap(null);
                }
                this.orderService.userDestinationLat = myLatLng.lat;
                this.orderService.userDestinationLong = myLatLng.lng;
                //Get Location
                geocoder.geocode({ location: myLatLng }, (results, status) => {
                    if (status == "OK") {
                        if (results[0]) {
                            this.address = results[0].formatted_address;
                            // var infowindow = new google.maps.InfoWindow({
                            //   content: `${this.address}`
                            // });
                            // infowindow.open(this.map, marker);
                        }
                    }
                });
            }));
        });
    }
    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.longitude = position.coords.longitude;
                this.latitude = position.coords.latitude;
                this.callApi(this.longitude, this.latitude);
            });
        }
        else {
            console.log("No support for geolocation");
        }
    }
    callApi(Longitude, Latitude) {
        const url = `https://api-adresse.data.gouv.fr/reverse/?lon=${Longitude}&lat=${Latitude}`;
        //Call API
    }
    openLanguagePopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_10__["LanguagePopoverPage"],
                event: ev
            });
            yield popover.present();
        });
    }
};
DestinationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_services_order_order_service__WEBPACK_IMPORTED_MODULE_9__["OrderService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
    { type: src_services__WEBPACK_IMPORTED_MODULE_8__["AccountService"] }
];
DestinationPage.propDecorators = {
    mapRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['map', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], static: false },] }],
    myButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['myButton',] }]
};
DestinationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-destination',
        template: _raw_loader_destination_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_destination_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DestinationPage);



/***/ }),

/***/ "7k38":
/*!***********************************************************!*\
  !*** ./src/app/destination/destination-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DestinationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationPageRoutingModule", function() { return DestinationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _destination_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./destination.page */ "3aiH");




const routes = [
    {
        path: '',
        component: _destination_page__WEBPACK_IMPORTED_MODULE_3__["DestinationPage"]
    }
];
let DestinationPageRoutingModule = class DestinationPageRoutingModule {
};
DestinationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DestinationPageRoutingModule);



/***/ }),

/***/ "Cowd":
/*!***************************************************!*\
  !*** ./src/app/destination/destination.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".noScroll {\n  overflow: hidden;\n}\n\n#marker {\n  position: absolute;\n  /*url of the marker*/\n  background: url('location.png') no-repeat;\n  /*center the marker*/\n  top: 50%;\n  left: 50%;\n  z-index: 1;\n  /*fix offset when needed*/\n  margin-left: -10px;\n  margin-top: -34px;\n  /*size of the image*/\n  height: 34px;\n  width: 20px;\n  cursor: pointer;\n}\n\n#map {\n  height: 100%;\n  width: 100%;\n}\n\nion-content {\n  --ion-background-color:#353535;\n}\n\nion-toolbar {\n  --ion-background-color:#eeeeee;\n}\n\nion-title {\n  text-align: center;\n}\n\n#toolbarIcon {\n  font-size: 1.7em;\n}\n\n.centered {\n  text-align: center;\n}\n\n.text {\n  font-size: 2.4em;\n  font-family: Open Sans Light;\n}\n\ni {\n  color: #eeeeee;\n}\n\n.my-custom-class {\n  --background: #e5e5e5;\n}\n\nion-select {\n  color: #383838;\n  background-color: white;\n  border-radius: 10px;\n  border: 3px solid #eeeeee;\n}\n\n.blink_me {\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite;\n}\n\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n\n.backIcon {\n  color: #ffae00;\n  font-size: 150%;\n}\n\n.back {\n  color: #ffae00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRlc3RpbmF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUk7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUNBQUE7RUFDQSxvQkFBQTtFQUNBLFFBQUE7RUFBUSxTQUFBO0VBRVIsVUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxlQUFBO0FBQVI7O0FBR0k7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdJO0VBRUksOEJBQUE7QUFEUjs7QUFJSTtFQUNJLDhCQUFBO0FBRFI7O0FBSUk7RUFDSSxrQkFBQTtBQURSOztBQUlJO0VBQ0ksZ0JBQUE7QUFEUjs7QUFLSTtFQUNJLGtCQUFBO0FBRlI7O0FBS0k7RUFDSSxnQkFBQTtFQUNBLDRCQUFBO0FBRlI7O0FBS0k7RUFDSSxjQUFBO0FBRlI7O0FBVUk7RUFDSSxxQkFBQTtBQVBSOztBQVVJO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQVBSOztBQVVJO0VBQ0ksNkNBQUE7VUFBQSxxQ0FBQTtBQVBSOztBQVVNO0VBQ0U7SUFDRSxVQUFBO0VBUFI7QUFDRjs7QUFJTTtFQUNFO0lBQ0UsVUFBQTtFQVBSO0FBQ0Y7O0FBVUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQVJSOztBQVdJO0VBQ0ksY0FBQTtBQVJSIiwiZmlsZSI6ImRlc3RpbmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub1Njcm9sbCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgICNtYXJrZXJ7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgLyp1cmwgb2YgdGhlIG1hcmtlciovXHJcbiAgICAgICAgYmFja2dyb3VuZDp1cmwoLi4vLi4vYXNzZXRzL2xvY2F0aW9uLnBuZykgbm8tcmVwZWF0O1xyXG4gICAgICAgIC8qY2VudGVyIHRoZSBtYXJrZXIqL1xyXG4gICAgICAgIHRvcDo1MCU7bGVmdDo1MCU7XHJcbiAgICAgIFxyXG4gICAgICAgIHotaW5kZXg6MTtcclxuICAgICAgICAvKmZpeCBvZmZzZXQgd2hlbiBuZWVkZWQqL1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0Oi0xMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6LTM0cHg7XHJcbiAgICAgICAgLypzaXplIG9mIHRoZSBpbWFnZSovXHJcbiAgICAgICAgaGVpZ2h0OjM0cHg7XHJcbiAgICAgICAgd2lkdGg6MjBweDtcclxuICAgICAgXHJcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgI21hcCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLWNvbnRlbnR7XHJcbiAgICAgICAgLy8tLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvd3A0NzkyNzgwLWRhcmstcGhvbmUtd2FsbHBhcGVycy5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzM1MzUzNTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZWVlZWVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tdGl0bGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgI3Rvb2xiYXJJY29ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS43ZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgLmNlbnRlcmVke1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRleHR7ICBcclxuICAgICAgICBmb250LXNpemU6IDIuNGVtO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgTGlnaHQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGl7XHJcbiAgICAgICAgY29sb3I6I2VlZWVlZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gaW9uLWlucHV0e1xyXG4gICAgLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAvLyAgICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDI1NSwgMTc0LCAwKTtcclxuICAgIC8vIH1cclxuICAgIFxyXG4gICAgLm15LWN1c3RvbS1jbGFzcyB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZTVlNWU1O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIGlvbi1zZWxlY3R7XHJcbiAgICAgICAgY29sb3I6IHJnYig1NiwgNTYsIDU2KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNlZWVlZWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ibGlua19tZSB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBibGlua2VyIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgQGtleWZyYW1lcyBibGlua2VyIHtcclxuICAgICAgICA1MCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgLmJhY2tJY29uIHtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMTc0LCAwKTtcclxuICAgICAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5iYWNrIHtcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMTc0LCAwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=destination-destination-module-es2015.js.map