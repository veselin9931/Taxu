import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaymentsSucssesPageRoutingModule } from './payments-sucsses-routing.module';
import { PaymentsSucssesPage } from './payments-sucsses.page';
let PaymentsSucssesPageModule = class PaymentsSucssesPageModule {
};
PaymentsSucssesPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            PaymentsSucssesPageRoutingModule
        ],
        declarations: [PaymentsSucssesPage]
    })
], PaymentsSucssesPageModule);
export { PaymentsSucssesPageModule };
//# sourceMappingURL=payments-sucsses.module.js.map