// src/app/services/course.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Query } from '../models/query.model';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  private apiUrl = 'http://localhost:8070/api/fetchAll';

  constructor(private http: HttpClient) {}

  getQueries(): Observable<Query[]> {
    return this.http.get<Query[]>(this.apiUrl);
  }
}
