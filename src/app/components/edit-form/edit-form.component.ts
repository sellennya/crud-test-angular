import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ListService } from 'src/app/services/list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
})
export class EditFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private list: ListService,
    private router: ActivatedRoute
  ) {}
  editForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthDate: [null, Validators.required],
    mobileNumber: [null, Validators.required],
    email: ['', Validators.required],
    bankAccount: [null, Validators.required],
  });

  alertMessage: boolean = false;

  ngOnInit() {
    this.list
      .getFormById(this.router.snapshot.params['id'])
      .subscribe((res: any) => {
        this.editForm = this.formBuilder.group({
          firstName: [res.firstName, Validators.required],
          lastName: [res.lastName, Validators.required],
          birthDate: [res.birthDate, Validators.required],
          mobileNumber: [
            res.mobileNumber,
            [Validators.required, Validators.pattern('[0-9]{9}')],
          ],
          email: [res.email, Validators.required],
          bankAccount: [res.bankAccount, Validators.required],
        });
      });
  }

  get validateForm() {
    return this.editForm.controls;
  }

  updateData() {
    this.list
      .updateFormData(this.router.snapshot.params['id'], this.editForm.value)
      .subscribe((res) => res);
    this.alertMessage = true;
    this.editForm.reset();
  }

  closeAlert() {
    this.alertMessage = false;
  }
}
