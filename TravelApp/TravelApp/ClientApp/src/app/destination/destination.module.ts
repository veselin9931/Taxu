import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DestinationPageRoutingModule } from './destination-routing.module';

import { DestinationPage } from './destination.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DestinationPageRoutingModule
  ],
  declarations: [DestinationPage]
})
export class DestinationPageModule {}
