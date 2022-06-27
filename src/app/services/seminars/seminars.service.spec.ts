import { TestBed } from '@angular/core/testing';

import { SeminarsService } from './seminars.service';

describe('SeminarsService', () => {
  let service: SeminarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeminarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
