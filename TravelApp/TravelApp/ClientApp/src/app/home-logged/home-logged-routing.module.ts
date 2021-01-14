import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeLoggedPage } from './home-logged.page';

const routes: Routes = [
  {
    path: '',
    component: HomeLoggedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeLoggedPageRoutingModule {}
