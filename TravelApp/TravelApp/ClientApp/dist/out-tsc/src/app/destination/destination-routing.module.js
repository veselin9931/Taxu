import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DestinationPage } from './destination.page';
const routes = [
    {
        path: '',
        component: DestinationPage
    }
];
let DestinationPageRoutingModule = class DestinationPageRoutingModule {
};
DestinationPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], DestinationPageRoutingModule);
export { DestinationPageRoutingModule };
//# sourceMappingURL=destination-routing.module.js.map