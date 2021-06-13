import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as signalR from '@aspnet/signalr';
import { first } from 'rxjs/operators';
import { LanguagePopoverPage } from 'src/app/language-popover/language-popover.page';
import { environment } from 'src/environments/environment';
let RegisterPage = class RegisterPage {
    constructor(route, formBuilder, accountService, alertService, driverService, translate, popoverController) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.accountService = accountService;
        this.alertService = alertService;
        this.driverService = driverService;
        this.translate = translate;
        this.popoverController = popoverController;
        this.submitted = false;
        this.loading = false;
        this.err = '';
        this.translate.setDefaultLang('en');
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
            phone: ['', Validators.required],
            referral: ['']
        }, {
            validators: this.ConfirmedValidator('password', 'confirmPassword')
        });
        const connection = new signalR.HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Information)
            .withUrl(`${environment.signalRUrl}/orderHub`)
            .build();
        connection.start().then(function () {
            console.log('signalR Connected in register');
        }).catch(function (err) {
            return console.log(err.toString());
        });
        connection.on('BroadcastMessage', () => {
            this.onSubmit();
        });
    }
    get f() { return this.form.controls; }
    onSubmit() {
        this.submitted = true;
        if (!this.form.valid) {
            return;
        }
        this.loading = true;
        this.accountService.register(this.form.value)
            .pipe(first())
            .subscribe(data => {
            this.alertService.success('Successful registration', { keepAfterRouteChange: true });
            this.driverService.getDriverByReferral(this.form.value.referral)
                .subscribe(driver => {
                if (driver) {
                    this.driverService.lowerDriverCommission(driver.id)
                        .subscribe(x => {
                        console.log(x);
                    });
                }
                else {
                    console.log('The referral does not exists!');
                }
            });
            this.route.navigate(['menu/home']);
            console.log(data);
        }, error => {
            console.log(error.error);
            this.err = error.error;
            this.loading = false;
        });
    }
    signIn() {
        this.route.navigate(['menu/home']);
    }
    goBack() {
        this.route.navigate(['menu/home']);
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
    ConfirmedValidator(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
                return;
            }
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ confirmedValidator: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
};
RegisterPage = __decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.page.html',
        styleUrls: ['./register.page.scss'],
    })
], RegisterPage);
export { RegisterPage };
//# sourceMappingURL=register.page.js.map