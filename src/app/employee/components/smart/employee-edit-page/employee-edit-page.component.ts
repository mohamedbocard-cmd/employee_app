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

//   inject(EmployeeService)
// ➡️ Tu injectes ton service métier

  empId = input.required<String>();
  employee = computed(() => {
    const _id = this.empId();
  return  this.employeeService.getEmployee(_id)

//     input.required<string>()
// ➡️ C’est un Input Signal obligatoire
//     Le composant parent doit fournir empId
//     Tu y accèdes comme une fonction

//     computed(() => { ... })
// ➡️ C’est une valeur dérivée (reactive)
//     Elle se recalcul automatiquement quand empId change

  });
  onEditEmployee(employee: Employee) {
    this.employeeService.editEmployee(employee)
    this.router.navigate(['/employee']);




  }
}
