import { TestBed } from '@angular/core/testing';

import { WetherserviceService } from './wetherservice.service';

describe('WetherserviceService', () => {
  let service: WetherserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WetherserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
