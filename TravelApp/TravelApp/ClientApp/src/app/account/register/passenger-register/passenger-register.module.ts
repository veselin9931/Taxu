import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassengerRegisterPageRoutingModule } from './passenger-register-routing.module';

import { PassengerRegisterPage } from './passenger-register.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    PassengerRegisterPageRoutingModule
  ],
  declarations: [PassengerRegisterPage]
})
export class PassengerRegisterPageModule {}
