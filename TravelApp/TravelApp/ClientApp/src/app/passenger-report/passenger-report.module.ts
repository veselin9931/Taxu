import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassengerReportPageRoutingModule } from './passenger-report-routing.module';

import { PassengerReportPage } from './passenger-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassengerReportPageRoutingModule
  ],
  declarations: [PassengerReportPage]
})
export class PassengerReportPageModule {}
