/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListFormComponent } from './list-form.component';
import { ListService } from 'src/app/services/list.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('ListFormComponent', () => {
  let component: ListFormComponent;
  let fixture: ComponentFixture<ListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListFormComponent],
      imports: [HttpClientModule],
      providers: [ListService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
