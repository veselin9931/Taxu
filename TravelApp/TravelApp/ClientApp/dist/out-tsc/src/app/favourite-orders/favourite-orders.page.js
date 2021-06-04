import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { environment } from 'src/environments/environment';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';
let FavouriteOrdersPage = class FavouriteOrdersPage {
    constructor(orderService, accountService, alertController, route, translate, popoverController) {
        this.orderService = orderService;
        this.accountService = accountService;
        this.alertController = alertController;
        this.route = route;
        this.translate = translate;
        this.popoverController = popoverController;
        this.favourites = [];
        this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
    }
    ngOnInit() {
        this.getMyOrders();
        const connection = new signalR.HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Information)
            .withUrl(`${environment.signalRUrl}/orderHub`)
            .build();
        connection.start().then(function () {
            console.log('signalR Connected in travelling');
        }).catch(function (err) {
            return console.log(err.toString());
        });
        connection.on('BroadcastMessage', () => {
            this.getMyOrders();
        });
    }
    getMyOrders() {
        this.orderService.getMyFavourites(this.accountService.userValue.id)
            .subscribe(x => {
            this.favourites = x;
        });
    }
    useThis(favouriteOrder) {
        this.orderService.selectedFavourite = favouriteOrder;
        this.route.navigate(['menu/travelling']);
    }
    remove(id) {
        this.orderService.deleteFavouriteOrder(id)
            .subscribe(x => {
            this.successDeletedFavourite();
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
    successDeletedFavourite() {
        return __awaiter(this, void 0, void 0, function* () {
            const popup = yield this.alertController.create({
                header: 'Successfully removed the trip!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    }
                ]
            });
            yield popup.present();
        });
    }
};
FavouriteOrdersPage = __decorate([
    Component({
        selector: 'app-favourite-orders',
        templateUrl: './favourite-orders.page.html',
        styleUrls: ['./favourite-orders.page.scss'],
    })
], FavouriteOrdersPage);
export { FavouriteOrdersPage };
//# sourceMappingURL=favourite-orders.page.js.map