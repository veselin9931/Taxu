import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanguagePopoverPage } from './language-popover.page';

const routes: Routes = [
  {
    path: '',
    component: LanguagePopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanguagePopoverPageRoutingModule {}
