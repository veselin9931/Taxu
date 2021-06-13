import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { environment } from 'src/environments/environment';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';
let MenuPage = class MenuPage {
    constructor(router, accountService, driverService, translate, popoverController) {
        this.router = router;
        this.accountService = accountService;
        this.driverService = driverService;
        this.translate = translate;
        this.popoverController = popoverController;
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
            this.translate.setDefaultLang('en');
        }
        this.router.events.subscribe((event) => {
            if (event && event.url) {
                if (event.url == "/menu/driving") {
                    if (this.isLoggedIn && this.isVerified && this.documentConfirmed && this.driverCars.length >= 1) {
                        event.url = '/menu/driving';
                    }
                }
                //this.selectedPath = event.url;
            }
        });
    }
    ngOnInit() {
        this.checkValues();
        const connection = new signalR.HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Information)
            .withUrl(`${environment.signalRUrl}/orderHub`)
            .build();
        connection.start().then(function () {
            console.log('signalR Connected in menu');
        }).catch(function (err) {
            return console.log(err.toString());
        });
        connection.on('BroadcastMessage', () => {
            this.checkValues();
        });
    }
    checkValues() {
        this.isLoggedIn = localStorage.getItem("user");
        if (this.isLoggedIn) {
            this.accountService.getById(this.accountService.userValue.id)
                .subscribe(x => {
                this.isVerified = x.isDriver;
                if (x.driverId != null) {
                    this.driverService.getDriver(x.driverId)
                        .subscribe(d => {
                        this.driverService.getDriverCars(x.driverId)
                            .subscribe(cars => {
                            this.driverCars = cars;
                        });
                        this.documentConfirmed = d.documentConfirmation;
                    });
                }
            });
        }
        else if (this.isLoggedIn == null) {
            this.router.navigate(['menu/home']);
        }
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
        return __awaiter(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: LanguagePopoverPage,
                event: ev
            });
            yield popover.present();
        });
    }
};
MenuPage = __decorate([
    Component({
        selector: 'app-menu',
        templateUrl: './menu.page.html',
        styleUrls: ['./menu.page.scss'],
    })
], MenuPage);
export { MenuPage };
//# sourceMappingURL=menu.page.js.map