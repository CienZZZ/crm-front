import { RouterReducerState } from '@ngrx/router-store';
// import * as fromSpinner from "./shared/reducers/spinner";
import { RouterStateUrl } from './shared/utils';
import * as fromToast from './toast/toast.reducer';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  toast: fromToast.State;
  // spinner: fromSpinner.State;
}
