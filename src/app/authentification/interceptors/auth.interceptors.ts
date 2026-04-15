import {HttpErrorResponse, HttpHandlerFn, HttpRequest} from '@angular/common/http';
import {inject} from '@angular/core';
import {AuthentificationService} from '../service/authentification.service';
import {Router} from '@angular/router';
import {catchError} from 'rxjs';

export function authInterceptors(req: HttpRequest<any> , next:
                      HttpHandlerFn){

  {
    const authSer = inject(AuthentificationService);
    const router = inject(Router);
    const token = authSer.getAuthToken(); //👉 signifie simplement que tu appelles une méthode getAuthToken() de ton service authSer pour récupérer le token (souvent un JWT).

    if (!token) {
      return next(req);
    }

    const finalRequest = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    return next(finalRequest).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {   /* sert à vérifier que l’erreur reçue est bien une erreur HTTP provenant de Angular.*/
          if (err.status === 401 && router.url !== '/login') {   /*“Est-ce que l’utilisateur n’est pas déjà sur la page /login*/
            authSer.logOut();
            router.navigate(['/login']);
          }
        }
        throw err;
      })
    );
  }
}
