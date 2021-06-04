import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AccountVerifyingPageRoutingModule } from './account-verifying-routing.module';
import { AccountVerifyingPage } from './account-verifying.page';
let AccountVerifyingPageModule = class AccountVerifyingPageModule {
};
AccountVerifyingPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            AccountVerifyingPageRoutingModule
        ],
        declarations: [AccountVerifyingPage]
    })
], AccountVerifyingPageModule);
export { AccountVerifyingPageModule };
//# sourceMappingURL=account-verifying.module.js.map