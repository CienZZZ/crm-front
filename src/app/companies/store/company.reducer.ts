import { Company } from '../model/company.model';
import {EntityState, createEntityAdapter} from '@ngrx/entity';
import {createReducer, on} from '@ngrx/store';
import {
  createSuccess,
  loadAllSuccess,
  loadSuccess, removeSuccess,
  updateSuccess
} from './company.actions';

// This adapter will allow is to manipulate contacts (mostly CRUD operations)
export const companiesAdapter = createEntityAdapter<Company>({
  selectId: (company: Company) => company.id,
  sortComparer: false
});

// -----------------------------------------
// The shape of EntityState
// ------------------------------------------
// interface EntityState<Contact> {
//   ids: string[] | number[];
//   entities: { [id: string]: Contact };
// }
// -----------------------------------------
// -> ids arrays allow us to sort data easily
// -> entities map allows us to access the data quickly without iterating/filtering though an array of objects

export interface State extends EntityState<Company> {
  // additional props here
}

export const INIT_STATE: State = companiesAdapter.getInitialState({
  // additional props default values here
});

export const reducer = createReducer<State>(
  INIT_STATE,
  on(loadAllSuccess, (state, {companies}) =>
    companiesAdapter.setAll(companies, state)
  ),
  on(loadSuccess, (state, {company}) =>
    companiesAdapter.upsertOne(company, state)
  ),
  on(createSuccess, (state, {company}) =>
    companiesAdapter.addOne(company, state)
  ),
  on(updateSuccess, (state, {company}) =>
    companiesAdapter.updateOne({id: company.id, changes: company}, state)
  ),
  on(removeSuccess, (state, {id}) =>
    companiesAdapter.removeOne(id, state)
  )
);

export const getCompanyById = (id: number) => (state: State) => state.entities[id];
