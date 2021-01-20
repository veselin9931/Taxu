import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceptedOrderPage } from './accepted-order.page';

const routes: Routes = [
  {
    path: '',
    component: AcceptedOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceptedOrderPageRoutingModule {}
