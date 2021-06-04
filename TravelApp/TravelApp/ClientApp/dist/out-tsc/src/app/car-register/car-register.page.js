import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { HttpEventType } from '@angular/common/http';
let CarRegisterPage = class CarRegisterPage {
    constructor(route, formBuilder, driverService, accountService, location, imageService) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.driverService = driverService;
        this.accountService = accountService;
        this.location = location;
        this.imageService = imageService;
        this.submitted = false;
        this.loading = false;
        this.folderName = "driverFacePic";
        this.imgType = "carImg";
        this.userId = this.accountService.userValue.id;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            model: ['', Validators.required],
            registrationNumber: ['', Validators.required],
            color: ['', Validators.required],
            capacity: ['', Validators.required],
            driverId: [''],
            type: [''],
        });
    }
    get f() { return this.form.controls; }
    onSubmit() {
        this.submitted = true;
        if (!this.form.valid) {
            return;
        }
        else {
            this.accountService.getById(this.userId)
                .subscribe(x => {
                this.form.value.driverId = x.driverId;
                this.form.value.type = +this.form.value.type;
                this.driverService.createCar(this.form.value)
                    .subscribe(data => {
                    this.clearForm();
                    this.driverService.getDriverCars(x.driverId)
                        .subscribe(d => {
                        if (d.length != 0) {
                            this.route.navigateByUrl('menu/driver-profile');
                        }
                        else {
                            this.imageService.getUserCarPictures(this.userId)
                                .subscribe(x => {
                                if (x[2].path) {
                                    this.route.navigateByUrl('menu/verifying');
                                }
                            });
                        }
                    });
                });
            });
        }
    }
    upload(files) {
        if (files.length === 0) {
            return;
        }
        let fileToUpload = files[0];
        const formData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        this.imageService.upload(formData, this.folderName, this.userId, this.imgType)
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
    clearForm() {
        this.form.reset({
            'model': '',
            'tehnicalReview': '',
            'registrationNumber': '',
            'color': '',
            'capacity': '',
        });
    }
};
CarRegisterPage = __decorate([
    Component({
        selector: 'app-car-register',
        templateUrl: './car-register.page.html',
        styleUrls: ['./car-register.page.scss'],
    })
], CarRegisterPage);
export { CarRegisterPage };
//# sourceMappingURL=car-register.page.js.map