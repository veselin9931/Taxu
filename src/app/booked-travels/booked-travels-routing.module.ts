import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookedTravelsPage } from './booked-travels.page';

const routes: Routes = [
  {
    path: '',
    component: BookedTravelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookedTravelsPageRoutingModule {}
