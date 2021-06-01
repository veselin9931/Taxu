import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'tabs'
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
        path: 'verifying',
        loadChildren: () => import('../account-verifying/account-verifying.module').then(m => m.AccountVerifyingPageModule)
      },
      {
        path: 'favourite-orders',
        loadChildren: () => import('../favourite-orders/favourite-orders.module').then(m => m.FavouriteOrdersPageModule)
      },
      {
        path: 'payments-sucsses',
        loadChildren: () => import('../payments-sucsses/payments-sucsses.module').then(m => m.PaymentsSucssesPageModule)
      },
      {
        path: 'language-popover',
        loadChildren: () => import('../language-popover/language-popover.module').then(m => m.LanguagePopoverPageModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('../categories/categories.module').then(m => m.CategoriesPageModule)
      },
      {
        path: 'travel-mode',
        loadChildren: () => import('../travel-mode/travel-mode.module').then(m => m.TravelModePageModule)
      },
      {
        path: 'driving-mode',
        loadChildren: () => import('../driving-mode/driving-mode.module').then(m => m.DrivingModePageModule)
      },
      {
        path: 'order-details/:id',
        loadChildren: () => import('../order-details/order-details.module').then(m => m.OrderDetailsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }
