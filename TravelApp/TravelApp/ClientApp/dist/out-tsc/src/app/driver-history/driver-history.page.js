import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { environment } from 'src/environments/environment';
let DriverHistoryPage = class DriverHistoryPage {
    constructor(driverService, accountService, locationPage) {
        this.driverService = driverService;
        this.accountService = accountService;
        this.locationPage = locationPage;
        this.orders = [];
        this.userId = this.accountService.userValue.id;
        this.currentDate = new Date();
    }
    ngOnInit() {
        this.getHistory();
        const connection = new signalR.HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Information)
            .withUrl(`${environment.signalRUrl}/orderHub`)
            .build();
        connection.start().then(function () {
            console.log('signalR Connected in history');
        }).catch(function (err) {
            return console.log(err.toString());
        });
        connection.on('BroadcastMessage', () => {
            this.getHistory();
        });
    }
    getHistory() {
        this.driverService.getDriverHistory(this.userId)
            .subscribe((x) => {
            if (this.orders == null) {
                console.log("No orders");
                return;
            }
            this.orders = x;
            let sum = 0;
            x.forEach(order => {
                sum += order.totalPrice;
            });
            this.dailyProfit = sum.toFixed(2);
        });
    }
    goBack() {
        this.locationPage.back();
    }
};
DriverHistoryPage = __decorate([
    Component({
        selector: 'app-driver-history',
        templateUrl: './driver-history.page.html',
        styleUrls: ['./driver-history.page.scss'],
    })
], DriverHistoryPage);
export { DriverHistoryPage };
//# sourceMappingURL=driver-history.page.js.map