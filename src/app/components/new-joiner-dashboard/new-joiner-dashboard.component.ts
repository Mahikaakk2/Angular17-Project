import { Component } from '@angular/core';

@Component({
  selector: 'app-new-joiner-dashboard',
  templateUrl: './new-joiner-dashboard.component.html',
  styleUrl: './new-joiner-dashboard.component.css'
})
export class NewJoinerDashboardComponent {
    loggedUser = '';
      currRole = '';
//       courses : Observable<any[]> | undefined;

      ngOnInit(): void
      {

      }
}
