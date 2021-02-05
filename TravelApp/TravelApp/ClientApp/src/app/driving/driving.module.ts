import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';

import { DrivingPageRoutingModule } from './driving-routing.module';

import { DrivingPage } from './driving.page';

@NgModule({
  imports: [
    ChartsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    DrivingPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DrivingPage]
})
export class DrivingPageModule {}
