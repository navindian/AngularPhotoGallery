import { TestBed } from '@angular/core/testing';

import { AlbumServiceService } from './album-service.service';

describe('AlbumServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlbumServiceService = TestBed.get(AlbumServiceService);
    expect(service).toBeTruthy();
  });
});
