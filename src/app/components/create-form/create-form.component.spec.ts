/* tslint:disable:no-unused-variable */
import {
  async,
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';

import { CreateFormComponent } from './create-form.component';
import { ListService } from 'src/app/services/list.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

describe('CreateFormComponent', () => {
  let component: CreateFormComponent;
  let fixture: ComponentFixture<CreateFormComponent>;

  let listServiceSpy = jasmine.createSpy('ListService');

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFormComponent],
      imports: [HttpClientModule, ReactiveFormsModule],
      providers: [
        {
          provide: ListService,
          useValue: listServiceSpy,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should verify if form is invalid when empty', () => {
    expect(component.addForm.valid).toBeFalsy();
  });

  it('should verify all fields validity', () => {
    let firstName = component.addForm.controls['firstName'];
    let lastName = component.addForm.controls['lastName'];
    let birthDate = component.addForm.controls['birthDate'];
    let mobileNumber = component.addForm.controls['mobileNumber'];
    let email = component.addForm.controls['email'];
    let bankAccount = component.addForm.controls['bankAccount'];
    expect(firstName.valid).toBeFalsy();
    expect(lastName.valid).toBeFalsy();
    expect(birthDate.valid).toBeFalsy();
    expect(email.valid).toBeFalsy();
    expect(mobileNumber.valid).toBeFalsy();
    expect(bankAccount.valid).toBeFalsy();
  });
});
