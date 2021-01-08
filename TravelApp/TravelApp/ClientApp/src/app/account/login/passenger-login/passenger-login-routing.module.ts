import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassengerLoginPage } from './passenger-login.page';

const routes: Routes = [
  {
    path: '',
    component: PassengerLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassengerLoginPageRoutingModule {}
