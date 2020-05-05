import { NgModule, ErrorHandler } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { GlobalErrorHandler } from './global-error-handler';

@NgModule({
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptorService,
    //   multi: true
    // }
  ]
})
export class CoreModule {}
