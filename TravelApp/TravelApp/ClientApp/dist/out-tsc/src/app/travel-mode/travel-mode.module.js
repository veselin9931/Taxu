import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TravelModePageRoutingModule } from './travel-mode-routing.module';
import { TravelModePage } from './travel-mode.page';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguagePopoverPageModule } from '../language-popover/language-popover.module';
import { CallNumber } from '@ionic-native/call-number/ngx';
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http);
}
let TravelModePageModule = class TravelModePageModule {
};
TravelModePageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            TravelModePageRoutingModule,
            TranslateModule.forChild({
                loader: {
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [HttpClient]
                }
            }),
            LanguagePopoverPageModule
        ],
        providers: [CallNumber],
        declarations: [TravelModePage]
    })
], TravelModePageModule);
export { TravelModePageModule };
//# sourceMappingURL=travel-mode.module.js.map