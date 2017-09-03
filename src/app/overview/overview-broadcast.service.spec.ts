import { TestBed, inject } from '@angular/core/testing';

import { OverviewBroadcastService } from './overview-broadcast.service';

describe('OverviewBroadcastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OverviewBroadcastService]
    });
  });

  it('should be created', inject([OverviewBroadcastService], (service: OverviewBroadcastService) => {
    expect(service).toBeTruthy();
  }));
});
