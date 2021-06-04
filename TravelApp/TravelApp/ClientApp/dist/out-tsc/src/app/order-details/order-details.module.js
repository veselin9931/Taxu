import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrderDetailsPageRoutingModule } from './order-details-routing.module';
import { OrderDetailsPage } from './order-details.page';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguagePopoverPageModule } from '../language-popover/language-popover.module';
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http);
}
let OrderDetailsPageModule = class OrderDetailsPageModule {
};
OrderDetailsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            OrderDetailsPageRoutingModule,
            TranslateModule.forChild({
                loader: {
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [HttpClient]
                }
            }),
            LanguagePopoverPageModule
        ],
        declarations: [OrderDetailsPage]
    })
], OrderDetailsPageModule);
export { OrderDetailsPageModule };
//# sourceMappingURL=order-details.module.js.map