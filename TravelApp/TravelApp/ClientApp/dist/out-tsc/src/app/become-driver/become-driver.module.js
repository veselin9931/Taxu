import { __decorate } from "tslib";
import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BecomeDriverPageRoutingModule } from './become-driver-routing.module';
import { BecomeDriverPage } from './become-driver.page';
import { FileUploadModule } from 'ng2-file-upload';
import { MultiFileUploadComponent } from '../multi-file-upload/multi-file-upload.component';
let BecomeDriverPageModule = class BecomeDriverPageModule {
    constructor(accountService, imageService, driverService) {
        this.accountService = accountService;
        this.imageService = imageService;
        this.driverService = driverService;
        this.folderName = "driverFacePic";
        this.imgType = "personalImg";
        this.applicationUserId = this.accountService.userValue.id;
    }
};
__decorate([
    ViewChild(MultiFileUploadComponent)
], BecomeDriverPageModule.prototype, "fileField", void 0);
BecomeDriverPageModule = __decorate([
    NgModule({
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
], BecomeDriverPageModule);
export { BecomeDriverPageModule };
//# sourceMappingURL=become-driver.module.js.map