import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguagePopoverPage } from './language-popover.page';
const routes = [
    {
        path: '',
        component: LanguagePopoverPage
    }
];
let LanguagePopoverPageRoutingModule = class LanguagePopoverPageRoutingModule {
};
LanguagePopoverPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], LanguagePopoverPageRoutingModule);
export { LanguagePopoverPageRoutingModule };
//# sourceMappingURL=language-popover-routing.module.js.map