import { TestBed } from '@angular/core/testing';

import { AttribuernoteService } from './attribuernote.service';

describe('AttribuernoteService', () => {
  let service: AttribuernoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttribuernoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
