import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarRegisterPageRoutingModule } from './car-register-routing.module';

import { CarRegisterPage } from './car-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarRegisterPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CarRegisterPage]
})
export class CarRegisterPageModule {}
