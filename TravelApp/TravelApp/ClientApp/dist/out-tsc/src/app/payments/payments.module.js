import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaymentsPageRoutingModule } from './payments-routing.module';
import { PaymentsPage } from './payments.page';
let PaymentsPageModule = class PaymentsPageModule {
};
PaymentsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PaymentsPageRoutingModule
        ],
        declarations: [PaymentsPage]
    })
], PaymentsPageModule);
export { PaymentsPageModule };
//# sourceMappingURL=payments.module.js.map