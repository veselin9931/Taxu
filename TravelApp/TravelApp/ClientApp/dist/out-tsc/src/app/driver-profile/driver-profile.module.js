import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DriverProfilePageRoutingModule } from './driver-profile-routing.module';
import { DriverProfilePage } from './driver-profile.page';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguagePopoverPageModule } from '../language-popover/language-popover.module';
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http);
}
let DriverProfilePageModule = class DriverProfilePageModule {
};
DriverProfilePageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            DriverProfilePageRoutingModule,
            TranslateModule.forChild({
                loader: {
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [HttpClient]
                }
            }),
            LanguagePopoverPageModule
        ],
        declarations: [DriverProfilePage],
        providers: [TranslateService],
    })
], DriverProfilePageModule);
export { DriverProfilePageModule };
//# sourceMappingURL=driver-profile.module.js.map