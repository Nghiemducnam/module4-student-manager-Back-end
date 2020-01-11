import { Component, OnInit } from '@angular/core';
import {Clazz} from '../models/Clazz';
import {Router} from '@angular/router';
import {ClazzService} from '../services/clazz.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {

  classList: Clazz[] = [];
  constructor(private clazzService: ClazzService,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.clazzService.getClass().subscribe(next => {
      this.classList = next;
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
  }

}

