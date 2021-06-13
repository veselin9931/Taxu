import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DriverHistoryPageRoutingModule } from './driver-history-routing.module';
import { DriverHistoryPage } from './driver-history.page';
let DriverHistoryPageModule = class DriverHistoryPageModule {
};
DriverHistoryPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            DriverHistoryPageRoutingModule
        ],
        declarations: [DriverHistoryPage]
    })
], DriverHistoryPageModule);
export { DriverHistoryPageModule };
//# sourceMappingURL=driver-history.module.js.map