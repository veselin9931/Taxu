import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaymentsSucssesPage } from './payments-sucsses.page';
const routes = [
    {
        path: '',
        component: PaymentsSucssesPage
    }
];
let PaymentsSucssesPageRoutingModule = class PaymentsSucssesPageRoutingModule {
};
PaymentsSucssesPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PaymentsSucssesPageRoutingModule);
export { PaymentsSucssesPageRoutingModule };
//# sourceMappingURL=payments-sucsses-routing.module.js.map