import { TestBed } from '@angular/core/testing';

import { PocFrontLibService } from './poc-front-lib.service';

describe('PocFrontLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PocFrontLibService = TestBed.get(PocFrontLibService);
    expect(service).toBeTruthy();
  });
});
