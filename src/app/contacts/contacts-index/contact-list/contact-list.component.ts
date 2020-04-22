import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Contact } from '../../model/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent implements OnInit {

  @Input() contacts: Contact[];
  @Output() edit = new EventEmitter<Contact>();
  @Output() show = new EventEmitter<Contact>();
  @Output() remove = new EventEmitter<Contact>();

  contactsTrackByFn = (index: number, contact: Contact) => contact.id;

  constructor() {}

  ngOnInit() {}

  showDetails(contact: Contact) {
    this.show.emit(contact);
  }

  editContact(contact: Contact) {
    this.edit.emit(contact);
  }

  deleteContact(contact: Contact) {
    this.remove.emit(contact);
  }
}
