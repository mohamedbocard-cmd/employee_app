import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {User} from '../../../../models/user';
import {AuthentificationService} from '../../../service/authentification.service';

@Component({
  selector: 'app-registre-page',
  imports: [ReactiveFormsModule],
  templateUrl: './registre-page.component.html',
  styleUrl: './registre-page.component.scss'
})
export class RegistrePageComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthentificationService);
  message: null | string = null;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('')]],
    firstName: ['', [Validators.required, Validators.maxLength(30)]],
    lastName: ['', [Validators.required, Validators.maxLength(30)]],
  });

  onSubmit() {
    const { email, password, firstName, lastName } = this.form.value;
    const user = { email, password, firstName, lastName };
    this.authService.register(user as User).subscribe(
      (registeredUser) => {
        const { firstName, lastName } = registeredUser;
        this.form.reset();
        this.message = `${firstName} ${lastName} registered!!`;
      },
      (err) => {
        this.message = 'An error happened';
      }
    );
  }

}
