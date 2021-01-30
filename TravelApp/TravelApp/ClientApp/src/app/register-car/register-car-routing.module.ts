import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterCarPage } from './register-car.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterCarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterCarPageRoutingModule {}
