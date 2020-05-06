import * as fromContacts from './contact.reducer';
import {Action, combineReducers, createFeatureSelector, createSelector} from '@ngrx/store';

export interface ContactsState {
  contacts: fromContacts.State;
}

export function reducers(state: ContactsState | undefined, action: Action) {
  return combineReducers({
    contacts: fromContacts.reducer
  })(state, action)
}

export const getContactsState = createFeatureSelector<ContactsState>('contacts');

export const getContactsEntitiesState = createSelector(
  getContactsState,
  state => state.contacts
);

export const {
  selectAll: getAllContacts,
} = fromContacts.contactsAdapter.getSelectors(getContactsEntitiesState);

export const getContactById = (id: number) => createSelector(
  getContactsEntitiesState,
  fromContacts.getContactById(id)
);
