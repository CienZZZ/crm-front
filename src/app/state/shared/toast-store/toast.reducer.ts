import { ToastActions, TOAST_OPEN, TOAST_CLOSE } from './toast.actions';

export interface State {
  show: boolean;
}

const initialState: State = {
  show: false
};

export function reducer(state: State = initialState, action: ToastActions) {
  switch (action.type) {
    case TOAST_OPEN:
      return { ...state, show: true };
    case TOAST_CLOSE:
      return { ...state, show: false};
    default:
      return state;
  }
}
