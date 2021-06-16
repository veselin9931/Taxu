import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { IonicModule } from '@ionic/angular';

import { ReservationsPageRoutingModule } from './reservations-routing.module';

import { ReservationsPage } from './reservations.page';

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguagePopoverPageModule } from '../language-popover/language-popover.module';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
        ReservationsPageRoutingModule,
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader, 
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        LanguagePopoverPageModule
    ],
    providers: [
        CallNumber,
    ],
  declarations: [ReservationsPage]
})
export class ReservationsPageModule {}
