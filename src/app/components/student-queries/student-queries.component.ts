import { Component, OnInit } from '@angular/core';
import { QueryService } from '../../services/query.service';
import { Query } from '../../models/query.model';


@Component({
  selector: 'app-student-queries',
  templateUrl: './student-queries.component.html',
  styleUrl: './student-queries.component.css'
})
export class StudentQueriesComponent implements OnInit{
  queries: Query[] = [];

    constructor(private queryService: QueryService) {}

    ngOnInit(): void {
        this.queryService.getQueries().subscribe((data: Query[]) => {
          console.log('Fetched queries:', data); // Debugging line to check the fetched data
          this.queries = data.filter(query => query.status);
          console.log('Filtered queries:', this.queries); // Debugging line to check the filtered data
        });
      }
}
