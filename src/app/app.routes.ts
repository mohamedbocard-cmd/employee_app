import { Routes } from '@angular/router';
import {AddEmployeePageComponent} from './employee/components/smart/add-employee-page/add-employee-page.component';
import {EmployeeEditPageComponent} from './employee/components/smart/employee-edit-page/employee-edit-page.component';
import {EmployeeListPageComponent} from './employee/components/smart/employee-list-page/employee-list-page.component';
import {RegistrePageComponent} from './authentification/components/smart/registre-page/registre-page.component';
import {LoginPageComponent} from './authentification/components/smart/login-page/login-page.component';
import {authGuard} from './authentification/guards/auth.guard';
import {nonAuthGuard} from './authentification/guards/non-auth.guard';

export const routes: Routes = [
  {path: 'register' , canActivate:[nonAuthGuard], component:  RegistrePageComponent},
  {path: 'login' , canActivate:[nonAuthGuard], component:  LoginPageComponent},

  {path: 'employee',
    canActivate:[authGuard],
    children: [

      {path: 'employee',
        component: EmployeeListPageComponent,
      },

      {path: 'new', component: AddEmployeePageComponent},
      {path: 'edit/:empId', component: EmployeeEditPageComponent},
    ]
  },

  {path: '', redirectTo: 'employee' , pathMatch: 'full' },




];
