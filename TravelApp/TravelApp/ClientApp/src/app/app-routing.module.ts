import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'account/login',
    loadChildren: () => import('./account/login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'account/register',
    loadChildren: () => import('./account/register/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'account/login/passenger-login',
    loadChildren: () => import('./account/login/passenger-login/passenger-login.module').then( m => m.PassengerLoginPageModule)
  },
  {
    path: 'account/login/driver-login',
    loadChildren: () => import('./account/login/driver-login/driver-login.module').then( m => m.DriverLoginPageModule)
  },
  {
    path: 'account/register/passenger-register',
    loadChildren: () => import('./account/register/passenger-register/passenger-register.module').then( m => m.PassengerRegisterPageModule)
  },
  {
    path: 'account/register/driver-register',
    loadChildren: () => import('./account/register/driver-register/driver-register.module').then( m => m.DriverRegisterPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
