import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CarRegisterPageRoutingModule } from './car-register-routing.module';
import { CarRegisterPage } from './car-register.page';
let CarRegisterPageModule = class CarRegisterPageModule {
};
CarRegisterPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            CarRegisterPageRoutingModule,
            ReactiveFormsModule
        ],
        declarations: [CarRegisterPage]
    })
], CarRegisterPageModule);
export { CarRegisterPageModule };
//# sourceMappingURL=car-register.module.js.map