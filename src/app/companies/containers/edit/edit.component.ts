import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../../model/company.model';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { CompaniesState, getCompanyEntities, getSelectedCompany, getCompaniesTotal } from 'src/app/companies/store';
import { tap, first, switchMap, take, single, map } from 'rxjs/operators';
import { SelectCompany, UpdateCompany, LoadCompany } from 'src/app/companies/store/company.actions';
// import { ToastComponent } from 'src/app/shared/toast/toast.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  company: Observable<Company>;

  constructor(
    private activatedRoute: ActivatedRoute,
    // private toast: ToastComponent, // TODO: moze byc potrzebny ??
    private store: Store<CompaniesState>
  ) {}

  ngOnInit() {
    this.company = this.activatedRoute.paramMap.pipe(
      tap(paramMap => {
        const id = +paramMap.get('id');
        this.store.dispatch(new SelectCompany({ id: id }));
        this.hasCompanyInStore().subscribe(exists => {
          if (!exists) {
            this.store.dispatch(new LoadCompany({ id: id }));
          }
        });
      }),
      switchMap(() => this.store.pipe(select(getSelectedCompany)))
    );
  }

  hasCompanyInStore(): Observable<boolean> {
    return this.store
      .select(getCompaniesTotal)
      .pipe(
        first(),
        map(total => total > 0)
      );
  }

  companyChange(company: Company) {
    this.store.dispatch(new UpdateCompany(company));
  }
}
