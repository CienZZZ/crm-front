// import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
// import { CompanyStoreFacade } from '../../state/companies/company.store-facade';
// import { Router } from '@angular/router';
// import { Company } from '../model/company.model';

// @Component({
//   selector: 'app-companies-index',
//   templateUrl: './companies-index.component.html',
//   styleUrls: ['./companies-index.component.css'],
//   changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class CompaniesIndexComponent implements OnInit {

//   constructor(
//     private companiesFacade: CompanyStoreFacade,
//     private router: Router
//   ) {}

//   companies$ = this.companiesFacade.companies$;

//   ngOnInit() {}

//   newCompany() {
//     this.router.navigate(['/companies/new']);
//   }

//   editCompany(company: Company) {
//     this.router.navigate(['/companies', company.id, 'edit']);
//   }

//   showCompany(company: Company) {
//     this.router.navigate(['/companies', company.id]);
//   }

//   deleteCompany(company: Company) {
//     const r = confirm('Are you sure ?');
//     if (r) {
//       this.companiesFacade.deleteCompany(company.id);
//       this.router.navigate(['/companies']);
//     }
//   }
// }
