/* tslint:disable:no-unused-variable */

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';

import { ListService } from './list.service';

describe('Service: List', () => {
  let service: ListService;
  let http: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListService],
      imports: [HttpClientModule],
    });
    {
      service = new ListService(http);
    }
  });

  it('should create', inject([ListService], (service: ListService) => {
    expect(service).toBeTruthy();
  }));
});
