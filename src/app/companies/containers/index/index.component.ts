import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../../model/company.model';
import { Store, select } from '@ngrx/store';
import { CompaniesState, getAllCompanies } from '../../store';
import { LoadAllCompany, RemoveCompany, CreateCompanyDialogOpen } from 'src/app/companies/store/company.actions';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  companies: Observable<Array<Company>>;

  constructor(private store: Store<CompaniesState>) {}

  ngOnInit() {
    this.companies = this.store.pipe(select(getAllCompanies));
    this.store.dispatch(new LoadAllCompany());
  }

  createNewCompany() {
    this.store.dispatch(new CreateCompanyDialogOpen());
  }

  delete(company: Company) {
    const r  = confirm('Are you sure ?');
    if (r) {
      this.store.dispatch(new RemoveCompany(company));
    }
  }
}
