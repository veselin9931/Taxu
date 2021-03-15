import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from '../tabs/tabs.page';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'tabs',
        component: TabsPage
      },
      {
        path: 'location',
        loadChildren: () => import('../location/location.module').then(m => m.LocationPageModule)
      },
      {
        path: 'destination',
        loadChildren: () => import('../destination/destination.module').then(m => m.DestinationPageModule)
      },
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
        path: 'become-driver',
        loadChildren: () => import('../become-driver/become-driver.module').then(m => m.BecomeDriverPageModule)
      },
      {
        path: 'driver-profile',
        loadChildren: () => import('../driver-profile/driver-profile.module').then(m => m.DriverProfilePageModule)
      },
      {
        path: 'driver-history',
        loadChildren: () => import('../driver-history/driver-history.module').then(m => m.DriverHistoryPageModule)
      },
      {
        path: 'car-register',
        loadChildren: () => import('../car-register/car-register.module').then(m => m.CarRegisterPageModule)
      },
      {
        path: 'report',
        loadChildren: () => import('../report/report.module').then(m => m.ReportPageModule)
      },
      {
        path: 'passenger-report',
        loadChildren: () => import('../passenger-report/passenger-report.module').then(m => m.PassengerReportPageModule)
      },
      {
        path: 'favourite-orders',
        loadChildren: () => import('../favourite-orders/favourite-orders.module').then(m => m.FavouriteOrdersPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }
