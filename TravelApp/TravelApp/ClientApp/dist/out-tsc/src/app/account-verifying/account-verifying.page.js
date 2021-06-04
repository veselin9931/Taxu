import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AccountVerifyingPage = class AccountVerifyingPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    goBack() {
        this.route.navigate(['tabs/home-logged']);
    }
};
AccountVerifyingPage = __decorate([
    Component({
        selector: 'app-account-verifying',
        templateUrl: './account-verifying.page.html',
        styleUrls: ['./account-verifying.page.scss'],
    })
], AccountVerifyingPage);
export { AccountVerifyingPage };
//# sourceMappingURL=account-verifying.page.js.map