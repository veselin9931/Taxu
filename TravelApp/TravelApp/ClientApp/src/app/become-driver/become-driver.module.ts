import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BecomeDriverPageRoutingModule } from './become-driver-routing.module';

import { BecomeDriverPage } from './become-driver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BecomeDriverPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BecomeDriverPage]
})
export class BecomeDriverPageModule {}
