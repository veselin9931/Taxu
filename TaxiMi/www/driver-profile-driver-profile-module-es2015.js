(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["driver-profile-driver-profile-module"],{

/***/ "5O4O":
/*!*********************************************************!*\
  !*** ./src/app/driver-profile/driver-profile.module.ts ***!
  \*********************************************************/
/*! exports provided: HttpLoaderFactory, DriverProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverProfilePageModule", function() { return DriverProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _driver_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./driver-profile-routing.module */ "FJDa");
/* harmony import */ var _driver_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./driver-profile.page */ "FxG9");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _language_popover_language_popover_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../language-popover/language-popover.module */ "QhVT");











function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http);
}
let DriverProfilePageModule = class DriverProfilePageModule {
};
DriverProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _driver_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["DriverProfilePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                }
            }),
            _language_popover_language_popover_module__WEBPACK_IMPORTED_MODULE_10__["LanguagePopoverPageModule"]
        ],
        declarations: [_driver_profile_page__WEBPACK_IMPORTED_MODULE_6__["DriverProfilePage"]],
        providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]],
    })
], DriverProfilePageModule);



/***/ }),

/***/ "Bmjg":
/*!*********************************************************!*\
  !*** ./src/app/driver-profile/driver-profile.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#353535;\n}\n\nion-toolbar {\n  --ion-background-color:#eeeeee;\n}\n\nion-title {\n  text-align: center;\n}\n\n#toolbarIcon {\n  font-size: 1.7em;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\n.centered {\n  text-align: center;\n}\n\n.text {\n  font-family: Open Sans Light;\n}\n\nhr {\n  background: #eeeeee;\n  width: 70% !important;\n}\n\n.my-label {\n  font-family: Open Sans Light;\n}\n\n.backIcon {\n  color: #ffae00;\n  font-size: 150%;\n}\n\n.back {\n  color: #ffae00;\n}\n\n.car {\n  color: green;\n}\n\n.card-transparent {\n  margin: 0 auto;\n}\n\n.card-transparent .header-transparent {\n  height: 150px;\n}\n\n.card-transparent .header-transparent .avatar {\n  width: 160px;\n  height: 120px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.card-transparent .header-transparent .avatar img {\n  height: 130px;\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: calc(-1*(80px + 8px));\n  background-color: #fff;\n  margin-left: 20px;\n}\n\n.my-custom-class {\n  --background: #e5e5e5;\n}\n\n.card-body {\n  background-color: #ffffff;\n  padding: 30px;\n  height: 100%;\n  overflow: hidden;\n}\n\n.card-body .user-meta {\n  padding-top: 40px;\n}\n\n.card-body .user-meta .playername {\n  font-size: 24px;\n  font-weight: 600;\n  color: #303940;\n}\n\n.card-body .user-meta .country {\n  font-size: 90%;\n  color: #949ea6;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRyaXZlci1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDhCQUFBO0FBQUo7O0FBR0E7RUFDSSw4QkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSw0QkFBQTtBQUFKOztBQUlBO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtBQURKOztBQUtBO0VBQ0ksNEJBQUE7QUFGSjs7QUFLQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0E7RUFDSSxjQUFBO0FBRko7O0FBSUM7RUFDSSxZQUFBO0FBREw7O0FBSUE7RUFDSSxjQUFBO0FBREo7O0FBR0k7RUFDSSxhQUFBO0FBRFI7O0FBR1E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQURaOztBQUVZO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBQWhCOztBQUtBO0VBQ0kscUJBQUE7QUFGSjs7QUFLQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUlJO0VBQ0ksaUJBQUE7QUFGUjs7QUFJUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFGWjs7QUFLUTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBSFoiLCJmaWxlIjoiZHJpdmVyLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAvLy0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy93cDQ3OTI3ODAtZGFyay1waG9uZS13YWxscGFwZXJzLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzNTM1MzU7XHJcbn1cclxuXHJcbmlvbi10b29sYmFye1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZWVlZWVlO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jdG9vbGJhckljb257XHJcbiAgICBmb250LXNpemU6IDEuN2VtO1xyXG59XHJcblxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jZW50ZXJlZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBMaWdodDtcclxufVxyXG5cclxuXHJcbmhye1xyXG4gICAgYmFja2dyb3VuZDojZWVlZWVlO1xyXG4gICAgd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLm15LWxhYmVse1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucyBMaWdodDtcclxufVxyXG5cclxuLmJhY2tJY29uIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAxNzQsIDApO1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG59XHJcblxyXG4uYmFjayB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMTc0LCAwKTtcclxufVxyXG4gLmNhciB7XHJcbiAgICAgY29sb3I6IGdyZWVuO1xyXG4gfVxyXG5cclxuLmNhcmQtdHJhbnNwYXJlbnQge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgLmhlYWRlci10cmFuc3BhcmVudCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDsgIFxyXG5cclxuICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiBjYWxjKC0xKig4MHB4ICsgOHB4KSk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLm15LWN1c3RvbS1jbGFzcyB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbiAgfVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgLnVzZXItbWV0YSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcblxyXG4gICAgICAgIC5wbGF5ZXJuYW1lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzMwMzk0MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb3VudHJ5IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA5MCU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTQ5ZWE2O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "FJDa":
/*!*****************************************************************!*\
  !*** ./src/app/driver-profile/driver-profile-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: DriverProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverProfilePageRoutingModule", function() { return DriverProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _driver_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./driver-profile.page */ "FxG9");




