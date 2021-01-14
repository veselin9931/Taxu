import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravellingPageRoutingModule } from './travelling-routing.module';

import { TravellingPage } from './travelling.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravellingPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TravellingPage]
})
export class TravellingPageModule {}
