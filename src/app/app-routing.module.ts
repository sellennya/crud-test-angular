import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { ListFormComponent } from './components/list-form/list-form.component';

const routes: Routes = [
  {
    path: '',
    component: ListFormComponent,
  },
  {
    path: 'create',
    component: CreateFormComponent,
  },
  {
    path: 'edit/:id',
    component: EditFormComponent,
  },
  {
    path: 'list',
    component: ListFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
