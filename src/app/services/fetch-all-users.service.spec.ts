import { TestBed, inject } from '@angular/core/testing';

import { FetchAllUsersService } from './fetch-all-users.service';

describe('FetchAllUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchAllUsersService]
    });
  });

  it('should be created', inject([FetchAllUsersService], (service: FetchAllUsersService) => {
    expect(service).toBeTruthy();
  }));
});
