import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './pages/home/home/home.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  
  {
    path: 'home',
    component: HomeComponent
  }
]
