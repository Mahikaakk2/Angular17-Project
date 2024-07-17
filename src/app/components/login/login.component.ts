import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  msg='';
  selectedUserType: string = 'user'; // Default to user
  credentials: any = {};

  constructor(private router: Router) {}

  selectUserType(type: string) {
    this.selectedUserType = type;
  }

  login() {
    // Add your login logic here. For now, we'll just navigate to the corresponding dashboard.
    console.log('User logged in', this.credentials);
    if (this.selectedUserType === 'newjoiner') {
      this.router.navigate(['/newJoinerDashboard']); // Replace with your actual user dashboard route
    } else if (this.selectedUserType === 'mentor') {
      this.router.navigate(['/mentorDashboard']); // Replace with your actual professor dashboard route
    } else if (this.selectedUserType === 'admin') {
      this.router.navigate(['/adminDashboard']); // Replace with your actual admin dashboard route
    }
  }
}
