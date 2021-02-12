import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
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
    path: 'driver-profile',
    loadChildren: () => import('./driver-profile/driver-profile.module').then( m => m.DriverProfilePageModule)
  },
  {
    path: 'become-driver',
    loadChildren: () => import('./become-driver/become-driver.module').then( m => m.BecomeDriverPageModule)
  },
  {
    path: 'driver-history',
    loadChildren: () => import('./driver-history/driver-history.module').then( m => m.DriverHistoryPageModule)
  },
  {
    path: 'car-register',
    loadChildren: () => import('./car-register/car-register.module').then( m => m.CarRegisterPageModule)
  },  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then( m => m.ReportPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
