import {Component, inject, input, OnChanges, output, SimpleChanges} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {Employee} from '../../../models/employee.model';

@Component({
  selector: 'app-employee-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss'
})
export class EmployeeFormComponent implements OnChanges{

  private fb = inject(FormBuilder);
  addEmployee = output<Employee>();
  editEmployee = output<Employee>();
  employee = input<Employee>();

  isEdit = false;

  form = this.fb.group({
    _id: '',
    name: ['', [Validators.required, Validators.maxLength(30)]],
    department: ['', Validators.required],
    level: ['', Validators.required],
  });

  ngOnChanges(changes: SimpleChanges): void {
    if ('employee' in changes) {
     // console.log(changes['employee'].currentValue) pour recuperer la valeur couraant.
      this.isEdit = true;
      const { _id, name, department, level } = this.employee() as Employee;
      const data = { _id, name, department, level };
      this.form.patchValue(data);
    }
  }
  onSubmit() {
    // console.log(this.form.value);
    const { _id, name, department, level } = this.form.value;
    const employee = { _id, name, department, level };
    if (this.isEdit) {
      this.editEmployee.emit(employee as Employee);
    } else {
      this.addEmployee.emit(employee as Employee);
    }
  }
}
