import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { ReportComponent } from '../../pages/reports/report.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { UserDetailsComponent } from 'app/pages/user-details/user-details.component';
import { CarDetailsComponent } from 'app/pages/car-details/car-details.component';
import { LoginComponent } from 'app/login/login.component';
import { PaymentsComponent } from 'app/pages/payments/payments.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: `user-details/:id`,component: UserDetailsComponent },
    { path: `car-details/:id`,component: CarDetailsComponent },
    { path: 'table',          component: TableComponent },
    { path: 'reports',     component: ReportComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'login',        component: LoginComponent },
    { path: 'payments',        component: PaymentsComponent }

];
