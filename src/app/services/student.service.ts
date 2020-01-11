import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student} from '../models/Student';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private readonly API_URL = 'http://localhost:8080/api/student/';

  constructor(private http: HttpClient) { }
  // getStudent(): Observable<Student[]> {
  //   return this.http.get<Student[]>(`${this.API_URL}`);
  // }
  // getCustomerById(id: number): Observable<IClazz> {
  //   return this.http.get<IClazz>(`${this.API_URL}/${id}`);
  // }
  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.API_URL, student);
  }
  getStudent(): Observable<any> {
    return this.http.get(`${this.API_URL}`);
  }

}
