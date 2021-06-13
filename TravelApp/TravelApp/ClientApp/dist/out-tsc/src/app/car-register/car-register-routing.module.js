import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarRegisterPage } from './car-register.page';
const routes = [
    {
        path: '',
        component: CarRegisterPage
    }
];
let CarRegisterPageRoutingModule = class CarRegisterPageRoutingModule {
};
CarRegisterPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CarRegisterPageRoutingModule);
export { CarRegisterPageRoutingModule };
//# sourceMappingURL=car-register-routing.module.js.map