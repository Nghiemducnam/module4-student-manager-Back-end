import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassCreateComponent } from './class-create/class-create.component';
import { ClassListComponent } from './class-list/class-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ClazzService} from './services/clazz.service';
import {StudentService} from './services/student.service';

@NgModule({
  declarations: [
    AppComponent,
    ClassCreateComponent,
    ClassListComponent,
    CreateStudentComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ClazzService,
    StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
