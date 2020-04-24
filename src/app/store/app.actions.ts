import { Action } from '@ngrx/store';

export const ERROR_EFFECT = '[Error] Error Effect';

export class ErrorEffect implements Action {
  readonly type = ERROR_EFFECT;
}
