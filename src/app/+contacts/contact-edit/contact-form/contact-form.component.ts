import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Contact } from '../../model/contact.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFormComponent implements OnInit, OnChanges {

  @Input() contact: Contact = {
    id: undefined,
    company_id: null,
    name: '',
    business_email: '',
    created_by: ''
  };

  @Output() save = new EventEmitter<Contact>();

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: [this.contact.id],
      company_id: [this.contact.company_id],
      name: [this.contact.name, Validators.required],
      business_email: [this.contact.business_email],
      created_by: [this.contact.created_by]
    });
  }

  ngOnInit() {}

  ngOnChanges() {
    if (this.contact) {
      this.form.patchValue({...this.contact});
    }
  }

  submit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }
  }
}
