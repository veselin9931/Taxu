import { TestBed } from '@angular/core/testing';
import { ProfitService } from './profit.service';
describe('ProfitService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ProfitService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=profit.service.spec.js.map