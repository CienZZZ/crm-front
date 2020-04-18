import * as fromCompanies from './company.reducer';
import {Action, combineReducers, createFeatureSelector, createSelector} from '@ngrx/store';

export interface CompaniesState {
  companies: fromCompanies.State;
}

/** Provide reducers with AoT-compilation compliance */
export function reducers(state: CompaniesState | undefined, action: Action) {
  return combineReducers({
    companies: fromCompanies.reducer
  })(state, action)
}


/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */

export const getCompaniesState = createFeatureSelector<CompaniesState>('companies');

export const getCompaniesEntitiesState = createSelector(
  getCompaniesState,
  state => state.companies
);

export const {
  selectAll: getAllCompanies,
} = fromCompanies.companiesAdapter.getSelectors(getCompaniesEntitiesState);

export const getCompanyById = (id: number) => createSelector(
  getCompaniesEntitiesState,
  fromCompanies.getCompanyById(id)
);
