import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ContactStoreFacade } from '../store/contact.store-facade';
import { Router } from '@angular/router';
import { Contact } from '../model/contact.model';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactNewComponent implements OnInit, OnDestroy {

  constructor(
    private contactsFacade: ContactStoreFacade,
    private router: Router
  ) {}

  ngOnInit() {}

  ngOnDestroy() {}

  submitted(contact: Contact) {
    this.contactsFacade.createContact(contact);
    this.router.navigate(['/contacts']);
  }
}
