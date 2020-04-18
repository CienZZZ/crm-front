import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyStoreFacade } from '../store/company.store-facade';
import { CompanyEffects } from '../store/company.effects';
import { map, switchMap, filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Company } from '../model/company.model';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit, OnDestroy {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private companiesFacade: CompanyStoreFacade,
    private companiesEffects: CompanyEffects
  ) {}

  company$ = this.activatedRoute.params.pipe(
    map( params => params.companyId),
    switchMap(id => this.companiesFacade.getCompanyById(id))
  );

  redirectSub: Subscription;

  ngOnInit() {
    // listen to update$ side effect, after updating redirect to the contact details view
    this.redirectSub = this.companiesEffects.update$.pipe(
      // make sure that the currently edited contact has been update and not some other contact (emitted by sockets)
      filter( action => action.company.id === +this.activatedRoute.snapshot.params.companyId)
    ).subscribe(
      action => this.router.navigate(['/companies', action.company.id])
    );

    this.activatedRoute.params.subscribe(params => {
      // update our id from the backend in case it was modified by another client
      this.companiesFacade.loadCompany(+params.companyId);
    });
  }

  ngOnDestroy() {
    this.redirectSub.unsubscribe();
  }

  submitted(company: Company) {
    this.companiesFacade.updateContact(company);
  }
}
