import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravellingPage } from './travelling.page';

const routes: Routes = [
  {
    path: '',
    component: TravellingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravellingPageRoutingModule {}
