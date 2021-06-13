import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DrivingPage } from './driving.page';
const routes = [
    {
        path: '',
        component: DrivingPage
    }
];
let DrivingPageRoutingModule = class DrivingPageRoutingModule {
};
DrivingPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], DrivingPageRoutingModule);
export { DrivingPageRoutingModule };
//# sourceMappingURL=driving-routing.module.js.map