import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../account/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'home-logged',
        loadChildren: () => import('../home-logged/home-logged.module').then(m => m.HomeLoggedPageModule)
      },
      {
        path: 'account/register',
        loadChildren: () => import('../account/register/register.module').then(m => m.RegisterPageModule)
      },
      {
        path: 'travelling',
        loadChildren: () => import('../travelling/travelling.module').then(m => m.TravellingPageModule)
      },
      {
        path: 'driving',
        loadChildren: () => import('../driving/driving.module').then(m => m.DrivingPageModule)
      },
      {
        path: 'verifying',
        loadChildren: () => import('../account-verifying/account-verifying.module').then(m => m.AccountVerifyingPageModule)
      },
      {
        path: 'register-car',
        loadChildren: () => import('../register-car/register-car-routing.module').then(m => m.RegisterCarPageRoutingModule)
      },
      {
        path: 'become-driver',
        loadChildren: () => import('../become-driver/become-driver.module').then( m => m.BecomeDriverPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
