import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';
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
        const connection = new signalR.HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Information)
            .withUrl(`${environment.signalRUrl}/orderHub`)
            .build();
        connection.start().then(function () {
            console.log('signalR Connected in profile');
        }).catch(function (err) {
            return console.log(err);
        });
        connection.on('BroadcastMessage', () => {
            this.getDriver();
            this.getCars();
            this.getWalletAmount();
            this.getProfilePicture();
        });
    }
    copy(referral) {
        console.log(referral);
    }
    getProfilePicture() {
        this.imageService.getMyPicture(this.user.id)
            .subscribe(x => {
            if (x == null) {
                return;
            }
            this.imgPath = x.path;
        });
    }
    upload(files) {
        if (files.length === 0) {
            return;
        }
        let fileToUpload = files[0];
        const formData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        this.imageService.upload(formData, this.folderName, this.user.id, this.imgType)
            .subscribe(event => {
            if (event.type === HttpEventType.UploadProgress)
                this.progress = Math.round(100 * event.loaded / event.total);
            else if (event.type === HttpEventType.Response) {
                this.message = 'Upload success.';
            }
        });
    }
    getDriver() {
        this.driverService.getDriver(this.driverId)
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
        });
    }
    getWalletAmount() {
        this.walletService.getMyWallet(this.user.id)
            .subscribe(x => {
            if (x.ammount) {
                this.walletAmount = x.ammount;
            }
            else {
                this.walletAmount = 0;
            }
        });
    }
    getCars() {
        this.driverService.getDriverCars(this.driverId)
            .subscribe(d => {
            if (d == null) {
                console.log('No cars');
                return;
            }
            this.driverCars = d;
            this.carsCount = this.driverCars.length;
        });
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
        this.driverService.activeCar(car.id, car.driverId)
            .subscribe(x => {
            this.isActiveCar = x.isActive;
            console.log(x);
        });
    }
    deleteCar(id) {
        this.driverService.deleteCar(id)
            .subscribe(x => {
            console.log(x);
        });
    }
    goBack() {
        this.location.back();
    }
    openLanguagePopover(ev) {
        return __awaiter(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: LanguagePopoverPage,
                event: ev
            });
            yield popover.present();
        });
    }
    presentAlert() {
        return __awaiter(this, void 0, void 0, function* () {
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
DriverProfilePage = __decorate([
    Component({
        selector: 'app-driver-profile',
        templateUrl: './driver-profile.page.html',
        styleUrls: ['./driver-profile.page.scss'],
    })
], DriverProfilePage);
export { DriverProfilePage };
//# sourceMappingURL=driver-profile.page.js.map