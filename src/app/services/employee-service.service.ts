import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model'; // Adjust the path as necessary

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:9000/api';

  constructor(private http: HttpClient) { }

  fetchEmployeesByRole(role: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/fetchByRole?role=${role}`);
  }
}
