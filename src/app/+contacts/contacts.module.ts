import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ContactsComponent } from './contacts.component';
import { ContactEffects } from './store/contact.effects';
import { reducers } from './store';
import { ContactsService } from './services/contacts.service';
import { ContactsSocketService } from './services/contacts-socket.service';
import { ContactStoreFacade } from './store/contact.store-facade';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactStartComponent } from './contact-start/contact-start.component';
import { ContactsIndexComponent } from './contacts-index/contacts-index.component';
import { ContactListComponent } from './contacts-index/contact-list/contact-list.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactDetailsContainerComponent } from './contact-details/contact-details-container/contact-details-container.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactFormComponent } from './contact-edit/contact-form/contact-form.component';

@NgModule({
  declarations: [
    ContactsComponent,
    ContactStartComponent,
    ContactsIndexComponent,
    ContactListComponent,
    ContactNewComponent,
    ContactDetailsComponent,
    ContactDetailsContainerComponent,
    ContactEditComponent,
    ContactFormComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    ContactsRoutingModule,
    SharedModule,
    StoreModule.forFeature('contacts', reducers),
    EffectsModule.forFeature([ContactEffects])
  ],
  providers: [ContactsService, ContactsSocketService, ContactStoreFacade]
})
export class ContactsModule {}
