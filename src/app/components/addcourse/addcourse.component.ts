import { Component } from '@angular/core';
import { Course } from '../../models/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent {

  msg='';
  course: Course;

    constructor() {
      this.course = {
        courseId: 0,
        courseTitle: '',
        courseDescription: '',
        courseDuration: '',
        courseResource: '',
        courseCategory: '',
        approved: false,
        createdBy: 0
      };
    }

    ngOnInit(): void {
      // Additional initialization logic can go here if needed
    }

    addCourse() {
      // Implement logic to add the course
      console.log('Adding course:', this.course);
    }
}
