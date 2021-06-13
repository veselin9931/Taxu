import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DriverHistoryPage } from './driver-history.page';
const routes = [
    {
        path: '',
        component: DriverHistoryPage
    }
];
let DriverHistoryPageRoutingModule = class DriverHistoryPageRoutingModule {
};
DriverHistoryPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], DriverHistoryPageRoutingModule);
export { DriverHistoryPageRoutingModule };
//# sourceMappingURL=driver-history-routing.module.js.map