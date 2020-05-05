import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ToastService } from 'src/app/shared/toast/toast.service';
import { Observable } from 'rxjs';
import { TOAST_CLOSE, ToastOpen, TOAST_OPEN, ToastClose } from './toast.actions';
import { tap, map, delay } from 'rxjs/operators';

@Injectable()
export class ToastEffects {

  @Effect({ dispatch: false})
  closeToast: Observable<any> = this.actions.pipe(
    ofType(TOAST_CLOSE),
    tap(toast => this.toastService.remove(toast))
  );

  @Effect()
  showToast: Observable<any> = this.actions.pipe(
    ofType<ToastOpen>(TOAST_OPEN),
    map((action: ToastOpen) => action.payload),
    tap(payload => this.toastService.show(payload.message, payload.options)),
    delay(5000),
    map(() => new ToastClose())
  );

  constructor(
    private actions: Actions,
    private toastService: ToastService
  ) {}
}
