import { TestBed } from '@angular/core/testing';

import { AttribuerjuryService } from './attribuerjury.service';

describe('AttribuerjuryService', () => {
  let service: AttribuerjuryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttribuerjuryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
