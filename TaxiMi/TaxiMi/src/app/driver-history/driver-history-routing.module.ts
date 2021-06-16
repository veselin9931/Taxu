import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverHistoryPage } from './driver-history.page';

const routes: Routes = [
  {
    path: '',
    component: DriverHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverHistoryPageRoutingModule {}
