import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverLoginPageRoutingModule } from './driver-login-routing.module';

import { DriverLoginPage } from './driver-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverLoginPageRoutingModule,
    ReactiveFormsModule 
  ],
  declarations: [DriverLoginPage]
})
export class DriverLoginPageModule {}
