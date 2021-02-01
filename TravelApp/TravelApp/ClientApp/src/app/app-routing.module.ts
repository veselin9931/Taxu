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
  },
  {
    path: 'home-logged',
    loadChildren: () => import('./home-logged/home-logged.module').then( m => m.HomeLoggedPageModule)
  },
  {
    path: 'register-car',
    loadChildren: () => import('./register-car/register-car.module').then( m => m.RegisterCarPageModule)
  },
  {
    path: 'driver-profile',
    loadChildren: () => import('./driver-profile/driver-profile.module').then( m => m.DriverProfilePageModule)
  },  {
    path: 'become-driver',
    loadChildren: () => import('./become-driver/become-driver.module').then( m => m.BecomeDriverPageModule)
  },




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
