import {createAction, props} from '@ngrx/store';
import { Contact } from '../model/contact.model';

export const loadAll = createAction(
  '[Contacts] Load all'
);

export const load = createAction(
  '[Contacts] Load',
  props<{id: number}>()
);

export const create = createAction(
  '[Contacts] Create',
  props<{contact: Contact}>()
);

export const update = createAction(
  '[Contacts] Update',
  props<{contact: Partial<Contact>}>()
);

export const remove = createAction(
  '[Contacts] Remove',
  props<{id: number}>()
);

export const loadAllSuccess = createAction(
  '[Contacts] Load all success',
  props<{contacts: Contact[]}>()
);

export const loadSuccess = createAction(
  '[Contacts] Load success',
  props<{'contact': Contact}>()
);

export const createSuccess = createAction(
  '[Contacts] Create success',
  props<{contact: Contact}>()
);

export const updateSuccess = createAction(
  '[Contacts] Update success',
  props<{contact: Partial<Contact>}>()
);


export const removeSuccess = createAction(
  '[Contacts] Remove success',
  props<{id: number}>()
);
