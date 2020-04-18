import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies.component';
import { CompaniesIndexComponent } from './companies-index/companies-index.component';
import { CompanyNewComponent } from './company-new/company-new.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
// import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CompaniesComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: '', component: CompaniesIndexComponent},
      { path: 'new', component: CompanyNewComponent},
      { path: ':companyId', component: CompanyDetailsComponent},
      { path: ':companyId/edit', component: CompanyEditComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule {

}
