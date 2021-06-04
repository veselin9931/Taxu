import { TestBed } from '@angular/core/testing';
import { ChatService } from './chat.service';
describe('ChatService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ChatService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=chat.service.spec.js.map