import { Routes } from '@angular/router';
import {AddEmployeePageComponent} from './employee/components/smart/add-employee-page/add-employee-page.component';
import {EmployeeEditPageComponent} from './employee/components/smart/employee-edit-page/employee-edit-page.component';
import {EmployeeListPageComponent} from './employee/components/smart/employee-list-page/employee-list-page.component';
import {RegistrePageComponent} from './authentification/components/smart/registre-page/registre-page.component';
import {LoginPageComponent} from './authentification/components/smart/login-page/login-page.component';

export const routes: Routes = [
  {path: 'register' , component:  RegistrePageComponent},
  {path: 'login' , component:  LoginPageComponent},
  {path: 'employee', component: EmployeeListPageComponent},
  {path: "", redirectTo: "employee" , pathMatch: "full" },
  {path: 'employee/new', component: AddEmployeePageComponent},
  {path: 'employees/edit/:empId', component: EmployeeEditPageComponent},



];
