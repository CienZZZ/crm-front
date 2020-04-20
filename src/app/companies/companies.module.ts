import { NgModule } from '@angular/core';
import { CompaniesComponent } from './companies.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CompaniesRoutingModule } from './companies-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { CompanyEffects } from './store/company.effects';
import { CompaniesService } from './services/companies.service';
import { CompanyStoreFacade } from './store/company.store-facade';
import { CompanyDetailsContainerComponent } from './company-details/company-details-container/company-details-container.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyFormComponent } from './company-edit/company-form/company-form.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyListComponent } from './companies-index/company-list/company-list.component';
import { CompaniesIndexComponent } from './companies-index/companies-index.component';
import { CompanyNewComponent } from './company-new/company-new.component';
import { CompaniesSocketService } from './services/companies-socket.service';
import { CompanyStartComponent } from './company-start/company-start.component';

@NgModule({
  declarations: [
    CompaniesComponent,
    CompanyDetailsContainerComponent,
    CompanyDetailsComponent,
    CompanyFormComponent,
    CompanyEditComponent,
    CompanyListComponent,
    CompaniesIndexComponent,
    CompanyNewComponent,
    CompanyStartComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CompaniesRoutingModule,
    SharedModule,
    StoreModule.forFeature('companies', reducers),
    EffectsModule.forFeature([CompanyEffects])
  ],
  providers: [CompaniesService, CompaniesSocketService, CompanyStoreFacade]
})

export class CompaniesModule {

}
