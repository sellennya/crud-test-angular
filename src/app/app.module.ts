import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ListFormComponent } from './components/list-form/list-form.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { UniqueEmailDirective } from './directives/unique-email.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListFormComponent,
    CreateFormComponent,
    EditFormComponent,
    UniqueEmailDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
