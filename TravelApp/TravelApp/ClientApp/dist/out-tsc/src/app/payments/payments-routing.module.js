import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaymentsPage } from './payments.page';
const routes = [
    {
        path: '',
        component: PaymentsPage
    }
];
let PaymentsPageRoutingModule = class PaymentsPageRoutingModule {
};
PaymentsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PaymentsPageRoutingModule);
export { PaymentsPageRoutingModule };
//# sourceMappingURL=payments-routing.module.js.map