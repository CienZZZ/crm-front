import { Injectable } from '@angular/core';
import {
  map,
  switchMap,
  mergeMap,
  tap
} from 'rxjs/operators';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CompaniesService } from '../services/companies.service';
// import { CompaniesSocketService } from '../services/companies-socket.service';
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
  UPDATE_COMPANY_SUCCESS,
  CreateCompanyDialogOpen,
  CREATE_COMPANY_DIALOG_OPEN,
  CreateCompanyDialogClose,
  CREATE_COMPANY_DIALOG_CLOSE,
  REMOVE_COMPANY_SUCCESS,
  LOAD_COMPANY_SUCCESS,
  LOAD_ALL_COMPANY_SUCCESS} from './company.actions';
import { ToastOpen } from '../../state/shared/toast-store/toast.actions';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewCompanyDialogComponent } from '../dialogs/new-company/new-company-dialog.component';
import { ShowSpinner, HideSpinner } from '../../state/shared/loading-spinner-store/loading-spinner.actions';

/**
 * Effects file is for isolating and managing side effects of the application in one place
 * Http requests, Sockets, Routing, LocalStorage, etc
 */

type showSpinnerTypes =
    | CreateCompany
    | RemoveCompany
    | UpdateCompany
    | LoadCompany
    | LoadAllCompany;

const showSpinnerActions = [
    CREATE_COMPANY,
    REMOVE_COMPANY,
    UPDATE_COMPANY,
    LOAD_COMPANY,
    LOAD_ALL_COMPANY
  ];

type hideSpinnerTypes =
    | CreateCompanySuccess
    | RemoveCompanySuccess
    | UpdateCompanySuccess
    | LoadCompanySuccess
    | LoadAllCompanySuccess;

const hideSpinnerActions = [
    CREATE_COMPANY_SUCCESS,
    REMOVE_COMPANY_SUCCESS,
    UPDATE_COMPANY_SUCCESS,
    LOAD_COMPANY_SUCCESS,
    LOAD_ALL_COMPANY_SUCCESS
  ];

@Injectable()
export class CompanyEffects {

  @Effect()
  showSpinner: Observable<Action> = this.actions.pipe(
    ofType<showSpinnerTypes>(...showSpinnerActions),
    map(() => new ShowSpinner())
  );

  @Effect()
  hideSpinner: Observable<Action> = this.actions.pipe(
    ofType<hideSpinnerTypes>(...hideSpinnerActions),
    map(() => new HideSpinner())
  );

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
    mergeMap(() => [
      new CreateCompanyDialogClose(),
      new ToastOpen({
        message: 'Company created!',
        options: { classname: 'bg-success text-light', delay: 5000}
      })
    ])
  );

  @Effect({dispatch: false})
  createCompanyDialogOpen: Observable<any> = this.actions.pipe(
    ofType<CreateCompanyDialogOpen>(CREATE_COMPANY_DIALOG_OPEN),
    tap(() => this.modalService.open(NewCompanyDialogComponent))
  );

  @Effect({dispatch: false})
  createCompanyDialogClose: Observable<any> = this.actions.pipe(
    ofType<CreateCompanyDialogClose>(CREATE_COMPANY_DIALOG_CLOSE),
    tap(() => this.modalService.dismissAll())
  );

  @Effect()
  removeCompany: Observable<Action> = this.actions.pipe(
    ofType<RemoveCompany>(REMOVE_COMPANY),
    map(action => action.payload),
    switchMap(company => this.companiesService.destroyCompany(company)),
    map(company => new RemoveCompanySuccess(company))
  );

  @Effect()
  removeCompanySuccess: Observable<Action> = this.actions.pipe(
    ofType<RemoveCompanySuccess>(REMOVE_COMPANY_SUCCESS),
    map(action => action.payload),
    map( company => new ToastOpen({
      message: 'Deleted: ' + company.name,
      options: {classname: 'bg-danger text-light', delay: 5000}
    }))
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

  // Socket Live Events   // TODO: czy zostawic te sockety ? powoduja podwójne akcje, narazie wyłączone

  // @Effect()
  // liveCreate$ = this.companiesSocket.liveCreated$.pipe(
  //   map(company => new CreateCompanySuccess(company))
  // );


  // @Effect()
  // liveUpdate$ = this.companiesSocket.liveUpdated$.pipe(
  //   map(company => new UpdateCompanySuccess(company))
  // );

  // @Effect()
  // liveDestroy$ = this.companiesSocket.liveDeleted$.pipe(
  //   map(company => new RemoveCompanySuccess(company))
  // );

  constructor(
    private actions: Actions,
    private companiesService: CompaniesService,
    // private companiesSocket: CompaniesSocketService,
    private modalService: NgbModal
  ) {}

}
