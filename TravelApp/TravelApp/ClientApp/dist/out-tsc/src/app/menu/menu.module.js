import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuPageRoutingModule } from './menu-routing.module';
import { MenuPage } from './menu.page';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguagePopoverPageModule } from '../language-popover/language-popover.module';
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http);
}
let MenuPageModule = class MenuPageModule {
};
MenuPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            MenuPageRoutingModule,
            TranslateModule.forChild({
                loader: {
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [HttpClient]
                }
            }),
            LanguagePopoverPageModule
        ],
        declarations: [MenuPage]
    })
], MenuPageModule);
export { MenuPageModule };
//# sourceMappingURL=menu.module.js.map