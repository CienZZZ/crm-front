import { Company } from '../model/company.model';
import {EntityState, createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {
  CompanyActions,
  LOAD_ALL_COMPANY_SUCCESS,
  LOAD_COMPANY_SUCCESS,
  CREATE_COMPANY_SUCCESS,
  UPDATE_COMPANY_SUCCESS,
  REMOVE_COMPANY_SUCCESS,
  SELECT_COMPANY,
  CREATE_COMPANY_DIALOG_OPEN,
  CREATE_COMPANY_DIALOG_CLOSE} from './company.actions';

export interface State extends EntityState<Company> {
  // additional props here
  selectedCompanyId: number;
  createDialogShow: boolean;
}
// This adapter will allow is to manipulate contacts (mostly CRUD operations)
// export const adapter: EntityAdapter<Company> = createEntityAdapter<Company>({
//   selectId: (company: Company) => company.id,
//   sortComparer: false
// });
export const adapter: EntityAdapter<Company> = createEntityAdapter();

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

export const initialState: State = adapter.getInitialState({
  // additional props default values here
  selectedCompanyId: null,
  createDialogShow: false
});

export function reducer(
  state: State = initialState,
  action: CompanyActions
) {
  switch (action.type) {
    case LOAD_ALL_COMPANY_SUCCESS:
      return adapter.setAll(action.payload, state);
    case LOAD_COMPANY_SUCCESS:
      return adapter.upsertOne(action.payload, state);
    case CREATE_COMPANY_SUCCESS:
      return adapter.addOne(action.payload, state);
    case UPDATE_COMPANY_SUCCESS:
      return adapter.updateOne({id: action.payload.id , changes: action.payload}, state);
    case REMOVE_COMPANY_SUCCESS:
      return adapter.removeOne(action.payload.id, state);
    case SELECT_COMPANY:
      return { ...state, selectedCompanyId: action.payload.id};
    case CREATE_COMPANY_DIALOG_OPEN:
      return { ...state, createDialogShow: false};
    case CREATE_COMPANY_DIALOG_CLOSE:
      return { ...state, createDialogShow: true};
    default: {
      return state;
    }
  }
}

export const getSelectedCompanyId = (state: State) => state.selectedCompanyId;

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

