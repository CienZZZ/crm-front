import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CompaniesComponent } from './companies.component';

import { IndexComponent } from './containers/index/index.component';
import { CompanyComponent } from './containers/company/company.component';
import { EditComponent } from './containers/edit/edit.component';
// import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  // {
    // path: '',
    // component: CompaniesComponent,
    // // canActivate: [AuthGuard],
    // children: [
      // { path: '', component: CompaniesIndexComponent},
      { path: '', component: IndexComponent},
      // { path: 'new', component: CompanyNewComponent},
      { path: ':id', component: CompanyComponent},
      { path: ':id/edit', component: EditComponent}
    // ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule {

}
