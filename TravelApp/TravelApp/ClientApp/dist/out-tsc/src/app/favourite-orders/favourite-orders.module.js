import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FavouriteOrdersPageRoutingModule } from './favourite-orders-routing.module';
import { FavouriteOrdersPage } from './favourite-orders.page';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguagePopoverPageModule } from '../language-popover/language-popover.module';
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http);
}
let FavouriteOrdersPageModule = class FavouriteOrdersPageModule {
};
FavouriteOrdersPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            FavouriteOrdersPageRoutingModule,
            TranslateModule.forChild({
                loader: {
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [HttpClient]
                }
            }),
            LanguagePopoverPageModule
        ],
        declarations: [FavouriteOrdersPage]
    })
], FavouriteOrdersPageModule);
export { FavouriteOrdersPageModule };
//# sourceMappingURL=favourite-orders.module.js.map