import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DriverProfilePage } from './driver-profile.page';
const routes = [
    {
        path: '',
        component: DriverProfilePage
    }
];
let DriverProfilePageRoutingModule = class DriverProfilePageRoutingModule {
};
DriverProfilePageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], DriverProfilePageRoutingModule);
export { DriverProfilePageRoutingModule };
//# sourceMappingURL=driver-profile-routing.module.js.map