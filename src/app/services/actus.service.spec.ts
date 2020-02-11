import { TestBed } from '@angular/core/testing';

import { ActusService } from './actus.service';

describe('ActusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActusService = TestBed.get(ActusService);
    expect(service).toBeTruthy();
  });
});
