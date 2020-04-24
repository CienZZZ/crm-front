import * as fromCompanies from './company.reducer';
import * as fromRoot from '../../reducers';
import {Action, combineReducers, createFeatureSelector, createSelector, ActionReducerMap} from '@ngrx/store';

export interface CompaniesState {
  companies: fromCompanies.State;
}

export interface State extends fromRoot.State {
  companies: CompaniesState;
}

export const reducers: ActionReducerMap<CompaniesState> = {
  companies: fromCompanies.reducer
};
// /** Provide reducers with AoT-compilation compliance */
// export function reducers(state: CompaniesState | undefined, action: Action) {
//   return combineReducers({
//     companies: fromCompanies.reducer
//   })(state, action)
// }

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */

export const getCompaniesState = createFeatureSelector<CompaniesState>('companies');

export const getCompaniesEntitiesState = createSelector(
  getCompaniesState,
  state => state.companies
);

// export const getBookEntities = createSelector(getBookEntitiesState, fromBooks.getBookEntities)
// export const getBookIds = createSelector(getBookEntitiesState, fromBooks.getBookIds);

// export const getAllBooks = createSelector(
//   getBookEntities,
//   getBookIds,
//   (entities, ids: string[]) => {
//     return ids.map(id => entities[id]);
//   }
// );

export const {
  selectAll: getAllCompanies,
} = fromCompanies.adapter.getSelectors(getCompaniesEntitiesState);

export const getCompanyById = (id: number) => createSelector(
  getCompaniesEntitiesState,
  fromCompanies.getCompanyById(id)
);
