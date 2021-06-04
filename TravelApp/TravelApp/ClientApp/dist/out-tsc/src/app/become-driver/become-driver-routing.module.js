import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BecomeDriverPage } from './become-driver.page';
const routes = [
    {
        path: '',
        component: BecomeDriverPage
    }
];
let BecomeDriverPageRoutingModule = class BecomeDriverPageRoutingModule {
};
BecomeDriverPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], BecomeDriverPageRoutingModule);
export { BecomeDriverPageRoutingModule };
//# sourceMappingURL=become-driver-routing.module.js.map