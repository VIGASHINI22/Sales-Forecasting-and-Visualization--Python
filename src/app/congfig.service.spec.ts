import { TestBed } from '@angular/core/testing';

import { CongfigService } from './congfig.service';

describe('CongfigService', () => {
  let service: CongfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CongfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
