import { TestBed } from '@angular/core/testing';
import { OrderService } from './order.service';
describe('OrderService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(OrderService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=order.service.spec.js.map