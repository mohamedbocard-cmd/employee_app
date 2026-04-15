import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthentificationService} from '../../../service/authentification.service';
import {Router} from '@angular/router';
import {LoginData} from '../../../../models/user';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  private fb = inject(FormBuilder);
  private authServ = inject(AuthentificationService);
  private router = inject(Router);

  form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  message: null | string = null;

  onSubmit() {
    const { email, password } = this.form.value;
    const data = { email, password };
    this.authServ.login(data as LoginData).subscribe({  /* subscribe() sert à écouter l’Observable retourné par login()*/
      next: ({ token }) => {
        this.authServ.saveAuthToken(token);
       // → généralement on stocke le token dans :
          //localStorage
       /// ou sessionStorage
        this.router.navigate(['/employee']);
      },
      error: ({ error }) => {
        console.log(error.error);
        this.message = error.error;
      },
    });
  }

}
