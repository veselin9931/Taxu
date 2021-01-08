import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassengerLoginPageRoutingModule } from './passenger-login-routing.module';

import { PassengerLoginPage } from './passenger-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassengerLoginPageRoutingModule
  ],
  declarations: [PassengerLoginPage]
})
export class PassengerLoginPageModule {}
