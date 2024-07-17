import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-courselistfalse',
  templateUrl: './courselistfalse.component.html',
  styleUrl: './courselistfalse.component.css'
})
export class CourselistfalseComponent {
    courses: Course[] = [];

      constructor(private courseService: CourseService) {}

      ngOnInit(): void {
          this.courseService.getCourses().subscribe((data: Course[]) => {
            console.log('Fetched courses:', data); // Debugging line to check the fetched data
            this.courses = data.filter(course => !course.approved);
            console.log('Filtered courses:', this.courses); // Debugging line to check the filtered data
          });
        }

      approvenow(course: any) {
          // Logic to handle enrollment
          console.log(`Approved: ${course.courseTitle}`);
          // Implement your enrollment logic here, such as navigating to a new page or displaying a message.
        }
}
