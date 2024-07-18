import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';

const NAV_URL = "http://localhost:8072/lms/employee/create";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  employee = new Employee();

  constructor(private _http : HttpClient) { }

public registerUserFromRemote(employee : Employee):Observable<any>
{
    return this._http.post<any>(`${NAV_URL}`,employee,
   {
      headers: new HttpHeaders({
           'Content-Type': 'application/json'})
           });
}
}



