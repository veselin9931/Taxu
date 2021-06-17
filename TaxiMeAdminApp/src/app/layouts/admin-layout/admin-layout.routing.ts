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
import { HomeComponent } from 'app/pages/home/home/home.component';
import { FaqComponent } from 'app/pages/faq/faq/faq.component';
import { AboutComponent } from 'app/pages/about/about/about.component';
import { DownloadComponent } from 'app/pages/download/download.component';
import { SuccesfullPaymentComponent } from 'app/pages/succesfull-payment/succesfull-payment.component';
import { RegisterComponent } from '../../pages/register/register.component';

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
    { path: 'payments',        component: PaymentsComponent },
    { path: 'home',        component: HomeComponent },
    { path: 'faq',        component: FaqComponent },
    { path: 'about',        component: AboutComponent },
    { path: 'download',        component: DownloadComponent },
    { path: 'success',        component: SuccesfullPaymentComponent },
    { path: 'register', component: RegisterComponent }





];
