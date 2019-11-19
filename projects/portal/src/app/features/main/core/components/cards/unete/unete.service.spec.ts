import { TestBed } from '@angular/core/testing';

import { UneteService } from './unete.service';

describe('UneteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UneteService = TestBed.get(UneteService);
    expect(service).toBeTruthy();
  });
});