const routes = [
    {
        path: '',
        component: _driver_profile_page__WEBPACK_IMPORTED_MODULE_3__["DriverProfilePage"]
    }
];
let DriverProfilePageRoutingModule = class DriverProfilePageRoutingModule {
};
DriverProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DriverProfilePageRoutingModule);



/***/ }),

/***/ "FxG9":
/*!*******************************************************!*\
  !*** ./src/app/driver-profile/driver-profile.page.ts ***!
  \*******************************************************/
/*! exports provided: DriverProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverProfilePage", function() { return DriverProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_driver_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./driver-profile.page.html */ "KoPF");
/* harmony import */ var _driver_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./driver-profile.page.scss */ "Bmjg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/_services */ "8Xdb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/_services/driver/driver.service */ "exMm");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @aspnet/signalr */ "Gpoy");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_services_wallet_wallet_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/_services/wallet/wallet.service */ "Hmjx");
/* harmony import */ var src_services_image_image_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/_services/image/image.service */ "Jhu6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../language-popover/language-popover.page */ "oXKM");
















let DriverProfilePage = class DriverProfilePage {
    constructor(accountService, driverService, route, location, alertController, walletService, imageService, translate, popoverController) {
        this.accountService = accountService;
        this.driverService = driverService;
        this.route = route;
        this.location = location;
        this.alertController = alertController;
        this.walletService = walletService;
        this.imageService = imageService;
        this.translate = translate;
        this.popoverController = popoverController;
        this.subscriptions = [];
        this.user = this.accountService.userValue;
        this.driverId = this.user.driverId;
        this.carsCount = 0;
        this.folderName = "driverFacePic";
        this.imgType = "profile";
        this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
    }
    ngOnInit() {
        this.getDriver();
        this.getProfilePicture();
        this.getWalletAmount();
        this.getCars();
        const connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_8__["HubConnectionBuilder"]()
            .configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_8__["LogLevel"].Information)
            .withUrl(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].signalRUrl}/orderHub`)
            .build();
        // const connection = new signalR.HubConnectionBuilder()
        //    .configureLogging(signalR.LogLevel.Information)
        //    .withUrl(`${environment.signalRUrl}/orderHub`, {
        //     skipNegotiation: true,
        //     transport: signalR.HttpTransportType.WebSockets})
        //    .build();
        connection.start().then(function () {
            console.log('signalR Connected in profile');
        }).catch(function (err) {
            return console.log(err);
        });
        connection.on('Voted', (driverId) => {
            if (this.driverId == driverId) {
                this.getDriver();
            }
        });
        connection.on('CarAction', (driverId) => {
            if (this.driverId == driverId) {
                this.getCars();
            }
        });
        connection.on('WalletAction', (userId) => {
            this.getWalletAmount();
        });
        connection.on('BroadcastMessage', () => {
            this.getProfilePicture();
        });
    }
    copy(referral) {
        console.log(referral);
    }
    getProfilePicture() {
        this.subscriptions.push(this.imageService.getMyPicture(this.user.id)
            .subscribe(x => {
            if (x == null) {
                return;
            }
            this.imgPath = x.path;
        }));
    }
    upload(files) {
        if (files.length === 0) {
            return;
        }
        let fileToUpload = files[0];
        const formData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        this.subscriptions.push(this.imageService.upload(formData, this.folderName, this.user.id, this.imgType)
            .subscribe(event => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].UploadProgress)
                this.progress = Math.round(100 * event.loaded / event.total);
            else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].Response) {
                this.message = 'Upload success.';
            }
        }));
    }
    getDriver() {
        this.subscriptions.push(this.driverService.getDriver(this.driverId)
            .subscribe(d => {
            if (d == null) {
                console.log('No driver');
                return;
            }
            this.driver = d;
            this.rating = d.rating.toFixed(2);
            this.driverCommission = d.comission;
            (Math.round(this.driverCommission * 100) / 100).toFixed(2);
            this.referral = this.driver.referal;
        }));
    }
    getWalletAmount() {
        this.subscriptions.push(this.walletService.getMyWallet(this.user.id)
            .subscribe(x => {
            if (x.ammount) {
                this.walletAmount = x.ammount;
            }
            else {
                this.walletAmount = 0;
            }
        }));
    }
    getCars() {
        this.subscriptions.push(this.driverService.getDriverCars(this.driverId)
            .subscribe(d => {
            if (d == null) {
                console.log('No cars');
                return;
            }
            this.driverCars = d;
            this.carsCount = this.driverCars.length;
        }));
    }
    openHistory() {
        this.route.navigate(['menu/driver-history']);
    }
    addNewCar() {
        this.route.navigate(['menu/car-register']);
    }
    active(car) {
        if (car.isActive) {
            return;
        }
        if (car.confirmation == false) {
            this.presentAlert();
            return;
        }
        this.subscriptions.push(this.driverService.activeCar(car.id, car.driverId)
            .subscribe(x => {
            this.isActiveCar = x.isActive;
            console.log(x);
        }));
    }
    deleteCar(id) {
        this.subscriptions.push(this.driverService.deleteCar(id)
            .subscribe(x => {
            console.log(x);
        }));
    }
    goBack() {
        this.location.back();
    }
    openLanguagePopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _language_popover_language_popover_page__WEBPACK_IMPORTED_MODULE_15__["LanguagePopoverPage"],
                event: ev
            });
            yield popover.present();
        });
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirmation',
                message: 'Your car is not confirmet yet.',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    chargeCash() {
        this.route.navigate(['menu/payments']);
    }
};
DriverProfilePage.ctorParameters = () => [
    { type: src_services__WEBPACK_IMPORTED_MODULE_5__["AccountService"] },
    { type: src_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_7__["DriverService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] },
    { type: src_services_wallet_wallet_service__WEBPACK_IMPORTED_MODULE_10__["WalletService"] },
    { type: src_services_image_image_service__WEBPACK_IMPORTED_MODULE_11__["ImageService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["PopoverController"] }
];
DriverProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-driver-profile',
        template: _raw_loader_driver_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_driver_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DriverProfilePage);



/***/ }),

/***/ "KoPF":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/driver-profile/driver-profile.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>\r\n      <ion-label>Profile</ion-label>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon (click)='openLanguagePopover($event)' id=\"toolbarIcon\" name=\"language-outline\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding class=\"background\">\r\n  <div class=\"row mt-2\">\r\n    <div class=\"col\">\r\n      <div class=\"card-transparent\">\r\n        <div class=\"header-transparent\">\r\n          <div class=\"avatar\">\r\n            <img src={{imgPath}} onerror=\"this.onerror=null; this.src='../assets/default.png'\" alt=\"\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n\r\n      <div class=\"card-body\">\r\n\r\n        \r\n        <div class=\"user-meta ion-text-center\">\r\n          <h3 class=\"playername my-label text\">{{user.firstName}} {{user.lastName}}</h3>\r\n          <h4 class=\"playername my-label text\">{{user.phone}}</h4>\r\n\r\n          <h6 class=\"ranking my-label text\">{{'Wallet ballance' | translate}}: <ion-chip>\r\n              <ion-label>{{walletAmount}}$</ion-label>\r\n            </ion-chip>\r\n          </h6>\r\n          <ion-chip (click)=\"chargeCash()\">\r\n            <ion-label class=\"my-label text\">\r\n              <a href=\"https://taximidrive.netlify.app/#/login\">{{'Click to charge your account' | translate}}</a>\r\n            </ion-label>\r\n          </ion-chip>\r\n          <h6 class=\"ranking my-label text\">{{'My rating' | translate}}: <ion-chip>\r\n              <ion-label>{{rating}}</ion-label>\r\n            </ion-chip>\r\n          </h6>\r\n          <!-- <h6 class=\"ranking my-label text\">{{'Commission' | translate}}: <ion-chip>\r\n              <ion-label>{{driverCommission}}%</ion-label>\r\n            </ion-chip>\r\n          </h6> -->\r\n        </div>\r\n        \r\n          <input type=\"file\" #file placeholder=\"Choose file\" (change)=\"upload(file.files)\" style=\"display:none;\">\r\n          <ion-button class=\"my-label\" (click)=\"file.click()\" expand=\"full\" color=\"primary\">{{'Upload picture' | translate}}</ion-button>\r\n\r\n        <div class=\"col-md-4\">\r\n          <span class=\"upload\" *ngIf=\"progress > 0\">\r\n            {{progress}}%\r\n          </span>\r\n          <span class=\"upload\" *ngIf=\"message\">\r\n            {{message}}\r\n          </span>\r\n        </div>\r\n        <ion-button class=\"my-label text\" (click)=\"openHistory()\" expand=\"full\" color=\"dark\">{{'Drive history' | translate}}</ion-button>\r\n        <ion-button class=\"my-label text\" (click)=\"addNewCar()\" expand=\"full\" color=\"dark\">{{'Add new car' | translate}}</ion-button>\r\n        <h6 *ngIf=\"carsCount > 0\" class=\"ranking ion-text-center\">\r\n          <ion-chip>\r\n            <ion-label class=\"my-label text\">{{'Choose your car for today' | translate}}:</ion-label>\r\n          </ion-chip>\r\n        </h6>\r\n\r\n        <h6 *ngIf=\"carsCount == 0\" class=\"ranking ion-text-center\">\r\n          <ion-chip>\r\n            <ion-label class=\"my-label text\">{{'You must add car' | translate}}</ion-label>\r\n          </ion-chip>\r\n        </h6>\r\n        <div *ngFor=\"let car of driverCars\">\r\n          <div class=\"row\">\r\n            <div class=\"col-10\">\r\n              <ion-button class=\"my-label text\" *ngIf=\"car.isActive == false && car.typeId == 2\" (click)=\"active(car)\" expand=\"full\"\r\n                color=\"medium\">{{car.model}}\r\n                - Comfort</ion-button>\r\n                <ion-button class=\"my-label text\" *ngIf=\"car.isActive == false && car.typeId == 1\" (click)=\"active(car)\" expand=\"full\"\r\n                color=\"medium\">{{car.model}}\r\n                - Normal</ion-button>\r\n              <ion-button class=\"my-label text car\" *ngIf=\"car.isActive == true && car.typeId == 2\" (click)=\"active(car)\" expand=\"full\" color=\"success\">{{car.model}}\r\n                - Comfort</ion-button>\r\n                <ion-button class=\"my-label text car\" *ngIf=\"car.isActive == true && car.typeId == 1\" (click)=\"active(car)\" expand=\"full\" color=\"success\">{{car.model}}\r\n                  - Normal</ion-button>\r\n            </div>\r\n            <div class=\"col-2\">\r\n              <ion-button class=\"my-label text\" (click)=\"deleteCar(car.id)\" style=\"float: right\" expand=\"full\"\r\n                color=\"danger\">\r\n                {{'Delete'| translate}}\r\n              </ion-button>\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <!-- <div class=\"text-center ranking my-label text\">\r\n          {{'My referral'| translate}}\r\n          <ion-chip (click)=\"copy(referral)\">\r\n            <ion-label>{{referral}}</ion-label>\r\n          </ion-chip>\r\n        </div> -->\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=driver-profile-driver-profile-module-es2015.js.map