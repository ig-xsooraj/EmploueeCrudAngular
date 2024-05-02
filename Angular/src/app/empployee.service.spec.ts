import { TestBed } from '@angular/core/testing';

import { EmpployeeService } from './empployee.service';

describe('EmpployeeService', () => {
  let service: EmpployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
