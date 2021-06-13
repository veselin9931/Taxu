import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { environment } from 'src/environments/environment';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';
let CategoriesPage = class CategoriesPage {
    constructor(popoverController, translate, accountService, route, driverService, orderService) {
        this.popoverController = popoverController;
        this.translate = translate;
        this.accountService = accountService;
        this.route = route;
        this.driverService = driverService;
        this.orderService = orderService;
        this.isDrivingNow = this.accountService.userValue.isDrivingNow;
        this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
    }
    ngOnInit() {
        this.getNormalCount();
        this.getComfortCount();
        this.getAllCount();
        const connection = new signalR.HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Information)
            .withUrl(`${environment.signalRUrl}/orderHub`)
            .build();
        connection.start().then(function () {
            console.log('signalR Connected in travelling');
        }).catch(function (err) {
            return console.log(err);
        });
        connection.on('BroadcastMessage', () => {
            this.getNormalCount();
            this.getComfortCount();
            this.getAllCount();
        });
        if (this.isDrivingNow == true) {
            this.route.navigate(['menu/driving']);
        }
    }
    all() {
        this.driverService.categoryType = 'All';
        this.route.navigate(['menu/driving']);
    }
    closest() {
        this.driverService.categoryType = 'Closest';
        this.route.navigate(['menu/driving']);
    }
    normal() {
        this.driverService.categoryType = 'Normal';
        this.route.navigate(['menu/driving']);
    }
    comfort() {
        this.driverService.categoryType = 'Comfort';
        this.route.navigate(['menu/driving']);
    }
    getNormalCount() {
        this.orderService.getNormalOrders()
            .subscribe(x => this.normalCount = x.length);
    }
    getComfortCount() {
        this.orderService.getComfortOrders()
            .subscribe(x => this.comfortCount = x.length);
    }
    getAllCount() {
        this.orderService.getAllOrders()
            .subscribe(x => this.allCount = x.length);
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
CategoriesPage = __decorate([
    Component({
        selector: 'app-categories',
        templateUrl: './categories.page.html',
        styleUrls: ['./categories.page.scss'],
    })
], CategoriesPage);
export { CategoriesPage };
//# sourceMappingURL=categories.page.js.map