import { routerReducer } from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';
import { AppState } from './app.interfaces';
// import * as fromSpinner from "./shared/reducers/spinner";
import * as fromToast from './toast/toast.reducer';

export const appReducer: ActionReducerMap<AppState> = {
  router: routerReducer,
  toast: fromToast.reducer
  // spinner: fromSpinner.reducer
};

export function logger(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return function(state: AppState, action: any): AppState {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const appMetaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger, storeFreeze]
  : [];