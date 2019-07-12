import { TestBed } from '@angular/core/testing';

import { AiFaceService } from './ai-face.service';

describe('AiFaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AiFaceService = TestBed.get(AiFaceService);
    expect(service).toBeTruthy();
  });
});
