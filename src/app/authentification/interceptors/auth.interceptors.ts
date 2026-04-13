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
    const token = authSer.getAuthToken();
    if (!token) {
      return next(req);
    }

    const finalRequest = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
    return next(finalRequest).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401 && router.url !== '/login') {
            authSer.logOut();
            router.navigate(['/login']);
          }
        }
        throw err;
      })
    );
  }
}
