import {Component, inject} from '@angular/core';
import {EmployeeFormComponent} from '../../ui/employee-form/employee-form.component';
import {Employee} from '../../../models/employee.model';
import {Router} from '@angular/router';
import {EmployeelistComponent} from '../../ui/employeelist/employeelist.component';
import {EmployeeService} from '../../../../employee.service';

@Component({
  selector: 'app-add-employee-page',
  imports: [
    EmployeeFormComponent,
  ],
  templateUrl: './add-employee-page.component.html',
  styleUrl: './add-employee-page.component.scss'
})
export class AddEmployeePageComponent {
    employeeService= inject(EmployeeService);
    router = inject(Router);
    onAddEmployee(employee: Employee) {
      this.employeeService.addEmployee(employee)
      this.router.navigateByUrl('/employee');

    }


}
