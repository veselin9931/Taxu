import { TestBed } from '@angular/core/testing';
import { LanguageServiceService } from './language.service';
describe('LanguageServiceService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LanguageServiceService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=language.service.spec.js.map