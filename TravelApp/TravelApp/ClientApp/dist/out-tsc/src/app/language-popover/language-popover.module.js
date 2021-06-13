import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LanguagePopoverPageRoutingModule } from './language-popover-routing.module';
import { LanguagePopoverPage } from './language-popover.page';
let LanguagePopoverPageModule = class LanguagePopoverPageModule {
};
LanguagePopoverPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            LanguagePopoverPageRoutingModule
        ],
        declarations: [LanguagePopoverPage],
    })
], LanguagePopoverPageModule);
export { LanguagePopoverPageModule };
//# sourceMappingURL=language-popover.module.js.map