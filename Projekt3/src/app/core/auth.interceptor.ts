import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    req = req.clone({
      headers: req.headers.set('Authorized', 'cos tam smiga'),
    });

    return next.handle(req).pipe(
      catchError((error) => {
        if (error.status === 401) {
          console.error('Błąd autoryzacji', error);
        } else if (error.status === 403) {
          console.error('Brak dostępu', error);
        } else {
          console.error('Nieznany błąd', error);
        }

        return throwError(() => error);
      })
    );
  }
}