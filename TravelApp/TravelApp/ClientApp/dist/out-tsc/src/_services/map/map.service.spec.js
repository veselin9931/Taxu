import { TestBed } from '@angular/core/testing';
import { MapService } from './map.service';
describe('MapService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MapService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=map.service.spec.js.map