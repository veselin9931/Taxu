import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverLoginPage } from './driver-login.page';

const routes: Routes = [
  {
    path: '',
    component: DriverLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverLoginPageRoutingModule {}
