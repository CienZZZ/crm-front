import { Injectable } from '@angular/core';
import {
  exhaustMap,
  map, pluck,
  startWith,
  switchMap,
  mergeMap,
  tap
} from 'rxjs/operators';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CompaniesService } from '../services/companies.service';
import { CompaniesSocketService } from '../services/companies-socket.service';
import {
  LOAD_COMPANY,
  CreateCompany,
  CREATE_COMPANY,
  CreateCompanySuccess,
  CREATE_COMPANY_SUCCESS,
  RemoveCompany,
  REMOVE_COMPANY,
  RemoveCompanySuccess,
  LoadAllCompany,
  LOAD_ALL_COMPANY,
  LoadAllCompanySuccess,
  LoadCompany,
  LoadCompanySuccess,
  UpdateCompany,
  UPDATE_COMPANY,
  UpdateCompanySuccess,
  UPDATE_COMPANY_SUCCESS} from './company.actions';
import { ToastOpen } from '../../state/toast/toast.actions';

/**
 * Effects file is for isolating and managing side effects of the application in one place
 * Http requests, Sockets, Routing, LocalStorage, etc
 */

  // type showSpinnerTypes =
  //    CreateCompany;

  // const showSpinnerActions = [
  //   CREATE_COMPANY
  // ];

  // type hideSpinnerTypes =
  //   | CreateCompanySuccess;

@Injectable()
export class CompanyEffects {

  // @Effect()
  // showSpinner: Observable<Action> = this.actions
  //   .ofType<showSpinnerTypes>(...showSpinnerActions)
  //   .pipe(map(() => new ShowSpinner()));

  // @Effect()
  // hideSpinner: Observable<Action> = this.actions
  //   .ofType<hideSpinnerTypes>(...hideSpinnerActions)
  //   .pipe(map(() => new HideSpinner()));

  @Effect()
  createCompany: Observable<Action> = this.actions.pipe(
      ofType<CreateCompany>(CREATE_COMPANY),
      map(action => action.payload),
      switchMap(company => this.companiesService.createCompany(company)),
      map(company => new CreateCompanySuccess(company))
    );

  @Effect()
  createCompanySuccess: Observable<Action> = this.actions.pipe(
    ofType<CreateCompanySuccess>(CREATE_COMPANY_SUCCESS),
    tap(() => new ToastOpen({
      message: 'Company created!',
      options: { classname: 'bg-success text-light', delay: 5000 }
    }))
  );

  @Effect()
  removeCompany: Observable<Action> = this.actions.pipe(
    ofType<RemoveCompany>(REMOVE_COMPANY),
    map(action => action.payload),
    switchMap(company => this.companiesService.destroyCompany(company)),
    map(company => new RemoveCompanySuccess(company))
  );

  @Effect()
  loadAllCompany: Observable<Action> = this.actions.pipe(
    ofType<LoadAllCompany>(LOAD_ALL_COMPANY),
    switchMap(() => this.companiesService.getCompanies()),
    map(companies => new LoadAllCompanySuccess(companies))
  );

  @Effect()
  loadCompany: Observable<Action> = this.actions.pipe(
    ofType<LoadCompany>(LOAD_COMPANY),
    map(action => action.payload),
    switchMap(payload => this.companiesService.getCompany(payload.id)),
    map(company => new LoadCompanySuccess(company))
  );

  @Effect()
  updateCompany: Observable<Action> = this.actions.pipe(
    ofType<UpdateCompany>(UPDATE_COMPANY),
    map(action => action.payload),
    switchMap(company => this.companiesService.updateCompany(company)),
    map(company => new UpdateCompanySuccess(company))
  );

  @Effect()
  updateCompanySuccess: Observable<Action> = this.actions.pipe(
    ofType<UpdateCompanySuccess>(UPDATE_COMPANY_SUCCESS),
    map(() => new ToastOpen({
        message: 'Company updated!',
        options: { classname: 'bg-success text-light', delay: 5000 }
    }))
  );
  // loadAll$ = createEffect( () => this.actions$.pipe(
  //   ofType(CompanyActionTypes.LOAD_ALL), /* When action is dispatched */
  //   startWith(new LoadAll()),
  //   /* Hit the Contacts Index endpoint of our REST API */
  //   /* Dispatch LoadAllSuccess action to the central store with id list returned by the backend as id*/
  //   /* 'Contacts Reducers' will take care of the rest */
  //   switchMap(() => this.companiesService.index().pipe(
  //     map(companies => new LoadAllSuccess({companies}))
  //   )),
  // ));


  // load$ = createEffect( () => this.actions$.pipe(
  //   ofType(CompanyActionTypes.LOAD),
  //   pluck('id'),
  //   switchMap( id => this.companiesService.show(id).pipe(
  //     map(company => new LoadSuccess({company}))
  //   ))
  // ));

  // create$ = createEffect( () =>this.actions$.pipe(
  //   ofType(CompanyActionTypes.CREATE),
  //   pluck('company'),
  //   switchMap( company => this.companiesService.create(company).pipe(
  //     map(company => new CreateSuccess({company})),
  //     // catchError(err => {      // all errors are catched global
  //     //   alert(err.message);
  //     //   return of(failure({err: {concern: 'CREATE', error: err}}));
  //     // })
  //   ))
  // ));


  // update$ = createEffect( () => this.actions$.pipe(
  //   ofType(CompanyActionTypes.UPDATE),
  //   pluck('company'),
  //   exhaustMap( company => this.companiesService.update(company).pipe(
  //     map(company => new UpdateSuccess({company}))
  //   ))
  // ));

  // destroy$ = createEffect( () => this.actions$.pipe(
  //   ofType(CompanyActionTypes.REMOVE),
  //   pluck('id'),
  //   switchMap( id => this.companiesService.destroy(id).pipe(
  //     pluck('id'),
  //     map(id => new RemoveSuccess({id}))
  //   ))
  // ));

  // Socket Live Events

  @Effect()
  liveCreate$ = this.companiesSocket.liveCreated$.pipe(
    map(company => new CreateCompanySuccess(company))
  );


  @Effect()
  liveUpdate$ = this.companiesSocket.liveUpdated$.pipe(
    map(company => new UpdateCompanySuccess(company))
  );

  @Effect()
  liveDestroy$ = this.companiesSocket.liveDeleted$.pipe(
    map(company => new RemoveCompanySuccess(company))
  );

  constructor(
    private actions: Actions,
    private companiesService: CompaniesService,
    private companiesSocket: CompaniesSocketService
  ) {}

}
