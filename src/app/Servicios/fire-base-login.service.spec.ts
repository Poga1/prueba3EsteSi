import { TestBed } from '@angular/core/testing';

import { FireBaseLoginService } from './fire-base-login.service';

describe('FireBaseLoginService', () => {
  let service: FireBaseLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireBaseLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
