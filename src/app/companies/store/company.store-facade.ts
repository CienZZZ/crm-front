import { Injectable } from '@angular/core';
import * as fromRoot from '../../store';
import * as fromCompanies from './index';
import { select, Store } from '@ngrx/store';

import { Company } from '../model/company.model';
import { Load, Create, Update, Remove } from './company.actions';

@Injectable()
export class CompanyStoreFacade {

  companies$ = this.store.pipe(
    select(fromCompanies.getAllCompanies)
  );

  constructor(private store: Store<fromRoot.State>) { }

  loadCompany(id: number) {
    this.store.dispatch(new Load({id}));
  }

  createCompany(company: Company) {
    this.store.dispatch(new Create({company}));
  }

  updateCompany(company: Company) {
    this.store.dispatch(new Update({company}));
  }

  deleteCompany(id: number) {
    this.store.dispatch(new Remove({id}));
  }

  getCompanyById(id: number) {
    return this.store.pipe(
      select(fromCompanies.getCompanyById(id))
    )
  }
}
