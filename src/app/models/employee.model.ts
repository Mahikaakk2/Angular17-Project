// src/app/models/employee.model.ts

export class Employee {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  mobileNumber: string;
  password: string;

  constructor(
      userId: number = 0,
      firstName: string = '',
      lastName: string = '',
      email: string = '',
      role: string = '',
      mobileNumber: string = '',
      password: string = ''
    ){
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.role = role;
    this.mobileNumber = mobileNumber;
    this.password = password;
  }
}
