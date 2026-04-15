import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthentificationService} from '../service/authentification.service';

export const nonAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthentificationService);
  const router = inject(Router);

  const isConnected = authService.isConnected();
  if (!isConnected) {   /* si l'utilisateur n'est pass connecter il lui redirige vers la page par defaut '/' */
    return true;
  }
  router.navigate(['/']);
  return false;
};
