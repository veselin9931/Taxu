import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassengerRegisterPage } from './passenger-register.page';

const routes: Routes = [
  {
    path: '',
    component: PassengerRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassengerRegisterPageRoutingModule {}
