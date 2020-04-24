import { Company } from '../model/company.model';
import {EntityState, createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {createReducer, on} from '@ngrx/store';
import { CompanyActionTypes, CompanyActions } from './company.actions';

export interface State extends EntityState<Company> {
  // additional props here
}
// This adapter will allow is to manipulate contacts (mostly CRUD operations)
export const adapter: EntityAdapter<Company> = createEntityAdapter<Company>({
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

export const INIT_STATE: State = adapter.getInitialState({
  // additional props default values here
});

export function reducer(
  state = INIT_STATE,
  action: CompanyActions
) {
  switch (action.type) {
    case CompanyActionTypes.LOAD_ALL_SUCCESS:
      return adapter.setAll(action.payload.companies, state);
    case CompanyActionTypes.LOAD_SUCCESS:
      return adapter.upsertOne(action.payload.company, state);
    case CompanyActionTypes.CREATE_SUCCESS:
      return adapter.addOne(action.payload.company, state);
    case CompanyActionTypes.UPDATE_SUCCESS:
      return adapter.updateOne({id: action.payload.company.id , changes: action.payload.company}, state);
    case CompanyActionTypes.REMOVE_SUCCESS:
      return adapter.removeOne(action.payload.id, state);
    default: {
      return state;
    }
  }
}

export const getCompanyById = (id: number) => (state: State) => state.entities[id];

// export const reducer = createReducer<State>(
//   INIT_STATE,
//   on(loadAllSuccess, (state, {companies}) =>
//     companiesAdapter.setAll(companies, state)
//   ),
//   on(loadSuccess, (state, {company}) =>
//     companiesAdapter.upsertOne(company, state)
//   ),
//   on(createSuccess, (state, {company}) =>
//     companiesAdapter.addOne(company, state)
//   ),
//   on(updateSuccess, (state, {company}) =>
//     companiesAdapter.updateOne({id: company.id, changes: company}, state)
//   ),
//   on(removeSuccess, (state, {id}) =>
//     companiesAdapter.removeOne(id, state)
//   )
// );

// export const {
//   selectIds: getBookIds,
//   selectEntities: getBookEntities,
//   selectAll: getAllBooks,
//   selectTotal: getTotalBooks,
// } = adapter.getSelectors();

