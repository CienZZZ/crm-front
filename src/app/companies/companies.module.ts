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
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CompanyEffects } from './store/company.effects';
import { reducers } from './store';
import { NewCompanyDialogComponent } from './dialogs/new-company/new-company-dialog.component';

@NgModule({
  declarations: [
    IndexComponent,
    CompaniesComponent,
    CompanyComponent,
    CompanyDetailComponent,
    EditComponent,
    EditCompanyComponent,
    NewCompanyDialogComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CompaniesRoutingModule,
    SharedModule,
    StoreModule.forFeature('companies', reducers),
    EffectsModule.forFeature([CompanyEffects])
  ],
  providers: [CompaniesService , CompaniesSocketService], // CompanyStoreFacade],
  entryComponents: [NewCompanyDialogComponent]
})

export class CompaniesModule {

}
