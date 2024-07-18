import { Employee } from '../../models/employee.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../services/registration.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
     employee= new Employee();
     msg='';
    constructor(private registrationService : RegistrationService, private _router : Router) { }
     registerEmployee()
       {
         this.registrationService.registerUserFromRemote(this.employee).subscribe(
           (data : any) => {
             console.log("Registration Success");
             //this._router.navigate(['/registrationsuccess']);
           },
           (error : any) => {
             console.log("Registration Failed");
             console.log(error.error);
             this.msg = "Employee with "+this.employee.email+" already exists !!!";
           }
         )
       }
ngOnInit(): void {
    // Initialization logic here

  }
}
