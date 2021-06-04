import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountVerifyingPage } from './account-verifying.page';
const routes = [
    {
        path: '',
        component: AccountVerifyingPage
    }
];
let AccountVerifyingPageRoutingModule = class AccountVerifyingPageRoutingModule {
};
AccountVerifyingPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], AccountVerifyingPageRoutingModule);
export { AccountVerifyingPageRoutingModule };
//# sourceMappingURL=account-verifying-routing.module.js.map