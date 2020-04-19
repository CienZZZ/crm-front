import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {
  catchError,
  exhaustMap,
  map, pluck,
  startWith,
  switchMap
} from 'rxjs/operators';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';

import {
  create,
  createSuccess,
  failure,
  load,
  loadAll,
  loadAllSuccess,
  loadSuccess,
  remove,
  removeSuccess,
  update,
  updateSuccess
} from './company.actions';
import { CompaniesService } from '../services/companies.service';
import { CompaniesSocketService } from '../services/companies-socket.service';


/**
 * Effects file is for isolating and managing side effects of the application in one place
 * Http requests, Sockets, Routing, LocalStorage, etc
 */

@Injectable()
export class CompanyEffects {


  loadAll$ = createEffect( () => this.actions$.pipe(
    ofType(loadAll), /* When action is dispatched */
    startWith(loadAll()),
    /* Hit the Contacts Index endpoint of our REST API */
    /* Dispatch LoadAllSuccess action to the central store with id list returned by the backend as id*/
    /* 'Contacts Reducers' will take care of the rest */
    switchMap(() => this.companiesService.index().pipe(
      map(companies => loadAllSuccess({companies}))
    )),
  ));


  load$ = createEffect( () => this.actions$.pipe(
    ofType(load),
    pluck('id'),
    switchMap( id => this.companiesService.show(id).pipe(
      map(company => loadSuccess({company}))
    ))
  ));


  create$ = createEffect( () =>this.actions$.pipe(
    ofType(create),
    pluck('company'),
    switchMap( company => this.companiesService.create(company).pipe(
      map(company => createSuccess({company})),
      catchError(err => {
        alert(err.message);
        return of(failure({err: {concern: 'CREATE', error: err}}));
      })
    ))
  ));


  update$ = createEffect( () => this.actions$.pipe(
    ofType(update),
    pluck('company'),
    exhaustMap( company => this.companiesService.update(company).pipe(
      map(company => updateSuccess({company}))
    ))
  ));

  destroy$ = createEffect( () => this.actions$.pipe(
    ofType(remove),
    pluck('id'),
    switchMap( id => this.companiesService.destroy(id).pipe(
      pluck('id'),
      map(id => removeSuccess({id}))
    ))
  ));

  // Socket Live Events

  @Effect()
  liveCreate$ = this.companiesSocket.liveCreated$.pipe(
    map(company => createSuccess({company}))
  );


  @Effect()
  liveUpdate$ = this.companiesSocket.liveUpdated$.pipe(
    map(company => updateSuccess({company}))
  );

  @Effect()
  liveDestroy$ = this.companiesSocket.liveDeleted$.pipe(
    map(id => removeSuccess({id}))
  );

  constructor(
    private actions$: Actions,
    private companiesService: CompaniesService,
    private companiesSocket: CompaniesSocketService
  ) {}

}
