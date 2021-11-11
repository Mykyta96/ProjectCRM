import { TestBed } from '@angular/core/testing';

import { FatureService } from './fature.service';

describe('FatureService', () => {
  let service: FatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
