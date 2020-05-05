import { ModalActions, MODAL_OPEN, MODAL_CLOSE } from './modal.actions';

export interface State {
  show: boolean;
}

const initialState: State = {
  show: false
};

export function reducer(state: State = initialState, action: ModalActions) {
  switch (action.type) {
    case MODAL_OPEN:
      return { ...state, show: true };
    case MODAL_CLOSE:
      return { ...state, show: false};
    default:
      return state;
  }
}
