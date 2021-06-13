import { TestBed } from '@angular/core/testing';
import { SignalRService } from './signal-r.service';
describe('SignalRService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SignalRService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=signal-r.service.spec.js.map