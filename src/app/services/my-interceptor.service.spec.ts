import { TestBed, inject } from '@angular/core/testing';

import { MyInterceptorService } from './my-interceptor.service';

describe('MyInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyInterceptorService]
    });
  });

  it('should be created', inject([MyInterceptorService], (service: MyInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
