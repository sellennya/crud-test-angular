import { Component, DoCheck, OnInit } from '@angular/core';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css'],
})
export class ListFormComponent implements OnInit, DoCheck {
  constructor(private list: ListService) {}
  formData: any = [];

  ngOnInit(): void {
    this.list.getAllList().subscribe((res) => (this.formData = res));
  }

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  deleteRow(formID: any) {
    this.list.deleteFormData(formID).subscribe((res) => {
      this.ngOnInit();
    });
  }

  setLocalStorage() {
    if (this.formData) {
      localStorage.setItem('customerListData', JSON.stringify(this.formData));
    }
  }
}
