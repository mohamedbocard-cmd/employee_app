import {Component, Inject, inject} from '@angular/core';
import {EmployeelistComponent} from '../../ui/employeelist/employeelist.component';
import {EmployeeComponent} from '../../ui/employee/employee.component';
import {Employee} from '../../../models/employee.model';
import {Router, RouterLink} from '@angular/router';
import {EmployeeService} from '../../../../employee.service';

@Component({
  selector: 'app-employee-list-page',
  imports: [EmployeelistComponent, EmployeeComponent, RouterLink],
  templateUrl: './employee-list-page.component.html',
  styleUrl: './employee-list-page.component.scss'
})
export class EmployeeListPageComponent {
  employees: Employee [] = [];


  employee: Employee = {
    _id: '665454212874',
    name: 'Developpeur junior',
    department: 'IT',
    level: 'J'

  }
  currentEmployee: null | Employee = null;

  employeeService = inject(EmployeeService);
  router = inject(Router);


  constructor() {
    // @ts-ignore
    this.employees = (this.employeeService.getListEmployee());

  }

  showDetails(employeeId: String) {
    this.currentEmployee = this.employeeService.getEmployee(employeeId);
  }

  onEdit(employeeId: String) {
    this.router.navigate(['employees/edit', employeeId]);

  }

  onDelete(employeeId: String) {
    if (confirm("Êtes-vous sûr de supprimer ?")) {
      // logique de suppression
      console.log("Supprimé !");

      this.currentEmployee = null;
      this.employeeService.deleteEmployee(employeeId);
      this.employees = this.employeeService.getListEmployee(employeeId);
    } else {
      console.log("Annulé");

      // console.log(this.employees);

    }
  }

}
