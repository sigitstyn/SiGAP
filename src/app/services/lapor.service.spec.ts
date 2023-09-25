import { TestBed } from '@angular/core/testing';

import { LaporService } from './lapor.service';

describe('LaporService', () => {
  let service: LaporService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaporService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
