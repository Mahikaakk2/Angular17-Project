import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee-service.service'; // Adjust the path as necessary
import { Employee } from '../../models/employee.model'; // Adjust the path as necessary

@Component({
  selector: 'app-new-joiner-list',
  templateUrl: './new-joiner-list.component.html',
  styleUrls: ['./new-joiner-list.component.css']
})
export class NewJoinerListComponent implements OnInit {
  newJoiners: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.fetchEmployeesByRole('newJoiner').subscribe(data => {
      this.newJoiners = data;
    });
  }
}
