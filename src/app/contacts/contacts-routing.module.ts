import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts.component';
import { ContactStartComponent } from './contact-start/contact-start.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

// import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ContactsComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: '', component: ContactStartComponent},
      { path: 'new', component: ContactNewComponent},
      { path: ':contactId', component: ContactDetailsComponent},
      { path: ':contactId/edit', component: ContactEditComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule {

}
