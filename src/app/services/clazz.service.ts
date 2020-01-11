import { Injectable } from '@angular/core';
import {Clazz} from '../models/Clazz';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClazzService {
  private readonly API_URL = 'http://localhost:8080/api/class/';

  constructor(private http: HttpClient) { }
  getClass(): Observable<Clazz[]> {
    return this.http.get<Clazz[]>(this.API_URL);
  }
  // getCustomerById(id: number): Observable<IClazz> {
  //   return this.http.get<IClazz>(`${this.API_URL}/${id}`);
  // }
  createClass(clazz: Clazz): Observable<Clazz> {
    return this.http.post<Clazz>(this.API_URL, clazz);
  }
  // deleteCustomer(id: number): Observable<any> {
  //   return this.http.delete(`${this.API_URL}/${id}`);
  // }
  // updateCustomer(iCustomer: IClazz): Observable<IClazz> {
  //   return this.http.put<IClazz>(`${this.API_URL}/${iCustomer.id}`, iCustomer);
}
