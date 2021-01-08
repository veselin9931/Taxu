import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverRegisterPage } from './driver-register.page';

const routes: Routes = [
  {
    path: '',
    component: DriverRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverRegisterPageRoutingModule {}
