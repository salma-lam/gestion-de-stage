import { TestBed } from '@angular/core/testing';

import { LogincheffiliereService } from './logincheffiliere.service';

describe('LogincheffiliereService', () => {
  let service: LogincheffiliereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogincheffiliereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
