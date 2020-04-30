import { createActionType } from '../shared/utils';
import { Action } from '@ngrx/store';

export const TOAST_OPEN = createActionType('TOAST_OPEN');
export const TOAST_CLOSE = createActionType('TOAST_CLOSE');

export class ToastOpen implements Action {
  readonly type = TOAST_OPEN;
  constructor(public payload: {
    message: string,
    options?: {}
  }) {}
}

export class ToastClose implements Action {
  readonly type = TOAST_CLOSE;
}

export type ToastActions =
  | ToastOpen
  | ToastClose;
