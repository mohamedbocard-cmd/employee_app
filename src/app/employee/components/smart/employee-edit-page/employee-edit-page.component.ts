import {Component, computed, inject, input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Employee} from '../../../models/employee.model';
import {EmployeeFormComponent} from '../../ui/employee-form/employee-form.component';
import {EmployeeService} from '../../../../employee.service';

@Component({
  selector: 'app-employee-edit-page',
  imports: [
    EmployeeFormComponent
  ],
  templateUrl: './employee-edit-page.component.html',
  styleUrl: './employee-edit-page.component.scss'
})
export class EmployeeEditPageComponent {
  employeeService = inject(EmployeeService)
  route = inject(ActivatedRoute)
  router = inject(Router)

  empId = input.required<String>();
  employee = computed(() => {
    const _id = this.empId();
  return  this.employeeService.getEmployee(_id)

  });
  constructor() {

  }
  onEditEmployee(employee: Employee) {
    this.employeeService.editEmployee(employee)
    this.router.navigate(['/employee']);


  }
}
