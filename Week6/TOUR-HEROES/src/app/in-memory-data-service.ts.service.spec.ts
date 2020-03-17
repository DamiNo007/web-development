import { TestBed } from '@angular/core/testing';

import { InMemoryDataService.TsService } from './in-memory-data-service.ts.service';

describe('InMemoryDataService.TsService', () => {
  let service: InMemoryDataService.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryDataService.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
