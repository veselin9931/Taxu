import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentsSucssesPage } from './payments-sucsses.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentsSucssesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsSucssesPageRoutingModule {}
