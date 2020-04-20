import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { CompanyStoreFacade } from '../store/company.store-facade';
import { Router } from '@angular/router';
import { Company } from '../model/company.model';

@Component({
  selector: 'app-company-new',
  templateUrl: './company-new.component.html',
  styleUrls: ['./company-new.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyNewComponent implements OnInit, OnDestroy {

  constructor(
    private companiesFacade: CompanyStoreFacade,
    private router: Router
  ) {}

  ngOnInit() {}

  ngOnDestroy() {}

  submitted(company: Company) {
    this.companiesFacade.createCompany(company);
    this.router.navigate(['/companies']);
  }
}
