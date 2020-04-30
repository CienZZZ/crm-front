import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Company } from '../../model/company.model';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent {

  @Output() delete = new EventEmitter<Company>(); // TODO: wiecej outputow trzeba wpisac edit i view

  @Input() companies: Company[];

  constructor() {}
}
