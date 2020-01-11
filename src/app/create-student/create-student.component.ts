import { Component, OnInit } from '@angular/core';
import {Student} from '../models/Student';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Clazz} from '../models/Clazz';
import {StudentService} from '../services/student.service';
import {ClazzService} from '../services/clazz.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  // createForm: FormGroup;
  // albumForm = new FormGroup({
  //   tagId: new FormControl('')
  // });
  // students: Observable<Student[]>;
  classes: Clazz[] = [];

  students: Student[] = [];

  createForm = new FormGroup({
    studentName: new FormControl(''),
    age: new FormControl(''),
    image: new FormControl(''),
    select: new FormControl('')
  });

  constructor(private studentService: StudentService,
              private router: Router, private classService: ClazzService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.classService.getClass().subscribe(next => {
      this.classes = next;
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
  }

  create() {
    const {studentName, age, image, select} = this.createForm.value;
    if (studentName === '' || age === '' || image === '' || select  === '') {
      return alert('Fill Data Fields !');
    }
    const IStudent: Student = {
      studentName,
      age,
      image,
      clazz: {
        classId: select
      }
    };
    this.studentService.createStudent(IStudent).subscribe(next => {
      this.studentService;
      console.log(IStudent);
      alert('Tạo mới học sinh thành công!')
      this.createForm.reset({
      });
    });
  }
}

