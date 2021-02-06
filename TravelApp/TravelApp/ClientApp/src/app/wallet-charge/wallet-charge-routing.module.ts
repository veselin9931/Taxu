import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletChargePage } from './wallet-charge.page';

const routes: Routes = [
  {
    path: '',
    component: WalletChargePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletChargePageRoutingModule {}
