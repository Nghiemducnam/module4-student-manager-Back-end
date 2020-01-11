import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Student} from '../models/Student';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {StudentService} from '../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  // public students: Student[] = [];
  students: Observable<Student[]>;
  inputControl = new FormControl();


  constructor(private studentService: StudentService,
              private router: Router
  ) {
  }

  reloadData() {
    this.students = this.studentService.getStudent();
  }
  ngOnInit() {
    this.reloadData();
  }
}
