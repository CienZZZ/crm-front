import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { HttpErrorInterceptor } from './helpers/http-error.interceptor';

@NgModule({
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptorService,
    //   multi: true
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}
