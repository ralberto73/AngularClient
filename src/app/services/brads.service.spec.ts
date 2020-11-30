import { TestBed } from '@angular/core/testing';

import { BradsService } from './brads.service';

describe('BradsService', () => {
  let service: BradsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BradsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
