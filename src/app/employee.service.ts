import { Injectable } from '@angular/core';
import {Employee} from './models/employee.model';
import {findIndex} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

 private employees:  Employee [] = [
    {
      "_id": "6ffb6",
      "name": "Clarte",
      "department": "HR",
      "level": "M"
    },
    {
      "_id": "8fj456",
      "name": "Cheikhna",
      "department": "Marketing",
      "level": "J"
    },
    {
      "_id": "3ba15",
      "name": "Cheikhna",
      "department": "Marketing",
      "level": "J"
    },
    {
      "_id": "32fvg4",
      "name": "Demba",
      "department": "IT",
      "level": "M"
    },
    {
      "_id": "38mkjd",
      "name": "Demba ga",
      "department": "IT",
      "level": "S"
    }


  ];


  constructor() {

  }

  getEmployee(id:String){
    return this.employees.find(employee =>
      employee._id == id) || null
    ;
  }

  deleteEmployee(id:String){
    this.employees = this.employees.filter(
      (employee) => employee._id !==id
    )

  }
  getListEmployee(id:String){
   return  this.employees;
  }

  addEmployee(employee: Employee) {
    const _id = crypto.randomUUID();
    this.employees = [...this.employees, {...employee, _id}];

  }

  editEmployee(employee: Employee) {
    const { _id } = employee;
    const index = this.employees.findIndex((employee) => employee._id === _id);

    if (index !== -1) {
      const part1 = this.employees.slice(0, index);
      const part2 = this.employees.slice(index + 1);
      const employees = part1.concat(employee).concat(part2);
      this.employees = employees;
    }
  }
}
