import { TestBed } from '@angular/core/testing';

import { ValidestageService } from './validestage.service';

describe('ValidestageService', () => {
  let service: ValidestageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidestageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
