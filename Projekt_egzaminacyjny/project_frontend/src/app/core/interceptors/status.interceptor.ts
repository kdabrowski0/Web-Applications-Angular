import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class StatusInterceptor implements HttpInterceptor {
  public intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          console.error('Błąd autoryzacji', error);
        } else if (error.status === 403) {
          console.error('Brak dostępu', error);
        } else if (error.status === 404) {
          console.error('Nie znaleziono', error);
        } else if (error.status === 500) {
          console.error('Błąd serwera', error);
        } else {
          console.error('Nieznany błąd', error);
        }
        
        return throwError(() => error);
      }),
    );
  }
}
