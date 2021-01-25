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
    loadChildren: () => import('./account/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'account/register',
    loadChildren: () => import('./account/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'travelling',
    loadChildren: () => import('./travelling/travelling.module').then( m => m.TravellingPageModule)
  },
  {
    path: 'driving',
    loadChildren: () => import('./driving/driving.module').then( m => m.DrivingPageModule)
  },
  {
    path: 'account-verifying',
    loadChildren: () => import('./account-verifying/account-verifying.module').then( m => m.AccountVerifyingPageModule)
  },  {
    path: 'accepted-order',
    loadChildren: () => import('./accepted-order/accepted-order.module').then( m => m.AcceptedOrderPageModule)
  },
  {
    path: 'waiting-driver',
    loadChildren: () => import('./waiting-driver/waiting-driver.module').then( m => m.WaitingDriverPageModule)
  },
  {
    path: 'home-logged',
    loadChildren: () => import('./home-logged/home-logged.module').then( m => m.HomeLoggedPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
