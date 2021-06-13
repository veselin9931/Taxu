import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguagePopoverPageModule } from '../../language-popover/language-popover.module';
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http);
}
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ReactiveFormsModule,
            FormsModule,
            IonicModule,
            RegisterPageRoutingModule,
            TranslateModule.forChild({
                loader: {
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [HttpClient]
                }
            }),
            LanguagePopoverPageModule
        ],
        declarations: [RegisterPage]
    })
], RegisterPageModule);
export { RegisterPageModule };
//# sourceMappingURL=register.module.js.map