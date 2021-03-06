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

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

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
          // this.store.dispatch(new HttpError(error.error));
          // this.store.dispatch(new ModalOpen({title: 'Error', message: error.toString()}));
          return throwError(error);
        })
      );
  }
}
