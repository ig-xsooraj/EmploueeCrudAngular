import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmpployeeService {
  private baseUrl = 'http://localhost:8080/api/v1/employees';

  constructor(private hhtp: HttpClient) {}

  // this is a get method to get data from database
  getEmployeeList(): Observable<Employee[]> {
    return this.hhtp.get<Employee[]>(`${this.baseUrl}`);
  }

  // this is a post method to send data to database
  createEmployee(employee: Employee): Observable<object> {
    return this.hhtp.post(`${this.baseUrl}`, employee);
  }


  //this is to update the data returned from the updated form
  getEmployeeById(id: number): Observable<Employee> {
    return this.hhtp.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id:number,employee:Employee): Observable<Object>{
    return this.hhtp.put(`${this.baseUrl}/{id}`, employee);
  }
}
