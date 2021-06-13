import { TestBed } from '@angular/core/testing';
import { TripService } from './trip.service';
describe('TripService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TripService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=trip.service.spec.js.map