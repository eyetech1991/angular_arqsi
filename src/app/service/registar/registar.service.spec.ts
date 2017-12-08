import { TestBed, inject } from '@angular/core/testing';

import { RegistarService } from './registar.service';

describe('RegistarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistarService]
    });
  });

  it('should be created', inject([RegistarService], (service: RegistarService) => {
    expect(service).toBeTruthy();
  }));
});
