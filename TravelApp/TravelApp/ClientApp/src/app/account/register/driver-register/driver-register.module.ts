import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverRegisterPageRoutingModule } from './driver-register-routing.module';

import { DriverRegisterPage } from './driver-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverRegisterPageRoutingModule
  ],
  declarations: [DriverRegisterPage]
})
export class DriverRegisterPageModule {}
