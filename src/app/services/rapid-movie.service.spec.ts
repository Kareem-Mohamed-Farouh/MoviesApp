import { TestBed } from '@angular/core/testing';

import { RapidMovieService } from './rapid-movie.service';

describe('RapidMovieService', () => {
  let service: RapidMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RapidMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
