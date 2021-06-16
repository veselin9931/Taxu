(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["car-register-car-register-module"], {
    /***/
    "S3Ag":
    /*!*****************************************************!*\
      !*** ./src/app/car-register/car-register.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function S3Ag(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color:#e9e9e9;\n}\n\nion-toolbar {\n  --ion-background-color:#eeeeee;\n}\n\nion-title {\n  text-align: center;\n}\n\n#toolbarIcon {\n  font-size: 1.7em;\n}\n\n.text {\n  font-family: Open Sans Light;\n}\n\n.centered {\n  text-align: center;\n}\n\nhr {\n  width: 70% !important;\n}\n\nlabel {\n  border: 1px solid #ccc;\n  padding: 8px 15px;\n  cursor: pointer;\n}\n\n.backIcon {\n  color: #ffae00;\n  font-size: 150%;\n}\n\n.back {\n  color: #ffae00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhci1yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSw4QkFBQTtBQUFKOztBQUdBO0VBQ0ksOEJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksNEJBQUE7QUFBSjs7QUFJQTtFQUNJLGtCQUFBO0FBREo7O0FBR0E7RUFDSSxxQkFBQTtBQUFKOztBQUdBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0FBQUoiLCJmaWxlIjoiY2FyLXJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLy8tLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvd3A0NzkyNzgwLWRhcmstcGhvbmUtd2FsbHBhcGVycy5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZTllOWU5O1xyXG59XHJcblxyXG5pb24tdG9vbGJhcntcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2VlZWVlZTtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3Rvb2xiYXJJY29ue1xyXG4gICAgZm9udC1zaXplOiAxLjdlbTtcclxufVxyXG5cclxuLnRleHR7XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zIExpZ2h0O1xyXG59XHJcblxyXG5cclxuLmNlbnRlcmVke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmhye1xyXG4gICAgd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5iYWNrSWNvbiB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMTc0LCAwKTtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxufVxyXG5cclxuLmJhY2sge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDE3NCwgMCk7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "Sxb/":
    /*!*************************************************************!*\
      !*** ./src/app/car-register/car-register-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: CarRegisterPageRoutingModule */

    /***/
    function Sxb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarRegisterPageRoutingModule", function () {
        return CarRegisterPageRoutingModule;
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


      var _car_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./car-register.page */
      "hbCy");

      var routes = [{
        path: '',
        component: _car_register_page__WEBPACK_IMPORTED_MODULE_3__["CarRegisterPage"]
      }];

      var CarRegisterPageRoutingModule = function CarRegisterPageRoutingModule() {
        _classCallCheck(this, CarRegisterPageRoutingModule);
      };

      CarRegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CarRegisterPageRoutingModule);
      /***/
    },

    /***/
    "hbCy":
    /*!***************************************************!*\
      !*** ./src/app/car-register/car-register.page.ts ***!
      \***************************************************/

    /*! exports provided: CarRegisterPage */

    /***/
    function hbCy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarRegisterPage", function () {
        return CarRegisterPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_car_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./car-register.page.html */
      "iPkw");
      /* harmony import */


      var _car_register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./car-register.page.scss */
      "S3Ag");
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
      /* harmony import */


      var src_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/_services */
      "8Xdb");
      /* harmony import */


      var src_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/_services/driver/driver.service */
      "exMm");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_services_image_image_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/_services/image/image.service */
      "Jhu6");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @aspnet/signalr */
      "Gpoy");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var CarRegisterPage = /*#__PURE__*/function () {
        function CarRegisterPage(route, formBuilder, driverService, accountService, location, imageService, alertController) {
          _classCallCheck(this, CarRegisterPage);

          this.route = route;
          this.formBuilder = formBuilder;
          this.driverService = driverService;
          this.accountService = accountService;
          this.location = location;
          this.imageService = imageService;
          this.alertController = alertController;
          this.submitted = false;
          this.loading = false;
          this.folderName = "driverFacePic";
          this.imgType = "carImg";
          this.userId = this.accountService.userValue.id;
        }

        _createClass(CarRegisterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.getDocs();
            this.form = this.formBuilder.group({
              model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              registrationNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              color: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              capacity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              driverId: [''],
              type: ['']
            });
            var connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_12__["HubConnectionBuilder"]().configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_12__["LogLevel"].Information).withUrl("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].signalRUrl, "/orderHub")).build();
            connection.start().then(function () {
              console.log('signalR Connected in menu');
            })["catch"](function (err) {
              console.log("Reconnecting in 1 sec.");
              setTimeout(function () {
                return connection.start();
              }, 1000);
            });
            connection.on('OnUpload', function (userId) {
              _this.getDocs();
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.form.controls;
          }
        }, {
          key: "getDocs",
          value: function getDocs() {
            var _this2 = this;

            this.imageService.getUserCarPictures(this.userId).subscribe(function (x) {
              _this2.pics = x;
              console.log(_this2.pics);
            });
          }
        }, {
          key: "removePicture",
          value: function removePicture(id) {
            this.picDelete(id);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

            this.submitted = true;

            if (!this.form.valid) {
              return;
            }

            if (this.pics.length != 4) {
              this.notEnoughImages();
            } else {
              this.accountService.getById(this.userId).subscribe(function (x) {
                _this3.form.value.driverId = x.driverId;
                _this3.form.value.type = +_this3.form.value.type;

                _this3.driverService.createCar(_this3.form.value).subscribe(function (data) {
                  _this3.clearForm();

                  _this3.driverService.getDriverCars(x.driverId).subscribe(function (d) {
                    if (d.length != 0) {
                      _this3.route.navigateByUrl('menu/driver-profile');
                    } else {
                      _this3.imageService.getUserCarPictures(_this3.userId).subscribe(function (x) {
                        if (x[2].path) {
                          _this3.route.navigateByUrl('menu/verifying');
                        }
                      });
                    }
                  });
                });
              });
            }
          }
        }, {
          key: "upload",
          value: function upload(files) {
            var _this4 = this;

            if (files.length === 0) {
              return;
            }

            var fileToUpload = files[0];
            var formData = new FormData();
            formData.append('file', fileToUpload, fileToUpload.name);
            this.imageService.upload(formData, this.folderName, this.userId, this.imgType).subscribe(function (event) {
              if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpEventType"].UploadProgress) _this4.progress = Math.round(100 * event.loaded / event.total);else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpEventType"].Response) {
                _this4.message = 'Documents uploaded successfully.';
              }

              switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpEventType"].Sent:
                  console.log('Request has been made!');
                  break;

                case _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpEventType"].ResponseHeader:
                  console.log('Response header has been received!');
                  break;

                case _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpEventType"].UploadProgress:
                  _this4.progress = Math.round(event.loaded / event.total * 100);
                  break;

                case _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpEventType"].Response:
                  setTimeout(function () {
                    _this4.progress = 0;
                  }, 1500);
              }
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }, {
          key: "notEnoughImages",
          value: function notEnoughImages() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var popup;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: 'You have to upload 4 car and car document pictures.',
                        buttons: [{
                          text: 'Ok',
                          role: 'Ok'
                        }]
                      });

                    case 2:
                      popup = _context.sent;
                      _context.next = 5;
                      return popup.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "picDelete",
          value: function picDelete(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this5 = this;

              var popup;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: 'Delete the picture?',
                        buttons: [{
                          text: 'Yes',
                          handler: function handler() {
                            _this5.imageService.removeDocument(id).subscribe(function (x) {
                              console.log('Image removed sucessfully');
                            });
                          }
                        }, {
                          text: 'No',
                          role: 'no'
                        }]
                      });

                    case 2:
                      popup = _context2.sent;
                      _context2.next = 5;
                      return popup.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "clearForm",
          value: function clearForm() {
            this.form.reset({
              'model': '',
              'tehnicalReview': '',
              'registrationNumber': '',
              'color': '',
              'capacity': ''
            });
          }
        }]);

        return CarRegisterPage;
      }();

      CarRegisterPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_services_driver_driver_service__WEBPACK_IMPORTED_MODULE_7__["DriverService"]
        }, {
          type: src_services__WEBPACK_IMPORTED_MODULE_6__["AccountService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
        }, {
          type: src_services_image_image_service__WEBPACK_IMPORTED_MODULE_9__["ImageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["AlertController"]
        }];
      };

      CarRegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-car-register',
        template: _raw_loader_car_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_car_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CarRegisterPage);
      /***/
    },

    /***/
    "iPkw":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/car-register/car-register.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function iPkw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>\r\n      <ion-label>Cyber</ion-label>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon id=\"toolbarIcon\" name=\"language-outline\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding class=\"background\">\r\n  <div class=\"row mt-2\">\r\n    <div class=\"col\">\r\n      <!-- <div class=\"row mt-2\">\r\n        <div class=\"col-1\">\r\n          <ion-icon class=\"backIcon ml-2\" name=\"chevron-back-outline\"></ion-icon>\r\n        </div>\r\n        <div class=\"col-9\">\r\n          <h5 (click)=goBack() class=\"back\">Back</h5>\r\n        </div>\r\n      </div> -->\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col text-center\">\r\n          <ion-text class=\"centered\">\r\n            <h3 class=\"text\">Car information</h3>\r\n            <hr>\r\n          </ion-text>\r\n\r\n          <form [formGroup]=\"form\" novalidate class=\"col-md-6\">\r\n\r\n            <div class=\"form-group col text-center\">\r\n              <ion-input formControlName=\"model\" type=\"text\" class=\"form-control\" placeholder=\"Model\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.model.errors }\">\r\n              </ion-input>\r\n              <div *ngIf=\"submitted && f.model.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.model.errors.required\">The field is required!</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group col text-center\">\r\n              <select formControlName=\"type\" class=\"form-control\" id=\"exampleFormControlSelect1\">\r\n                <option value=\"\" disabled selected hidden>Click to choose car type</option>\r\n                <option value=\"1\">Normal</option>\r\n                <option value=\"2\">Comfort</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class=\"form-group col text-center\">\r\n              <ion-input formControlName=\"color\" type=\"text\" class=\"form-control\" placeholder=\"Color\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.color.errors }\">\r\n              </ion-input>\r\n              <div *ngIf=\"submitted && f.color.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.color.errors.required\">The field is required!</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group col text-center\">\r\n              <ion-input formControlName=\"capacity\" type=\"number\" class=\"form-control\" placeholder=\"Capacity\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.capacity.errors }\">\r\n              </ion-input>\r\n              <div *ngIf=\"submitted && f.capacity.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.capacity.errors.required\">The field is required!</div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group col text-center\">\r\n              <ion-input formControlName=\"registrationNumber\" type=\"text\" class=\"form-control\"\r\n                placeholder=\"Registration Number\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.registrationNumber.errors }\">\r\n              </ion-input>\r\n              <div *ngIf=\"submitted && f.registrationNumber.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.registrationNumber.errors.required\">The field is required!</div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"form-group col mt-5 text-center\">\r\n                  <input type=\"file\" #file1 placeholder=\"Choose file\" (change)=\"upload(file1.files)\" style=\"display:none;\">\r\n                  <ion-button expand=\"shape\" (click)=\"file1.click()\">Car photo 1</ion-button>\r\n                  <input type=\"file\" #file2 placeholder=\"Choose file\" (change)=\"upload(file2.files)\" style=\"display:none;\">\r\n                  <ion-button expand=\"shape\" (click)=\"file2.click()\">Car photo 2</ion-button>\r\n                  <input type=\"file\" #file3 placeholder=\"Choose file\" (change)=\"upload(file3.files)\" style=\"display:none;\">\r\n                  <ion-button expand=\"shape\" (click)=\"file3.click()\">Car photo 3</ion-button>\r\n\r\n                  <div class=\"col-md-4 mt-2\">\r\n                      <div class=\"progress form-group\" *ngIf=\"progress > 0\">\r\n                          <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width.%]=\"progress\">\r\n                          </div>\r\n                      </div>\r\n\r\n                      <span class=\"upload\" *ngIf=\"progress > 0\">\r\n                          {{progress}}%\r\n                      </span>\r\n                      <span class=\"upload\" *ngIf=\"message\">\r\n                          {{message}}\r\n                      </span>\r\n                  </div>\r\n              </div> -->\r\n\r\n              <div class=\"input-group text-left\">\r\n                <div class=\"input-group mb-1\">\r\n                  <label type=\"text\" class=\"form-control\">1. Front car picture</label>\r\n                  <div class=\"input-group-append\">\r\n                    <span>\r\n                      <input type=\"file\" #file1 placeholder=\"Choose file\" (change)=\"upload(file1.files)\"\r\n                        style=\"display:none;\">\r\n                      <label>\r\n                        <ion-icon name=\"add-outline\" color=\"dark\" (click)=\"file1.click()\"></ion-icon>\r\n                        <!-- <app-multi-file-upload></app-multi-file-upload> -->\r\n                      </label>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n            \r\n                <div class=\"input-group mb-1\">\r\n                  <label type=\"text\" class=\"form-control\">2. Rear car picture</label>\r\n                  <div class=\"input-group-append\">\r\n                    <span>\r\n                      <input type=\"file\" #file2 placeholder=\"Choose file\" (change)=\"upload(file2.files)\"\r\n                        style=\"display:none;\">\r\n                      <label>\r\n                        <ion-icon name=\"add-outline\" color=\"dark\" (click)=\"file2.click()\"></ion-icon>\r\n                        <!-- <app-multi-file-upload></app-multi-file-upload> -->\r\n                      </label>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n            \r\n                <div class=\"input-group mb-1\">\r\n                  <label type=\"text\" class=\"form-control\">3. Car insurance picture</label>\r\n                  <div class=\"input-group-append\">\r\n                    <span>\r\n                      <input type=\"file\" #file3 placeholder=\"Choose file\" (change)=\"upload(file3.files)\"\r\n                        style=\"display:none;\">\r\n                      <label>\r\n                        <ion-icon name=\"add-outline\" color=\"dark\" (click)=\"file3.click()\"></ion-icon>\r\n                        <!-- <app-multi-file-upload></app-multi-file-upload> -->\r\n                      </label>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n            \r\n                <div class=\"input-group mb-1\">\r\n                  <label type=\"text\" class=\"form-control\">4. Technical review picture</label>\r\n                  <div class=\"input-group-append\">\r\n                    <span>\r\n                      <input type=\"file\" #file4 placeholder=\"Choose file\" (change)=\"upload(file4.files)\"\r\n                        style=\"display:none;\">\r\n                      <label>\r\n                        <ion-icon name=\"add-outline\" color=\"dark\" (click)=\"file4.click()\"></ion-icon>\r\n                        <!-- <app-multi-file-upload></app-multi-file-upload> -->\r\n                      </label>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            \r\n              <ion-list>\r\n                <ion-item *ngFor=\"let pic of pics\">\r\n                    <a class=\"text list-group-item list-group-item-action flex-column align-items-start\">\r\n                        <p>\r\n                            <img src=\"{{pic.path}}\" />\r\n                            <div class=\"text-center\">\r\n                                <h5 class=\"mb-1 fonted\"></h5>\r\n                                <button class=\"btn btn-danger\" (click)=\"removePicture(pic.id)\">Remove picture</button>\r\n    \r\n                            </div>\r\n                    </a>\r\n    \r\n                </ion-item>\r\n            </ion-list>\r\n\r\n            <div class=\"col-md-12 mt-3\">\r\n              <ion-button type=\"submit\" (click)=\"onSubmit()\" color=\"light\">Submit</ion-button>\r\n            </div>\r\n\r\n          </form>\r\n\r\n          \r\n        </div>\r\n      \r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  \r\n</ion-content>";
      /***/
    },

    /***/
    "vqOf":
    /*!*****************************************************!*\
      !*** ./src/app/car-register/car-register.module.ts ***!
      \*****************************************************/

    /*! exports provided: CarRegisterPageModule */

    /***/
    function vqOf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CarRegisterPageModule", function () {
        return CarRegisterPageModule;
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


      var _car_register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./car-register-routing.module */
      "Sxb/");
      /* harmony import */


      var _car_register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./car-register.page */
      "hbCy");

      var CarRegisterPageModule = function CarRegisterPageModule() {
        _classCallCheck(this, CarRegisterPageModule);
      };

      CarRegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _car_register_routing_module__WEBPACK_IMPORTED_MODULE_5__["CarRegisterPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_car_register_page__WEBPACK_IMPORTED_MODULE_6__["CarRegisterPage"]]
      })], CarRegisterPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=car-register-car-register-module-es5.js.map