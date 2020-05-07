import { Component, Input, HostListener } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Company } from '../../model/company.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CompaniesState } from '../../store/index';
import { CreateCompany, CreateCompanyDialogClose } from '../../store/company.actions';

@Component({
  selector: 'app-new-company-dialog',
  templateUrl: './new-company-dialog.component.html'
})
export class NewCompanyDialogComponent {

  @Input() company: Company = {
    id: undefined,
    name: '',
    fullName: '',
    createdBy: ''
  };

  form: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder,
    public store: Store<CompaniesState>
  ) {
    this.createForm();
  }

  close() {
    this.store.dispatch(new CreateCompanyDialogClose());
  }

  submit() {
    if (this.form.valid) {
      // this.save.emit(this.form.value);
      const company = this.form.value as Company;
      this.store.dispatch(new CreateCompany(company));
    }
  }

  @HostListener('keydown.esc')
  onEsc() {
    // this.activeModal.dismiss();
    this.store.dispatch(new CreateCompanyDialogClose());
  }

  createForm() {
    this.form = this.formBuilder.group({
      id: [this.company.id],
      name: [this.company.name, Validators.required],
      fullName: [this.company.fullName],
      createdBy: [this.company.createdBy]
    });
  }
}
