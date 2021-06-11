import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BecomeDriverPageRoutingModule } from './become-driver-routing.module';

import { BecomeDriverPage } from './become-driver.page';
import { FileUploadModule } from 'ng2-file-upload';
import { MultiFileUploadComponent } from '../multi-file-upload/multi-file-upload.component';
import { AccountService } from '../../_services';
import { ImageService } from '../../_services/image/image.service';
import { DriverService } from '../../_services/driver/driver.service';
import { HttpClient, HttpEventType } from '@angular/common/http';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguagePopoverPageModule } from '../language-popover/language-popover.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FileUploadModule,
    IonicModule,
    BecomeDriverPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    LanguagePopoverPageModule
  ],
  declarations: [BecomeDriverPage, MultiFileUploadComponent]
})
export class BecomeDriverPageModule {
  folderName = "driverFacePic";
  imgPath: string;
  imgType = "personalImg";

  public progress: number;
  public message: string;

  applicationUserId = this.accountService.userValue.id;

  @ViewChild(MultiFileUploadComponent) fileField: MultiFileUploadComponent;

  constructor(
    private accountService: AccountService,
    private imageService: ImageService,
    private driverService: DriverService) {

  }


}
