// import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { CompanyStoreFacade } from '../../state/companies/company.store-facade';
// import { CompanyEffects } from '../../state/companies/company.effects';
// import { map, switchMap, filter } from 'rxjs/operators';
// import { Subscription } from 'rxjs';
// import { Company } from '../model/company.model';

// @Component({
//   selector: 'app-company-details',
//   templateUrl: './company-details.component.html',
//   styleUrls: ['./company-details.component.css'],
//   changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class CompanyDetailsComponent implements OnInit, OnDestroy {

//   constructor(
//     private activatedRoute: ActivatedRoute,
//     private router: Router,
//     private companiesFacade: CompanyStoreFacade,
//     private companiesEffects: CompanyEffects
//   ) {}

//   company$ = this.activatedRoute.params.pipe(
//     map( params => params.companyId),
//     switchMap(id => this.companiesFacade.getCompanyById(id))
//   );

//   redirectSub: Subscription;

//   ngOnInit() {
//      // If the destroy effect fires, we check if the current id is the one being viewed, and redirect to index

//      this.redirectSub = this.companiesEffects.destroy$.pipe(
//       filter( action =>
//         action.payload.id === +this.activatedRoute.snapshot.params.companyId
//       )
//     ).subscribe(_ => this.router.navigate(['/companies']));

//      this.activatedRoute.params.subscribe(params => {
//       // update our id from the backend in case it was modified by another client
//       this.companiesFacade.loadCompany(+params.companyId);
//     });
//   }

//   editCompany(company: Company) {
//     this.router.navigate(['/companies', company.id, 'edit']);
//   }

//   deleteCompany(company: Company) {
//     const r = confirm('Are you sure?');
//     if (r) {
//       this.companiesFacade.deleteCompany(company.id);
//       this.router.navigate(['/companies']);
//     }
//   }

//   ngOnDestroy() {
//     this.redirectSub.unsubscribe();
//   }
// }
