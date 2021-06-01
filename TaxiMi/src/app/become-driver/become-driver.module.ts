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
import { HttpEventType } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
        FormsModule,
        FileUploadModule,
    IonicModule,
    BecomeDriverPageRoutingModule,
    ReactiveFormsModule
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
