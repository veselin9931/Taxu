import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstPage } from './first.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: FirstPage,
    children: [
      {
        path: 'driver-profile',
        loadChildren: () => import('../driver-profile/driver-profile.module').then(m => m.DriverProfilePageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/first',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstPageRoutingModule {}
