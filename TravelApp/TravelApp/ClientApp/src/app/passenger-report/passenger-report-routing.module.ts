import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassengerReportPage } from './passenger-report.page';

const routes: Routes = [
  {
    path: '',
    component: PassengerReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassengerReportPageRoutingModule {}
