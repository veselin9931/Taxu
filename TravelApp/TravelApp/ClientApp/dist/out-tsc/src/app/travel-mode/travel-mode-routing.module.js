import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TravelModePage } from './travel-mode.page';
const routes = [
    {
        path: '',
        component: TravelModePage
    }
];
let TravelModePageRoutingModule = class TravelModePageRoutingModule {
};
TravelModePageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], TravelModePageRoutingModule);
export { TravelModePageRoutingModule };
//# sourceMappingURL=travel-mode-routing.module.js.map