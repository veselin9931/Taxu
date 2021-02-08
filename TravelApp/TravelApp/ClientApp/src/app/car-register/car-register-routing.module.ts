import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarRegisterPage } from './car-register.page';

const routes: Routes = [
  {
    path: '',
    component: CarRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarRegisterPageRoutingModule {}
