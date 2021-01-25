import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaitingDriverPageRoutingModule } from './waiting-driver-routing.module';

import { WaitingDriverPage } from './waiting-driver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaitingDriverPageRoutingModule
  ],
  declarations: [WaitingDriverPage]
})
export class WaitingDriverPageModule {}
