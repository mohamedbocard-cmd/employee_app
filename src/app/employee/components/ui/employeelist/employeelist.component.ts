import {Component, input, output} from '@angular/core';
import {Employee} from '../../../models/employee.model';

@Component({
  selector: 'app-employeelist',
  imports: [],
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.scss'
})
export class EmployeelistComponent {

  employees = input.required<Employee[]>();

  edit = output<string>();
  delete = output<string>();
  details = output<string>();

  onEdit(employeeId: string) {
    this.edit.emit(employeeId);
  }

  onDelete(employeeId: string) {
    this.delete.emit(employeeId);
  }

  onDetails(employeeId: string) {
    this.details.emit(employeeId);

  }
}
