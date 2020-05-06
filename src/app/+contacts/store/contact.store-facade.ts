import { Injectable } from '@angular/core';
import * as fromRoot from '../../store';
import * as fromContacts from './index';
import { select, Store } from '@ngrx/store';

import { Contact } from '../model/contact.model';
import {create, load, remove, update} from './contact.actions';

@Injectable()
export class ContactStoreFacade {

  contacts$ = this.store.pipe(
    select(fromContacts.getAllContacts)
  );

  constructor(private store: Store<fromRoot.State>) { }

  loadContact(id: number) {
    this.store.dispatch(load({id}));
  }

  createContact(contact: Contact) {
    this.store.dispatch(create({contact}));
  }

  updateContact(contact: Contact) {
    this.store.dispatch(update({contact}));
  }

  deleteContact(id: number) {
    this.store.dispatch(remove({id}));
  }

  getContactById(id: number) {
    return this.store.pipe(
      select(fromContacts.getContactById(id))
    )
  }
}
