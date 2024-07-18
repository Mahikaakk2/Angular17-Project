import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { NewJoinerDashboardComponent } from './components/new-joiner-dashboard/new-joiner-dashboard.component';
import { MentorDashboardComponent } from './components/mentor-dashboard/mentor-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { RegistrationService } from './services/registration.service';
import { HttpClientModule } from '@angular/common/http';
import { AddcourseComponent } from './components/addcourse/addcourse.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CourseliststudentComponent } from './components/courseliststudent/courseliststudent.component';
import { CourseService } from './services/course.service';
import { CourselistfalseComponent } from './components/courselistfalse/courselistfalse.component';
import { StudentQueriesComponent } from './components/student-queries/student-queries.component';
import { MentorListComponent } from './components/mentor-list/mentor-list.component';
import { NewJoinerListComponent } from './components/new-joiner-list/new-joiner-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    RegistrationComponent,
    LoginComponent,
    NewJoinerDashboardComponent,
    MentorDashboardComponent,
    AdminDashboardComponent,
    AddcourseComponent,
    HeaderComponent,
    FooterComponent,
    CourseliststudentComponent,
    CourselistfalseComponent,
    StudentQueriesComponent
    CourselistfalseComponent,
    MentorListComponent,
    NewJoinerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    RegistrationService,
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
