import { TestBed, inject } from '@angular/core/testing';

import { ModulesApiService } from './modules-api.service';

describe('ModulesApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModulesApiService]
    });
  });

  it('should be created', inject([ModulesApiService], (service: ModulesApiService) => {
    expect(service).toBeTruthy();
  }));
});
