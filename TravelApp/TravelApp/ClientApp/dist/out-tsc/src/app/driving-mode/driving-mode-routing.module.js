import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DrivingModePage } from './driving-mode.page';
const routes = [
    {
        path: '',
        component: DrivingModePage
    }
];
let DrivingModePageRoutingModule = class DrivingModePageRoutingModule {
};
DrivingModePageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], DrivingModePageRoutingModule);
export { DrivingModePageRoutingModule };
//# sourceMappingURL=driving-mode-routing.module.js.map