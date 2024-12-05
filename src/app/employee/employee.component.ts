import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employeeId: number = 101;
  employeeName: string = "rahul";
  employeeAge: number = 30;

  title = "Employee details - Data Binding using various directives "

  isManager: boolean = true;

  //Array
  skills: string[] = ['JavaScript', 'Angular', 'React'];

  //Enum
  Position:PositionType = PositionType.SeniorDeveloper;

  //Object
  address: { street: string, city: string, postalcode: number } = {
    street: '123 Main st',
    city: 'NY',
    postalcode: 12345
  }

  //any {can be any type}
  extraInfo: any = 'Additioal employee info';

  //event binding - handling method
  message: string = '';

  //two day data binding
  employeePosition: string = 'software Engineer';

  //event binding method
  hello(): void {
    this.message = "hello from event binding in Angular by - " + this.employeeName;
  }
  clear(): void {
    this.message = '';
  }

  toggleManagerStatus(): void {
    this.isManager = !this.isManager;
  }
  //property binding - one way binding
  username: string = 'James Gsoling';
  info: string = "Property Binding - One Way";

  updateUserName(){
    this.username='John Doe';

  }

  convertToDate(){
    const date=new Date();
    return date.toLocaleDateString();
  }
  

  add():number{
    return 10+200000;
  }
}

//Enum for Position type
  enum PositionType{
    JuniorDeveloper,
    SeniorDeveloper,
    TeamLead



  }



