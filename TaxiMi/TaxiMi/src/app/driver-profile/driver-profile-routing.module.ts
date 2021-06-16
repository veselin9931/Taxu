import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverProfilePage } from './driver-profile.page';

const routes: Routes = [
  {
    path: '',
    component: DriverProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverProfilePageRoutingModule {}
