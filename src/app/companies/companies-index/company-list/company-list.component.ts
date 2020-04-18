import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Company } from '../../model/company.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  @Input() companies: Company[];
  @Output() edit = new EventEmitter<Company>();
  @Output() show = new EventEmitter<Company>();
  @Output() remove = new EventEmitter<Company>();

  companiesTrackByFn = (index: number, company: Company) => company.id;

  constructor() {}

  ngOnInit() {}

  showDetails(company: Company) {
    this.show.emit(company);
  }

  editCompany(company: Company) {
    this.edit.emit(company);
  }

  deleteCompany(company: Company) {
    this.remove.emit(company);
  }
}
