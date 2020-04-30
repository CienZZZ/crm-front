import { NgModule } from '@angular/core';
// import { CompaniesComponent } from './companies.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CompaniesRoutingModule } from './companies-routing.module';
import { SharedModule } from '../shared/shared.module';
import { IndexComponent } from './containers/index/index.component';
import { CompanyComponent } from './containers/company/company.component';
import { EditComponent } from './containers/edit/edit.component';
import { EditCompanyComponent } from './components/edit-company/edit-company.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { CompaniesService } from './services/companies.service';
import { CompaniesSocketService } from './services/companies-socket.service';
// import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
// import { CompaniesService } from './services/companies.service';
// import { CompanyDetailsContainerComponent } from './company-details/company-details-container/company-details-container.component';
// import { CompanyDetailsComponent } from './company-details/company-details.component';
// import { CompanyFormComponent } from './company-edit/company-form/company-form.component';
// import { CompanyEditComponent } from './company-edit/company-edit.component';
// import { CompanyListComponent } from './companies-index/company-list/company-list.component';
// import { CompaniesIndexComponent } from './companies-index/companies-index.component';
// import { CompanyNewComponent } from './company-new/company-new.component';
// // import { CompaniesSocketService } from './services/companies-socket.service';
// import { CompanyStartComponent } from './company-start/company-start.component';

@NgModule({
  declarations: [
    // CompaniesComponent,
    // CompanyDetailsContainerComponent,
    // CompanyDetailsComponent,
    // CompanyFormComponent,
    // CompanyEditComponent,
    // CompanyListComponent,
    // CompaniesIndexComponent,
    // CompanyNewComponent,
    // CompanyStartComponent
    IndexComponent,
    CompaniesComponent,
    CompanyComponent,
    CompanyDetailComponent,
    EditComponent,
    EditCompanyComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CompaniesRoutingModule,
    SharedModule,
    // StoreModule.forFeature('companies', reducers),
    // EffectsModule.forFeature([CompanyEffects])
  ],
  providers: [CompaniesService]// , CompaniesSocketService] //, CompanyStoreFacade]
})

export class CompaniesModule {

}
