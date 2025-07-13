import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Employee {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}

interface ApiResponse {
  status: string;
  data: Employee[];
  message: string;
}
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = '';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<ApiResponse> {
    this.apiUrl = 'https://dummy.restapiexample.com/api/v1/employees';
    return this.http.get<ApiResponse>(this.apiUrl);
  }
  getEmployeesById(employeeId:any): Observable<ApiResponse>{
    this.apiUrl = `https://dummy.restapiexample.com/api/v1/employee/${employeeId}`;
    return this.http.get<ApiResponse>(this.apiUrl);
  }
}
