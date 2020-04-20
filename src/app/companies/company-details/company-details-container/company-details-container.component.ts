import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Company } from '../../model/company.model';

@Component({
  selector: 'app-company-details-container',
  templateUrl: './company-details-container.component.html',
  styleUrls: ['./company-details-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyDetailsContainerComponent implements OnInit {

  @Input() company: Company;
  @Output() edit = new EventEmitter<Company>();
  @Output() remove = new EventEmitter<Company>();

  constructor() {}

  ngOnInit() { }

}
