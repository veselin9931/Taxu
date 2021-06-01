import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountVerifyingPage } from './account-verifying.page';

const routes: Routes = [
  {
    path: '',
    component: AccountVerifyingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountVerifyingPageRoutingModule {}
