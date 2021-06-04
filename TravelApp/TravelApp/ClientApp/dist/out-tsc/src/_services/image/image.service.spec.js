import { TestBed } from '@angular/core/testing';
import { ImageService } from './image.service';
describe('ImageService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ImageService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=image.service.spec.js.map