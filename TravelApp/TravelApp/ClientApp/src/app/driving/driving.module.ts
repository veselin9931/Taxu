import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrivingPageRoutingModule } from './driving-routing.module';

import { DrivingPage } from './driving.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrivingPageRoutingModule
  ],
  declarations: [DrivingPage]
})
export class DrivingPageModule {}
