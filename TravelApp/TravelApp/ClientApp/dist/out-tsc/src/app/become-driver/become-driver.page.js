import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import { MultiFileUploadComponent } from '../multi-file-upload/multi-file-upload.component';
let BecomeDriverPage = class BecomeDriverPage {
    constructor(route, accountService, location, imageService, driverService) {
        this.route = route;
        this.accountService = accountService;
        this.location = location;
        this.imageService = imageService;
        this.driverService = driverService;
        this.folderName = "driverFacePic";
        this.imgType = "personalImg";
        this.applicationUserId = this.accountService.userValue.id;
    }
    ngOnInit() {
        this.getDocs();
        if (this.getDocs.length >= 3) {
            this.checker = true;
        }
        this.checker = false;
    }
    getDocs() {
        this.imageService.getUserDocuments(this.applicationUserId)
            .subscribe(x => {
            console.log(x);
            this.pics = x;
        });
    }
    upload() {
        let files = this.fileField.getFiles();
        console.log(files);
        let formData = new FormData();
        files.forEach((file) => {
            formData.append('files[]', file.rawFile, file.name);
        });
        this.imageService.upload(formData, this.folderName, this.applicationUserId, this.imgType)
            .subscribe(event => {
            if (event.type === HttpEventType.UploadProgress)
                this.progress = Math.round(100 * event.loaded / event.total);
            else if (event.type === HttpEventType.Response) {
                this.message = 'Documents uploaded successfully.';
            }
            switch (event.type) {
                case HttpEventType.Sent:
                    console.log('Request has been made!');
                    break;
                case HttpEventType.ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                case HttpEventType.UploadProgress:
                    this.progress = Math.round(event.loaded / event.total * 100);
                    break;
                case HttpEventType.Response:
                    setTimeout(() => {
                        this.progress = 0;
                    }, 1500);
            }
        });
    }
    uploadLicense(files) {
        if (files.length === 0) {
            return;
        }
        let fileToUpload = files[0];
        const formData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        this.imageService.upload(formData, this.folderName, this.applicationUserId, this.imgType)
            .subscribe(event => {
            if (event.type === HttpEventType.UploadProgress)
                this.progress = Math.round(100 * event.loaded / event.total);
            else if (event.type === HttpEventType.Response) {
                this.message = 'Documents uploaded successfully.';
            }
            switch (event.type) {
                case HttpEventType.Sent:
                    console.log('Request has been made!');
                    break;
                case HttpEventType.ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                case HttpEventType.UploadProgress:
                    this.progress = Math.round(event.loaded / event.total * 100);
                    break;
                case HttpEventType.Response:
                    setTimeout(() => {
                        this.progress = 0;
                    }, 1500);
            }
        });
    }
    goBack() {
        this.location.back();
    }
    onSubmit() {
        this.imageService.getUserDocuments(this.applicationUserId)
            .subscribe(x => {
            if (x[1].path) {
                let data = { ApplicationUserId: this.applicationUserId };
                this.driverService.createDriver(data)
                    .subscribe(() => {
                    this.route.navigate(['menu/car-register']);
                });
            }
            else if (x.id == null) {
                this.message = 'Please upload at least 2 pictures!';
            }
            else {
                this.message = 'Please upload your documents!';
            }
        });
    }
};
__decorate([
    ViewChild(MultiFileUploadComponent)
], BecomeDriverPage.prototype, "fileField", void 0);
BecomeDriverPage = __decorate([
    Component({
        selector: 'app-become-driver',
        templateUrl: './become-driver.page.html',
        styleUrls: ['./become-driver.page.scss'],
    })
], BecomeDriverPage);
export { BecomeDriverPage };
//# sourceMappingURL=become-driver.page.js.map