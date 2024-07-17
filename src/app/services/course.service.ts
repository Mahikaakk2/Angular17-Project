// src/app/services/course.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:8090/api';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/fetchAllCourses`);
  }

  approveCourse(courseId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/approve?courseId=${courseId}`, {});
  }
}
