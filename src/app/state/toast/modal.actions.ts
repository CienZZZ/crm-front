import { createActionType } from '../shared/utils';
import { Action } from '@ngrx/store';

export const MODAL_OPEN = createActionType('MODAL_OPEN');
export const MODAL_CLOSE = createActionType('MODAL_CLOSE');

export class ModalOpen implements Action {
  readonly type = MODAL_OPEN;
  constructor(public payload: {
    title: string,
    message: string}) {}
}

export class ModalClose implements Action {
  readonly type = MODAL_CLOSE;
}

export type ModalActions =
  | ModalOpen
  | ModalClose;
