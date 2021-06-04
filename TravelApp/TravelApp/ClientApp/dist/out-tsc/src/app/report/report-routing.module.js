import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReportPage } from './report.page';
const routes = [
    {
        path: '',
        component: ReportPage
    }
];
let ReportPageRoutingModule = class ReportPageRoutingModule {
};
ReportPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ReportPageRoutingModule);
export { ReportPageRoutingModule };
//# sourceMappingURL=report-routing.module.js.map