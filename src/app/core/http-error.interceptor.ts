import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
// import * as fromRoot from '../state/';
// import { ErrorEffect } from '../store/app.actions';
import { AppState } from '../state/app.interfaces';
import { HttpError } from '../state/error/error.actions';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(
    private store: Store<AppState>
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        retry(1),
        // catchError((error: HttpErrorResponse) => {
        //   let errorMessage = '';
        //   if (error.error instanceof ErrorEvent) {
        //     // client-side error
        //     errorMessage = `Error: ${error.error.message}`;
        //   } else {
        //     // server-side error
        //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}
        //                     \n ${error.error.error.message}`;
        //   }
        //   window.alert(errorMessage);
        //   return throwError(errorMessage);
        // })
        catchError((error: HttpErrorResponse) => {
          this.store.dispatch(new HttpError(error.error));
          return throwError(error);
        })
      );
  }
}
