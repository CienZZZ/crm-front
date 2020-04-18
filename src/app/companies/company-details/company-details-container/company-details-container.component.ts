import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Company } from '../../model/company.model';

@Component({
  selector: 'app-company-details-container',
  templateUrl: './company-details-container.component.html',
  styleUrls: ['./company-details-container.component.css']
})
export class CompanyDetailsContainerComponent implements OnInit {

  @Input() company: Company;
  @Output() edit = new EventEmitter<Company>();
  @Output() remove = new EventEmitter<Company>();

  constructor() {}

  ngOnInit() { }

}
