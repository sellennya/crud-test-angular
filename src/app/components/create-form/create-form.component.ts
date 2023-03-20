import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css'],
})
export class CreateFormComponent {
  constructor(private formBuilder: FormBuilder, private list: ListService) {}

  addForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthDate: [null, Validators.required],
    mobileNumber: [
      null,
      [Validators.required, Validators.pattern('^[9][0-9]{8}$')],
    ],
    email: ['', [Validators.required, Validators.email]],

    bankAccount: [
      null,
      [Validators.required, Validators.pattern('^[0-9]{12}$')],
    ],
  });

  alertMessage: boolean = false;

  get validateForm() {
    return this.addForm.controls;
  }

  submitData() {
    this.list.saveFormData(this.addForm.value).subscribe((res) => res);
    this.alertMessage = true;
    this.addForm.reset({});
  }

  closeAlert() {
    this.alertMessage = false;
  }
}
