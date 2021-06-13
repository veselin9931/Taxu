import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TravellingPage } from './travelling.page';
const routes = [
    {
        path: '',
        component: TravellingPage
    }
];
let TravellingPageRoutingModule = class TravellingPageRoutingModule {
};
TravellingPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], TravellingPageRoutingModule);
export { TravellingPageRoutingModule };
//# sourceMappingURL=travelling-routing.module.js.map