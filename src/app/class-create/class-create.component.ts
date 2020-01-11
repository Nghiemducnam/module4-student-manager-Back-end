import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClazzService} from '../services/clazz.service';

@Component({
  selector: 'app-class-create',
  templateUrl: './class-create.component.html',
  styleUrls: ['./class-create.component.css']
})
export class ClassCreateComponent implements OnInit {

  private createForm: FormGroup;

  constructor(private fb: FormBuilder, private classService: ClazzService) { }

  ngOnInit() {
    this.createForm = this.fb.group({
      className: ['', [Validators.required]]
    });
  }
  addClass() {
    console.log('aaa')
    const {value} = this.createForm;
    this.classService.createClass(value).subscribe(next => {
      this.classService;
      alert('Tạo mới lớp học thành công!')
      this.createForm.reset({
        className: ['']
      });
    });
  }

}
