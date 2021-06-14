import { TestBed } from '@angular/core/testing';

import { SuborderService } from './suborder.service';

describe('SuborderService', () => {
  let service: SuborderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuborderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
