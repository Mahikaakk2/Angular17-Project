import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { NewJoinerDashboardComponent } from './components/new-joiner-dashboard/new-joiner-dashboard.component';
import { MentorDashboardComponent } from './components/mentor-dashboard/mentor-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddcourseComponent } from './components/addcourse/addcourse.component';
import { CourseliststudentComponent } from './components/courseliststudent/courseliststudent.component';
import { CourselistfalseComponent } from './components/courselistfalse/courselistfalse.component';
import { MentorListComponent } from './components/mentor-list/mentor-list.component';
import { NewJoinerListComponent } from './components/new-joiner-list/new-joiner-list.component';

const routes: Routes = [
  { path: '', component: WelcomepageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newJoinerDashboard', component: NewJoinerDashboardComponent },
  { path: 'mentorDashboard', component: MentorDashboardComponent },
  { path: 'adminDashboard', component: AdminDashboardComponent },
  { path: 'addcourse', component: AddcourseComponent },
  { path: 'courseliststudent', component: CourseliststudentComponent },
  { path: 'courselistfalse', component: CourselistfalseComponent },
  { path: 'mentorlist', component: MentorListComponent },
  { path: 'newjoinerlist', component: NewJoinerListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
