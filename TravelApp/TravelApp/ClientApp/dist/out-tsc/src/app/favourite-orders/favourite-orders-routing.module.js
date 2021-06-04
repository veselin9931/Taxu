import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FavouriteOrdersPage } from './favourite-orders.page';
const routes = [
    {
        path: '',
        component: FavouriteOrdersPage
    }
];
let FavouriteOrdersPageRoutingModule = class FavouriteOrdersPageRoutingModule {
};
FavouriteOrdersPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], FavouriteOrdersPageRoutingModule);
export { FavouriteOrdersPageRoutingModule };
//# sourceMappingURL=favourite-orders-routing.module.js.map