import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountVerifyingPageRoutingModule } from './account-verifying-routing.module';

import { AccountVerifyingPage } from './account-verifying.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountVerifyingPageRoutingModule
  ],
  declarations: [AccountVerifyingPage]
})
export class AccountVerifyingPageModule {}
