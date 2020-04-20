import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Company } from '../../model/company.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyFormComponent implements OnInit, OnChanges {

  @Input() company: Company = {
    id: undefined,
    name: '',
    full_name: '',
    created_by: ''
  };

  @Output() save = new EventEmitter<Company>();

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: [this.company.id],
      name: [this.company.name, Validators.required],
      full_name: [this.company.full_name],
      created_by: [this.company.created_by]
    });
  }

  ngOnInit() {}

  ngOnChanges() {
    if (this.company) {
      this.form.patchValue({...this.company});
    }
  }

  submit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }
  }
}
