import { TestBed } from '@angular/core/testing';

import { FirebasesRutinasService } from './firebases-rutinas.service';

describe('FirebasesRutinasService', () => {
  let service: FirebasesRutinasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebasesRutinasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
