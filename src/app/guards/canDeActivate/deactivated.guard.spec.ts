import { TestBed, async, inject } from '@angular/core/testing';

import { DeactivatedGuard } from './deactivated.guard';

describe('DeactivatedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeactivatedGuard]
    });
  });

  it('should ...', inject([DeactivatedGuard], (guard: DeactivatedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
