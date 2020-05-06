import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Company } from '../../model/company.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush  // TODO: czy zostawic to i w innych tez wpisac ChangeDetectionStrategy?
})
export class EditCompanyComponent implements OnInit, OnChanges {

  @Input() company: Company = {
    id: undefined,
    name: '',
    full_name: '',
    created_by: ''
  };

  @Output() companyChange = new EventEmitter<Company>();

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.form.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged((prev: Company, next: Company) => prev === next)
      )
      .subscribe(value => {
        if (!this.form.valid) {
          return;
        }
        this.companyChange.emit({
          ...this.company,
          ...value
        });
      });
  }

  ngOnChanges() {
    if (this.company) {
      this.form.patchValue(this.company, {
        emitEvent: false
      });
    }
  }

  createForm() {
    this.form = this.formBuilder.group({
      id: [this.company.id],
      name: [this.company.name, Validators.required],
      full_name: [this.company.full_name],
      created_by: [this.company.created_by]
    });
  }

  // submit() {
  //   if (this.form.valid) {
  //     this.save.emit(this.form.value);
  //   }
  // }
}