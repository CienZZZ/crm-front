import { Action } from '@ngrx/store';
import { Company } from '../model/company.model';
import { createActionType } from '../../state/shared/utils';

export const LOAD_ALL_COMPANY = createActionType('LOAD_ALL_COMPANY');
export const LOAD_ALL_COMPANY_SUCCESS = createActionType('LOAD_ALL_COMPANY_SUCCESS');
export const LOAD_COMPANY = createActionType('LOAD_COMPANY');
export const LOAD_COMPANY_SUCCESS = createActionType('LOAD_COMPANY_SUCCESS');
export const CREATE_COMPANY = createActionType('CREATE_COMPANY');
export const CREATE_COMPANY_SUCCESS = createActionType('CREATE_COMPANY_SUCCESS');
export const CREATE_COMPANY_DIALOG_OPEN = createActionType('CREATE_COMPANY_DIALOG_OPEN');
export const CREATE_COMPANY_DIALOG_CLOSE = createActionType('CREATE_COMPANY_DIALOG_CLOSE');
export const UPDATE_COMPANY = createActionType('UPDATE_COMPANY');
export const UPDATE_COMPANY_SUCCESS = createActionType('UPDATE_COMPANY_SUCCESS');
export const REMOVE_COMPANY = createActionType('REMOVE_COMPANY');
export const REMOVE_COMPANY_SUCCESS = createActionType('REMOVE_COMPANY_SUCCESS');
export const SELECT_COMPANY = createActionType('SELECT_COMPANY');

export class LoadAllCompany implements Action {
  readonly type = LOAD_ALL_COMPANY;
}

export class LoadAllCompanySuccess implements Action {
  readonly type = LOAD_ALL_COMPANY_SUCCESS;
  constructor(public payload: Company[]) {}
}

export class LoadCompany implements Action {
  readonly type = LOAD_COMPANY;
  constructor(public payload: {id: number}) {}
}

export class LoadCompanySuccess implements Action {
  readonly type = LOAD_COMPANY_SUCCESS;
  constructor(public payload: Company) {}
}

export class CreateCompany implements Action {
  readonly type = CREATE_COMPANY;
  constructor(public payload: Company) {}
}

export class CreateCompanySuccess implements Action {
  readonly type = CREATE_COMPANY_SUCCESS;
  constructor(public payload: Company) {}
}

export class CreateCompanyDialogOpen implements Action {
  readonly type = CREATE_COMPANY_DIALOG_OPEN;
}

export class CreateCompanyDialogClose implements Action {
  readonly type = CREATE_COMPANY_DIALOG_CLOSE;
}

export class UpdateCompany implements Action {
  readonly type = UPDATE_COMPANY;
  constructor(public payload: Partial<Company>) {}
}

export class UpdateCompanySuccess implements Action {
  readonly type = UPDATE_COMPANY_SUCCESS;
  constructor(public payload: Partial<Company>) {}
}

export class RemoveCompany implements Action {
  readonly type = REMOVE_COMPANY;
  constructor(public payload: Company) {}
}

export class RemoveCompanySuccess implements Action {
  readonly type = REMOVE_COMPANY_SUCCESS;
  constructor(public payload: Company) {}
}

export class SelectCompany implements Action {
  readonly type = SELECT_COMPANY;
  constructor(public payload: {id: number}) {}
}

export type CompanyActions =
  | LoadAllCompany
  | LoadAllCompanySuccess
  | LoadCompany
  | LoadCompanySuccess
  | CreateCompany
  | CreateCompanySuccess
  | CreateCompanyDialogOpen
  | CreateCompanyDialogClose
  | UpdateCompany
  | UpdateCompanySuccess
  | RemoveCompany
  | RemoveCompanySuccess
  | SelectCompany;

// export const loadAll = createAction(
//   '[Companies] Load all'
// );

// export const load = createAction(
//   '[Companies] Load',
//   props<{id: number}>()
// );

// export const create = createAction(
//   '[Companies] Create',
//   props<{company: Company}>()
// );

// export const update = createAction(
//   '[Companies] Update',
//   props<{company: Partial<Company>}>()
// );

// export const remove = createAction(
//   '[Companies] Remove',
//   props<{id: number}>()
// );

// export const loadAllSuccess = createAction(
//   '[Companies] Load all success',
//   props<{companies: Company[]}>()
// );

// export const loadSuccess = createAction(
//   '[Companies] Load success',
//   props<{'company': Company}>()
// );

// export const createSuccess = createAction(
//   '[Companies] Create success',
//   props<{company: Company}>()
// );

// export const updateSuccess = createAction(
//   '[Companies] Update success',
//   props<{company: Partial<Company>}>()
// );


// export const removeSuccess = createAction(
//   '[Companies] Remove success',
//   props<{id: number}>()
// );


// export const failure = createAction(   // we have global error handling
//   '[Companies] Failure',
//   props<{err: {concern: 'CREATE' | 'PATCH', error: any}}>()
// );
