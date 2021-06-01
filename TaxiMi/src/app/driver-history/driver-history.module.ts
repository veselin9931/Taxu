import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverHistoryPageRoutingModule } from './driver-history-routing.module';

import { DriverHistoryPage } from './driver-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverHistoryPageRoutingModule
  ],
  declarations: [DriverHistoryPage]
})
export class DriverHistoryPageModule {}
