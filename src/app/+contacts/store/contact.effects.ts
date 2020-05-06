import { Injectable } from '@angular/core';
import {
  exhaustMap,
  map, pluck,
  startWith,
  switchMap
} from 'rxjs/operators';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';

import {
  create,
  createSuccess,
  load,
  loadAll,
  loadAllSuccess,
  loadSuccess,
  remove,
  removeSuccess,
  update,
  updateSuccess
} from './contact.actions';
import { ContactsService } from '../services/contacts.service';
import { ContactsSocketService } from '../services/contacts-socket.service';


@Injectable()
export class ContactEffects {


  loadAll$ = createEffect( () => this.actions$.pipe(
    ofType(loadAll),
    startWith(loadAll()),
    switchMap(() => this.contactsService.index().pipe(
      map(contacts => loadAllSuccess({contacts}))
    )),
  ));


  load$ = createEffect( () => this.actions$.pipe(
    ofType(load),
    pluck('id'),
    switchMap( id => this.contactsService.show(id).pipe(
      map(contact => loadSuccess({contact}))
    ))
  ));


  create$ = createEffect( () =>this.actions$.pipe(
    ofType(create),
    pluck('contact'),
    switchMap( contact => this.contactsService.create(contact).pipe(
      map(contact => createSuccess({contact}))
    ))
  ));


  update$ = createEffect( () => this.actions$.pipe(
    ofType(update),
    pluck('contact'),
    exhaustMap( contact => this.contactsService.update(contact).pipe(
      map(contact => updateSuccess({contact}))
    ))
  ));

  destroy$ = createEffect( () => this.actions$.pipe(
    ofType(remove),
    pluck('id'),
    switchMap( id => this.contactsService.destroy(id).pipe(
      pluck('id'),
      map(id => removeSuccess({id}))
    ))
  ));

  // Socket Live Events

  @Effect()
  liveCreate$ = this.contactsSocket.liveCreated$.pipe(
    map(contact => createSuccess({contact}))
  );


  @Effect()
  liveUpdate$ = this.contactsSocket.liveUpdated$.pipe(
    map(contact => updateSuccess({contact}))
  );

  @Effect()
  liveDestroy$ = this.contactsSocket.liveDeleted$.pipe(
    map(id => removeSuccess({id}))
  );

  constructor(
    private actions$: Actions,
    private contactsService: ContactsService,
    private contactsSocket: ContactsSocketService
  ) {}

}
