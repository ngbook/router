import { TestBed, async, inject } from '@angular/core/testing';

import { TrackStayTimeGuard } from './track-stay-time.guard';

describe('TrackStayTimeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrackStayTimeGuard]
    });
  });

  it('should ...', inject([TrackStayTimeGuard], (guard: TrackStayTimeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
