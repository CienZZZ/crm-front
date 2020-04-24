import {createAction, props, Action} from '@ngrx/store';
import { Company } from '../model/company.model';

export enum CompanyActionTypes {
  LOAD_ALL = '[Company] Load All',
  LOAD = '[Company] Load',
  CREATE = '[Company] Create',
  UPDATE = '[Company] Update',
  REMOVE = '[Company] Remove',
  LOAD_ALL_SUCCESS = '[Company] Load All Success',
  LOAD_SUCCESS = '[Company] Load Success',
  CREATE_SUCCESS = '[Company] Create Success',
  UPDATE_SUCCESS = '[Company] Update Success',
  REMOVE_SUCCESS = '[Company] Remove Success'
}

export class LoadAll implements Action {
  readonly type = CompanyActionTypes.LOAD_ALL;
}

export class Load implements Action {
  readonly type = CompanyActionTypes.LOAD;
  constructor(public payload: {id: number}) {}
}

export class Create implements Action {
  readonly type = CompanyActionTypes.CREATE;
  constructor(public payload: {company: Company}) {}
}

export class Update implements Action {
  readonly type = CompanyActionTypes.UPDATE;
  constructor(public payload: {company: Partial<Company>}) {}
}

export class Remove implements Action {
  readonly type = CompanyActionTypes.REMOVE;
  constructor(public payload: {id: number}) {}
}

export class LoadAllSuccess implements Action {
  readonly type = CompanyActionTypes.LOAD_ALL_SUCCESS;
  constructor(public payload: {companies: Company[]}) {}
}

export class LoadSuccess implements Action {
  readonly type = CompanyActionTypes.LOAD_SUCCESS;
  constructor(public payload: {company: Company}) {}  // bylo id: number
}

export class CreateSuccess implements Action {
  readonly type = CompanyActionTypes.CREATE_SUCCESS;
  constructor(public payload: {company: Company}) {}
}

export class UpdateSuccess implements Action {
  readonly type = CompanyActionTypes.UPDATE_SUCCESS;
  constructor(public payload: {company: Partial<Company>}) {}
}

export class RemoveSuccess implements Action {
  readonly type = CompanyActionTypes.REMOVE_SUCCESS;
  constructor(public payload: {id: number}) {}
}

export type CompanyActions =
  | LoadAll
  | Load
  | Create
  | Update
  | Remove
  | LoadAllSuccess
  | LoadSuccess
  | CreateSuccess
  | UpdateSuccess
  | RemoveSuccess;

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
