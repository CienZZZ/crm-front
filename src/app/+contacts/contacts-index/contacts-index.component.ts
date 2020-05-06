import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ContactStoreFacade } from '../store/contact.store-facade';
import { Router } from '@angular/router';
import { Contact } from '../model/contact.model';

@Component({
  selector: 'app-contacts-index',
  templateUrl: './contacts-index.component.html',
  styleUrls: ['./contacts-index.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsIndexComponent implements OnInit {

  constructor(
    private contactsFacade: ContactStoreFacade,
    private router: Router
  ) {}

  contacts$ = this.contactsFacade.contacts$;

  ngOnInit() {}

  newContact() {
    this.router.navigate(['/contacts/new']);
  }

  editContact(contact: Contact) {
    this.router.navigate(['/contacts', contact.id, 'edit']);
  }

  showContact(contact: Contact) {
    this.router.navigate(['/contacts', contact.id]);
  }

  deleteContact(contact: Contact) {
    const r = confirm('Are you sure ?');
    if (r) {
      this.contactsFacade.deleteContact(contact.id);
      this.router.navigate(['/contacts']);
    }
  }
}
