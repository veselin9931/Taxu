import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceptedOrderPageRoutingModule } from './accepted-order-routing.module';

import { AcceptedOrderPage } from './accepted-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceptedOrderPageRoutingModule
  ],
  declarations: [AcceptedOrderPage]
})
export class AcceptedOrderPageModule {}
