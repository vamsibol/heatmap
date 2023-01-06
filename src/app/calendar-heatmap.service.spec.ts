import { TestBed } from '@angular/core/testing';

import { CalendarHeatmapService } from './calendar-heatmap.service';

describe('CalendarHeatmapService', () => {
  let service: CalendarHeatmapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarHeatmapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
