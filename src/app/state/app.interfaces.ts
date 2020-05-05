import { RouterReducerState } from '@ngrx/router-store';
// import * as fromSpinner from "./shared/reducers/spinner";
import { RouterStateUrl } from './shared/utils';
import * as fromToast from '../shared/toast/store/toast.reducer';
// import * as fromModal from '../shared/modal/store/modal.reducer';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  toast: fromToast.State;
  // modal: fromModal.State;
  // spinner: fromSpinner.State;
}
