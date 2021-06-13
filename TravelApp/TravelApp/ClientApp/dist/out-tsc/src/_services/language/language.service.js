import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
const LNG_KEY = 'SELECTED LANGUAGE';
let LanguageServiceService = class LanguageServiceService {
    constructor(translate, storage) {
        this.translate = translate;
        this.storage = storage;
        this.selected = "";
    }
    setInitialAppLanguage() {
        let language = this.translate.getBrowserLang();
        this.translate.setDefaultLang(language);
        this.storage.get(LNG_KEY).then(val => {
            if (val) {
                this.setLanguage(val);
                this.selected = val;
            }
        });
    }
    getLanguages() {
        return [
            { text: 'English', value: 'en', img: '' },
            { text: 'Spanish', value: 'es', img: '' }
        ];
    }
    setLanguage(lng) {
        this.translate.use('lng');
        this.selected = lng;
        this.storage.set(LNG_KEY, lng);
    }
};
LanguageServiceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LanguageServiceService);
export { LanguageServiceService };
//# sourceMappingURL=language.service.js.map