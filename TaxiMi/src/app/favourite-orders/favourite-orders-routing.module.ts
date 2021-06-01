import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavouriteOrdersPage } from './favourite-orders.page';

const routes: Routes = [
  {
    path: '',
    component: FavouriteOrdersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavouriteOrdersPageRoutingModule {}
