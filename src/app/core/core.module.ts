import { NgModule, ErrorHandler } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { GlobalErrorHandler } from './global-error-handler';
import { ModalContentComponent } from './services/modal/modal-content.component';

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
  ],
  declarations: [
    ModalContentComponent
  ],
  entryComponents: [ModalContentComponent]
})
export class CoreModule {}
