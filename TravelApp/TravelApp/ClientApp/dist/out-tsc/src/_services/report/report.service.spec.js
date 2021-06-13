import { TestBed } from '@angular/core/testing';
import { ReportService } from './report.service';
describe('ReportService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ReportService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=report.service.spec.js.map