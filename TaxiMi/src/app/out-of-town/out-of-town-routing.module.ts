import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutOfTownPage } from './out-of-town.page';

const routes: Routes = [
  {
    path: '',
    component: OutOfTownPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutOfTownPageRoutingModule {}
