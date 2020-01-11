import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateStudentComponent} from './create-student/create-student.component';
import {ClassCreateComponent} from './class-create/class-create.component';
import {ClassListComponent} from './class-list/class-list.component';
import {StudentListComponent} from './student-list/student-list.component';


const routes: Routes = [
  {
    path: '',
    component: StudentListComponent
  },
  {
    path: 'class', component: ClassListComponent
  },
  {
    path: 'create',
    component: ClassCreateComponent
  },
  {
    path: 'generate',
    component: CreateStudentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
