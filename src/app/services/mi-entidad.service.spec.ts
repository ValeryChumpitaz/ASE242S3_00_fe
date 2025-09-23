import { TestBed } from '@angular/core/testing';

import { MiEntidadService } from './mi-entidad.service';

describe('MiEntidadService', () => {
  let service: MiEntidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiEntidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
