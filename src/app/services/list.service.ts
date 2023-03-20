import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/list';

  getAllList() {
    return this.http.get(this.url);
  }

  getFormData(data: Object) {
    return this.http.get(this.url, data);
  }

  saveFormData(data: Object) {
    return this.http.post(this.url, data);
  }

  deleteFormData(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  getFormById(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  updateFormData(id: number, data: Object) {
    return this.http.put(`${this.url}/${id}`, data);
  }

  getCostumerByEmail(email: string) {
    return this.http.get(`${this.url}?email=${email}`);
  }
}
