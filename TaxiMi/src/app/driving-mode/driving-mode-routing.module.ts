import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrivingModePage } from './driving-mode.page';

const routes: Routes = [
  {
    path: '',
    component: DrivingModePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrivingModePageRoutingModule {}
