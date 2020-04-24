import { Action } from '@ngrx/store';

export enum AppActions {
  ERROR_EFFECT = '[Error] Error Effect'
}

export class ErrorEffect implements Action {
  readonly type = AppActions.ERROR_EFFECT;
  constructor(public payload: {error: string}) {}
}
