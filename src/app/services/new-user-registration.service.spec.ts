import { TestBed, inject } from '@angular/core/testing';

import { NewUserRegistrationService } from './new-user-registration.service';

describe('NewUserRegistrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewUserRegistrationService]
    });
  });

  it('should be created', inject([NewUserRegistrationService], (service: NewUserRegistrationService) => {
    expect(service).toBeTruthy();
  }));
  it('should return one when user is inserted',()=>{
  });
});
