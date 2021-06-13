import { __awaiter, __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import * as signalR from '@aspnet/signalr';
import { first } from 'rxjs/operators';
import { LanguagePopoverPage } from 'src/app/language-popover/language-popover.page';
import { environment } from 'src/environments/environment';
let LoginPage = class LoginPage {
    constructor(route, formBuilder, alertService, accountService, http, translate, popoverController) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.accountService = accountService;
        this.http = http;
        this.translate = translate;
        this.popoverController = popoverController;
        this.submitted = false;
        this.err = '';
        this.loading = false;
        this.isLoggedIn = localStorage.getItem("user");
        this.translate.setDefaultLang('en');
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        if (this.isLoggedIn) {
            this.route.navigate(['menu/travelling']);
        }
        const connection = new signalR.HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Information)
            .withUrl(`${environment.signalRUrl}/orderHub`)
            .build();
        connection.start().then(function () {
            console.log('signalR Connected in login');
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
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        this.accountService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(data => {
            this.clearForm();
            console.log(data);
            this.accountService.updateDriving(this.accountService.userValue.id, false)
                .subscribe(data => {
                console.log('success');
            });
            this.route.navigate(['menu/travelling']);
        }, error => {
            console.log(error.error.message);
            this.err = error.error.message;
            this.loading = false;
        });
    }
    signUp() {
        this.route.navigate(['menu/account/register']);
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
    clearForm() {
        this.form.reset({
            'username': '',
            'password': ''
        });
    }
};
LoginPage = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    })
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map