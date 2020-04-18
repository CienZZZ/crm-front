import { Component, OnInit, OnDestroy } from '@angular/core';
import { CompanyStoreFacade } from '../store/company.store-facade';
import { Router } from '@angular/router';
import { Company } from '../model/company.model';

@Component({
  selector: 'app-company-new',
  templateUrl: './company-new.component.html',
  styleUrls: ['./company-new.component.css']
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
