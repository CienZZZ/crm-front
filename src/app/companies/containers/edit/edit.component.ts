import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../../model/company.model';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { CompaniesState, getCompanyEntities, getSelectedCompany } from 'src/app/state/companies';
import { tap, first, switchMap, take } from 'rxjs/operators';
import { SelectCompany, UpdateCompany, LoadCompany } from 'src/app/state/companies/company.actions';
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
    // this.company = this.activatedRoute.paramMap.pipe(
    //   tap(paramMap => {
    //     const id = +paramMap['id']; // TODO: czy to bedzie ok? było paramMap.get , ale byl blad
    //     this.store.dispatch(new SelectCompany({ id: id }));
    //     this.hasCompanyInStore(id).subscribe(exists => {
    //       if (!exists) {
    //         this.store.dispatch(new LoadCompany({ id: id }));
    //       }
    //     });
    //   }),
    //   switchMap(() => this.store.pipe(select(getSelectedCompany)))
    // );
  }

  // hasCompanyInStore(id: number): Observable<boolean> {
  //   return this.store
  //     .select(getCompanyEntities)
  //     .pipe(
  //       first(companies => companies !== null, companies => companies[id] !== undefined) // TODO: co to za blad first???
  //       // take(1),
  //       // switchMap(companies => companies !== null, companies => companies[id] !== undefined)
  //     );
  // }

  companyChange(company: Company) {
    this.store.dispatch(new UpdateCompany(company));
  }
}
