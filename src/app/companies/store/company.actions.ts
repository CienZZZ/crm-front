import {createAction, props} from '@ngrx/store';
import { Company } from '../model/company.model';

export const loadAll = createAction(
  '[Companies] Load all'
);

export const load = createAction(
  '[Companies] Load',
  props<{id: number}>()
);

export const create = createAction(
  '[Companies] Create',
  props<{company: Company}>()
);

export const update = createAction(
  '[Companies] Update',
  props<{company: Partial<Company>}>()
);

export const remove = createAction(
  '[Companies] Remove',
  props<{id: number}>()
);

export const loadAllSuccess = createAction(
  '[Companies] Load all success',
  props<{companies: Company[]}>()
);

export const loadSuccess = createAction(
  '[Companies] Load success',
  props<{'company': Company}>()
);

export const createSuccess = createAction(
  '[Companies] Create success',
  props<{company: Company}>()
);

export const updateSuccess = createAction(
  '[Companies] Update success',
  props<{company: Partial<Company>}>()
);


export const removeSuccess = createAction(
  '[Companies] Remove success',
  props<{id: number}>()
);


export const failure = createAction(
  '[Companies] Failure',
  props<{err: {concern: 'CREATE' | 'PATCH', error: any}}>()
);
