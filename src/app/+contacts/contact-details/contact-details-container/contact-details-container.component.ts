import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Contact } from '../../model/contact.model';

@Component({
  selector: 'app-contact-details-container',
  templateUrl: './contact-details-container.component.html',
  styleUrls: ['./contact-details-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactDetailsContainerComponent implements OnInit {

  @Input() contact: Contact;
  @Output() edit = new EventEmitter<Contact>();
  @Output() remove = new EventEmitter<Contact>();

  constructor() {}

  ngOnInit() { }

}
