import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletChargePageRoutingModule } from './wallet-charge-routing.module';

import { WalletChargePage } from './wallet-charge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletChargePageRoutingModule
  ],
  declarations: [WalletChargePage]
})
export class WalletChargePageModule {}
