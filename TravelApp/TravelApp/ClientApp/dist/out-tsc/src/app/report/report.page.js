import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';
let ReportPage = class ReportPage {
    constructor(reportService, route, formBuilder, driverService, accountService, location, orderService, alertController, translate, popoverController) {
        this.reportService = reportService;
        this.route = route;
        this.formBuilder = formBuilder;
        this.driverService = driverService;
        this.accountService = accountService;
        this.location = location;
        this.orderService = orderService;
        this.alertController = alertController;
        this.translate = translate;
        this.popoverController = popoverController;
        this.submitted = false;
        this.loading = false;
        this.userId = this.accountService.userValue.id;
        this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            reporterId: [''],
            suspectedUserId: [''],
            typeId: ['']
        });
    }
    get f() { return this.form.controls; }
    reportType(event) {
        this.selectedReportType = event;
        if (this.selectedReportType == 1) {
            this.accountService.getById(this.userId)
                .subscribe(u => {
                this.isDriver = u.isDriver;
                if (u.isDriver) {
                    this.orderService.getLastCompletedOrder(this.userId)
                        .subscribe(x => {
                        this.lastOrder = x;
                        this.accountService.getById(x.applicationUserId)
                            .subscribe(user => {
                            this.userFirstName = user.firstName;
                            this.userLastName = user.lastName;
                            this.suspectedUserId = this.lastOrder.applicationUserId;
                            this.reporterId = this.userId;
                        });
                    });
                }
                else {
                    this.orderService.getLastCompletedOrder(this.userId)
                        .subscribe(x => {
                        this.lastOrder = x;
                        this.accountService.getById(x.acceptedBy)
                            .subscribe(user => {
                            this.userFirstName = user.firstName;
                            this.userLastName = user.lastName;
                            this.driverService.getDriverActiveCar(user.driverId)
                                .subscribe(car => {
                                this.carModel = car.model;
                                this.form.value.typeId = +this.form.value.typeId;
                                this.suspectedUserId = user.driverId;
                                this.reporterId = this.userId;
                            });
                        });
                    });
                }
            });
        }
    }
    onSubmit() {
        this.submitted = true;
        if (!this.form.valid) {
            console.log('Please provide all the required values!');
        }
        else {
            this.form.value.typeId = +this.form.value.typeId;
            if (this.form.value.typeId == 1) {
                this.form.value.suspectedUserId = this.suspectedUserId;
                this.form.value.reporterId = this.reporterId;
                this.reportService.createReport(this.form.value)
                    .subscribe(report => {
                    console.log("report created:");
                    console.log(report);
                    this.reportCompleted();
                    this.clearForm();
                });
            }
            else {
                this.form.value.reporterId = this.userId;
                this.reportService.createReport(this.form.value)
                    .subscribe(report => {
                    console.log("report created:");
                    console.log(report);
                    this.reportCompleted();
                    this.clearForm();
                });
            }
            console.log(this.form.value);
        }
    }
    openLanguagePopover(ev) {
        return __awaiter(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: LanguagePopoverPage,
                event: ev
            });
            yield popover.present();
        });
    }
    reportCompleted() {
        return __awaiter(this, void 0, void 0, function* () {
            const popup = yield this.alertController.create({
                header: 'Report',
                message: 'Your report is sent successfully',
                buttons: [
                    {
                        text: 'Confirm',
                        handler: data => {
                            if (this.isDriver == true) {
                                this.route.navigate(['menu/driving']);
                            }
                            else {
                                this.route.navigate(['menu/travelling']);
                            }
                        }
                    }
                ]
            });
            yield popup.present();
        });
    }
    clearForm() {
        this.form.reset({
            'title': '',
            'description': '',
            'typeId': '',
            'suspectedDriverId': '',
            'reporterId': '',
        });
    }
    goBack() {
        this.location.back();
    }
};
ReportPage = __decorate([
    Component({
        selector: 'app-report',
        templateUrl: './report.page.html',
        styleUrls: ['./report.page.scss'],
    })
], ReportPage);
export { ReportPage };
//# sourceMappingURL=report.page.js.map