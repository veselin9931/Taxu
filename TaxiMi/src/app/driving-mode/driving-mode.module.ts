import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrivingModePageRoutingModule } from './driving-mode-routing.module';

import { DrivingModePage } from './driving-mode.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguagePopoverPageModule } from '../language-popover/language-popover.module';
import { CallNumber } from '@ionic-native/call-number/ngx';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrivingModePageRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    LanguagePopoverPageModule,
  ],
  providers: [
    CallNumber,
  ],
  declarations: [DrivingModePage]
})
export class DrivingModePageModule {}
