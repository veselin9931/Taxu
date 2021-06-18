import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { IonicModule } from '@ionic/angular';

import { DrivingPageRoutingModule } from './driving-routing.module';

import { DrivingPage } from './driving.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguagePopoverPageModule } from '../language-popover/language-popover.module';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    ChartsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    DrivingPageRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    LanguagePopoverPageModule,
    ReactiveFormsModule
  ],
  declarations: [DrivingPage]
})
export class DrivingPageModule {}
