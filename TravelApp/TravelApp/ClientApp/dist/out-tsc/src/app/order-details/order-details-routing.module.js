import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderDetailsPage } from './order-details.page';
const routes = [
    {
        path: '',
        component: OrderDetailsPage
    }
];
let OrderDetailsPageRoutingModule = class OrderDetailsPageRoutingModule {
};
OrderDetailsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], OrderDetailsPageRoutingModule);
export { OrderDetailsPageRoutingModule };
//# sourceMappingURL=order-details-routing.module.js.map