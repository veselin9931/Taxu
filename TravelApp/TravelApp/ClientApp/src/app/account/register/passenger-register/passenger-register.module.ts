import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassengerRegisterPageRoutingModule } from './passenger-register-routing.module';

import { PassengerRegisterPage } from './passenger-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassengerRegisterPageRoutingModule
  ],
  declarations: [PassengerRegisterPage]
})
export class PassengerRegisterPageModule {}
