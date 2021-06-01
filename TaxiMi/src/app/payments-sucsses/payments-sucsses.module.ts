import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentsSucssesPageRoutingModule } from './payments-sucsses-routing.module';

import { PaymentsSucssesPage } from './payments-sucsses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentsSucssesPageRoutingModule
  ],
  declarations: [PaymentsSucssesPage]
})
export class PaymentsSucssesPageModule {}
