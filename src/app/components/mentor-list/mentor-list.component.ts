import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee-service.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.css']
})
export class MentorListComponent implements OnInit {
  mentors: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.fetchEmployeesByRole('mentor').subscribe(data => {
      this.mentors = data;
    });
  }
}
