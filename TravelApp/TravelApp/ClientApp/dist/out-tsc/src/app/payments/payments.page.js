import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PaymentsPage = class PaymentsPage {
    constructor(accountService, walletService) {
        this.accountService = accountService;
        this.walletService = walletService;
        this.user = this.accountService.userValue;
    }
    ngOnInit() {
        this.getWalletAmount();
    }
    getWalletAmount() {
        this.walletService.getMyWallet(this.user.id)
            .subscribe(x => {
            if (x.ammount) {
                this.walletAmount = x.ammount;
            }
            else {
                this.walletAmount = 0;
            }
        });
    }
};
PaymentsPage = __decorate([
    Component({
        selector: 'app-payments',
        templateUrl: './payments.page.html',
        styleUrls: ['./payments.page.scss'],
    })
], PaymentsPage);
export { PaymentsPage };
//# sourceMappingURL=payments.page.js.map