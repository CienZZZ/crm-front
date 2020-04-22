import { Injectable } from '@angular/core';
import * as fromRoot from '../../store';
import * as fromCompanies from './index';
import { select, Store } from '@ngrx/store';

import { Company } from '../model/company.model';
import {create, load, remove, update} from './company.actions';

@Injectable()
export class CompanyStoreFacade {

  companies$ = this.store.pipe(
    select(fromCompanies.getAllCompanies)
  );

  constructor(private store: Store<fromRoot.State>) { }

  loadCompany(id: number) {
    this.store.dispatch(load({id}));
  }

  createCompany(company: Company) {
    this.store.dispatch(create({company}));
  }

  updateCompany(company: Company) {
    this.store.dispatch(update({company}));
  }

  deleteCompany(id: number) {
    this.store.dispatch(remove({id}));
  }

  getCompanyById(id: number) {
    return this.store.pipe(
      select(fromCompanies.getCompanyById(id))
    )
  }
}
