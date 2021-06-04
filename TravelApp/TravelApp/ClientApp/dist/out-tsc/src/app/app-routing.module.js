import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
const routes = [
    {
        path: 'menu',
        loadChildren: () => import('./menu/menu.module').then(m => m.MenuPageModule)
    },
    {
        path: '',
        redirectTo: 'menu/home',
        pathMatch: 'full'
    },
    {
        path: 'location',
        loadChildren: () => import('./location/location.module').then(m => m.LocationPageModule)
    },
    {
        path: 'destination',
        loadChildren: () => import('./destination/destination.module').then(m => m.DestinationPageModule)
    },
    {
        path: 'language-popover',
        loadChildren: () => import('./language-popover/language-popover.module').then(m => m.LanguagePopoverPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy' })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map