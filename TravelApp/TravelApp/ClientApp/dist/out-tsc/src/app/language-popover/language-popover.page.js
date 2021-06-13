import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LanguagePopoverPage = class LanguagePopoverPage {
    constructor(popoverController, translate, accountService) {
        this.popoverController = popoverController;
        this.translate = translate;
        this.accountService = accountService;
        this.selected = "";
        this.languages = [
            { text: 'English', value: 'en', img: '../../assets/english.png' },
            { text: 'Spanish', value: 'es', img: '../../assets/spain.png' }
        ];
    }
    ngOnInit() {
    }
    select(lng) {
        this.translate.use(lng);
        this.selected = lng;
        if (this.accountService.userValue) {
            this.accountService.userValue.choosenLanguage = lng;
            this.accountService.updateLanguage(this.accountService.userValue.id, lng)
                .subscribe(() => {
            });
        }
        this.popoverController.dismiss();
    }
};
LanguagePopoverPage = __decorate([
    Component({
        selector: 'app-language-popover',
        templateUrl: './language-popover.page.html',
        styleUrls: ['./language-popover.page.scss'],
    })
], LanguagePopoverPage);
export { LanguagePopoverPage };
//# sourceMappingURL=language-popover.page.js.map