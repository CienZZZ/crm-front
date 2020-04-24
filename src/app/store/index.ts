import {Action, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {InjectionToken} from '@angular/core';
// import * as fromAuth from '../auth/store/auth.reducer';
import * as fromCompanies from '../companies/store/company.reducer';
// import * as fromHome from '../home/store/home.reducer';
import * as fromContacts from '../contacts/store/contact.reducer';
// import * as fromActivities from '../activities/store/activity.reducer';

export interface State {
  error: any;
  // ui: fromUi.UiState;
  // more state here
  // auth: fromAuth.State;
  // auth: fromAuth.State;
  // companies: fromCompanies.State;
  // home: fromHome.State;
  // contacts: fromContacts.State;
  // activities: fromActivities.State;
}

export const reducers: ActionReducerMap<State> = {
  error: undefined
  // auth: fromAuth.reducer
  // auth: fromAuth.authReducer,
  // companies: fromCompanies.companyReducer,
  // home: fromHome.homeReducer,
  // contacts: fromContacts.contactReducer,
  // activities: fromActivities.activityReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

// export const selectAuthState = createFeatureSelector<fromAuth.State>('auth');
// export const selectIsLoggedIn = createSelector(
//   selectAuthState,
//   fromAuth.selectIsLoggedIn
// );

// AOT compatibility
// export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<State, Action>>(
//   'ROOT_REDUCERS_TOKEN',
//   {
//     factory: () => ({
//       ui: fromUi.reducer
//     })
//   }
// );

// /// selectors
// export const getUiState = createFeatureSelector<fromUi.UiState>('ui');

// export const getCurrentTitle = createSelector(getUiState, fromUi.getCurrentTitle);

export const getError = (state: State) => state ? state.error : null;
