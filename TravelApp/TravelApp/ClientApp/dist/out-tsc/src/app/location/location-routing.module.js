import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocationPage } from './location.page';
const routes = [
    {
        path: '',
        component: LocationPage
    }
];
let LocationPageRoutingModule = class LocationPageRoutingModule {
};
LocationPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], LocationPageRoutingModule);
export { LocationPageRoutingModule };
//# sourceMappingURL=location-routing.module.js.map