// src/app/components/courseliststudent/courseliststudent.component.ts
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-courseliststudent',
  templateUrl: './courseliststudent.component.html',
  styleUrls: ['./courseliststudent.component.css']
})
export class CourseliststudentComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
      this.courseService.getCourses().subscribe((data: Course[]) => {
        console.log('Fetched courses:', data); // Debugging line to check the fetched data
        this.courses = data.filter(course => course.approved);
        console.log('Filtered courses:', this.courses); // Debugging line to check the filtered data
      });
    }

  enroll(course: any) {
      // Logic to handle enrollment
      console.log(`Enrolling in course: ${course.courseTitle}`);
      // Implement your enrollment logic here, such as navigating to a new page or displaying a message.
    }
}
