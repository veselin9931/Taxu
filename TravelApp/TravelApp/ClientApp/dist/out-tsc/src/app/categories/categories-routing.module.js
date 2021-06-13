import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesPage } from './categories.page';
const routes = [
    {
        path: '',
        component: CategoriesPage
    }
];
let CategoriesPageRoutingModule = class CategoriesPageRoutingModule {
};
CategoriesPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CategoriesPageRoutingModule);
export { CategoriesPageRoutingModule };
//# sourceMappingURL=categories-routing.module.js.map