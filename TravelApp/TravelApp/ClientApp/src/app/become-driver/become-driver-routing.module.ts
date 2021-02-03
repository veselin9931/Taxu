import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BecomeDriverPage } from './become-driver.page';

const routes: Routes = [
  {
    path: '',
    component: BecomeDriverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BecomeDriverPageRoutingModule {}
